function pages25() {
	this.init = function () {

		this.formatData = function (data) {
			var temp = [];
			for (var i = 0; i < data.length; i++) {
				temp[i] = {};
				temp[i].option = [];
				for (var j = 0; j < data[i].option.length; j++) {
					temp[i].option[j] = new Image();
					temp[i].option[j].src = data[i].option[j];
				}
				temp[i].answer = data[i].answer;
			}
			return temp;
		}
		this.testList = this.formatData(dataObj7);

		this.logo = new Image();
		this.logo.src = 'page25/pages25/img/logo.png';
		this.dui = new Image();
		this.dui.src = "page25/pages25/img/dui.png";
		this.cuo = new Image();
		this.cuo.src = "page25/pages25/img/cuo.png";
		this.select = new Image();
		this.select.src = "page25/pages25/img/select.png";

		this.red = new Image();
		this.red.src = 'page25/pages25/img/red.png';
		this.blue = new Image();
		this.blue.src = "page25/pages25/img/blue.png";
		this.yellow = new Image();
		this.yellow.src = "page25/pages25/img/yellow.png";

		this.answer = 1;
		this.answerTip = -1;
		this.answerNum = 0;
		this.num = 0;
		this.changeAB = 0;
		this.click = 0;
		this.next = 0
		this.showTip = 0
		this.t = ""
		this.ts = ""

		serc = [];
		for (var x = 0; x < 49; x++) {
			serc[x] = 'page25/pages25/img/water/' + (x + 1) + '.png';
		}
		this.trues = new PaperSets(serc);

		this.errorAudio = new Audio(); //答对的音效
		this.errorAudio.src = "./static/audio/error.mp3";
		this.trueAudio = new Audio(); //答对的音效
		this.trueAudio.src = "./static/audio/Great.mp3";
	}

	this.loadSouce = function (data, type) {
		this.bg = new Image();
		this.bg.src = "page25/pages25/img/bg.jpg"
	}
	this.rend = function () {

		FrameDraw(this.bg, 0.5, 0.5, 1, 1, 0);
		if (this.num == 1) {
			FrameDraw(this.yellow, 0.51, 0.225, .04, .055, 0);
		}
		if (this.num == 2) {
			FrameDraw(this.yellow, 0.51, 0.225, .04, .055, 0);
			FrameDraw(this.red, 0.44, 0.29, .04, .05, 0);
		}
		if (this.num == 3) {
			FrameDraw(this.yellow, 0.51, 0.225, .04, .055, 0);
			FrameDraw(this.red, 0.44, 0.29, .04, .05, 0);
			FrameDraw(this.blue, 0.55, 0.27, .04, .05, 0);
		}
		if (this.num == 4) {
			FrameDraw(this.yellow, 0.51, 0.225, .04, .055, 0);
			FrameDraw(this.red, 0.44, 0.29, .04, .05, 0);
			FrameDraw(this.blue, 0.55, 0.27, .04, .05, 0);
			FrameDraw(this.yellow, 0.4, 0.37, .04, .055, 0);
		}
		if (this.num == 5) {
			FrameDraw(this.yellow, 0.51, 0.225, .04, .055, 0);
			FrameDraw(this.red, 0.44, 0.29, .04, .05, 0);
			FrameDraw(this.blue, 0.55, 0.27, .04, .05, 0);
			FrameDraw(this.yellow, 0.4, 0.37, .04, .055, 0);
			FrameDraw(this.red, 0.55, 0.38, .04, .05, 0);
		}
		if (this.num == 6) {
			FrameDraw(this.yellow, 0.51, 0.225, .04, .055, 0);
			FrameDraw(this.red, 0.44, 0.29, .04, .05, 0);
			FrameDraw(this.blue, 0.55, 0.27, .04, .05, 0);
			FrameDraw(this.yellow, 0.4, 0.37, .04, .055, 0);
			FrameDraw(this.red, 0.55, 0.38, .04, .05, 0);
			FrameDraw(this.yellow, 0.6, 0.36, .04, .055, 0);
		}
		if (this.next == 1) {
			this.trues.show(0.5, 0.621, 0.54, 325 / 1600, 325 / 900, 0);
		}
		if (this.answerTip == 0) {
			if (world.clickTip == 1) {
				FrameDraw(this.logo, 0.5, 0.5, 1, 1, 0);
				
				if(this.changeAB < this.testList.length){
					for(var i = 0;i<this.testList[this.changeAB].option.length;i++){
						if(i == 0) {
							FrameDraw(this.testList[this.changeAB].option[i], 0.315, 0.47, .21, .40, 0);
						}else{
							FrameDraw(this.testList[this.changeAB].option[i], 0.685, 0.47, .21, .40, 0);
						}
					}
				}
				if(this.answerNum == this.changeAB+1){
					if(this.testList[this.changeAB].answer == 'A'){
						FrameDraw(this.cuo, 0.68, 0.45, .13, .17, 0);
					}else{
						FrameDraw(this.cuo, 0.32, 0.45, .13, .17, 0);
					}
				}
			}
		}
		if (this.answerTip == 1) {
			if (world.clickTip == 1) {
				FrameDraw(this.logo, 0.5, 0.5, 1, 1, 0);
				if(this.changeAB < this.testList.length){
					for(var i = 0;i<this.testList[this.changeAB].option.length;i++){
						if(i == 0) {
							FrameDraw(this.testList[this.changeAB].option[i], 0.315, 0.47, .21, .40, 0);
						}else{
							FrameDraw(this.testList[this.changeAB].option[i], 0.685, 0.47, .21, .40, 0);
						}
					}
				}
				if(this.answerNum == this.changeAB+1){
					if(this.testList[this.changeAB].answer == 'A'){
						FrameDraw(this.dui, 0.32, 0.45, .13, .17, 0);
					}else{
						FrameDraw(this.dui, 0.68, 0.45, .13, .17, 0);
					}
				}
			

			}
		}
		if (this.answerTip == -1 && world.clickTip == 1) {
			FrameDraw(this.logo, 0.5, 0.5, 1, 1, 0);
			if(this.changeAB < this.testList.length){
				for(var i = 0;i<this.testList[this.changeAB].option.length;i++){
					if(i == 0) {
						FrameDraw(this.testList[this.changeAB].option[i], 0.315, 0.47, .21, .40, 0);
					}else{
						FrameDraw(this.testList[this.changeAB].option[i], 0.685, 0.47, .21, .40, 0);
					}
				}
			}
			
			var that = this;
			setTimeout(function (){
				that.showTip = 1
			}, 2000)
			if (this.showTip == 0) {
				FrameDraw(this.select, 0.5, 0.92, .33, .06, 0);
			}
		}

	}
	this.work = function () {}
	this.exec = function (rx, ry) {
		var that = this;
		if (this.answerNum < 6 && world.clickTip == 1) {
			this.next = 0
			if (this.answerTip == -1) {
				clearTimeout(this.t)
				this.t = setTimeout(function (){
					that.answerNum += 1
					that.answerTip = 0;
					that.errorAudio.play();
				}, 10000)
				clearTimeout(this.ts)
				this.ts = setTimeout(function (){
					if(that.changeAB < that.testList.length){
						that.changeAB += 1;
						that.answerTip = -1
						world.clickTip = 0
					}
					
				}, 12000)
				if (rx > 0.18 && rx < 0.44 && ry < 0.68 && ry > 0.22) {
					clearTimeout(this.t)
					clearTimeout(this.ts)
					if(this.answerNum == this.changeAB){
						if(this.testList[this.changeAB].answer == 'A'){
							this.answerTip = 1;
							this.trueAudio.play();
							setTimeout(function (){
								that.num += 1;
								that.next = 1;
							}, 2000)
						}else{
							this.answerTip = 0;
							this.errorAudio.play();
						}
					}
					this.answerNum += 1
					setTimeout(function (){
						if(that.changeAB < that.testList.length){
							that.answerTip = -1
							world.clickTip = 0
							that.changeAB += 1;
						}
						
					}, 2000);
				}
				if (rx > 0.54 && rx < 0.81 && ry < 0.68 && ry > 0.21) {
					clearTimeout(this.t)
					clearTimeout(this.ts)
					// this.trueAudio.play();
					if(this.answerNum == this.changeAB){
						if(this.testList[this.changeAB].answer == 'A'){
							this.answerTip = 0;
							this.errorAudio.play();
						}else{
							this.answerTip = 1;
							this.trueAudio.play();
							setTimeout(function (){
								that.num += 1;
								that.next = 1;
							}, 2000)
						}
					}
					this.answerNum += 1
					
					setTimeout(function (){
						if(that.changeAB < that.testList.length){
							that.changeAB += 1;
							world.clickTip = 0
							that.answerTip = -1;
						}
					}, 2000)
				}
			}
		}
	}
	//停止背景音乐
	this.pagedown = function () {
		this.errorAudio = "";
		this.trueAudio = "";
	};
	this.pageup = function () {
		this.errorAudio = "";
		this.trueAudio = "";
	}
}