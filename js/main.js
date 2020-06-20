$(document).ready(function(){
    document.onkeyup = function(){
        var myEvent = window.event; 
        switch(myEvent.keyCode){
            // Q键 --->提交
            case 81:
                mySubmit();
                break;
            // W键 --->替换
            case 87:
                myReplace();
                break;
            // E键 --->搜索
            case 69:
                event.returnValue = false;
                mySearch();
                break;
            // R键 --->关闭搜索窗口
            case 82:
                closeWindow();
                break;
        }
    }
});
