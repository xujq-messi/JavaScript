
function varFunction() {

    var x = true ;
    var y = "hello" ; // 这里如果不加引号，js会把hello当成变量，在运行时就会报未定义变量的错误。

    document.getElementById("head").innerHTML=x ;
    document.getElementById("Paragrph").innerHTML=y ;
}

// 对象
    /*
    js中所有的事物都是对象：字符串、数字、数组、日期等等。在js中，对象是拥有属性和方法的数据。

    js中有很多方法创建对象。js可以往现有的对象中，添加属性：

    person = new Object();
    person.age = 18;
    person.firstName = "xu" ;
    */
function varFunction2() {

    var obj = {
        firstName: "xu"
        , lastName: "jianqiang"
        , age: "18"
    };

    console.log("firstname=" + obj.firstName);
    console.log("age=" + obj["age"]);

    document.getElementById("head").innerHTML=obj.firstName ;
}

function varFunction3() {

    var obj = new Object() ;
    obj["age"]=18;
    obj.firstName = "xu" ;

    console.log("firstname=" + obj.firstName);
    console.log("age=" + obj["age"]);

    document.getElementById("head").innerHTML=obj.firstName ;
}

// 运算符
    /*
    js中有全等运算符 === ，当值和类型全都相同时，才是true。其他与java一致。
    */