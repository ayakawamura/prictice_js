// 画像を配列に格納
let album =[
  {src:"img/1.jpg", msg:"山道の緑が気持ちいい"},
  {src:"img/2.jpg", msg:"階段きつかった"},
  {src:"img/3.jpg", msg:"高尾山薬王院"},
  {src:"img/4.jpg", msg:"帰りはロープウェイでスイスイ"},
  {src:"img/5.jpg", msg:"〆のお蕎麦です"}
  // msgでキャプションを指定(altでもOK)画像が表示できない時の画像説明文
];

// mainImageのスペースを作る
let mainImage = document.createElement("img");
mainImage.setAttribute("src",album[0].src);
mainImage.setAttribute("alt",album[0].msg);

// 表示文の記載スペースを作る
let mainMsg = document.createElement("p");
mainMsg.innerText = mainImage.alt;

// mainクラスに画像を表示
let mainFlame = document.querySelector("#gallery .main");
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);


// サムネの要素をHTMLから取得
let thumbFlame = document.querySelector("#gallery .thumb");
// 繰り返し処理でサムネデータを全て読み込み
for (let i = 0; i < album.length; i++) {
  let thumbImage = document.createElement("img");
  thumbImage.setAttribute("src", album[i].src);
  thumbImage.setAttribute("alt", album[i].msg);
  // サムネ表示
  thumbFlame.insertBefore(thumbImage, null);
}

thumbFlame.addEventListener("click", function(event){
  if(event.target.src){
    mainImage.src = event.target.src;
    mainMsg.innerHTML = event.target.alt;
  }
});