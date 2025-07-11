Minecraft伺服器
===

以下是依據原repo https://github.com/Barian0517/mcserverweb 重構的新專案
將以Astro來建置

## Build 這個專案

```bash

git clone <repo url>
npm i
npm run dev #啟動本地Server
```

## 產生靜態包
```bash
npm run build
```

會產生在 /dist 資料夾



## 檔案結構
* 基本頁面都在 /src/pages/...
* 模板在 /src/layouts/






## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
