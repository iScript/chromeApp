chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message == 'background'){
        sendResponse('Hello from background.');
    }
});

/*
function translate(info, tab){
    alert(info.selectionText);
    alert(tab);
}
chrome.contextMenus.create({
    type: 'normal',
    title: '翻译 -- ykq',
    id: 'a',
    contexts: ['selection'],
    onclick: translate
});
*/