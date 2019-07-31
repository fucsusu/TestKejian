function pages3_1() {
	//初始化模板所需要的状态值
	this.init = function () {
		this.bg = new Image();
		this.bg.src = "page3_1/pages3_1/img/bg.jpg";
		this.time=0;
		this.tip=0;
	}
	this.loadSouce  = function (data,type) {
	}
	this.rend = function () {
		FrameDraw(this.bg, 0.5, 0.5, 1, 1, 0);
		if (this.time == 0) {
			FrameTxt("It's", 7,.35, .45, '#008080')
			FrameTxt("a", 7, .42,.45, '#008080')
			FrameTxt("submarine.", 7, .465, .45, '#008080')
		}
		if (this.time == 1) {
			FrameTxt("It's", 7, .35, .45, '#ffe600')
			FrameTxt("a", 7, .42, .45, '#008080')
			FrameTxt("submarine.", 7, .465, .45, '#008080')
		}
		if (this.time == 2) {
			FrameTxt("It's", 7,.35, .45, '#008080')
			FrameTxt("a", 7, .42, .45, '#ffe600')
			FrameTxt("submarine.", 7, .465, .45, '#008080')
		}
		if (this.time == 3) {
			FrameTxt("It's", 7, .35, .45, '#008080')
			FrameTxt("a", 7, .42, .45, '#008080')
			FrameTxt("submarine.", 7, .465, .45, '#ffe600')
		}
	};
	this.work = function () {
		if(this.tip==0){
			this.tip=1
			var _self=this
			setTimeout(function(){
				_self.time=1
			},0)
			setTimeout(function(){
				_self.time=2
			},1000)
			setTimeout(function(){
				_self.time=3
			},2000)
			setTimeout(function(){
				_self.time=0
			},3000)
		}
	};
	this.exec = function (rx, ry) {
		
	}
	this.pagedown = function () {}
	this.pageup = function () {}
}