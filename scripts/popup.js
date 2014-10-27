$("#getKey").click(function(){
    // 发送消息给background,只能和background.js通信？
    chrome.runtime.sendMessage('background', function(response){
        //alert(response);
    });
    console.log("popup.js");
    chrome.tabs.executeScript(null, { file: "scripts/jquery.js" });
    chrome.tabs.executeScript(null, { file: "scripts/execContent.js" });

});

$("#getItem").click(function(){
    // 发送消息给background,只能和background.js通信？
    chrome.runtime.sendMessage('background', function(response){
        //alert(response);
    });
    console.log("popup.js");
    chrome.tabs.executeScript(null, { file: "scripts/jquery.js" });
    chrome.tabs.executeScript(null, { file: "scripts/execItems.js" });


});