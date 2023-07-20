
/**
 * 这是一个sleep函数
 * @param {*} delay 
 * @returns 
 */
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay)) ;

function activeCountDown() {
    var countdownNode = document.getElementById("second") ;
    var text = countdownNode.innerText ;

    if( text == "Press button to count down" ) {
        countdownNode.innerText = 5 ;
        setTimeout('activeCountDown()',1000) ;
        return ;
    }

    if( text == "0" ) {
        sleep(1000) ;
        countdownNode.innerText = "Press button to count down" ;
        return ;
    }

    countdownNode.innerText = text - 1 ;

    setTimeout('activeCountDown()',1000) ;
}