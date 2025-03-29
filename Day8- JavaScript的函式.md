# Day8-JavaScript的函式

## 函式

函式就是將許多重複的程式碼利用呼叫的方式，使得程式設計師在撰寫程式碼時可以只寫一次，大幅減少記憶體浪費並且模組化程式，提升整個程式的閱讀性。

例如說，若我們需要反覆使用到梯形公式的話，就可以利用函式:

```javascript
function trapezoid(a,b,hight) {
  return ((a+b)*hight)/2;
}
```

利用function定義函式本體，給函式一個名字後接一個`()`，裡面放的東西為**參數**，也就是從外部傳入操作的變數，參數可以傳入多個，中間用`,`隔開就好。函式可以有回傳值，回傳值的前面記得加上`return`。要呼叫這個函式的話只需要打上函式名稱以及輸入後面的參數就好，像是這樣:

```javascript
function trapezoid(a,b,hight) {
    return ((a+b)*hight)/2;
}

console.log(trapezoid(10,5,2));
```

用`console.log()`包起來顯示出函式的回傳值，可以看到結果是15。

另一種寫法是將函式利用一個變數存著，這樣就不用定義函式名稱，可是需要一個變數，改寫上面的例子可以改寫成這樣:

```javascript
let trapezoid = function(a,b,hight){return ((a+b)*hight)/2;};

console.log(trapezoid(10,5,2));
```

## 箭頭函式

箭頭函式是另一種函式的表達方法，它的好處是可以用更簡短的寫法來撰寫函式，將上面的例子轉換後會變成這樣:

```javascript
let trapezoid = (a,b,hight) => ((a+b)*hight)/2;

console.log(trapezoid(10,5,2));
```

箭頭函式比較特殊的一點是，當不使用`{}`時，會直接認定那行是回傳值，但若有使用`{}`的話就不會自動認定為回傳值:

```javascript
let trapezoid1 = (a,b,hight) => ((a+b)*hight)/2;

let trapezoid2 = (a,b,hight) => {((a+b)*hight)/2};
```
上述的例子中，**trapezoid1**不需加return就有回傳值，因為它沒有`{}`，但**trapezoid2**就需要加`return`才有回傳值，這是表達式與陳述式的概念，後面如果有空會提到。

總而言之，箭頭函式可以讓程式碼變的更簡單俐落，並且也不會有太複雜的規則，明天來談談javascript之中的例外錯誤處理方法。