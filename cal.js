document.getElementById("button0").addEventListener("click",() => (dis('0')));
document.getElementById("button1").addEventListener("click",() => (dis('1')));
document.getElementById("button2").addEventListener("click",() => (dis('2')));
document.getElementById("button3").addEventListener("click",() => (dis('3')));
document.getElementById("button4").addEventListener("click",() => (dis('4')));
document.getElementById("button5").addEventListener("click",() => (dis('5')));
document.getElementById("button6").addEventListener("click",() => (dis('6')));
document.getElementById("button7").addEventListener("click",() => (dis('7')));
document.getElementById("button8").addEventListener("click",() => (dis('8')));
document.getElementById("button9").addEventListener("click",() => (dis('9')));
document.getElementById("button+").addEventListener("click",() => (dis('+')));
document.getElementById("button-").addEventListener("click",() => (dis('-')));
document.getElementById("button*").addEventListener("click",() => (dis('*')));
document.getElementById("button/").addEventListener("click",() => (dis('/')));
document.getElementById("button.").addEventListener("click",() => (dis('.')));
document.getElementById("clear").addEventListener("click",clr);
document.getElementById("equal").addEventListener("click",solve);



//function that display value
function dis(val)
{
    document.getElementById("result").value+=val
}
  
//function that evaluates the digit and return result
function solve()
{
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}
  
//function that clear the display
function clr()
{
    document.getElementById("result").value = ""
}
