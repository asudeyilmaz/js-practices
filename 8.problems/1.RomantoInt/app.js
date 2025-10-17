//s = "MCMXCIV"
// çıktı = 1994
/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/

const romanToInt = (s) => {
  const roman = new Map();
  roman.set("I", 1);
  roman.set("IV", 4);
  roman.set("V", 5);
  roman.set("IX", 9);
  roman.set("X", 10);
  roman.set("XL", 40);
  roman.set("L", 50);
  roman.set("XC", 90);
  roman.set("C", 100);
  roman.set("CD", 400);
  roman.set("D", 500);
  roman.set("CM", 900);
  roman.set("M", 1000);

  let number = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];
    //sırada harf varsa çalış
    if (s[i - 1]) {
      let futureChar = s[i - 1];
      //sıradaki harfin değeri şimdikinden küçükse çalış
      if (roman.get(futureChar) < roman.get(char)) {
        let newChar = futureChar.concat(char);
        number += roman.get(newChar);
        i--;
      } else {
        //küçük değilse
        number += roman.get(char);
      }
    } else {
      //sırada harf yoksa
      number += roman.get(char);
    }

    console.log(number);
  }
};
romanToInt("MMMCMXCIX");
