function pages20() {
	this.init = function () {

	}
	this.loadSouce = function (data, type) {
		this.random=Math.floor(Math.random()*4)
		this.bg = new Image();
		this.bg.src = 'static/doll/bg.jpg';
		this.bg1 = new Image();
		this.bg1.src = 'static/doll/bg.png';
		this.w1 = new Image();
		this.w1.src = 'static/doll/w1.png';
		this.w2 = new Image();
		this.w2.src = 'static/doll/w2.png';
		this.w3 = new Image();
		this.w3.src = 'static/doll/w3.png';
		this.w4 = new Image();
		this.w4.src = 'static/doll/w4.png';
		this.dui = new Image();
		this.dui.src = "static/doll/dui.png";
		this.cuo = new Image();
		this.cuo.src = "static/doll/cuo.png";

		this.jiazi = new Image();
		this.jiazi.src = 'static/doll/jiazi.png';

		serc = [];
		for (var x = 0; x < 60; x++) {
			serc[x] = 'static/doll/error/' + (x + 1) + '.png';
		}
		this.errors = new PaperSets(serc);

		serc = [];
		for (var x = 0; x < 54; x++) {
			serc[x] = 'static/doll/success/1/' + (x + 1) + '.png';
		}
		this.one = new PaperSets(serc);

		serc = [];
		for (var x = 0; x < 34; x++) {
			serc[x] = 'static/doll/success/2/' + (x + 1) + '.png';
		}

		this.two = new PaperSets(serc);

		serc = [];
		for (var x = 0; x < 34; x++) {
			serc[x] = 'static/doll/success/3/' + (x + 1) + '.png';
		}
		this.three = new PaperSets(serc);

		serc = [];
		for (var x = 0; x < 54; x++) {
			// if (x >= 53) {
			// 	serc[x] = 'static/doll/success/4/54.png';
			// } else {
				serc[x] = 'static/doll/success/4/' + (x + 1) + '.png';
			// }
		}
		this.four = new PaperSets(serc);
		this.errorAudio = new Audio(); //答对的音效
		this.errorAudio.src = "static/audio/error.mp3";
		this.trueAudio = new Audio(); //答对的音效
		this.trueAudio.src = "static/audio/Great.mp3";
		this.answerTip = -1
		this.showA = 0
		this.t=""

		this.img = {};
		for(var i=0 ; i < dataObj5.option.length; i++){
			this.img[i] = new Image();
			this.img[i].src =dataObj5.option[i];
		}
		
	}
	this.rendimg=function(){
		for(var i=0 in this.img){
			if(i == 0){
				FrameDraw(this.img[i],0.3, 0.5, .22, .37, 0);
			}else{
				FrameDraw(this.img[i], 0.7, 0.5, .22, .37, 0);
			}
		}

	}
	this.rend = function () {
		FrameDraw(this.bg, 0.5, 0.5, 1, 1, 0);
		if (this.answerTip == 1) {
			if (this.showA == 1) {
				if (this.random == 0) {
					this.one.showOnce(0.5, 0.5, .505, 1, .98, 0);
					FrameDraw(this.w2, 0.368, 0.46, .13, .32, 0);
					FrameDraw(this.w3, 0.63, 0.443, .144, .3, 0);
					FrameDraw(this.w4, 0.85, 0.46, .13, .32, 0);
				}
				if (this.random == 1) {
					this.two.showOnce(0.5, 0.5, .505, 1, .98, 0);
					FrameDraw(this.w1, 0.175, 0.46, .13, .32, 0)
					FrameDraw(this.w3, 0.63, 0.443, .144, .3, 0);
					FrameDraw(this.w4, 0.85, 0.46, .13, .32, 0);
				}
				if (this.random == 2) {
					this.three.showOnce(0.5, 0.5, .505, 1, .98, 0);
					FrameDraw(this.w1, 0.175, 0.46, .13, .32, 0)
					FrameDraw(this.w2, 0.368, 0.46, .13, .32, 0);
					FrameDraw(this.w4, 0.85, 0.46, .13, .32, 0);
				}
				if (this.random == 3) {
					this.four.showOnce(0.5, 0.5, .505, 1, .98, 0);
					FrameDraw(this.w1, 0.175, 0.46, .13, .32, 0)
					FrameDraw(this.w2, 0.368, 0.46, .13, .32, 0);
					FrameDraw(this.w3, 0.63, 0.443, .144, .3, 0);
				}
			} else {
				FrameDraw(this.jiazi, 0.5, .753, .47, .49, 0);
				FrameDraw(this.w1, 0.175, 0.46, .13, .32, 0)
				FrameDraw(this.w2, 0.368, 0.46, .13, .32, 0);
				FrameDraw(this.w3, 0.63, 0.443, .144, .3, 0);
				FrameDraw(this.w4, 0.85, 0.46, .13, .32, 0);
				this.rendimg()
				// FrameDraw(this.dui, 0.71, 0.51, .13, .17, 0);
				if(dataObj5.answer == 'A'){
					FrameDraw(this.dui, 0.305, 0.51, .15, .2, 0);
				}else{
					FrameDraw(this.dui, 0.71, 0.51, .13, .17, 0);
				}
			}
		}
		if (this.answerTip == -1) {
			FrameDraw(this.jiazi, 0.5, .753, .47, .49, 0);
			FrameDraw(this.w1, 0.175, 0.46, .13, .32, 0)
			FrameDraw(this.w2, 0.368, 0.46, .13, .32, 0);
			FrameDraw(this.w3, 0.63, 0.443, .144, .3, 0);
			FrameDraw(this.w4, 0.85, 0.46, .13, .32, 0);
			FrameDraw(this.bg1, 0.5, 0.5, 1, 1, 0);
			this.rendimg()
		}
		if (this.answerTip == 0) {
			if (this.showA == 1) {
				FrameDraw(this.w1, 0.175, 0.46, .13, .32, 0)
				FrameDraw(this.w2, 0.368, 0.46, .13, .32, 0);
				FrameDraw(this.w3, 0.63, 0.443, .144, .3, 0);
				FrameDraw(this.w4, 0.85, 0.46, .13, .32, 0);
				this.errors.showOnce(0.5, 0.5, .54, .64, .98, 0);
			} else {
				FrameDraw(this.w1, 0.175, 0.46, .13, .32, 0)
				FrameDraw(this.w2, 0.368, 0.46, .13, .32, 0);
				FrameDraw(this.w3, 0.63, 0.443, .144, .3, 0);
				FrameDraw(this.w4, 0.85, 0.46, .13, .32, 0);
				FrameDraw(this.jiazi, 0.5, .753, .47, .49, 0);
				FrameDraw(this.bg1, 0.5, 0.5, 1, 1, 0);
				this.rendimg()
				if(dataObj5.answer == 'A'){
					FrameDraw(this.cuo,0.71, 0.51, .13, .17, 0);
				}else{
					FrameDraw(this.cuo,0.305, 0.51, .15, .2, 0);
				}
				
			}
		}
		if (this.answerTip == 1) {
			if (this.showA == 1) {
				if (this.random == 0) {
					this.one.showOnce(0.5, 0.5, .505, 1, .98, 0);
				}
				if (this.random == 1) {
					this.two.showOnce(0.5, 0.5, .505, 1, .98, 0);
				}
				if (this.random == 2) {
					this.three.showOnce(0.5, 0.5, .505, 1, .98, 0);
				}
				if (this.random == 3) {
					this.four.showOnce(0.5, 0.5, .505, 1, .98, 0);
				}
			} else {
				FrameDraw(this.jiazi, 0.5, .753, .47, .49, 0);
				FrameDraw(this.bg1, 0.5, 0.5, 1, 1, 0);
				this.rendimg()
				// FrameDraw(this.dui, 0.71, 0.51, .13, .17, 0);
				if(dataObj5.answer == 'A'){
					FrameDraw(this.dui, 0.305, 0.51, .15, .2, 0);
				}else{
					FrameDraw(this.dui, 0.71, 0.51, .13, .17, 0);
				}
			}
		}
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
				setTimeout(function (){
					that.showA = 1
				}, 2000)
			},10000)
			if (rx > 0.16 && rx < 0.43 && ry < 0.72 && ry > 0.26) {
				clearTimeout(this.t)
				if(dataObj5.answer == 'A'){
					this.answerTip = 1
					setTimeout(function (){
						that.showA = 1
					}, 2000)
					this.trueAudio.play()
					world.clickTip=0
				}else{
					this.answerTip = 0
					setTimeout(function (){
						that.showA = 1
					}, 2000)
					this.errorAudio.play()
					world.clickTip=0
				}
			}
			if (rx > 0.56 && rx < 0.83 && ry < 0.72 && ry > 0.26) {
				clearTimeout(this.t)
				if(dataObj5.answer == 'A'){
					this.answerTip = 0
					setTimeout(function (){
						that.showA = 1
					}, 2000)
					this.errorAudio.play()
					world.clickTip=0
				}else{
					this.answerTip = 1
					setTimeout(function (){
						that.showA = 1
					}, 2000)
					this.trueAudio.play()
					world.clickTip=0
				}
				
			}
		}
	}
	//停止背景音乐
	this.pagedown = function () {};
	this.pageup = function () {}
}