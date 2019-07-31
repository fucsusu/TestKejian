function pages19_1() {
	this.init = function () {
		this.bg = new Image();
		this.bg.src = "page19_1/pages19_1/img/bg.jpg";
		this.time=0;
		this.tip=0;
	}
	this.loadSouce = function (data, type) {
	}
	this.rend = function () {
		FrameDraw(this.bg, 0.5, 0.5, 1, 1, 0);
		
		if (this.time == 0) {
			FrameTxt("It's", 7, .39, .45, '#008080')
			FrameTxt("a", 7, .46, .45, '#008080')
			FrameTxt("crab.", 7, .5, .45, '#008080')
		}
		if (this.time == 1) {
			FrameTxt("It's", 7, .39, .45, '#ffe600')
			FrameTxt("a", 7, .46, .45, '#008080')
			FrameTxt("crab.", 7, .5, .45, '#008080')
		}
		if (this.time == 2) {
			FrameTxt("It's", 7, .39, .45, '#008080')
			FrameTxt("a", 7, .46, .45, '#ffe600')
			FrameTxt("crab.", 7, .5, .45, '#008080')
		}
		if (this.time == 3) {
			FrameTxt("It's", 7, .39, .45, '#008080')
			FrameTxt("a", 7, .46, .45, '#008080')
			FrameTxt("crab.", 7, .5, .45, '#ffe600')
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
	this.pagedown = function () {
	}
	this.pageup = function () {
	}
}