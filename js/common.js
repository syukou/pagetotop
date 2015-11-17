/**
 * Created by taguchimunetaka on 2015/11/17.
 */

var SYUKOU = SYUKOU || {};

SYUKOU.COMMON = {};

SYUKOU.COMMON.PAGETOTOP = {

	SCROLL_NUM : 600,
	ANIMATE_SEC : 1000,

	init : function(){
		this.setParameters();
		this.bindEvent();
	},
	setParameters : function(){
		this.$window = $(window);
		this.htmlbody = $('html,body');
		this.$trigger = $('.jsc-btn-pagetop');
	},
	bindEvent : function(){
		this.$window.on('scroll', $.proxy(this.scrollFade, this));
		this.$trigger.on('click', $.proxy(this.toTop, this));
	},
	scrollFade : function(){
		if(this.$window.scrollTop() > this.SCROLL_NUM){
			this.$trigger.css('position','fixed');
			this.$trigger.fadeIn();
		}else{
			this.$trigger.fadeOut();
		}
	},
	toTop : function(e){
		e.preventDefault();
		this.htmlbody.animate({ scrollTop: 0 }, this.ANIMATE_SEC, 'swing');
	}
};


$(function(){
	SYUKOU.COMMON.PAGETOTOP.init();
});