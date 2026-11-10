# 帧匠产品页

帧匠官网与下载入口，独立于桌面应用源码管理。应用源码仓库保持私有；公开安装包与校验值保存在 [zhenjiang-releases](https://github.com/solaim/zhenjiang-releases/releases)。

## 本地开发

```sh
npm ci
npm run build
npm test
python3 -m http.server 4173 --directory dist
```

源文件为根目录的 index.html、styles.css、app.js 和 assets/。构建输出为 dist/，仅包含公开产品素材，不包含桌面应用后端、私有资料或访问凭据。

## Cloudflare Pages

项目名 `zhenjiang`，GitHub仓库 `solaim/zhejiang-web`，生产分支 `main`，框架预设“无”，构建命令 `npm run build`，输出目录 `dist`，Node版本22。成功连接后，main分支推送会自动部署。

也可通过本人已认证的 Wrangler 执行 `npx wrangler@4 pages deploy dist --project-name=zhenjiang --branch=main`。

## 发布更新

package.json 的 version 用于生成页面显示版本及安装包地址。先完成公开下载仓库对应版本的安装包发布，再更新本站版本并推送，避免下载404。当前下载包含macOS arm64/x64、Windows x64和Linux x64。

截图是应用界面与演示素材，未包含用户私人媒体。页面不加载第三方统计或字体资源。
