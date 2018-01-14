requirejs.config({
	paths:{
		jquery:'jquery-3.2.1.min'
	}
});

requirejs(['jquery','backtop'],function($,backtop){
	// new backtop.BackTop($("#backTop"),{
	// 	'type' : "go",
	// });

	$('#backTop').backtop({
		type : "go"
	})

	// var scroll = new scrollto.Scrollto({
	// 	'speed' : 900
	// }); 
	// checkPosition($(window).height()); 
	// $('#backTop').on('click',$.proxy(scroll.move,scroll));
	// $(window).on('scroll',function(){
	// 	checkPosition($(window).height());
	// })

	
	// // function move(){
	// // 	$('body,html').animate({
	// // 		scrollTop:0
	// // 	},800);
	// // }

	// // function go(){
	// // 	$('body,html').scrollTop(0);
	// // }
	// function checkPosition($pos){
	// 	if($pos > $(window).scrollTop()){
	// 		$('#backTop').fadeOut();
	// 	}else{
	// 		$('#backTop').fadeIn();
		
	// 	}

	// }

})