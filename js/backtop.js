define(['jquery','scrollto'],function($,scrollto){
	function BackTop(el,opt){
		this.opt = $.extend({},BackTop.DEFAULTS,opt);
		this.$el = $(el);
		// console.log(this.$el)
		this.scroll = new scrollto.Scrollto({
			dest:0,
			speed:this.opt.speed
		});

		this._checkPosition();
		
		$(window).on('scroll',$.proxy(this._checkPosition,this));


		if(this.opt.type == "go"){

			this.$el.on('click',$.proxy(this._go,this));
		}else{
			this.$el.on('click',$.proxy(this._move,this));
		}


	};

	BackTop.DEFAULTS = {
		speed : 800,
		type : 'move',
		pos : $(window).height()
	};



	BackTop.prototype._go = function(){
		console.log(this)
		this.scroll.go();
	};

	BackTop.prototype._move = function(){

		console.log(this)
		this.scroll.move();
	};


	BackTop.prototype._checkPosition = function() {
		// body...
		var $el = this.$el;
		if($(window).scrollTop() > this.opt.pos ){
			$el.fadeIn();	
		}else{
			$el.fadeOut();
		}
	};

	$.fn.extend({
		backtop:function(opts){
			return this.each(function(){
				 new BackTop(this,opts)
			})
		
		}
	})


	return {
		BackTop:BackTop
	};

})