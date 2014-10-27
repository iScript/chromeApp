console.log("injection execContent.js");



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
var $limit = 1000;
var $_s = getCookie("lzsession");
console.log("lzsession: "+$_s);
var $_c = "OR.C%5B25%5D";

//var url = "http://api.linezing.com/=/view/standard/search/itemkey?date=2014-10-19&limit=1000&order=avg_search_rank&sort=desc&offset=10&item=40958290881&_s=k9finkhs5qr3anqdc5oqpnao5r03k02ug63assgpt98eeijh4sifm539n0t2nb87&_c=OR.C%5B25%5D";
//htmlobj=$.ajax({url:url,async:false});

// 获取商品id 遍历
function keywords(){
    $.get(url+"/api/items",function(data){
        console.log(data);
        for(var i=0;i<data.length;i++){
            (function(i){
                var $itemid = data[i];
                var $date = GetDateStr(-1);
                var $url = "http://api.linezing.com/=/view/standard/search/itemkey?date="+$date+"&limit="+$limit+"&order=avg_search_rank&sort=desc&offset=10&item="+$itemid+"&_s="+$_s+"&_c="+$_c;
                           console.log($url);
                var str =$.ajax({url:$url,async:false});
                str = str.responseText;
                console.log("str:" + str);
                
                //发送服务器。
                $.ajax({
                    url : url+"/api/postKeyw",
                    type:"post",
                    data : {d:str,itemid:$itemid,date:$date},
                    success:function(d){
                        console.log(d);
                    }
                });
            })(i);
        }
    });
}
keywords();
setInterval(function(){
    keywords();
},60*60*1000);

