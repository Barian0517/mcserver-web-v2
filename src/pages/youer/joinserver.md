---
layout: ../../layouts/LayoutMd.astro
---
<style>
h2 {
  font-weight: bold;
  font-size: 25px;
  font-weight: bold;
}
p {
  font-size: 20px;
}
</style>


## STEP1:
安裝neoforge1.21.1 

## STEP2:
在該版本中安裝automodpack模組   <small>[點此下載](https://modrinth.com/mod/automodpack?version=1.21.1&loader=neoforge#download)</small>

## STEP3:
進入伺服器提示輸入以下驗證金鑰，並按下確認(verify)，自動下載所需模組

<div style="display: flex;  margin-top: 20px;">
    <div style="background-color: #1e1e1e; color: #ffffff; padding: 15px 20px; border-radius: 8px; font-family: monospace; font-size: 18px; display: inline-flex; align-items: center; gap: 12px; ">
        <div id="server-address" style="user-select: text;">948d042013399ad3d8e69377cf9d8daa1e47ebc7b5c2c1b3a18189e073c11fb6</div>
        <!-- 複製按鈕 -->
        <button onclick="copyAddress()"
                style="background-color: #333; color: white; border: none; padding: 5px 12px; font-size: 14px; border-radius: 4px; cursor: pointer; width:4em ">
            複製
        </button>
        <script is:script>
            function copyAddress() {
                const text = document.getElementById("server-address").innerText;
                navigator.clipboard.writeText(text).then(() => {
                    alert("已複製伺服器地址！");
                });
            }
        </script>
    </div>
</div>

## STEP4:
下載完成後，重啟遊戲即可進入伺服器遊玩 
