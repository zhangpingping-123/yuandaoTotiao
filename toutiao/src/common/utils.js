/* 
    简易的提示控件
*/
function Message(options={ msg: "" }){
    let msg =options.msg;
    let duration = options.duration||3000;
        console.log(msg,duration)
        //创建一个提示元素
        let tipEl = document.createElement("div")
        tipEl.innerHTML = msg;
        document.body.appendChild(tipEl);
        tipEl.classList.add("tt-message");
        //默认3s之后移除该元素
        setTimeout(function(){
            document.body.removeChild(tipEl)
        },duration);
}
//导出这个控件
export{Message}