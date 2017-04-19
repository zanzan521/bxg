
requirejs.config({
	baseUrl:'./public',
	paths:{
		jquery: 'assets/jquery/jquery.min',
        cookie: 'assets/jquery-cookie/jquery.cookie'
	},
	

});

require(['src/common']);