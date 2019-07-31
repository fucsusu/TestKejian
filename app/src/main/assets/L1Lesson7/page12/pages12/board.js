function pages12() {
	this.init = function () {

	}
	this.loadSouce = function (data, type) {
		this.bg = new Image();
		this.bg.src = "static/candy/bg.png";
		this.AK = new Image();
		this.AK.src = "static/candy/AK.png";
		this.BK = new Image();
		this.BK.src = "static/candy/BK.png";
		this.pen = new Image();
		this.pen.src = "static/candy/pen.png";
		this.pen1 = new Image();
		this.pen1.src = "static/candy/pen1.png";
		this.gameTime = new Image();
		this.gameTime.src = "static/candy/gameTime.png";
		this.leftS = new Image();
		this.leftS.src = "static/candy/leftS.png";
		this.rightS = new Image();
		this.rightS.src = "static/candy/rightS.png";
		this.line = new Image();
		this.line.src = "static/candy/line.png";
		this.dui = new Image();
		this.dui.src = "static/candy/dui.png";
		this.cuo = new Image();
		this.cuo.src = "static/candy/cuo.png";
		this.Tip = new Image();
		this.Tip.src = "static/candy/Tip.png";
		if(dataObj3.answer == 'A'){
			this.answer = 0
		}else{
			this.answer = 1
		}
		
		this.answerTip = -1;
		this.TipTime = 1;
		this.num = 0
		this.nums = 0
		serc = [];
		for (var x = 0; x < 46; x++) {
			serc[x] = 'static/candy/error/' + (x + 1) + '.png';
		}
		this.errors = new PaperSets(serc);
		this.errorAudio = new Audio(); //答对的音效
		this.errorAudio.src = "static/audio/error.mp3";
		this.trueAudio = new Audio(); //答对的音效
		this.trueAudio.src = "static/audio/Great.mp3";
		this.t=""
		this.img = {};
		for(var i=0 ; i < dataObj3.option.length; i++){
			this.img[i] = new Image();
			this.img[i].src =dataObj3.option[i];
		}
	}
	this.rendimg=function(){
		for(var i=0 in this.img){
			if(i == 0){
				FrameDraw(this.img[i], 0.31, 0.25, .2, .37, 0);
			}else{
				FrameDraw(this.img[i], 0.69, 0.25, .2, .38, 0);
			}
		}

	}
	this.rend = function () {
		FrameDraw(this.bg, 0.5, 0.5, 1, 1, 0);
		FrameDraw(this.gameTime, 0.5, 0.06, .15, .09, 0);
		
		if (this.answerTip == -1) {
			FrameDraw(this.pen1, 0.506, 0.767, .23, .04, 0);
			FrameDraw(this.pen, 0.506, 0.86, .23, .232, 0);
			FrameDraw(this.line, 0.31, 0.44, .1, .13, 0);
			FrameDraw(this.line, 0.69, 0.44, .1, .13, 0);
			FrameDraw(this.leftS, 0.31, 0.54, .05, .13, 0);
			FrameDraw(this.rightS, 0.69, 0.54, .05, .13, 0);
		}
		if (this.answerTip == 0) {
			FrameDraw(this.line, 0.31, 0.44, .1, .13, 0);
			FrameDraw(this.line, 0.69, 0.44, .1, .13, 0);
			FrameDraw(this.leftS, 0.31, 0.54, .05, .13, 0);
			FrameDraw(this.rightS, 0.69, 0.54, .05, .13, 0);
		}
		if (this.answerTip == 1) {
			if (this.answer == 0) {
				FrameDraw(this.line, 0.69, 0.44, .1, .13, 0);
				FrameDraw(this.rightS, 0.69, 0.54, .05, .13, 0);
			} else {
				FrameDraw(this.line, 0.31, 0.44, .1, .13, 0);
				FrameDraw(this.leftS, 0.31, 0.54, .05, .13, 0);
			}
		}

		FrameDraw(this.AK, 0.31, 0.245, .22, .385, 0);
		FrameDraw(this.BK, 0.69, 0.245, .22, .385, 0);
		this.rendimg()

		if (this.answerTip == 0) {
			if(dataObj3.answer == 'A'){
				FrameDraw(this.cuo,  0.69, 0.255, .15, .2, 0);
			}else{
				FrameDraw(this.cuo, 0.31, 0.255, .15, .2, 0);
			}
			
			this.errors.show(0.5, 0.641, 0.8, 400 / 1600, 400 / 900, 0);
			FrameDraw(this.pen1, 0.506, 0.767, .23, .04, 0);
			FrameDraw(this.pen, 0.506, 0.86, .23, .232, 0);
			
		}

		if (this.answerTip == 1) {
			var speed = 0;
			if (this.num >= 100) {
				this.num = 100
			} else {
				this.num += 2
			}
			if (this.num % 200 > 100) {
				speed = 1
			} else {
				speed = this.num % 200 / 100;
			}

			var speeds = 0;
			if (this.nums >= 120) {
				this.nums = 120
			} else {
				this.nums += 1.8
			}
			if (this.nums % 200 >= 200) {
				speeds = 1.2
			} else {
				speeds = this.nums % 200 / 100;
			}

			if (this.answer == 0) {
				FrameDraw(this.pen1, 0.506 + (-0.19 * speed), 0.767, .23, .04, 0);
				FrameDraw(this.leftS, 0.31, 0.54 + 0.3 * speeds, .05, .13, 0);
				FrameDraw(this.pen, 0.506 + (-0.19 * speed), 0.86, .23, .232, 0);

			} else {
				FrameDraw(this.pen1, 0.506 + .18 * speed, 0.767, .23, .04, 0);
				FrameDraw(this.rightS, 0.69, 0.54 + 0.3 * speeds, .05, .13, 0);
				FrameDraw(this.pen, 0.506 + .18 * speed, 0.86, .23, .232, 0);
			}
			if(dataObj3.answer == 'A'){
				FrameDraw(this.dui,  0.31, 0.255, .13,  .17, 0);
			}else{
				FrameDraw(this.dui, 0.69, 0.255, .13, .17, 0);
			}
			
		}
		if (this.TipTime) {
			FrameDraw(this.Tip, 0.51, 0.94, .33, .06, 0);
		}
		var that = this;
		setTimeout(function (){
			that.TipTime = 0
		}, 4000)
	}
	this.work = function () {}
	this.exec = function (rx, ry) {
		var that = this;
		if (this.answerTip == -1&&world.clickTip == 1) {
			clearTimeout(this.t)
			this.t=setTimeout(function (){
				that.answerTip = 0;
				that.errorAudio.play()
				world.clickTip=0
			},10000)
			if (rx > 0.2 && rx < 0.42 && ry < 0.437 && ry > 0.0524) {
				clearTimeout(this.t)
				if(dataObj3.answer == 'A'){
					this.answerTip = 1
					this.trueAudio.play()
					world.clickTip=0
				}else{
					
					this.answerTip = 0
					this.errorAudio.play()
					world.clickTip=0
				}
			}
			if (rx > 0.57 && rx < 0.8 && ry < 0.437 && ry > 0.0524) {
				clearTimeout(this.t)
				if(dataObj3.answer == 'A'){
					this.answerTip = 0
					this.errorAudio.play()
					world.clickTip=0
				}else{
					this.answerTip = 1
					this.trueAudio.play()
					world.clickTip=0
				}
				
			}
		}
	}
	this.pagedown = function () {
		this.errorAudio = "";
		this.trueAudio = "";
	};
	this.pageup = function () {
		this.errorAudio = "";
		this.trueAudio = "";
	}
}