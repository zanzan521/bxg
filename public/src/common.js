
define(['jquery','template','nprogress','cookie'],function($,template,NProgress){

	NProgress.start();
	NProgress.done();
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

	// console.log(loginfo);//判断成功
							// 	Object{
							// tc_avatar
							// "http://static.botue.com/images/avatar/58f617aa2f20f.jpg"
							// tc_name
							// "前端学院"
							// __proto__
						   // 			}
		// $('.profile img').attr('src','loginfo.tc_avatar')				   ;
		// $('.profile h4').text('loginfo.tc_name');

		var source = '<div class="avatar img-circle">\
						<img src="<%= tc_avatar %>">\
					</div>\
					<h4><%= tc_name %></h4>',
		
		 render = template.compile(source),
		html = render(loginfo);
		$('.aside .profile').append(html);

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

});
//导航栏交互
$('.navs ul').prev('a').on('click',function(){
	$(this).next('ul').slideToggle();
});

});




