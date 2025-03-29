# Day5-JavaScript的運算子

JavaScript的運算子除了基本其他常見的算術運算子、邏輯運算子以外，還有其他特殊的運算子，今天就來了解一下這些運算子的特性跟功能。

## 運算子

運算子顧名思義就是來運算的，像是加減乘除等。運算子會運算出一個結果，也就是會有值的產生，下面列出了一些JavaScript常用的運算子:

* 算術運算子
* 指定運算子
* 邏輯運算子
* 比較運算子
* 字串運算子
* **三元運算子**

這些會是比較常用的運算子，接下來會稍微解釋他們分別是幹嘛的。

## 算術運算子

算術運算子用來做加減乘除等數學運算，常用的有下列這些:

```JavaScript
let number1 = 10;
let number2 = 4;

console.log(number1 + number2); //加法，輸出為14
console.log(number1 - number2); //減法，輸出為6
console.log(number1 * number2); //乘法，輸出為40
console.log(number1 / number2); //除法，輸出為2.5
console.log(number1 % number2); //取餘數，輸出為2
```
## 指定運算子

指定運算子的意思就是指定一個值給特定的變數，像是常用的`+=`就是指定運算子的一種:

```JavaScript
let number1 = 10;
let number2 = 5;
number2 += number1; //將number1跟number2加起來並指定給number2
//上面這行等價於 number2 = number2 + number1
console.log(number2); //輸出為15
```

這個用法在其他的算術運算子上也可以套用。不過除了這些還有計算位元用的運算子，這邊因為不常用到(?)就不多作介紹。

## 邏輯運算子

邏輯運算子會判斷一件事情是真或是假，所以回傳的結果會是布林值(true false)。

```JavaScript
let logical1 = true;
let logical2 = false;

console.log(logical1 || logical2); //Or,輸出為true
console.log(logical1 && logical2); //And,輸出為false
console.log(!logical1); //Not,輸出為false
```
有關於邏輯的概念可以稍微看一下我[去年的文章](https://ithelp.ithome.com.tw/articles/10267645)。

## 比較運算子

比較運算子常拿來用在條件式的判斷，利用小於、大於、等於以及不等於來比較運算子前後的值，進而傳回true或是false，直接來看看例子:

```JavaScript
let logical1 = 10;
let logical2 = '10';
let logical3 = 5;

console.log(logical1 == logical2); //判斷前後是否相等,輸出為true
console.log(logical1 != logical2); //判斷前後是否不相等,輸出為false
console.log(logical1 >= logical3); //判斷前面變數的值是否大於等於後面，輸出為true
console.log(logical1 < logical3);  //判斷前面變數的值是否小於後面,輸出為false
```
不同於賦值給變數的`=`，在這邊的`==`是用來比較的。

不過眼尖的讀者會發現一個問題，logical1跟logical2型態完全不一樣，可是第一個輸出結果竟然是true，那是因為JavaScript會進行所謂的"自動轉型"，在比較時進行適當的轉型，如果要阻止這種行為，我們可以使用`===`跟`!==`:

```JavaScript
let logical1 = 10;
let logical2 = '10';

console.log(logical1 === logical2); //判斷前後是否相等(連同型態也要),輸出為false
console.log(logical1 !== logical2); //判斷前後是否不相等(連同型態也要),輸出為true
```
這樣就會連型態也會考慮進去。

## 字串運算子

字串運算其實就是利用`+`號來連接多個字串，像是這樣:

```JavaScript
let string1 = "字串";
let string2 = '相加';

console.log(string1 + string2); //將兩個字串相加，輸出為 字串相加
```

## 三元運算子

三元運算子比較特別一點。他可以根據判斷一個條件是否成立來給予不同的值，用說的不好理解直接來看看例子:

```JavaScript
let judge = 10;
let result = (judge<5) ? "judge小於5" : "judge大於等於5";

console.log(result); //輸出為 judge大於等於5
```
可以看到例子，利用一個`?`來分開結果跟條件，前面的條件會產生一個布林值，如果這個布林值是true就回傳`?`後面的第一個值，若false就會回傳第二個值，也就是用`:`分開，後面的那個值。

今天簡單的講解了不同運算子的使用方式，很多資料都來自於[MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E6%A2%9D%E4%BB%B6%EF%BC%88%E4%B8%89%E5%85%83%EF%BC%89%E9%81%8B%E7%AE%97%E5%AD%90)，我只整理了比較常用的，去這個網站可以看到更多細節。那麼明天就繼續來講解JavaScript的語法。