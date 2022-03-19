// htmlのフォーム要素を取得
let button = document.getElementById("button");
let form = document.getElementById("form");
let textarea = document.getElementById("textarea");

// イベント処理
// お問い合わせボタンを押した時
button.addEventListener("click", function(){
  form.style.display = "block";

  // タイマー処理で残り時間を表示
  let timerId = setInterval(function(){
    timeMessage.innerHTML = `<p>時間制限：${reminingTimeNum}秒</p>`;
    
    if (reminingTimeNum <=0){
      alert("制限時間終了");
      clearsetInterval(timerId);
    }

    reminingTimeNum--;
  },1000);
});

// 文字数制限
let maxTextNum = textarea.getAttribute("maxlength");

// 文字数表示のため要素を作成
let textMessage = document.createElement("div");

// 入力可能文字数を表示する
textarea.addEventListener("keyup", function(){
  let currentTextNum = textarea.value.length;
  textMessage.innerHTML = `<p>あと「${maxTextNum-currentTextNum}」文字入力できます</p>`;
});

// 文字数表示の要素を追加する
let parent = textarea.parentElement;
parent.insertBefore(textMessage, textarea);

// 残り時間
let reminingTimeNum = 30;

// 残り時間表示のための要素を追加
let timeMessage = document.createElement("div");
parent.insertBefore(timeMessage, null);