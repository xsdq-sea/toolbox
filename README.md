# Toolbox · 日常工具箱

一个持续生长的静态网页工具集合。每个工具使用一个独立 HTML 文件，无需构建即可部署。

## 页面

| 文件 | 用途 |
| --- | --- |
| `index.html` | 导航首页，支持按名称和关键词搜索工具 |
| `allocation-tracker.html` | 逐低 · 额度消耗计划与记录（原 `index.html`） |

## 本地使用

直接用浏览器打开 `index.html`，或在仓库根目录启动静态服务器：

```sh
python3 -m http.server 8000
```

打开 `http://localhost:8000/`。

## GitHub Pages

仓库：<https://github.com/xsdq-sea/toolbox>

Pages 使用 `main` 分支根目录发布。发布这些文件后：

- 导航首页：<https://xsdq-sea.github.io/toolbox/>
- 逐低工具：<https://xsdq-sea.github.io/toolbox/allocation-tracker.html>

仓库由 `allocation-tracker` 更名为 `toolbox`，请更新原来的站点书签。旧首页路径不再作为逐低工具入口。

## 新增工具

1. 在根目录添加一个独立 HTML 文件，文件名使用小写英文和连字符。
2. 在首页 `#tools` 中复制一张 `.tool-card`，修改相对链接、图标、分类、名称、说明及 `data-keywords`。搜索和数量统计会自动包含新卡片。
3. 为工具添加 `./index.html` 返回入口，并更新本文件中的页面列表。

所有站内链接使用相对路径，以兼容 GitHub Pages 子路径和本地打开。首页的工具链接直接写在 HTML 内，禁用 JavaScript 仍可浏览和进入工具。

## 逐低数据与云备份

逐低沿用原有计算、记录、导入导出、Supabase 云端备份及本地存储键（`zhudi-ledger-v1`、`zhudi-supabase-config-v1`、`zhudi-supabase-session-v1`）。在同一浏览器中从原 GitHub Pages 地址迁到新地址时，HTTPS 协议和 `xsdq-sea.github.io` 域名保持一致，本地存储可继续读取；更换域名、浏览器或使用本地预览时，存储不会自动共享，可用导出/导入或已有云备份恢复。

网页本身无需自建服务端。逐低的可选云备份仍依赖原有 Supabase 服务，仅在工具页面使用；导航首页不连接该服务。
