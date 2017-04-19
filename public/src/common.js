
define(['jquery','cookie'],function($){
		// if(document.cookie.indexOf('PHPSESSID')！=-1){
	// 	//登录过
	// }else {
	// 	//除了login页面自身外都需要检测
	// 	//如何得知当前页面是不是login
	// 	location.href='/login';
	// }
	// for(var key in location){
	// 	console.log(key + '->' + location[key])
	// }
	// console.log(document.cookie);

	if(document.cookie.indexOf('PHPSESSID') == -1 && location.pathname != '/login'){
		location.href='/login';
	}

	var loginfo =$.cookie('loginfo') && JSON.parse($.cookie('loginfo'));

	// console.log(document.cookie);


//退出
$("#loginout").on("click",function(){
	// alert(1);
	$.ajax({
		url:'/api/logout',
		type:'post',
		success:function(info){
			if(info.code==200){
					alert("退出成功");
					location.href="/login";
			}
		}

	})

})

});




