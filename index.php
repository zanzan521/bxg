<?php

	// phpinfo(); exit();
	$pathinfo = $_SERVER['PATH_INFO'];
	// echo $pathinfo;
	// include './views/' . $pathinfo .'html';


    $pathinfo = substr($pathinfo, 1);

    // echo '<br>';

    // echo $pathinfo;

    $route = explode('/', $pathinfo);

    // print_r($route);

    // PHP 使用empty()函数可以判断某个变量是否为空
    // 为空则为true，否则false

    // var_dump(empty($pathinfo));
    if(empty($pathinfo)) {
        $path = 'index/index';
    } else if(count($route) == 1) { // 判断数组长度为1
        $path = 'index/' . $route[0];
    } else { // 判断数组长度为2
        $path = $route[0] . '/' . $route[1];
    }

    // echo $path;

    include './views/' . $path . '.html';