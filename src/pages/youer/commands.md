---
layout: ../../layouts/LayoutMd.astro
---
<style>
h2 {
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 1rem;
}

</style>

<h1 style="text-align: center">常用指令</h1>

## 登入與註冊
第一次進入需註冊: /register <設定密碼> <密碼確認>

登入: /login <密碼>

## 家園
設定家園: /sethome <家園名稱>

傳送到家園: /home <家園名稱>

## 設施
前往設施: /warp <設施名稱>

## 返回
所有傳送指令都可以使用back返回傳送前的位置

使用需輸入: /back

## TPA

想傳送到某個玩家的位置請使用TPA

使用需輸入: /tpa <玩家名稱>

被傳送玩家打開聊天欄點擊\[確認\]按鈕即可

## 設定皮膚

<div style="position: relative;">
<!-- 被遮蓋的原本內容 -->
<div style="opacity: 0.7;">

正版玩家使用官方方式設定皮膚即可

盜版玩家將皮膚上傳至 <https://mineskin.org/>

進入遊戲使用 /skin set web &lt;格式&gt; &lt;複製的連結&gt;

關於 &lt;格式&gt; 參數：支援經典（classic）和纖薄（slim）皮膚模型，如果不確定可以都試試看

</div>

<!-- 蓋在上方的提醒 -->
<div style="
position: absolute;
top: 0;
left: 0;
width: 100%;
padding: 30px;
color: red;
font-size: 64px;
font-weight: bold;
z-index: 10;
text-decoration: line-through;
">
這功能壞了，別管他
</div>
</div>
