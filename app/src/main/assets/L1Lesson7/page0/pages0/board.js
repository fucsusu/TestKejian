function pages0() {
	this.init = function () {
		this.bg = new Image();
		this.bg.src = "page0/pages0/img/bg.jpg";

	}
	this.loadSouce = function (data, type) {
	}
	//停止背景音乐
	this.pagedown = function () {
	};
	this.pageup = function () {
	}
	this.rend = function () {
		FrameDraw(this.bg, 0.5, 0.5, 1, 1, 0);
	}
	this.work = function () { }
	this.exec = function (rx, ry) {
		//world.pagedown();
	}
}