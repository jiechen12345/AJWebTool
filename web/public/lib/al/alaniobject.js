var ALANIOBJECT = function() {
	var fade_move_itv = 50;
	var fade_scale_hover_itv = 1.05;
	var fade_scale_origin = 1;
	var fade_time_itv = 1;
	var delay_itv = 1;
	var stretch_itv = 100;
	var alpha_itv = 0;

	function fadein_left(obj, delay, time_itv, fade_move_itv, callback) {
		var l = obj[0].offsetLeft;

		TweenMax.to(obj, 0, {alpha:0});
		TweenMax.from(obj, time_itv, {left:l - fade_move_itv, delay:delay});
		if(typeof callback == 'undefined')
			TweenMax.fromTo(obj, time_itv, {alpha:0}, {alpha:1, delay:delay});
		else
			TweenMax.fromTo(obj, time_itv, {alpha:0}, {alpha:1, delay:delay, onComplete:callback});
	}

	function fadein_right(obj, delay, time_itv, fade_move_itv, callback) {
		var l = obj[0].offsetLeft;
		// console.log(l);
		// console.log(fade_move_itv);

		TweenMax.to(obj, 0, {alpha:0});
		TweenMax.from(obj, time_itv, {left:l + fade_move_itv, delay:delay});
		if(typeof callback == 'undefined')
			TweenMax.fromTo(obj, time_itv, {alpha:0}, {alpha:1, delay:delay});
		else
			TweenMax.fromTo(obj, time_itv, {alpha:0}, {alpha:1, delay:delay, onComplete:callback});
	}

	function fadein_top(obj, delay, time_itv, top, fade_move_itv, callback) {
		var l = obj[0].offsetTop;
		var top = typeof top != 'undefined' ? top : l;

		TweenMax.to(obj, 0, {alpha:0});
		TweenMax.fromTo(obj, time_itv, {top:l - fade_move_itv}, {top:top, delay:delay});
		if(typeof callback == 'undefined')
			TweenMax.fromTo(obj, time_itv, {alpha:0}, {alpha:1, delay:delay});
		else
			TweenMax.fromTo(obj, time_itv, {alpha:0}, {alpha:1, delay:delay, onComplete:callback});
	}

	function fadein_topto(obj, delay, time_itv) {
		var l = obj[0].offsetTop;

		TweenMax.to(obj, 0, {alpha:1});
		TweenMax.fromTo(obj, time_itv, {top:l}, {top:l - fade_move_itv, delay:delay, onComplete:function(){TweenMax.to(obj, 0, {top:l});}});
		TweenMax.fromTo(obj, time_itv, {alpha:1}, {alpha:0, delay:delay});
	}

	function fadein_bottom(obj, delay, time_itv, fade_move_itv, callback) {
		var l = obj[0].offsetTop;

		TweenMax.to(obj, 0, {alpha:0});
		TweenMax.from(obj, time_itv, {top:l + fade_move_itv, delay:delay});
		if(typeof callback == 'undefined')
			TweenMax.fromTo(obj, time_itv, {alpha:0}, {alpha:1, delay:delay});
		else
			TweenMax.fromTo(obj, time_itv, {alpha:0}, {alpha:1, delay:delay, onComplete:callback});
	}

	function height_stretch(obj, delay, time_itv, stretch_itv, callback) {
		if(typeof callback == 'undefined')
			TweenMax.to(obj, time_itv, {height:stretch_itv, delay:delay});
		else
			TweenMax.to(obj, time_itv, {height:stretch_itv, delay:delay, onComplete:callback});
	}

	function margin_top(obj, delay, time_itv, margin_top_itv, callback) {
		if(typeof callback == 'undefined')
			TweenMax.to(obj, time_itv, {css:{'margin-top':margin_top_itv + 'px'}, delay:delay});
		else
			TweenMax.to(obj, time_itv, {css:{'margin-top':margin_top_itv + 'px'}, delay:delay, onComplete:callback});
	}

	function always_light(obj, delay, time_itv) {
		TweenMax.to(obj, time_itv, {alpha:1, yoyo:true, repeat:-1, ease:Linear.easeNone, delay:delay});
	}

	function fadein(obj, delay, time_itv) {
		var l = obj[0].offsetTop;

		TweenMax.to(obj, 0, {alpha:0});
		TweenMax.fromTo(obj, time_itv, {alpha:0}, {alpha:1, delay:delay});
	}

	function fadeout(obj, delay, time_itv, prop) {
		var l = obj[0].offsetTop;
		var t_alpha_itv = alpha_itv;

		if(prop && prop.alpha_itv >= 0)
			t_alpha_itv = prop.alpha_itv;

		TweenMax.to(obj, 0, {alpha:1});
		TweenMax.fromTo(obj, time_itv, {alpha:1}, {alpha:t_alpha_itv, delay:delay});
	}

	function fadein_lineleftshoot(obj, delay, time_itv) {
		var l = obj.width();

		TweenMax.to(obj, 0, {alpha:0});
		TweenMax.fromTo(obj, time_itv, {css:{'opacity': 0, 'width':'0px', 'left':l + 'px', 'background-position': -l + "px 0px"}}, {css:{'opacity': 1, 'width':l + 'px', 'left':'0px', 'background-position': "0px 0px"}, delay:delay});
	}

	function fadein_lineleft(obj, delay, time_itv) {
		var l = obj[0].offsetTop;

		TweenMax.to(obj, 0, {alpha:0});
		TweenMax.from(obj, time_itv, {width:1, delay:delay});
		TweenMax.fromTo(obj, time_itv, {alpha:0}, {alpha:1, delay:delay});
	}

	function fadein_lineright(obj, delay, time_itv) {
		var l = obj[0].offsetTop;

		TweenMax.to(obj, 0, {alpha:0});
		TweenMax.from(obj, time_itv, {left:960, delay:delay});
		TweenMax.fromTo(obj, time_itv, {alpha:0}, {alpha:1, delay:delay});
	}

	function hover_ani(obj, delay, time_itv) {
		delay *= 1000;
		time_itv *= 1000;

		setTimeout(function(){
			// obj.fadeTo(time_itv, 0.5).fadeTo(time_itv, 1);
			obj.addClass('hover');
			setTimeout(function(){
				obj.removeClass('hover')
			}, time_itv);
		}, delay);
		// obj.delay(delay).addClass('hover').delay(time_itv).removeClass('hover');
	}

	function hover_scalebig(obj) {
		obj.hover(function(){
			TweenMax.to(obj, fade_time_itv / 2, {scale: fade_scale_hover_itv});
		}, function(){
			TweenMax.to(obj, fade_time_itv / 2, {scale: fade_scale_origin});
		});
	}

	function hover_fadein(obj) {
		TweenMax.to(obj, 0, {alpha:0});
		obj.hover(function(){
			TweenMax.to(obj, fade_time_itv / 2, {alpha: 1});
		}, function(){
			TweenMax.to(obj, fade_time_itv / 2, {alpha: 0});
		});
	}

	function hover_fadeout(obj, ani_obj) {
		TweenMax.to(ani_obj, 0, {alpha:0});
		obj.hover(function(){
			TweenMax.to(ani_obj, fade_time_itv / 2, {alpha: 1});
		}, function(){
			TweenMax.to(ani_obj, fade_time_itv / 2, {alpha: 0});
		});
	}

	this.start = function(obj_class, delay, time_itv, fade_move, prop) {
		prop = prop ? prop : {};
		var t_l = typeof prop.ani_max == 'undefined' ? $('.' + obj_class).length : prop.ani_max;
		delay = typeof delay == 'undefined' ? delay_itv : delay;
		time_itv = typeof time_itv == 'undefined' ? fade_time_itv : time_itv;
		fade_move = typeof fade_move == 'undefined' ? fade_move_itv : fade_move;
		
		for(var i = 1; i <= t_l; i++)
		{
			var t_ani_class = obj_class + '_' + i;
			var t_o_class = '.' + t_ani_class;
			var t_o = $(t_o_class);
			var t_c_ary = t_o.attr('class').split(' ');
			var t_c = t_c_ary[t_c_ary.indexOf(t_ani_class) + 1];
			// console.log(t_ani_class);
			var t_d = typeof delay == 'undefined' ? i - delay_itv : (i - delay_itv) * delay;
			var t_callback = i == t_l ? prop.callback : undefined;
			// console.log(obj_class);

			if(t_c.match(/fadein_left/) != null)
				fadein_left(t_o, t_d, time_itv, fade_move, t_callback);
			else if(t_c.match(/fadein_top/) != null)
				fadein_top(t_o, t_d, time_itv, undefined, fade_move, t_callback);
			else if(t_c.match(/fadein_bottom/) != null)
				fadein_bottom(t_o, t_d, time_itv, fade_move, t_callback);
			else if(t_c.match(/fadein_right/) != null)
				fadein_right(t_o, t_d, time_itv, fade_move, t_callback);
			else if(t_c.match(/fadein[^_]|fadein$/) != null)
				fadein(t_o, t_d, time_itv);
			else if(t_c.match(/always_light/) != null)
				always_light(t_o, t_d, time_itv);
			else if(t_c.match(/fadein_lineleft |fadein_lineleft$/) != null)
				fadein_lineleft(t_o, t_d, time_itv);
			else if(t_c.match(/fadein_lineleftshoot/) != null)
				fadein_lineleftshoot(t_o, t_d, time_itv);
			else if(t_c.match(/fadein_lineright/) != null)
				fadein_lineright(t_o, t_d, time_itv);
			else if(t_c.match(/hover_ani[^_]|hover_ani$/) != null)
				hover_ani(t_o, t_d, time_itv);
		}
	};

	this.hover = function(obj_class) {
		$('.' + obj_class).each(function(idx, ele){
			var t_c = $(this).attr('class');

			if(t_c.match(/hover_scalebig/) != null)
				hover_scalebig($(this));
			else if(t_c.match(/hover_fadein/) != null)
				hover_fadein($(this));
		});
	};

	this.hover_ex = function(prop) {
		prop = prop ? prop : {};
		var obj_class = prop.obj_class;
		var obj_class_ani = prop.obj_class_ani;
		var top = prop.top;
		var t_l = $('.' + obj_class_ani).length;
		var delay = typeof prop.delay == 'undefined' ? delay_itv : prop.delay;
		var time_itv = typeof prop.time_itv == 'undefined' ? fade_time_itv : prop.time_itv;

		obj_class.hover(function(){
			for(var i = 1; i <= t_l; i++)
			{
				var t_ani_class = prop.obj_class_ani + '_' + i;
				var t_o_class = '.' + t_ani_class;
				var t_o = $(t_o_class);
				var t_c_ary = t_o.attr('class').split(' ');
				var t_c = t_c_ary[t_c_ary.indexOf(t_ani_class) + 1];

				// var t_o = $('.' + obj_class_ani + '_' + i);
				// var t_c = t_o.attr('class');
				var t_d = typeof delay == 'undefined' ? i - delay_itv : (i - delay_itv) * delay;
				// console.log(obj_class);
						// console.log(t_c);

				if(t_c.match(/fadein_left/) != null)
					fadein_left(t_o, t_d, time_itv);
				else if(t_c.match(/fadein_top/) != null)
					{
						// console.log(t_o);
						fadein_top(t_o, t_d, time_itv, top);
					}
				else if(t_c.match(/fadein_bottom/) != null)
					fadein_bottom(t_o, t_d, time_itv);
				else if(t_c.match(/fadein_right/) != null)
					fadein_right(t_o, t_d, time_itv);
				else if(t_c.match(/fadein[^_]|fadein$/) != null)
					fadein(t_o, t_d, time_itv);
				else if(t_c.match(/fadeout[^_]|fadeout$/) != null)
					fadeout(t_o, t_d, time_itv, prop);
				else if(t_c.match(/fadein_lineleft/) != null)
					fadein_lineleft(t_o, t_d, time_itv);
				else if(t_c.match(/fadein_lineright/) != null)
					fadein_lineright(t_o, t_d, time_itv);
				else if(t_c.match(/height_stretch/) != null)
					height_stretch(t_o, t_d, time_itv, prop.stretchin_itv, prop.callback);
				else if(t_c.match(/margin_top/) != null)
					margin_top(t_o, t_d, time_itv, prop.margin_topin_itv, prop.callback);
			}
		}, function(){
			for(var i = 1; i <= t_l; i++)
			{
				var t_ani_class = prop.obj_class_ani + '_' + i;
				var t_o_class = '.' + t_ani_class;
				var t_o = $(t_o_class);
				var t_c_ary = t_o.attr('class').split(' ');
				var t_c = t_c_ary[t_c_ary.indexOf(t_ani_class) + 1];

				// var t_o = $('.' + obj_class_ani + '_' + i);
				// var t_c = t_o.attr('class');
				var t_d = typeof delay == 'undefined' ? i - delay_itv : (i - delay_itv) * delay;
				// console.log(obj_class);

				if(t_c.match(/fadein_left/) != null)
					fadein_right(t_o, t_d, time_itv);
				else if(t_c.match(/fadein_top/) != null)
					fadein_topto(t_o, t_d, time_itv);
				else if(t_c.match(/fadein_bottom/) != null)
					fadein_top(t_o, t_d, time_itv);
				else if(t_c.match(/fadein_right/) != null)
					fadein_left(t_o, t_d, time_itv);
				else if(t_c.match(/fadein[^_]|fadein$/) != null)
				{
					// console.log(t_c);
					fadeout(t_o, t_d, time_itv, {alpha_itv:prop.alphaoutin_itv});
				}
				else if(t_c.match(/fadeout[^_]|fadeout$/) != null)
				{
					// console.log(t_c);
					fadein(t_o, t_d, time_itv);
				}
				else if(t_c.match(/fadein_lineleft/) != null)
					fadein_lineright(t_o, t_d, time_itv);
				else if(t_c.match(/fadein_lineright/) != null)
					fadein_lineleft(t_o, t_d, time_itv);
				else if(t_c.match(/height_stretch/) != null)
					height_stretch(t_o, t_d, time_itv, prop.stretchout_itv, prop.callback);
				else if(t_c.match(/margin_top/) != null)
					margin_top(t_o, t_d, time_itv, prop.margin_topout_itv, prop.callback);
			}
		});
	};

	this.scroll_arrive = function(wst, obj_class, delay, time_itv, fade_move, prop) {
		var obj = $('.' + obj_class);
		var check_top = wst + ($(window).height() * 0.9);
		var alpha = obj.css('opacity');
		var top = obj.offset().top;
		var check_ani = check_top > top ? true : false;

		if(alpha == 0 && check_ani)
		{
			this.start(obj_class, delay, time_itv, fade_move, prop);
		}
	};
};