# 网站源码上传 GitHub 指南（简化版）

> 2026-08-14 更新。本地代码已全部提交完成（master 分支，2 个干净提交），
> 远程仓库 Madecare-Website 上有之前上传一半的残留，下面第 4 步的一条命令会覆盖它。
> 全程约 10~20 分钟，需要你的代理软件配合。

---

## 第 1 步：打开代理软件

打开你的代理软件（Clash / v2rayN / Shadowsocks 等），确保它在运行、节点可用。
**不打开代理，后面的推送会失败**（你之前就是卡在这一步）。

## 第 2 步：找到代理端口

打开 Windows"设置"→"网络和 Internet"→"代理"，看"手动设置代理"里的端口，常见值：

- `7890`（Clash 默认）
- `10809`（v2rayN 默认）
- `1080`（Shadowsocks 默认）

如果手动设置代理是关闭状态，在代理软件界面里找"端口"设置。

## 第 3 步：让 git 走代理

打开命令提示符（在文件夹地址栏输入 cmd 回车），运行（把 7890 换成你的实际端口）：

```
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890
```

这两条只需设置一次，以后都不用再设。

## 第 4 步：推送

```
cd /d D:\CC\1_madecare\project_SourceCode\official
git push -f -u origin master
```

说明：

- `-f` 是强制覆盖：会用本地干净的 2 个提交，覆盖远程上传到一半的残留内容。
- 首次推送约 250MB（字体、GIF 等素材），耐心等 3~10 分钟，窗口会滚动进度。
- 出现 `Writing objects: 100%` 和 `* [new branch] master -> master` 即为成功。
- 如果中途断网或报错，**直接重跑同一条命令**，git 会自动续传已上传的部分。

## 第 5 步：验证

浏览器打开 https://github.com/xiaoy23333/Madecare-Website ，应能看到：

- 2 个提交："官网代码上传"和"官网升级与品牌更新…"
- src、mobile 等目录和文件

---

## 常见问题

**Q: 提示 `Failed to connect to github.com:443`？**
A: 代理没开，或第 3 步端口填错。检查代理软件是否运行、端口是否正确。

**Q: 提示 `Authentication failed`？**
A: 命令里的地址不含密码，git 会用 Windows 凭据管理器里存的凭证。若之前存过旧凭证：
打开"控制面板"→"凭据管理器"→"Windows 凭据"，删除 github.com 相关条目后重试。

**Q: 以后改了代码怎么上传？**
```
cd /d D:\CC\1_madecare\project_SourceCode\official
git add -A
git commit -m "描述这次改了什么"
git push
```

**Q: 不想要代理配置了怎么办？**
```
git config --global --unset http.proxy
git config --global --unset https.proxy
```

---

## 安全提醒

- 你的 GitHub 令牌（github_pat_…开头）之前发到过聊天里，**推送成功后请到
  https://github.com/settings/tokens 把它撤销（revoke）并重新生成一个**。
- 新令牌只在命令提示符里使用，不要发给任何人（包括聊天）。
