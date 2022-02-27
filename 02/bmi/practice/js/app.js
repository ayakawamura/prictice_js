let weight;
weight = prompt("体重を入力してね");
let height;
height = prompt("身長は？(m)");
let bmi = weight / (height*height);
message = `あなたのBMIは${bmi}です`;
alert(message);