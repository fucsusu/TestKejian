function pages15() {
	//初始化模板所需要的状态值
	this.init = function () {
		this.bg = new Image();
		this.bg.src = "page15/pages15/img/bg.jpg";
	}
	this.loadSouce = function (data, type) {
		serc = [];
		for (var x = 0; x < 18; x++) {
			serc[x] = 'page15/pages15/img/work/' + (x + 1) + '.png';
		}
		this.WorkImage = new PaperSets(serc);
	}
	this.rend = function () {
		FrameDraw(this.bg, 0.5, 0.5, 1, 1, 0);
		this.WorkImage.show(.5, .49, .49, .37, .32, 0)
	};
	this.work = function () {

	};
	this.exec = function (rx, ry) {
		//world.pagedown();
	}
	this.pagedown = function () {
	}
	this.pageup = function () {
	}

}