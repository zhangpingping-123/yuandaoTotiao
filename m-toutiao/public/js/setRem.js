(function(){
    function resize(){
        let uiWidth = 750; //原型稿的宽度
    let uiFontSize = 20; 
    //计算html的字体大小
    //获取当前设备的宽度
    let clientWidth = document.documentElement.clientWidth;
    htmlFontSize = uiFontSize *clientWidth/uiWidth
    document.documentElement.style.fontSize = htmlFontSize + "px"
    }
    //屏幕大小事件
    window.addEventListener("resize", resize);
    //横屏
    window.addEventListener("orientationchange",resize)
})()