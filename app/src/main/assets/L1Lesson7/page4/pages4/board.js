function pages4() {
	this.init = function () {
	}
	this.loadSouce = function (data, type) {
		this.bg = new Image();
		this.bg.src = "static/squirrel/bg.png";
		this.dui = new Image();
		this.dui.src = "static/squirrel/dui.png";
		this.cuo = new Image();
		this.cuo.src = "static/squirrel/cuo.png";
		
		this.game = new Image();
		this.game.src = "static/squirrel/game.png";
		this.select = new Image();
		this.select.src = "static/squirrel/select.png";
		serc = [];
		for (var x = 0; x < 29; x++) {
			serc[x] = 'static/squirrel/head/' + (x + 1) + '.png';
		}
		this.head = new PaperSets(serc);
		serc = [];
		for (var x = 0; x < 75; x++) {
			serc[x] = 'static/squirrel/successR/' + (x + 1) + '.png';
		}
		this.successR = new PaperSets(serc);
		serc = [];
		for (var x = 0; x < 75; x++) {
			serc[x] = 'static/squirrel/successL/' + (x + 1) + '.png';
		}
		this.successL = new PaperSets(serc);
		serc = [];
		for (var x = 0; x < 33; x++) {
			serc[x] = 'static/squirrel/fail/' + (x + 1) + '.png';
		}
		this.fail = new PaperSets(serc);
		this.errorAudio = new Audio(); //答对的音效
		this.errorAudio.src = "static/audio/error.mp3";
		this.trueAudio = new Audio(); //答对的音效
		this.trueAudio.src = "static/audio/Great.mp3";
		this.showTip = 0
		this.answerTip = -1
		
		this.t="";
		this.answer = dataObj.answer;
		if(this.answer == "A"){
			this.FX = 0
		}else{
			this.FX = 1
		}
		this.img = {};
		for(var i=0 ; i < dataObj.option.length; i++){
			this.img[i] = new Image();
			this.img[i].src =dataObj.option[i];
		}
	}
	
	this.rend = function () {
		var that = this;
		FrameDraw(this.bg, 0.5, 0.5, 1, 1, 0);
		for(var i=0 in this.img){
			if(i == 0){
				FrameDraw(this.img[i], 0.292, 0.29, .22, .37, 0);
			}else{
				FrameDraw(this.img[i], 0.71, 0.3, .22, .37, 0);
			}
		}
		
		FrameDraw(this.game, 0.497, 0.09, .19, .1, 0);
		setTimeout(function (){
			that.showTip = 1
		}, 4000)
		if (this.showTip == 0) {
			FrameDraw(this.select, 0.495, 0.948, .34, .06, 0);
		}
		if (this.answerTip == -1) {
			this.head.show(0.5, 0.505, 0.722, 300 / 1600, 300 / 900, 0);
		}
		if (this.answerTip == 0) {
			this.fail.showOnce(0.5, 0.59, 0.7, 708 / 1600, 525 / 900, 0);
			if(this.FX == 0){
				FrameDraw(this.cuo,  0.71, 0.28, .15, .2, 0);
			}else{
				FrameDraw(this.cuo,  0.3, 0.29, .15, .2, 0);
			}
			
		}
		if (this.answerTip == 1) {
			if(this.FX==0){
				this.successL.showOnce(0.5, 0.42, 0.61, 644 / 1600, 528 / 900, 0);
				FrameDraw(this.dui,0.3, 0.29, .13, .17, 0);
			}else {
				this.successR.showOnce(0.5, 0.59, 0.62, 644 / 1600, 528 / 900, 0);
				FrameDraw(this.dui,0.71, 0.28, .13, .17, 0);
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
			},10000)
			if (rx > 0.18 && rx < 0.40 && ry < 0.47 && ry > 0.09) {
				clearTimeout(this.t)
				
				if(this.answer == 'A'){
					this.answerTip = 1
					this.trueAudio.play()
					world.clickTip=0
				}else{
					this.answerTip = 0;
					this.errorAudio.play()
					world.clickTip=0
				}
			}
			if (rx > 0.59 && rx < 0.81 && ry < 0.46 && ry > 0.09) {
				clearTimeout(this.t)
				if(this.answer == 'A'){
					this.answerTip = 0;
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