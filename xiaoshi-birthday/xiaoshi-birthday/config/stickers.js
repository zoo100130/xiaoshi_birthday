/* 每張圖片的位置設定。改完存檔，重新整理網頁就會套用。
   file：images/ 資料夾裡的檔名
   x   ：左右位置，0 = 最左、0.5 = 正中間、1 = 最右（用比例，換螢幕寬度也不會跑掉）
   y   ：從網頁最上面往下數的距離（像素）
   w   ：寬度（像素）
   r   ：旋轉角度
   f   ：true = 加拍立得白框，false = 去背貼紙
   m   ：加上 m: true 可以把圖片本身的白底變透明
*/
window.STICKERS = [
  { file: "sticker1.png", x: 0.1632, y: 2347.5, w: 220, r: 4,  f: false },
  { file: "sticker2.gif", x: 0.8189, y: 2461.9, w: 220, r: -5, f: false },
  { file: "sticker3.gif", x: 0.8021, y: 2031.1, w: 220, r: -1, f: false },
  { file: "sticker4.gif", x: 0.0726, y: 1763.5, w: 220, r: 0,  f: false }
];
