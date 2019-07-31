function pages15_1() {
	//初始化模板所需要的状态值
	this.init = function () {
		this.bg = new Image();
		this.bg.src = "page15_1/pages15_1/img/bg.jpg";
		this.time=0;
		this.tip=0;
	}
	this.loadSouce = function (data, type) {
	}
	this.rend = function () {
		FrameDraw(this.bg, 0.5, 0.5, 1, 1, 0);
		
		if (this.time == 0) {
			FrameTxt("It's", 7, .4, .45, '#008080')
			FrameTxt("a", 7, .47, .45, '#008080')
			FrameTxt("turtle.", 7, .515, .45, '#008080')
		}
		if (this.time == 1) {
			FrameTxt("It's", 7, .4, .45, '#ffe600')
			FrameTxt("a", 7, .47, .45, '#008080')
			FrameTxt("turtle.", 7, .515, .45, '#008080')
		}
		if (this.time == 2) {
			FrameTxt("It's", 7, .4, .45, '#008080')
			FrameTxt("a", 7, .47, .45, '#ffe600')
			FrameTxt("turtle.", 7, .515, .45, '#008080')
		}
		if (this.time == 3) {
			FrameTxt("It's", 7, .4, .45, '#008080')
			FrameTxt("a", 7, .47, .45, '#008080')
			FrameTxt("turtle.", 7, .515, .45, '#ffe600')
		}

	};
	this.work = function () {
		if(this.tip==0){
			this.tip=1
			var _self=this
			setTimeout(function(){
				_self.time=1
			},1000)
			setTimeout(function(){
				_self.time=2
			},2000)
			setTimeout(function(){
				_self.time=3
			},3000)
			setTimeout(function(){
				_self.time=0
			},4000)
		}
	};
	this.exec = function (rx, ry) {
		
	}
	this.pagedown = function () {
	}
	this.pageup = function () {
	}

}