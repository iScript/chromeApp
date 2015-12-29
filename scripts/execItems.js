console.log("injection execItems.js");



// ======================================
// 
var url = "http://zkhkj.com:88";


var i=0;;
$(".item-title").each(function(){
    //return;
    var title = $(this).html();
    var href = $(this).attr("href");
    var index = href.indexOf("id=")+3;
    var itemid = href.substr(index);
    var img = $(this).parents(".desc").siblings(".photo").find("img").attr("src");
    console.log(img);
    $.ajax({
        url : url+"/api/postItem",
        type:"post",
        data : {title:title,itemid:itemid,img:img},
        success:function(d){
            i++;
            var a = $("#ffix").length;
            console.log(a);
            if(a >0){
                var s = "成功抓取数据"+i+"条";
                $("#ffix").html(s);
            }else{
                var sv ="<div style='position:fixed;z-index:999;bottom:10px;right:10px;border:1px solid red' id='ffix'>加载中</div>";
                $("body").append(sv);
            }
        }
    });
});
