var pull_status=false;
var pic_page_size=15;
var pic_page_cur=0;
var id="";
var lang="";
var is_last_page=false;
var pro_url="resources/json/view.json";
var pic_url="resources/json/pic.json";

$(function(){

	function getQueryString(name)
	{
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r!=null)return  unescape(r[2]); return null;
	}

	//加载图片
	function getPics(id,url){

		$.get(url,function(data){
			if(data.length<pic_page_size||data.length==0) {
				$("#infi").hide();	//隐藏加载更多html代码
				is_last_page=true;
			}

			pic_page_cur++;
			pull_status=false;	//加载完成
			// 设置模版
			$("#tempImgList").setTemplateElement("template-img");
			// 填充数据并展示
			var str=$("#tempImgList").processTemplate(data).html();
			$(".imgList").append(str);

			//图片放大
			$(".fs_gallery").remove();
			$('.imgList img').fsgallery();

		},"json");
	}



	//获取英文产品数据
	function getproInfo(id,url){
		$.get(url,function(data){
			$("#article").html(data.Article);
			$("#name").html(data.Name);
			$("#content").html(data.Content);
			$("#width").html(data.Width);
			$("#weight").html(data.Weight);

			for(var i=0;i<data.Pics1.length;i++){
				$(".tag").html($(".tag").html()+"<img src='resources/images/"+data.Pics1[i]+".jpg' />");
			}
			for(var i=0;i<data.Pics2.length;i++){
				$(".notice").html($(".notice").html()+"<img src='resources/images/"+data.Pics2[i]+".jpg' />");
			}


			// 设置模版
			$("#result_container").setTemplateElement("template-items");
			$("#result_container").processTemplate(data.List);
		},"json");
	}


	$(document.body).infinite().on("infinite", function() {
		if(pull_status) return;	//正在加载无需继续执行
		if(is_last_page) return;
		pull_status=true;	//执行加载操作
		getPics(id,pic_url+"&page="+pic_page_cur);
	});

	//初始化页面
	function init(){
		id=getQueryString("id");
		lang=getQueryString("lang");
		pro_url=pro_url+"?id="+id+"&lang="+lang;
		pic_url=pic_url+"?id="+id+"&lang="+lang;
		getproInfo(id,pro_url);
		getPics(id,pic_url+"&page=1");

	}
	init();

});


