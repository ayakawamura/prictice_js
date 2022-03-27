//オブジェクトの定義
let omikuji ={
  // プロパティを定義
  results : ["大吉","吉","中吉","小吉","凶"],

  // メソッドを無名関数で作る。変数に格納
  getResult : function(){
    let results = this.results;
    return results[Math.floor(Math.random() * results.length)];
  }
}

// コンソールでメソッドが使えるか確認
console.log(omikuji.getResult());

let getResult= document.getElementById("getResult");
// let result = document.getElementById("result");

getResult.addEventListener("click", function(){
  result.innerHTML= `結果は ${omikuji.getResult()} でした`;
})

// 結果表示部分をjsで作成する場合の記述
// let result = document.createElement("div");
// result.setAttribute("id","result");
// let parent = getResult.parentElement;
// parent.insertBefore(result,null);