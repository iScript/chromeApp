$("#getKey").click(function(){
    // 发送消息给background
    chrome.runtime.sendMessage('background', function(response){
        //alert(response);
    });
    console.log("popup.js");
    chrome.tabs.executeScript(null, { file: "scripts/jquery.js" });
    chrome.tabs.executeScript(null, { file: "scripts/common.js" });
    chrome.tabs.executeScript(null, { file: "scripts/execContent.js" });

});

$("#getItem").click(function(){
    // 发送消息给background
    chrome.runtime.sendMessage('background', function(response){
        //alert(response);
    });
    console.log("popup.js");
    chrome.tabs.executeScript(null, { file: "scripts/jquery.js" });
    chrome.tabs.executeScript(null, { file: "scripts/common.js" });
    chrome.tabs.executeScript(null, { file: "scripts/execItems.js" });

});

//是否登陆！
if(localStorage.TbUser){
    $("#cc").show();
    $("#user").html("你好，"+localStorage.TbUser);
}else{
    $("#login").show();
}


$("#logout").click(function(){
    //alert(2);
    localStorage.removeItem("TbUser");
    window.location.reload();
});

$("#send").click(function(){
    $("#login .info").html("");
    //console.log(password);
    var email = $(".email").val();
    var password = $(".password").val();
   
    var data = $.ajax({url:"http://zkhkj.com:88/apiLogin",type:"post",data:{email:email,password:password,json:1},async:false});
    data = data.responseText;
    if(data == "111"){
        localStorage.TbUser = email;
        window.location.reload();
        return;
    }
    $("#login .info").html(data)
});