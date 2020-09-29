var str = "Hello Narendra how are you";

function reverseStr(str) {
  (str1 = ""), (newArr = []);
  var newStr = str.split(" ");
  for (var j = 0; j < newStr.length; j++) {
    str1 = newStr[j].split("").reverse().join("");
    newArr.push(str1);
  }
  return newArr;
}

console.log(reverseStr(str));
