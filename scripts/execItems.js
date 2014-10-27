console.log("injection execItems.js");



// ======================================
// 
var url = "http://zkhkj.com:88";

//获取cookie
function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}

// 日期函数
function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth()+1;//获取当前月份的日期
    var d = dd.getDate();
    return y+"-"+m+"-"+d;
}

$(".item-title").each(function(){
    var title = $(this).html();
    var href = $(this).attr("href");
    var index = href.indexOf("id=")+3;
    var itemid = href.substr(index);
    $.ajax({
        url : url+"/api/postItem",
        type:"post",
        data : {title:title,itemid:itemid},
        success:function(d){
            console.log(d);
        }
    });
});
