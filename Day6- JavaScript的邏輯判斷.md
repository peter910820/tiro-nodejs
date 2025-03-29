# Day6-JavaScript的邏輯判斷

JavaScript的邏輯判斷整體來說跟其他的程式語言十分相似。主要分為兩種，分別是if else以及switch case。

## if else

if else語法用來判斷某個條件是否成立，若成立就執行if裡面的程式碼，不成立就跳過，若有else if的話會繼續判斷下去，最後若前面的條件都不符合並且有else區塊的話就會執行else:

```JavaScript
let judge = 2;

if(judge >= 3){     //條件不符合，跳過此區塊
    console.log(3)
}else if(judge>=2){ //條件符合，執行此區塊
    console.log(2)  //顯示2
}else{              //前面有條件符合，跳過此區塊
    console.log(1)
}
```

當有條件符合，就會跳過後面的所有條件，此用法也可以省略else或是else if，可是一定要由if開頭。

## switch case

switch case是另一種邏輯判斷的方式，這個方法由switch開頭，根據後面小括號裡面的值來決定要進入下方哪一個case。實際講沒感覺直接上程式碼

```JavaScript
let judge = 5;

switch(judge){
    case 3:
        console.log(3);
        break;
    case 4:
        console.log(4);
        break;
    case 5:             //符合值，進入此case
        console.log(5); //顯示5
        break;
}
```

可以看到**switch**後面有個小括號，裡面放入要判斷的值，之後的大括號裡面有許多的**case**區塊，每個區塊都有對應的值，也就是說，小括號內的值若對應到**case**後面的值(相等)，就會進去這個**case**區塊。每個**case**區塊不需要大括號，可是需要有個**break**來表示此**case**區塊已結束。

switch的條件不一定要是一個變數，整個小括號若不是單一變數就會將裡面的值先算完再進行判斷:

```JavaScript
let judge = 5;
let judge2 = 10;

switch(judge*judge2){
    case 40:
        console.log(40);
        break;
    case 50:            //符合值，進入此case
        console.log(50); //顯示50
        break;
    case 60:
        console.log(60);
        break;
}
```

今天講得比較少，明天來提提迴圈的部分。