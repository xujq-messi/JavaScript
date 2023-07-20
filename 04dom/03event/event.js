
function addparagraph() {

    // 数组中的类型可以不一样
    var arr = new Array(3)
    arr[0]="messi";
    arr[1]="xujq";
    arr[2]=true ;

    var para = document.createElement("p") ;
    //var node = document.createTextNode("这是新的段落" + new Date()) ;
    var node = document.createTextNode(arr.toString()) ;
    para.appendChild(node) ;

    document.getElementById("div1").appendChild(para) ;
}