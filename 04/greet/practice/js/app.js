let name = prompt("名前を入れてね");
greet(name);
greet("太郎");

function greet(name){
  let message = "こんにちは";
  alert(message + name);
  return;
}


greet2();
greet2("ドラえもん", "くん");

// nameにデフォルト値を入れておく
function greet2(name = "名無し", a = "さん"){
  let message = "こんにちは";
  alert(message + name+ a);
  return;
}

// 関数内の変数は関数の外から使えない
// console.log(message);

// 即時関数
// 関数を呼び出さなくても実行できる
// グローバル変数でmessageが被ったときに片方をローカル変数として使用できる
(function (){
  let message = "こんにちは";
  alert(message);
  return;
})();