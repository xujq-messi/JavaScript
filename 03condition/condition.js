
function myFunction() {
    var message = "" ;

    var hour = new Date().getHours() ;

    if( hour < 20 ) {
        message = "当前时间是[" + hour + "]，good day!"
    }else {
        message = "时间未到"
    }

    document.getElementById("demo").innerHTML=message ;

    // for
    var person = {fname:"xu", age:18, sname:"jianqiang"} ;
    var txt = "" ;
        // js 确实灵活。很简单就把成员给反射出来了
    for(x in person) {
        txt = txt + " " + x + "=" + person[x]
    }

    document.getElementById("demo").innerHTML=txt ;
}
