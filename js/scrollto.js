define(['jquery'],function($){

	function Scrollto($opts){
		this.opts = $.extend({},Scrollto.DEFAULTS,$opts);
		this.$el = $('body,html');
	}


	Scrollto.DEFAULTS = {
		dest : 0,
		speed:800
	};

	Scrollto.prototype.go= function() {
		// body...
		this.$el.scrollTop(this.opts.dest);
	};

	Scrollto.prototype.move= function() {
		var opt = this.opts;


		// if(this.$el.scrollTop() != opt.dest ){
		// 	console.log(1);
		
		if(!this.$el.is(":animated")){
			console.log(2);   
			this.$el.animate({
				scrollTop:opt.dest
			},opt.speed);
		}

	}

	return {
		Scrollto : Scrollto
	}
});