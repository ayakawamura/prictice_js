// 条件をに当てはまる限り繰り返し処理を行う
let year = 2000;
while(year <=2100){
  // console.log(year);
  if (year %4){
    console.log(year + ":冬季オリンピック");
  }else{
    console.log(year+ ":夏季オリンピック");
  }
  year +=2;
}

