$(document).ready(function(){
	$("#weixin").mouseover(function(){
		$(this).css("cursor","pointer");
			$("#weixins").css("display","block");
	})
	$("#weixin").mouseout(function(){
			$("#weixins").css("display","none");
	})
})