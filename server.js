const express = require('express');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// 从文件加载访问者数据
let visitors;
let count;

// 数据文件路径
const dataFile = path.join(__dirname, 'visitors.json');

// 加载或初始化访问者数据
try {
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    visitors = new Set(data.visitors);
    count = data.count;
} catch (err) {
    visitors = new Set();
    count = 0;
    // 创建初始数据文件
    fs.writeFileSync(dataFile, JSON.stringify({ visitors: [], count: 0 }));
}

// 保存访问者数据到文件
function saveVisitors() {
    const data = {
        visitors: Array.from(visitors),
        count: count
    };
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}

// 服务静态文件
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/prank', (req, res) => {
    res.sendFile(path.join(__dirname, 'prank.html'));
});

app.get('/visitor-count', (req, res) => {
    const ip = req.ip;
    if (!visitors.has(ip)) {
        visitors.add(ip);
        count++;
        saveVisitors();  // 保存更新后的数据
    }
    res.json({ count });
});

app.get('/debug-path', (req, res) => {
    res.json({
        workingDirectory: process.cwd(),
        dirname: __dirname,
        files: require('fs').readdirSync(process.cwd()),
        homeDir: require('fs').readdirSync('/home'),
        varWwwDir: require('fs').existsSync('/var/www') ? 
            require('fs').readdirSync('/var/www') : 'not found',
        rootDir: require('fs').readdirSync('/')
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`服务器运行在端口 ${port}`);
}); 