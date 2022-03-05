const GU    = 1;
const CHOKI = 2;
const PA    = 3;

let hand = prompt(`1~3の数字を入力してください。\n\n ${GU}:グー\n ${CHOKI}:チョキ\n ${PA}:パー`);
hand = parseInt(hand, 10);

if (hand != GU && hand != CHOKI && hand != PA){
  alert("入力値が不正です。ブラウザを読み込んでください。");
} else{

  // PCの手を決める
  let com = Math.floor(Math.random()*3)+1;
  // pcの手を数字から文字にする
  let comHandName = "";
  switch (com){
    case GU:
      comHandName = "グー";
      break;
    case CHOKI:
      comHandName = "チョキ";
      break;
    case PA:
      comHandName = "パー";
      break;
  };

    // 結果の判定
    let result = "";
    if (hand === com){
      result = "あいこ";
    }else if ((hand === GU && com === CHOKI) || (hand === CHOKI && com === PA)||(hand === PA && com === GU)){
      result = "勝ち";
    }else{
      result = "負け";
    }

  alert(result +`\n コンピュータの出した手は ${comHandName} でした`);
}