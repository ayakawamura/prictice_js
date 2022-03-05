let budget = prompt("所持金は？");
budget = parseFloat(budget);

let isHungry = confirm("お腹空いてますか？");

if (budget >=1500　&& isHungry){
  alert("ピザを注文しました");
}else if (budget >= 500 && isHungry){
  alert("ポテトを注文しました");
}else{
  alert("節約・・・");
}