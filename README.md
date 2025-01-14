# 🎭 恶作剧网站 - Prank Website

一个有趣的恶作剧网站，用来友好地"捉弄"你的朋友们！ 😈

## 🌟 特性

- 🎯 诱人的"策略查看"按钮
- 🎵 经典的 Rickroll 视频彩蛋
- 📊 访问统计功能
- 🔒 IP 去重统计
- 💾 数据持久化存储

## 🛠️ 技术栈

- 🖥️ 前端：HTML, CSS, JavaScript
- 🚀 后端：Node.js, Express
- 💾 存储：文件系统（JSON）

## 🌐 在 Zeabur 上部署

### 准备工作
1. 准备一个 GitHub 账号
2. 将项目代码上传到 GitHub 仓库
3. 注册 [Zeabur](https://zeabur.com) 账号

### 详细部署步骤

1. **连接 GitHub**
   - 登录 Zeabur
   - 点击 "Sign in with GitHub"
   - 授权 Zeabur 访问你的 GitHub 仓库

2. **创建项目**
   - 点击 "Create New Project"
   - 输入项目名称（可选）

3. **部署服务**
   - 点击 "Add Service"
   - 选择 "Deploy from Source Code"
   - 选择你的 GitHub 仓库
   - 选择 main/master 分支

4. **配置部署选项**
   - Runtime: 选择 Node.js
   - Build Command: `npm install`
   - Start Command: `npm start`

5. **设置环境变量**
   - 在 Service Settings 中找到 "Environment Variables"
   - 添加环境变量：`PORT=8080`

6. **完成部署**
   - Zeabur 会自动开始部署过程
   - 等待部署完成（通常只需要 1-2 分钟）
   - 部署成功后会得到一个域名

### 常见部署问题

1. **502 错误**
   - 检查 PORT 环境变量是否正确设置
   - 查看部署日志是否有错误信息
   - 确认 server.js 中监听的是正确的端口

2. **视频无法播放**
   - 确保视频文件小于 25MB
   - 检查视频文件是否正确上传到 GitHub
   - 验证视频文件路径是否正确

3. **自动部署问题**
   - 确保 GitHub 仓库连接正确
   - 检查 Zeabur 的 webhook 设置
   - 验证代码变更是否正确推送到 GitHub



## 🎭 使用方法

1. 访问网站首页
2. 看到绿色的"查看具体策略"按钮
3. 分享链接给你的朋友
4. 等待他们上当 😆
5. 查看被骗人数统计

## 📝 自定义

### 修改视频
1. 准备你的视频文件（建议 25MB 以下）
2. 重命名为 `rickroll.mp4`
3. 放入 `public/videos/` 文件夹

### 修改文本
- 在 `prank.html` 中修改按钮和提示文本
- 在 `index.html` 中修改首页按钮文本

## ⚠️ 注意事项

- 视频文件大小建议保持在 25MB 以下
- 请友善使用，不要恶意捉弄他人
- 部署时确保 `visitors.json` 已添加到 `.gitignore`

## 运行

开发模式：
```bash
npm run dev
```

生产模式：
```bash
npm start
```

## 📁 项目结构

```
.
├── server.js          # 服务器入口文件
├── package.json       # 项目配置
├── .env              # 环境变量
└── public/           # 静态资源
    ├── index.html    # 主页
    ├── prank.html    # 恶作剧页面
    └── videos/       # 视频文件夹
        └── rickroll.mp4
```

## 🔧 故障排除

### 常见问题

1. **视频无法播放**
   - 检查视频文件是否正确放置在 `public/videos/` 目录下
   - 确保视频文件名为 `rickroll.mp4`
   - 检查视频格式是否为 MP4

2. **访问计数不增加**
   - 确认 `visitors.json` 文件存在且有写入权限
   - 检查服务器日志是否有错误信息

3. **部署失败**
   - 确保所有依赖都已正确安装
   - 检查 Zeabur 的部署日志
   - 验证环境变量是否正确设置

## 📈 性能优化建议

1. **视频优化**
   - 压缩视频文件大小
   - 考虑使用不同分辨率的视频源
   - 可以添加视频预加载

2. **代码优化**
   - 最小化 CSS 和 JavaScript
   - 使用浏览器缓存
   - 启用 Gzip 压缩

## 🔒 安全建议

1. **数据保护**
   - 定期备份 `visitors.json`
   - 不要在公开场合暴露访问统计数据
   - 考虑加密存储 IP 地址

2. **服务器安全**
   - 使用 HTTPS
   - 设置适当的 CORS 策略
   - 限制 API 请求频率

## 📦 安装

1. 克隆仓库
```bash
git clone https://github.com/hhhoim/RickPrank.git
cd prank-website
```

## 📄 许可证

[MIT License](https://github.com/hhhoim/RickPrank/blob/main/LICENSE) - 随意使用，但请标明出处！

##🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 致谢

感谢所有被骗的朋友们，你们的贡献让这个项目更有意义！ 😆

---
⭐️ 如果你觉得这个项目有趣，请给它一个星标！

Made with ❤️ by [hhhoim](https://github.com/hhhoim/RickPrank)
