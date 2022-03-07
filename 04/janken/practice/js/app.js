janken();

function janken () {
  const GU    = 1;
  const CHOKI = 2;
  const PA    = 3;

  // じゃんけんの手の入力
  function getHand (){
    let hand = prompt(`1~3の数字を入力してください。\n\n ${GU}:グー\n ${CHOKI}:チョキ\n ${PA}:パー`);
    hand = parseInt(hand, 10);

    if (hand != GU && hand != CHOKI && hand != PA){
      return undefined;
    } else{
      return hand;
    }
  }

  // pcの手を決定
  function getCom(){
    return Math.floor(Math.random()*3)+1;
  }

  // pcの手を数字から文字にする
  function getHandName(num){
    switch(num){
      case GU:
        return "グー";
      case CHOKI:
        return "チョキ";
      case PA:
        return "パー";
    }
  }

  // 結果の判定
  function getResult (hand, com) {
    if (hand === com){
      return "あいこ";
    }else if ((hand === GU && com === CHOKI) || (hand === CHOKI && com === PA)||(hand === PA && com === GU)){
      return "勝ち";
    }else{
      return "負け";
    }
  }

  // 結果判定メッセージ
  function getResultMsg(hand, com){
    return getResult(hand, com) +`\n コンピュータの出した手は ${getHandName(com)} でした`
  }

  // 実行する処理
  let hand = getHand();
  // 入力した手がundefindの場合の処理
  if (!hand) {
    alert("入力値が不正です。ブラウザを読み込んでください。");
  }else{
    let com = getCom();
    // console.log(com);
    alert(getResultMsg(hand, com));
  }
}