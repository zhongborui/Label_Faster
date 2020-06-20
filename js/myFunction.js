function mySubmit(){
    $("button.follow-button.follow").click();
}


function myReplace(){
    $("h1.article-title").focus();
    $("h1.article-title").text("替换文字");
    $("h1.article-title").blur();
}


function mySearch(){
    var searchWord = $("h1.article-title").text();
    if(searchWord){   	
	    GoogleURL = "https://www.google.com/search?q=";
	    // BingURL= "https://cn.bing.com/search?q=";
        // BaiduURL = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=";
        Google = openWindow(GoogleURL + searchWord);
    }	
}


function openWindow(myURL){
    var myHeight = window.screen.availHeight;
    var myWidth = window.screen.availWidth;
    return window.open(myURL,'newindow','height='+myHeight+',width='+myWidth/2+',\
        top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no');          
}


function closeWindow(){
	Google.close();
}