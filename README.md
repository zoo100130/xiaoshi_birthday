# 小士十八歲生日

從台灣寄到海南的生日網頁。這份是要放到 GitHub Pages 的公開版。

## 部署

這包**裡面的東西**要放在 repo 的根目錄，`index.html` 不能被包在資料夾裡，
否則 GitHub Pages 會給你 404。

```
你的 repo/
├── index.html
├── .nojekyll
├── images/
└── config/
    ├── stickers.js
    └── wishes-layout.js
```

打開 repo → `Add file` → `Upload files` → 把 `index.html`、`.nojekyll`、
`images`、`config` 一起拖進去 → `Commit changes`。

接著 `Settings` → `Pages` → Source 選 `Deploy from a branch`，
Branch 選 `main`、資料夾選 `/ (root)` → `Save`。

等一兩分鐘，網址是 `https://<你的帳號>.github.io/<repo 名>/`。

`.nojekyll` 是告訴 GitHub 不要用 Jekyll 處理這些檔案，直接照原樣出。

## 這份跟本地版的差別

- 沒有放任何圖片（`images/` 是空的）。要加自己有版權的圖片看下面。
- 手機上祝福語會回到預設排版。自訂位置是用像素記的，
  螢幕一變窄就會把字推出畫面，所以寬度小於 700px 時就不套用。
- 不管拖到哪，文字都會被留在版面裡，不會被切掉半邊。

## 想加圖片

1. 圖片放進 `images` 資料夾
2. 在 `config/stickers.js` 的清單裡加一行：
   `{ file: "我的圖.png", x: 0.5, y: 1800, w: 220, r: 0, f: false },`
3. 用 `index.html#edit` 拖到想要的位置，按「複製設定檔」，貼回 `config` 的兩個檔案

公開網站等於公開散布，所以這裡只放你自己拍的、自己畫的，
或是有授權可以公開使用的圖。

## 位置怎麼記的

**圖片（stickers.js）**
- `x` 左右位置，0 最左、0.5 正中間、1 最右（比例，換螢幕寬度不會跑掉）
- `y` 從網頁最上面往下數的像素
- `w` 寬度、`r` 旋轉角度
- `f` true 加拍立得白框，false 去背貼紙
- `m` true 把圖片本身的白底變透明（CSS 的 mix-blend-mode: multiply）

**祝福語（wishes-layout.js）**
每句先照原本排法放好，再用 CSS `translate` 從原位挪過去。
`x` 是比例、`y` 是像素，負數往上。

## 想改文字

在 `index.html` 裡搜尋：
- 祝福語：`class="note"`
- 給小士的信：`給小士`
- 角色台詞：`const LINES=`
- 泡泡裡的字：`const POPS=`

網頁上那五隻（小籠包包、芭樂樂、珍奶泡泡、椰子滴滴、珊珊龍）
是直接用 SVG 畫在 `index.html` 裡的，不是圖檔。

## 公開前想一下

Pages 是公開網站，拿到網址的人都看得到那封信，搜尋引擎也可能收錄。
要擋爬蟲可以在根目錄加一個 `robots.txt`，內容兩行：

```
User-agent: *
Disallow: /
```

擋得住搜尋引擎，擋不住拿到網址的人。
