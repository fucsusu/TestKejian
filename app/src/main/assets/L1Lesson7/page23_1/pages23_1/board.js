function pages23_1() {
	this.init = function () {
		this.bg = new Image();
		this.bg.src = "page23_1/pages23_1/img/bg.jpg";
		this.time = 0;
		this.tip = 0;
	}
	this.loadSouce = function (data, type) {}
	this.rend = function () {
		FrameDraw(this.bg, 0.5, 0.5, 1, 1, 0);
		if (this.time == 0) {
			FrameTxt("They", 7, .282, .45, '#008080')
			FrameTxt("are in", 7, .385, .45, '#008080')
			FrameTxt("my", 7, .495, .45, '#008080')
			FrameTxt("bathtub.", 7, .563, .45, '#008080')
		}
		if (this.time == 1) {
			FrameTxt("They", 7, .282, .45, '#ffe600')
			FrameTxt("are in", 7, .385, .45, '#008080')
			FrameTxt("my", 7, .495, .45, '#008080')
			FrameTxt("bathtub.", 7, .563, .45, '#008080')
		}
		if (this.time == 2) {
			FrameTxt("They", 7, .282, .45, '#008080')
			FrameTxt("are in", 7, .385, .45, '#ffe600')
			FrameTxt("my", 7, .495, .45, '#008080')
			FrameTxt("bathtub.", 7, .563, .45, '#008080')
		}
		if (this.time == 3) {
			FrameTxt("They", 7, .282, .45, '#008080')
			FrameTxt("are in", 7, .385, .45, '#008080')
			FrameTxt("my", 7, .495, .45, '#ffe600')
			FrameTxt("bathtub.", 7, .563, .45, '#008080')
		}
		if (this.time == 4) {
			FrameTxt("They", 7, .282, .45, '#008080')
			FrameTxt("are in", 7, .385, .45, '#008080')
			FrameTxt("my", 7, .495, .45, '#008080')
			FrameTxt("bathtub.", 7, .563, .45, '#ffe600')
		}

	};
	this.work = function () {
		if (this.tip == 0) {
			this.tip = 1
			this.time = 1
			var _self=this
			setTimeout(function(){
				_self.time = 2
			}, 1000)
			setTimeout(function(){
				_self.time = 3
			}, 2000)
			setTimeout(function(){
				_self.time = 4
			}, 3000)
			setTimeout(function(){
				_self.time = 0
			}, 4000)
		} 
	};
	this.exec = function (rx, ry) {
		
	}
	this.pagedown = function () {}
	this.pageup = function () {}
}