function LOADING(obj, div_obj, func_ary) {
	this._obj = obj;
	this._div_obj = div_obj;
	this._max = this._obj.length;
	this._process = 0;
	this._num = 0;
	this._func_ary = func_ary;
	this.autoClose = true;

	this.load_obj();
}

LOADING.prototype.process = function() {
	this._num++;
	this._process = Math.round(this._num / this._max * 100);

	if(this._func_ary && typeof this._func_ary == 'object')
	{
		for(var i in this._func_ary)
		{
			this._func_ary[i](this._process);
		}
	}
}

LOADING.prototype.get_process = function() {
	return this._process;
}

LOADING.prototype.final = function(delay) {
	this._num = this._max - 1;
	this.process();
	this.hide(delay);
}

LOADING.prototype.hide = function(delay) {
	var $this = this;
	var tDelay = delay || 1000;
	// console.log(tDelay);
	this._div_obj.fadeTo(tDelay, 0, function(){
		$this._div_obj.hide();
	});
}

LOADING.prototype.show = function() {
	var $this = this;
	this._div_obj.fadeTo(0, 1, function(){
		$this._div_obj.show();
	});
}

LOADING.prototype.fade_show = function(delay) {
	var $this = this;
	var tDelay = delay || 1000;
	this._div_obj.fadeTo(tDelay, 1, function(){
		$this._div_obj.show();
	});
}

LOADING.prototype.load_obj = function() {
	$this = this;

	this._obj.on('load', function(){
		$this.process();
	});
}

var loading = new LOADING($('img'), $('.loading_div'), [function(process){
	$('#loading_line').css('width', process + '%');
}, function(process){
	$('#loading_process_str').text(process);
}]);

$(window).load(function(){
	if(loading.autoClose)
	{
		loading.final();
	}
});