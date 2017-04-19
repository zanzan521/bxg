

define(['jquery','cookie'],function ($) {
	
	$('#loginForm').on('submit',function(){
	    		var formData = $(this).serialize();
	            console.log(formData);
	    		$.ajax({
	    			url:'/api/login',
	    			type:'post',
	    			data:formData,
	    			success:function(info){
	    				if(info.code==200){

	                        alert("登录成功");
	                        $.cookie("loginfo",JSON.stringify(info.result));
	                        // console.log(cookie);
	                        location.href="/";
	    			}
	            }
	    		});
	    		return false;
	    	});



})


