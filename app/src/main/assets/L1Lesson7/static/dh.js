var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function inits() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	// dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("BFEF9FF9EEDEA64CBE8A67499B6D87DA");
	var lib=comp.getLibrary();
	handleComplete({},comp);
}
function removeChild(){
	stage.removeChild(exportRoot);
	createjs.Ticker.removeEventListener("tick", stage);
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib.无标题3();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	
	//Code to support hidpi screens and responsive scaling.
	// function makeResponsive(isResp, respDim, isScale, scaleType) {		
	// 	var lastW, lastH, lastS=1;		
	// 	window.addEventListener('resize', resizeCanvas);		
	// 	resizeCanvas();		
	// 	function resizeCanvas() {			
	// 		var w = lib.properties.width, h = lib.properties.height;			
	// 		var iw = window.innerWidth, ih=window.innerHeight;			
	// 		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
	// 		if(isResp) {                
	// 			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
	// 				sRatio = lastS;                
	// 			}				
	// 			else if(!isScale) {					
	// 				if(iw<w || ih<h)						
	// 					sRatio = Math.min(xRatio, yRatio);				
	// 			}				
	// 			else if(scaleType==1) {					
	// 				sRatio = Math.min(xRatio, yRatio);				
	// 			}				
	// 			else if(scaleType==2) {					
	// 				sRatio = Math.max(xRatio, yRatio);				
	// 			}			
	// 		}			
	// 		canvas.width = w*pRatio*sRatio;			
	// 		canvas.height = h*pRatio*sRatio;
	// 		canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
	// 		canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
	// 		stage.scaleX = pRatio*sRatio;			
	// 		stage.scaleY = pRatio*sRatio;			
	// 		lastW = iw; lastH = ih; lastS = sRatio;            
	// 		stage.tickOnUpdate = false;            
	// 		stage.update();            
	// 		stage.tickOnUpdate = true;		
	// 	}
	// }
	// makeResponsive(false,'both',false,1);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}

// ........................................................................................

(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.躯干 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC0EA").s().p("AhKAZQgfgYgFghIAWgHIAFANQAIAQANAIQAPAIAtAAQArAAAQgIQAUgNAFgYIAdAJIgKARQgFAKgHAIQgYAhg/ACIgIAAQgwAAgUgPg");
	this.shape.setTransform(51.7,29.3,1.5,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFA4DE").s().p("AkegLQEeAAEcgQIANAzQjGAEmLAAg");
	this.shape_1.setTransform(51.1,98.3,1.5,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFA4DE").s().p("AABAjQiBgBi7gWIAKgnQCtAUCHAAQCkABCMgcIAJAkQiGAhimAAIgPAAg");
	this.shape_2.setTransform(51,113.1,1.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF7BCD").s().p("AjPFzQgwgKgwgTIgmgQQAmiQAiiWQBGkrgKgaIgPgqICMgwIAEAOQAIAPANAIQAPAKAsAAQAtAAAPgKQAVgNAFgYICLAwIgPAqQgKAaBGErQAjCWAkCQQg4AchNARQg6ANiWAAQiWAAg5gNg");
	this.shape_3.setTransform(51.2,80.8,1.5,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7A391").s().p("AhXGDQgxgFgRgVQgQgWgDgUIACgRIAegKQAhgMALgUQANgTgIhYIgIoPQC7g/BUDbQiAgugcFOIgJBTQgHBYAMATQAMAUAfAMQARAHAOADIABARQgCAUgQAWQgRAVgxAFQgsABgBACQgUAAgZgDg");
	this.shape_4.setTransform(55.5,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-45.9,102.5,184.3);


(lib.左翅膀 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC3F8E").s().p("AivBIQh5hGBSgwQBTgwDWgYQDZgYhEB2QhDB0hsAZQgbAGgcAAQhUAAhdgzg");
	this.shape.setTransform(43.1,6.3,1,1,0,0,0,18.3,-6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.7,24.6);


(lib.安德鲁眼睛侧面 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#42332B").s().p("AEEB6QgGgGiRhMQiVhOgRgCQgPgChGAwIhKA0QgIACgUgUQgTgUAEgJQAGgKBZg8QBcg/AQAAQA1gBB+BlQBAAyA0AyQAXAtgBAAIgBgBg");
	this.shape.setTransform(42.8,18.4,1.5,1.5,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(32).to({y:30.7},0).wait(3).to({y:42.7},0).wait(9).to({y:30.7},0).wait(3).to({y:18.4},0).to({_off:true},66).wait(7));

	// 图层_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#42332B").s().p("AicB5QguhLADhKQAEhaAtgjQAigbA+AFQBAAFA2AoQBGAyAqBlQAbBBgDAoQgBAUgGAGQgBgRgGgaQgMgzgZgqQgfg0gygqQg1gtgugJQhfgPgiAyQgTAcAAA6QgBBQAlBCQAOAaAPAPQgWgWgUghg");
	this.shape_1.setTransform(46.6,58.1,1.5,1.5,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#42383A").s().p("AgpBTQgXgjgLgZQgRgkgFgsIgFg0IAAgNQABgGAagEQAegGAeANQAlARAlAuQAnAxAEArQAEArgTAgQgSAegXAAIgCAAQgxAAgkg0g");
	this.shape_2.setTransform(59.6,69.4,1.5,1.5,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPC6IgugJQhShHgQgaQgNgWgJglQgLgrABguQAAgvASgXQAOgTArgVQAmgTAyARQAmANBLAwQA6AkAfBfQAZBPgJAdQgGARgkAUQgjATgqAJQgSAEgWAAQgVAAgZgDg");
	this.shape_3.setTransform(46.1,63,1.5,1.5,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7A391").s().p("AAQDzIhIgJIADgLQgHAJgSgCQgkgCg2guQhHg9gMhlQgEghACgqQADgqAAgOQABgjA/gsQAggXBAggQAggQB6BKQB1BHAvA2QA6BBhGCAQgYArghAnQgcAigHABIgTABQgfAAg6gGg");
	this.shape_4.setTransform(38.1,46.3,1.5,1.5,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#42332B").s().p("ADYB0IAEgIQAzhgAAhzQAAglgGgdIAAgBIAfgEQADAVABAYQAFBxhGBwQgcAuggAhQAVgXAUgkgAkrBmQgEg7AphhQAKgYALgWIAxgHQgQAXgPAXQgkA9gSBOQgJAmgCAaQgKgKgBgeg");
	this.shape_5.setTransform(46.6,66.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#42383A").s().p("Ag9DIQgjgBgbgsQgcgwAGhCQAGhAA7hKQAvg6AugbIB9gRIAEABQAFAdAAAlQABB0gzBeIgbArQgwBHhAAHIgQABIgDAAg");
	this.shape_6.setTransform(58.9,69.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhhDKQg/gOg1gdQgcgPgQgOQgPgNgEgMQACgbAJgmQAShMAkg+QAOgYARgWIFIguQgvAbguA6Qg7BKgGBAQgGBCAcAwQAbAsAiABIATgBIg9AMQglAFggAAQghAAgagGgAERjPIAEAAIAAABIgEgBg");
	this.shape_7.setTransform(45.4,70.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7A391").s().p("ABHCGQgLgBgqgzQgwg7gkhAQgTgigMgfIDEgbQgLAWgKAXQgpBiAEA7QABAeAKAKQAEAMAPANg");
	this.shape_8.setTransform(12.5,70.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#42332B").s().p("AhyCIQg8gZg6gjQg5gjgGgRQBkAtBdARQBIAMBogVQBogUA1g/QA0g/gChMQApAthDBaQgkAvAUAYIitA7QhKAag0AAQgfAAgXgKg");
	this.shape_9.setTransform(42.8,73.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},29).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},3).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_9}]},6).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},3).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[]},66).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,91.4);


(lib.安德鲁眼睛 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#42332B").s().p("AjqBPQgVgRAEgIQAEgKBwhEQBxhFAQAAQAqAABlBBQAzAfAqAgQAcAzgGgEQjHhlgZgBQgPAAhrA3QhqA5gFACIgDAAQgIAAgSgPg");
	this.shape.setTransform(37.9,14.1,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(26).to({y:36.1},0).wait(3).to({y:38.9},0).wait(7).to({y:36.1},0).wait(3).to({y:14.1},0).wait(81));

	// 图层_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#42332B").s().p("AhVBXQglgkABgzQgBgyAlgkQAjgkAyAAQAyAAAkAkQAlAkAAAyQAAAzglAkQgkAkgyAAQgyAAgjgkg");
	this.shape_1.setTransform(43,66.4,1.5,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#42332B").s().p("Ah9CXQgYgMgDgEQgJgIgUgjQgVgkgBhCQgBg6ALgWQAMgYAhgTQAtgaBJgHQBKgIAyAMQAmAKAhAYQAUAQALAsQALAqgEAtQgDAsgtAyQAGgNAGgTQANglAAgbQAAhFgKgUQgXgwhYgFQhbgGg0AMQgwAMgdAgQgXAZAHBDQAHBGAfAhQASAUAuARQAXAJATAFQhAgHgcgNg");
	this.shape_2.setTransform(41.9,60.3,1.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhLCZQgwgNgOgOQgYgWgUhJQgYhTAbgfQAhgoBQgYQBWgbA6AXQA/AYAVAQQAUARAFAeQAGAogBAqQgLApgYAuQgEAGgNAIQgaARgsALQgsALghAEIgYABQgVgEgYgGg");
	this.shape_3.setTransform(41.4,61.5,1.5,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7A391").s().p("AicDxQg7grgihrQgdhYAUg+QAGgTAKgPQAFgHAEgEIBdhFQBihIAegOQAegPBgBBQAxAgAqAjIAiBVQAgBegEAtQgFAuglAsIgyAyQgMALiHAQIiEAOQgWgBgegVg");
	this.shape_4.setTransform(42.1,43.9,1.5,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#42332B").s().p("Ai8BSQgkgTgGgFIgIgJQgMgQgXgmQgYgpgGhBIAlAAQALBkAtAuQAcAeBEAbQAiANAdAHQhggKgpgUgAh3AvQg2g1AAhMQAAgOACgPIFrAAQACAPAAAOQAABMg2A1Qg2A2hMAAQhLAAg2g2gADqAUQAIgSAIgYQARgyABgnIAkAAQgIBBhBBGg");
	this.shape_5.setTransform(42,74.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhzBcQhEgbgcgeQgtgugLhkIBgAAQgCAPAAAOQAABMA2A1QA1A2BMAAQBLAAA2g2QA2g1AAhMQAAgOgCgPIBNAAQgBAngRAyQgIAYgJASIgCAEQgFAHgMAKIgJAGQgnAYhBAQQhDASgxAFIglACQgcgHgjgNg");
	this.shape_6.setTransform(42,74.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7A391").s().p("AlthPIAwAAQAGBBAYAnQAXAnAMAQQhDg0guhrgADZA4QBBhHAIhAIBMAAQgPAegaAfIhLBKQgIAHgqAJQANgJAEgHg");
	this.shape_7.setTransform(43.4,71.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#42332B").s().p("Aj3AfQgfgggPgsQAVgIA0A6QAzA8DJgWQDJgVAng6IAWgvQgLA9gIAOQgmBFjmAWIgvABQieAAgxg1g");
	this.shape_8.setTransform(42.2,72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},23).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},3).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_8}]},4).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},3).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82.3,85.9);


(lib.安德鲁嘴侧面 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF8070").s().p("AAOAfQgbgVgNgfQgDgHAHgDQAHgDADAHQAMAbAYATQAGAEgFAHQgCADgDAAQgDAAgDgCg");
	this.shape.setTransform(5.8,5,1.5,1.5,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B84C3E").s().p("AA6A0Qhig3g5g1QBUAOA+ARQANAEAMANQANAMALAYQgHAdgRAAQgHAAgJgFg");
	this.shape_1.setTransform(31.2,46.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#42332B").s().p("ACGCZQg/gQhTgPQhkhfgjiIQgIgfgDgdQAVAVApAbIBYA5QAjAXAyAaQApAUAbAJQgRAnAMAtQAJAlAKAjQgMgNgNgEg");
	this.shape_2.setTransform(22.7,28.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDEAE6").s().p("ACDCJQgMgBgSgGQgbgJgpgVQgxgZgjgYIhZg4QgpgbgVgVIgCgYIgBghQADgVAGgDQAJgHAxAgQA/AqCWAhQBXATAtAAIgMBMQgHAjgLARQgPAYgaAAIgFAAg");
	this.shape_3.setTransform(27.1,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DF8070").s().p("ABnBpQhigChehMQhZhGghg9QAbgCBlBQQBkBQBlAFQBlAEgHABQgKAphZAAIgKAAg");
	this.shape_4.setTransform(24.7,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDBEAD").s().p("AhuioIDdgpIiWGjg");
	this.shape_5.setTransform(39.7,36.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B84C3E").s().p("AA6A0Qhig3g5g1QBUAOA+ARQANAEAMANQANAMALAXQgGAegSAAQgHAAgJgFg");
	this.shape_6.setTransform(29.5,46.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#42332B").s().p("ABhCZQg/gQhTgPQhlhfgjiIQgHgdgDgdIgBgCIAEAEQBCBVBrAgQBcAcB8gMQggAFgVAGQguBUAUBfIAEAMQgMgNgNgEg");
	this.shape_7.setTransform(24.7,28.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EDEAE6").s().p("AgaBcQhqgghChUIgEgEIgDgYIgBghQAFgVAEgDQALgHAwAgQA/AqCWAhQBXASAsAAIgLBNIgFAWQgmAEgkAAQhOAAhAgUg");
	this.shape_8.setTransform(25.4,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B84C3E").s().p("ABqA0IgOACQgTACgdgEQgxgIgpgYQgcgRgYgXIgKgLIgIgKQBPgQATAEQBBAAA2AhIALAHQANANgRA3g");
	this.shape_9.setTransform(30.2,49.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#42332B").s().p("AAACGQgSgFhQARQgsg1gPhBQgShMgMh2QA2A/BUgRQB4gYB0AJQgPAYgkBwQgjByASAzQg2gghBAAgAC7h/IABgDIgBADg");
	this.shape_10.setTransform(28.3,30.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EDEAE6").s().p("AjNAEIAAgDQAogICogUIDLgZQgYBEgNATQh1gJh3AYQgSADgRAAQg9AAgqgxgACoAqIABAAIgDAFIACgFg");
	this.shape_11.setTransform(30.1,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:5.8,y:5}}]}).to({state:[{t:this.shape_5},{t:this.shape,p:{x:2.6,y:14.3}},{t:this.shape_4}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape,p:{x:4.1,y:5}}]},2).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape,p:{x:8.6,y:13.1}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.8,0,46,51.9);


(lib.安德鲁脑袋半侧面 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F79084").s().p("AE2BUQgRgQgHgWQgCgHAHgCQAGgCADAHQAGASAOAOQAFAFgFAFQgDADgCAAQgDAAgCgDgAk+gUQgHgHAGgHQAUgTAJgaQADgJAJADQAKACgDAJQgLAggXAWQgDADgDAAQgEAAgDgDg");
	this.shape.setTransform(150.9,141.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#42332B").s().p("AnyH4QgZg4gShKIhvgVQgHgCg1AlIg1AkQgphvAJjZQAIi3AZg9QBajmE9hmQDGhADRAAQAXAABdANQBpAPA2AOQAiAKBXBEQBhBNAXA2IAGAOQAtguANgBQASgBBAAgQA/AgAGAOQAJAQAKAyIgbgiIg4gPQg6gPgHABQgHACgzAYIgsAWIAtAPQBfAfAEAGQAEAJgEAkQgDAkgDgCIgWg3IiggYQiziIgbgJQgVgHj+AeQj/AdgNANQgmAngvBBQhHBiABAuQABAtAbBOQAXBAgHAJIg0A1QgpAqgGAUQgPAzgGBVQgDArAAAhQgJgOgMgbgAH+jTIAsgwQgJgHgJgFIgWgIg");
	this.shape_1.setTransform(112.5,54.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B84C3E").s().p("AgjA+Qg7gFgegMIgEgLIgCgNQgCgVAOgVQAdgrBWABQBWABAeAcQAKAKAEALIACANIACAEQgPAVgMALQgKAJgSAJQgVAKguAAQgUAAgYgCg");
	this.shape_2.setTransform(159.5,168.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAwQhIgGgtgTQgogQgGgUQgEgPABgWIAUAGQBNAUBKAHQA2AFBjAAQARAAAOgBIAAAEQgDAggJAHQgOALgqAGQgcAEgjAAQgbAAgfgDg");
	this.shape_3.setTransform(158.2,150.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#42332B").s().p("AAxC/QhSgHgZgVQgagUhZh7QhZh5gIgXQgGgTgMgaIgMgXIBCAlQBQApBGASQBNAUBJAHQA3AFBiABQAlAAAagGQANgDAGgEQg8CtgMASQgXAjgRAPQgKAIgSAJQgVALguAAQgUAAgZgCg");
	this.shape_4.setTransform(150.9,155.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#42332B").s().p("AhAAiQgRgWAGgHQABgCAygTQA7gZAYgMQAOgHAEAlQADAkgVAHQhgAjgDAAIgBAAQgIAAgPgVg");
	this.shape_5.setTransform(179.4,61);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#42332B").s().p("AkkBeIAHgbICUhVQCchYAqgKQAQgEBrAoQBpAnAHAJQAFAHgQAWQgQAVgIgBIhngdQhigcgPAEQgSAEifBIQigBIgDAFIgBAAQgBAAAFgXg");
	this.shape_6.setTransform(114.6,68.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#42332B").s().p("AhKBqQgtgfgJg0QgJg0AfgsQAfgrA2gKQA0gJAsAeQAsAeAKA1QAKAzggAsQgfAsg1AKQgNACgLAAQgnAAgigXg");
	this.shape_7.setTransform(122.2,97.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#42332B").s().p("ABuCZQAtgaAQgZQAagngFhJQgGhHgcgXQgkgbg1gCQg5gEhfAYQhbAWgQA1QgGAWANBJQAFAcAUAjQAJASAJAMQg4gqgMgtQgMgvADgtQAEgvASgUQAegfAngSQAygVBQgHQBOgGA0ATQAmANAQAXQAQAVAKA8QALBDgPAqQgPAogHAKQgEAEgWARQgRAMgoAPIgkALg");
	this.shape_8.setTransform(121.6,95.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbCoQgwAAgfgKIgWgKQglgogVgnQgNgsgEgpQgDggASgWQAQgVA7gqQA3gmBgAEQBZAEAsAgQAkAZgDBbQgCBOgTAeQgLASguAZIgsAWQgfAKhIAAIgGAAg");
	this.shape_9.setTransform(122.1,96.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7A391").s().p("AhmD7QgrgUgjgWQhCgrgcg5QgUgogBhaIADhSIB+hRQCEhQAgAJQAyANC1BVIANAMQAPAQAMAUQAkBDgMBaQgQBvgyA1QgQAQgRAJIgOAGQigAOhFAAQgsAAgJgGg");
	this.shape_10.setTransform(117.8,86);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F79084").s().p("AglBoQgQgFgNgNQgMgNgGgRQgQgpAKgvQAMgyAlgVQAKgFgIALIgTAZQgWAmALA0QAMA7AtgCIAugCQAZAAAWAOQAGADAIABQgLACgOgDQgPgDgOgBQgTgBgXANQgPAIgMAAIgJgCg");
	this.shape_11.setTransform(165.3,125.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7A391").s().p("ABrBcQg5gUgMgSQgSgZhBgYQgxgRgYgCIhwgLIglhDIA7AVQA+AUAWgFQAcgGBDANQBBAOApAUIBDAgQAdAMAagNQAogSAdgxIgEAVIgpBJQhKAyggAAQgFAAgFgBg");
	this.shape_12.setTransform(183.6,135.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FDBEAD").s().p("AjYm4ICrAAQABAEgXB2QgXB4AHA3QABAHBBAzICKBuQDHCjgMAuQgHAdgzA2Qg2A3gZgBQgSgBhRgWQhIgUgcADQgaADh5AvQh6AvgLANg");
	this.shape_13.setTransform(179.7,105.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#42332B").s().p("AAoCRQgWgCgFgBQgJgDgagVQgdgVgXg0QgTgtABgUQACgXASgYQAagiA4gcQAogUAqAGIABASQgxAFgxAlQguAigLAeQgKAaAcAzQAcA0AjAQQAVAJAZgCQAMgBAIgDQgEAEgIAEQgPAIgOAAIgEAAg");
	this.shape_14.setTransform(176.5,85.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#42332B").s().p("AgmBOQgagZgHgoQgHgoAQggQAQghAegFQAdgFAaAYQAaAZAHApQAHAogQAgQgQAhgeAFIgKABQgXAAgWgVg");
	this.shape_15.setTransform(176.8,89.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAUCFQgYgJgogyQgtg5AJghQAJglA4giIBigwIAAEEQgJAEgNAEQgNADgKAAQgKAAgIgDg");
	this.shape_16.setTransform(176.8,85.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F79084").s().p("ABfCYQACgrgKgnQgnASgggCQgngCgTgjQgPgeAGgoQAFgoAXgaQgngfgvgXQgJgFAFgJQAFgJAJAEQBhAwA4BLQBEBWgHBnQAAAKgKAAQgKAAAAgKgAgegcQgGAcAGAXQAKAlAjAEQAdADAigQIACgBQgZhEg+g3QgQASgHAbg");
	this.shape_17.setTransform(55,122.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FDBEAD").s().p("ABtEsQgdgGgXgOQgagPg2guQgpghg9haQg+hagRgyQgPgrArhgIAuhXIAUgSQAagRAiAHQAxALBJAcICJIPQgQAKgVAJQggAOgVAAIgKgBg");
	this.shape_18.setTransform(53.7,118.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FDBEAD").s().p("AECPSQhLgekdjZQknjfgkhAQgvhTh8kqIhykYQANiEAUiUQAnkpAfhNQAfhNHHgdQDjgODdABICJCtQCQDAAgBbQADAJgMCdQgMCoANBPIAvAtQAwAxAAAUQAAAjhWFLQgpCjgmCMQhMEWgUATQgbAahDAFIgcABQgtAAghgNg");
	this.shape_19.setTransform(122.7,110.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#42332B").s().p("AAuBpQgYgQiGiIIiEiGICmAAIFCFrg");
	this.shape_20.setTransform(77.2,149.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#271E16").s().p("AhNA2QifhPgCgOQgBgbAygkQA7gpA9AVQA5AUD7A+IieCqQhPglhPgng");
	this.shape_21.setTransform(28.3,124.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#42332B").s().p("AhvDQQhigng3giQgdgSABglQABgnAhhMQAehGBXhFQBLg7AvgNQAegICDBnQBDA0BKA/IAKBhQgmAngwAqQhfBUgtARQgMAEgRAAQgyAAhjgng");
	this.shape_22.setTransform(29.3,108.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#271E16").s().p("Ah/B9IAagHQAigMAhgfQAigeAAhUIgGhOIApg9IAtA+QAtBJADA8QADA8gSA0QgJAagKAOIgmAEQgEABgDgEQgHgGAGgSQAFgSgIgwIgJgsIABAsQABAbgbAnIgaAhg");
	this.shape_23.setTransform(52.3,126.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210.6,209.4);


(lib.右翅膀 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF47AA").s().p("AiWCmQiDgiCmiKQCkiLBdgbQBbgaghCHQgjCHhcA/Qg9AqhOAAQgoAAgsgLg");
	this.shape.setTransform(6,28,1,1,0,0,0,-14.9,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.8,35.5);


(lib.t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#00AAFF"],[0.02,1],-483.6,70.8,-483.6,-67.4).s().p("A1rpRMArXAAAIAARhQjVkMoEEHQs4mRooFmQmQiJkOD7gAL8lMQgzAzAABJQAABIAzAzQAzA0BIAAQBJAAAzg0QAzgzABhIQgBhJgzgzQgzgzhJAAQhIAAgzAzg");
	this.shape.setTransform(138.8,59.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277.6,118.8);


(lib.nnd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF59B2").s().p("AkmEtQheg+AChUQABhUAKgtQAQjNBWhWQBYhXCmABQClAABlBqQBkBpAhCVQAgCWhgBZQhfBajTAMQgiACgfAAQihAAhOgzg");
	this.shape.setTransform(38.6,35.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,77.5,70.4);


(lib.半侧面鸟脚2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF47AA").s().p("AgWAiQgIgOAAgUQAAgTAIgOQAKgOAMAAQANAAAJAOQAJAOAAATQAAAUgJAOQgJAOgNAAQgMAAgKgOg");
	this.shape.setTransform(19,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9A94A").s().p("AARAAIhpAGIBmgMIgqgTIgPgNIBVAbIAvAWIgxgIIhKAkg");
	this.shape_1.setTransform(14.4,14.2,1,1,0,0,0,5.5,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9A94A").s().p("AgoAgIBJhHIAIATIhNA8g");
	this.shape_2.setTransform(21.1,7.2,1,1,0,0,0,4.7,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,22.2,18.1);


(lib.半侧面鸟脚 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF47AA").s().p("AgWAiQgIgOAAgUQAAgTAIgPQAKgNAMAAQANAAAJANQAJAPAAATQAAAUgJAOQgJAOgNAAQgMAAgKgOg");
	this.shape.setTransform(4.3,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9A94A").s().p("AgKgOIg1AAIA9gPIBBgFIgpAPIATAyIgkgqIgvAug");
	this.shape_1.setTransform(8.7,16.6,1,1,0,0,0,2.5,-2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9A94A").s().p("AALAyQgGgogZg7IAUACIAVBhg");
	this.shape_2.setTransform(5.4,7.4,1,1,0,0,0,0,-4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.1,12.7,22.6);


(lib.半侧面下喙 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA3E3E").s().p("Ag2CZQgagcgjhAQAEgFBahWQBVhSAXhAQARANAIAmQAHAmgEA5QgEA3gcBKQgcBJgqAFIgMAAQghAAgWgYg");
	this.shape.setTransform(14.7,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9A94A").s().p("AiLBAIAEgBQgBgRCKiwQCLiwgBEKQgFBEgiBUQgjBVhCAEIgDAAQhBAAhHiJg");
	this.shape_1.setTransform(32.3,16.8,1,1,0,0,0,18,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,-15.9,28,40.2);


(lib.半侧面上喙 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDE6B").s().p("AAAkmQBfAJAhCWQAiCTgiBgQgiBgheAIQheAJguBKQgdoOCpg/g");
	this.shape.setTransform(20.5,29.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0B764").s().p("AhfBzQgThoAkiHQAjiKBTgbQAdgKAhAGQioA/AdIOQgmhNgUhog");
	this.shape_1.setTransform(10.2,29.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,35.1,59.3);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhpB+QgbgRhIhUQhHhQgLgXQgMgdgZgjQAPAGAeAHQA7AQBGAKQBWANBCAAQBEAABVgNQBIgKA2gQQAcgHAOgGQgZAjgNAdQgKAXhFBPQhHBTgbARQgcAShPABIgHAAQhJAAgbgRg");
	mask.setTransform(32.4,14.3);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B84C3E").s().p("Ah0BIQgJgOgEgPIgCgNQgBgdARgbQAhg6BVABQBWAAAbArQAOAVgCAZQAGARgEAPQgIAbgmAHQg8AKg5ACIgXABQg1AAgHgNg");
	this.shape.setTransform(33,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah6AqQgpgMgIgTQgKgXAEgjIFigHQACAPAAAQQABAhgJAIQgNAMgoAKQgzANhFACIgRAAQg9AAgqgNg");
	this.shape_1.setTransform(32.3,6.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#42332B").s().p("AhoB3QgbgRhJhUQhHhQgKgXQgMgbAYgXQA5APBEAKQBVANBDAAQBDAABWgNQBCgKA1gOQAWAYgMAZQgKAXhFBPQhHBTgaARQgdAShPABIgHAAQhJAAgagRg");
	this.shape_2.setTransform(32.3,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(3.3,1.4,58.1,27.2), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiECfQgZgZgcgyQgWgogRgsQgUguANg9QAQhNBGgBQC1gBB1ABQA+ABARA3QAPA0gdBNQgPApgVApQgbA0gYAZQgcAchnAAQhpAAgbgcg");
	mask.setTransform(23.6,19.3);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B84C3E").s().p("Ah0A6QgJgOgDgQIgCgNQgDgUAOgVQAdgrBWAAQBWABAeAcQAKAIAEANIACAMQAGAPgEAQQgIAbgmAHQg8AKg5ACIgXAAQg1AAgHgMg");
	this.shape.setTransform(23,35.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah6AqQgpgNgIgTQgKgWAEgjIFigHQACAPAAAQQABAhgJAIQgnAkiGABIgFAAQhGAAgtgNg");
	this.shape_1.setTransform(22.7,5.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#42332B").s().p("AiECfQgZgZgcgyQgWgogRgsQgUguANg9QAQhNBGgBQC1gBB1ABQA+ABARA3QAPA0gdBNQgPApgVApQgbA0gYAZQgcAchnAAQhpAAgbgcg");
	this.shape_2.setTransform(23.6,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(-0.1,0.6,47.4,37.4), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhlBmQgbgRglgoQgiglgRgZQgQgZAPgkQARgpAyABQBJACBQgBICYgBQBBAAAFAkQADAbghA3QgNAXgcAeQgfAggbARQgcAShGAAQhHAAgcgSg");
	mask.setTransform(22.4,13.9);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B84C3E").s().p("Ah0A6QgJgOgDgQIgCgNQgDgUAOgVQAdgrBWAAQBWABAeAcQAKAJAEAMIACAMQAGAPgEAQQgIAbgmAHQg8AKg5ACIgXAAQg1AAgHgMg");
	this.shape.setTransform(23.1,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah6AqQgqgMgIgTQgKgXAFgjIFigHQACAPAAAQQABAhgJAIQgmAkiHABIgFAAQhHAAgsgNg");
	this.shape_1.setTransform(22.1,5.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#42332B").s().p("AhlBmQgbgRglgoQgiglgRgZQgQgZAPgkQARgpAyABQBJACBQgBICYgBQBBAAAFAkQADAbghA3QgNAXgcAeQgfAggbARQgcAShGAAQhHAAgcgSg");
	this.shape_2.setTransform(22.4,13.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(-0.1,2,45.1,23.9), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhiBqQghgVhGg8QhLhBgJgTQgNgdgZgjQAOAPAdAQQA5AgBHALQBVANBDAAQBEAABVgNQBHgLA5ggQAdgQAOgPQgYAjgNAdQgKAThLBBQhGA8ghAVQgbAShIAAQhGAAgcgSg");
	mask.setTransform(32.4,12.4);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B84C3E").s().p("Ah0BIQgJgOgEgQIgCgNQgBgcARgcQAhg5BVABQBWAAAbAqQAOAWgCAZQAGAQgEAQQgIAbgmAHQg8AKg5ACIgXAAQg1AAgHgMg");
	this.shape.setTransform(32.9,28.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah6AqQgpgMgIgUQgKgWAEgjIFigHQACAPAAAQQABAhgJAIQgNAMgoAKQgzANhFACIgSAAQg9AAgpgNg");
	this.shape_1.setTransform(32,7.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#42332B").s().p("AhiBcQgggUhGg9QhLhAgJgUQgEgIgCgJIgCgRQADgFAKAGQA5AhBHAKQBVANBDAAQBEAABVgNQBHgKAqgXQAdgQgDAcQgBAAgFALQgJAUhLBAQhGA9ghAUQgcAShHAAQhHAAgcgSg");
	this.shape_2.setTransform(32.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(3,2,58.7,22.8), null);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Ah7B8QgzgzAAhJQAAhIAzgzQAzgzBIAAQBJAAAzAzQAzAzAABIQAABJgzAzQgzAzhJAAQhIAAgzgzg");
	this.shape.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,35);


(lib.大腿 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#42383A").s().p("AjaIpQABicgJl4IgKmdQA9kjF9CVQBTEziHBIQi+ATgRAIQgQAIgRKhQgdAgghAAQggAAgmggg");
	this.shape.setTransform(23.7,39.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-19.2,47.5,117.1);


(lib.鸟身体半侧面 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCCC").s().p("AgPB/QhDglgqhEQgegsAEg7QgBgWACgVQAggZAyADQBEAFA+AxQA+AxATA7QAQAygRAmQgFALgJALIgIAJQgcANgeAAQgnAAgngVg");
	this.shape.setTransform(15,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF47AA").s().p("ABbD4QAIgLAFgKQARgngPgyQgTg8g+gxQg+gwhEgFQgzgCggAZQAChrAdhnIAQguQB5AqBeBVQBeBUASB5QAQBohcBAQgOAJgNAGIAIgKg");
	this.shape_1.setTransform(18.9,25.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D62877").s().p("AgOASQgZgJgRgWQBcgVAVAoIgCABQgVAJgLADQgIACgJAAQgKAAgKgDg");
	this.shape_2.setTransform(36.1,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,41.9,52.8);


(lib.鸟呆毛侧面 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D62877").s().p("AiKAdIA7gmQBug7BsAgQhCBUhnAAQgyAAg6gTg");
	this.shape.setTransform(13.8,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,27.8,9.7);


(lib.鸟眼睛复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 眉毛
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D62877").s().p("AgZgQQAZgTAcAPQAIAEAHAHQAOAMACAQQgZgUgdAAQgjABgbAbQALgcAVgPg");
	this.shape.setTransform(7.8,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D62877").s().p("AgZgQQAZgTAcAPQAIAEAIAHQANAMABAQQgZgUgcAAQgjABgcAbQANgcAUgPg");
	this.shape_1.setTransform(7.9,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D62877").s().p("AgZgQQAZgTAcAPQAIAEAIAHQANAMACAQQgZgUgdAAQgjABgcAbQAMgcAVgPg");
	this.shape_2.setTransform(7.7,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:2.8}}]}).to({state:[{t:this.shape_1,p:{y:2.8}}]},29).to({state:[{t:this.shape_1,p:{y:10.6}}]},4).to({state:[{t:this.shape_1,p:{y:13.8}}]},4).to({state:[{t:this.shape,p:{y:13.8}}]},5).to({state:[{t:this.shape_2,p:{y:10.6}}]},4).to({state:[{t:this.shape_2,p:{y:2.8}}]},4).to({state:[]},23).wait(47));

	// 图层_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#480D1E").s().p("AheBfQgngmAAg5QAAg2AngoQAngnA3AAQA4AAAnAnQAnAoAAA2QAAA5gnAmQgnAng4AAQg3AAgngng");
	this.shape_3.setTransform(8.4,20.9,0.531,0.762,0,11.2,24.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#480D1E").ss(1.5,1,1).p("Ag2ACQAIgYARgOQAVgRAWAKQAWAKAMAhQAIAXgCAZ");
	this.shape_4.setTransform(9.4,14.2,1.603,1.603);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah7B9QgsgsgHg8IgBgaIACgYQAIg1AqgqQAzgzBIAAQBJAAA0AzQAzA0AABIIgBAVQgGA7gsAtQg0AzhJAAQhIAAgzgzg");
	this.shape_5.setTransform(9.2,21,0.549,0.788,0,11.2,24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#480D1E").ss(2,1,1).p("AhhAAIAIAAIAQAAICGAAIAhAAIAEAA");
	this.shape_6.setTransform(9,22);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#480D1E").s().p("AgTArQgbgMgNglQgHgUgBgUICHAAIgDATQgIApgZAVQgPAMgRAAQgJAAgKgEg");
	this.shape_7.setTransform(8.4,26.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZA8QglgQgSgzQgKgcgBgeIAQAAQABAUAHAUQANAlAbAMQAbAMAXgUQAZgUAJgqIACgTIAhAAQgBAPgDAPIgEAQQgMAsgcAYQgWARgWAAQgMAAgNgGg");
	this.shape_8.setTransform(9.2,28.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#480D1E").ss(2,1,1).p("ABcg2QgBAMgDANQgCAJgCAEQgMAkgcAUQgjAXgjgOQglgNgRgqQgKgXgBgZ");
	this.shape_9.setTransform(9.3,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},29).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},4).to({state:[{t:this.shape_9}]},4).to({state:[{t:this.shape_9}]},5).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},4).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},4).to({state:[]},23).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0,19.5,35.3);


(lib.鸟眼睛 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 眉毛
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D62877").s().p("AgZgQQAZgTAcAPQAIAEAIAHQANAMABAQQgZgUgcAAQgjABgcAbQANgcAUgPg");
	this.shape.setTransform(7.9,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D62877").s().p("AgZgQQAZgTAcAPQAIAEAIAHQANAMACAQQgagUgcAAQgjABgcAbQAMgcAVgPg");
	this.shape_1.setTransform(7.9,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D62877").s().p("AgZgQQAZgTAcAPQAIAEAHAHQAOAMACAQQgZgUgdAAQgjABgbAbQALgcAVgPg");
	this.shape_2.setTransform(7.8,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:2.8}}]}).to({state:[{t:this.shape_1,p:{y:2.8}}]},29).to({state:[{t:this.shape_1,p:{y:10.6}}]},4).to({state:[{t:this.shape_1,p:{y:13.8}}]},4).to({state:[{t:this.shape,p:{y:13.8}}]},5).to({state:[{t:this.shape_2,p:{y:10.6}}]},4).to({state:[{t:this.shape_2,p:{y:2.8}}]},4).wait(70));

	// 图层_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#480D1E").s().p("AheBfQgngmAAg5QAAg2AngoQAngnA3AAQA4AAAnAnQAnAoAAA2QAAA5gnAmQgnAng4AAQg3AAgngng");
	this.shape_3.setTransform(8.4,20.9,0.531,0.762,0,11.2,24.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#480D1E").ss(1.5,1,1).p("Ag2ACQAIgYARgOQAVgRAWAKQAWAKAMAhQAIAXgCAZ");
	this.shape_4.setTransform(9.4,14.2,1.603,1.603);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah7B9QgsgsgHg8IgBgaIACgYQAIg1AqgqQAzgzBIAAQBJAAA0AzQAzA0AABIIgBAVQgGA7gsAtQg0AzhJAAQhIAAgzgzg");
	this.shape_5.setTransform(9.2,21,0.549,0.788,0,11.2,24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#480D1E").ss(2,1,1).p("AhhAAIAIAAIAQAAICGAAIAhAAIAEAA");
	this.shape_6.setTransform(9,22);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#480D1E").s().p("AgTArQgbgMgNglQgHgUgBgUICHAAIgDATQgIApgZAVQgPAMgRAAQgJAAgKgEg");
	this.shape_7.setTransform(8.4,26.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZA8QglgQgSgzQgKgcgBgeIAQAAQABAUAHAUQANAlAbAMQAbAMAXgUQAZgUAJgqIACgTIAhAAQgBAPgDAPIgEAQQgMAsgcAYQgWARgWAAQgMAAgNgGg");
	this.shape_8.setTransform(9.2,28.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#480D1E").ss(2,1,1).p("ABcg2QgBAMgDANQgCAJgCAEQgMAkgcAUQgjAXgjgOQglgNgRgqQgKgXgBgZ");
	this.shape_9.setTransform(9.3,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},29).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},4).to({state:[{t:this.shape_9}]},4).to({state:[{t:this.shape_9}]},5).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},4).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},4).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0,19.5,35.3);


(lib.脚 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#42383A").s().p("AggBfQgTgUgKgTQgJgRAAgJQAAgKAJgRQAIgNAqgyIAogvIAqgKQgICugEALQgDAKgVATQgYAVgLAAQgLAAgVgXg");
	this.shape.setTransform(10.6,17.7,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.2,35.5);


(lib.小腿 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#42383A").s().p("AgOG+Qg5gEgDgFQgBgFAHkzQAKloAChuIgBgWQgBgPADgKQAOg4A1AAQA2ABAJA3IgCBUQgTLwgDACQgEADgQAAQgRAAgcgDg");
	this.shape.setTransform(7.5,39.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.5,15,89.7);


(lib.下臂复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDBEAD").s().p("AgSAtQgggOgQgYQgQgVAHgWQAGgUAYgDQAXgCAlAjQAmAjAPAJQAQAKgIARQgIAPgcAAIgEAAQgaAAgcgPg");
	this.shape.setTransform(31.2,53.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AgVBvIgUgvIAGAvIgzgGIASjPIBIgPQASAcA4CzIAJAdg");
	this.shape_1.setTransform(50.3,211.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9966").s().p("AhRhXIAJgkIAdABIAUgBIAYgBIAXAbIA7DNQg4iygSgdIhJAQIgRDPIgBABg");
	this.shape_2.setTransform(49.8,209.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D5D5D5").s().p("AgUhaIACAAIARAAIAWC1IgUAAg");
	this.shape_3.setTransform(45.3,188);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E18658").s().p("AgzmDIBnMHIgBAAIgRAAg");
	this.shape_4.setTransform(40.1,140);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgcBbIgRi0IAZgBIAUC2gAgBhaIABAAIASgBIAbC1IgYABg");
	this.shape_5.setTransform(45.4,187.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC6633").s().p("Ah2s9IAQAEIDdZ1IgTAAIhnsIIBVMJIgCAAIgZABg");
	this.shape_6.setTransform(35.3,96);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDBEAD").s().p("AB7E3IgOgkQgFAFgIAEQgXALgdgPQgFgCgFgEQghAEgLgKQgMgLgigkQgiglARgxIADhsIg4iZQgKgcgohdQgUgugCgKQAPhOA+AqICFFgQAKABAMAFIAAAAQAYAEAhAMQBCAZAJAfQAJAfAUCTQAMBWgagBQgTAAgngrg");
	this.shape_7.setTransform(19.9,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,223.1);


(lib.下臂 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDBEAD").s().p("ABGEeIgVg5IgBAbQgEAcgKAOQgPATgVACQgaADgWgYQgQgQAHguIAJgrQgHASgmAQQgZALgNgUQgJgPAAgaQAAgRAhgoIAgglIhEi6QgLgcgoheQgUgugCgKQAQhOA+ArICFFgQAhACBiAYQBCARAVAeQAPAZgQAdQgMAVgcgBIgagGIAHAKQAIAPALAbQAkBUhDASQgGABgHAAQggAAgYgug");
	this.shape.setTransform(21.9,33.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.7,66.5);


(lib.上臂 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC0EA").s().p("AhSA+IgYgDIgXgtQCLgNBYg/IAGAHQAbAhgBAIQgCAMgzAaQg2AdgnAGQgYAEgWAAIgUgBg");
	this.shape.setTransform(19.8,33.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F25FC1").s().p("AiZgCQghg4Arg9QArg8BAAEIAPAYIA/BUIB+CmQhYBAiLANQg9h8ghg2g");
	this.shape_1.setTransform(12.8,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDBEAD").s().p("AAPBjIhnirIBYggIBZCUQAAA9gsAAQgNAAgRgGg");
	this.shape_2.setTransform(35.5,56.7,1,1,0,0,0,8.6,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,0,39.8,57.3);


(lib.安德鲁嘴 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(1,1,1).p("AkPgaQEaCeEFiy");
	this.shape.setTransform(-172.5,-14.7);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(-170.2,-7.1,1.2,1.2,0,0,0,32.5,18.9);

	this.instance_1 = new lib.ClipGroup_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-170.9,-3.3,1.2,1.2,0,0,0,32.4,18.9);

	this.instance_2 = new lib.ClipGroup_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-170.1,-8.5,1.2,1.2,0,0,0,23.7,21.2);

	this.instance_3 = new lib.ClipGroup();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-170.7,-8.7,1.2,1.2,0,0,0,22.4,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.7,-20.4,56.4,11.5);


(lib.安德鲁脑袋侧面 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.安德鲁眼睛侧面("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(272.6,129.8,1,1,0,0,0,41,45.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F79084").s().p("AheCVQgZhZA6hVQAxhKBgg3QAJgFAHAIQAHAHgJAFQgvAcglAgQAdAUAOAiQANAigMAcQgOAhgrAIQgiAGgtgLQgEAlAKAkQACAJgLABIgDABQgIAAgCgIgAhKA3IACAAQAoAKAfgHQAmgIAEgiQACgVgLgXQgMgXgUgOQg7A6gPA+g");
	this.shape.setTransform(176,198.9,1.5,1.5,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDBEAD").s().p("AiaEKIgrgMIA2nDIAtgYQA1gbAlgOQAigMAdAEQAPADAHAEIBBBGQA/BOgIAoQgJAvg0BWQgzBWgmAkQgzAvgZARQgYAQgdAJQgKADgNAAQgVAAgcgGg");
	this.shape_1.setTransform(165.6,198.7,1.5,1.5,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#42332B").s().p("AhPAdQAhhSAPgWQAOgVAggHQARgEANABIBBATQhRAtgZAJQgPAGgxBCIgxBEIAehOg");
	this.shape_2.setTransform(314.6,63.4,1.5,1.5,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#42332B").s().p("AgmgEQBnhEAUAKQATAJATAqQAKATAGATIgqAJQgggMgWgCQgOAAhUAVIhTAWg");
	this.shape_3.setTransform(320.6,47.3,1.5,1.5,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#271E16").s().p("Ah0B0Qjvh2gCgWQgEgoBNg2QBYg/BcAgQBVAeF5BeQgqBui0BHQghAFggAAQhhAAhagtg");
	this.shape_4.setTransform(42.5,163);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#42332B").s().p("AhCDzQgtgRhfhUQgwgqgmgnIAKhhQBKg/BDg0QCDhnAeAIQAvANBLA7QBXBFAeBGQAhBMABAnQABAlgdASQg4AjhhAmQhjAngyAAQgRAAgMgEg");
	this.shape_5.setTransform(44,142,1.5,1.5,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#42332B").s().p("AArL5QA3hmAAgfIB0hKQB5hUAUgyQAehHhEg/Qg9g5hNgBQgrgBg2AUQhLAbg0A3QgGAGgNATQgKAOgLAHQgMAIgEguQgFhMgHg4QgFgmglg9Qglg9gCgMQgBgMBGhVQBNhfAPgxQATg7jDipQhIg+hHgzQhFgxgQgDQgagFiHAvIiCAvQgDgMADgSQAGgmAcgjQAcgjBOgsQAqgXA/ggQAzgcDfgqQDlgsBNAIQApAFBaAtQBdAwBfBCQD0CrAeCEQAWBgALBuQAOCVgOCCQgNCBj0EeQhbBrhbBZQhVBUgbANQgWAKhUAWIhNAUgABXJ2QALgHAAAFIgOAFQAAAAAAAAQAAgBAAAAQABAAAAgBQABAAABgBgABiJ0IAAAAg");
	this.shape_6.setTransform(192.1,128.5,1.5,1.5,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#271E16").s().p("AgKCSQgbgnABgbIAAgsIgJAsQgIAwAGASQAFASgGAGIgHADIgmgEQgKgOgJgaQgSg0ADg8QADg8AthJQAXglAWgZIApA9IgGBOQAABTAiAfQAiAfAhAMQAQAHAKAAIhwA2QgOgOgMgTg");
	this.shape_7.setTransform(78.3,169.9,1.5,1.5,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F79084").s().p("AADBgQgXgPgUABIgdAEIgZgBIgBgCQAkgLAaAAQAQAAAfADQAtACAMg7QALg0gWgmIgTgZQgIgLAKAFQAlAVAMAyQAKAvgQApQgGARgMANQgNANgQAFIgIABQgMAAgQgJg");
	this.shape_8.setTransform(308.6,194.2,1.5,1.5,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7A391").s().p("ADbBVQgdgBh4ghQhWgYgtgCQgLgEgKAAQg/gFiYgDIgKhhQAPAMAWAKQAsAVAigIQAogJBkAUQBjAVA+AdIBjAxQAuARAmgSIAQgIQgzAhgiAAIgEAAg");
	this.shape_9.setTransform(327.2,204.5);

	this.instance_1 = new lib.安德鲁嘴侧面("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(291.1,244.8,1,1,0,0,0,23,27.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FDBEAD").s().p("AC2X0QgjgMm2lGQm7lIgfgqQgtg5ijkTQAiibAhipQBAlRgJhGQgJhGgEkFIgDj4INKq8QBUBBBiBTQDDCnA7BjQBEBuA4B8QAzByAEAmQACAVgvCvQgtCmALARQAJAPDmEIQDiEIgCAiQgBAohLA3QhJA2gpgDQgdgBh4ghQhtgegqAFQgdAEAOBuQAPB4gJAKQgEAEABArQi0A/A+EWIgKA9QgHBWABBZQAABTAZBMQATA5gIAVQgPAjhIAoQg4AeggAAQgJAAgIgDg");
	this.shape_10.setTransform(270.7,175.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.instance_1},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[]},113).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,368.2,328.2);


(lib.安德鲁脑袋正面复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 安德鲁嘴
	this.instance = new lib.安德鲁嘴("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(149.8,270.9,1.35,1.35,0,0,0,-172,-7.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({_off:true},1).wait(113));

	// 安德鲁眼睛
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#42332B").s().p("AjqBPQgVgRAEgIQAEgKBwhEQBxhFAQAAQAqAABlBBQAzAfAqAgQAcAzgGgEQjHhlgZgBQgPAAhrA3QhqA5gFACIgDAAQgIAAgSgPg");
	this.shape.setTransform(89.3,118.6,1.5,1.5,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#42332B").s().p("AhVBXQglgkABgzQgBgyAlgkQAjgkAyAAQAyAAAkAkQAlAkAAAyQAAAzglAkQgkAkgyAAQgyAAgjgkg");
	this.shape_1.setTransform(84.2,170.9,1.5,1.5,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#42332B").s().p("Ah9CXQgYgMgDgEQgJgIgUgjQgVgkgBhCQgBg6ALgWQAMgYAhgTQAtgaBJgHQBKgIAyAMQAmAKAhAYQAUAQALAsQALAqgEAtQgDAsgtAyQAGgNAGgTQANglAAgbQAAhFgKgUQgXgwhYgFQhbgGg0AMQgwAMgdAgQgXAZAHBDQAHBGAfAhQASAUAuARQAXAJATAFQhAgHgcgNg");
	this.shape_2.setTransform(85.3,164.8,1.5,1.5,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhLCZQgwgNgOgOQgYgWgUhJQgYhTAbgfQAhgoBQgYQBWgbA6AXQA/AYAVAQQAUARAFAeQAGAogBAqQgLApgYAuQgEAGgNAIQgaARgsALQgsALghAEIgYABQgVgEgYgGg");
	this.shape_3.setTransform(85.8,166,1.5,1.5,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7A391").s().p("AicDxQg7grgihrQgdhYAUg+QAGgTAKgPQAFgHAEgEIBdhFQBihIAegOQAegPBgBBQAxAgAqAjIAiBVQAgBegEAtQgFAuglAsIgyAyQgMALiHAQIiEAOQgWgBgegVg");
	this.shape_4.setTransform(85.1,148.4,1.5,1.5,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[]},1).wait(113));

	// 安德鲁眼睛
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#42332B").s().p("AjqBPQgVgRAEgIQAEgKBwhEQBxhFAQAAQAqAABlBBQAzAfAqAgQAcAzgGgEQjHhlgZgBQgPAAhrA3QhqA5gFACIgDAAQgIAAgSgPg");
	this.shape_5.setTransform(209.7,118.6,1.5,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#42332B").s().p("AhVBXQglgkABgzQgBgyAlgkQAjgkAyAAQAyAAAkAkQAlAkAAAyQAAAzglAkQgkAkgyAAQgyAAgjgkg");
	this.shape_6.setTransform(214.7,170.9,1.5,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#42332B").s().p("Ah9CXQgYgMgDgEQgJgIgUgjQgVgkgBhCQgBg6ALgWQAMgYAhgTQAtgaBJgHQBKgIAyAMQAmAKAhAYQAUAQALAsQALAqgEAtQgDAsgtAyQAGgNAGgTQANglAAgbQAAhFgKgUQgXgwhYgFQhbgGg0AMQgwAMgdAgQgXAZAHBDQAHBGAfAhQASAUAuARQAXAJATAFQhAgHgcgNg");
	this.shape_7.setTransform(213.7,164.8,1.5,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhLCZQgwgNgOgOQgYgWgUhJQgYhTAbgfQAhgoBQgYQBWgbA6AXQA/AYAVAQQAUARAFAeQAGAogBAqQgLApgYAuQgEAGgNAIQgaARgsALQgsALghAEIgYABQgVgEgYgGg");
	this.shape_8.setTransform(213.2,166,1.5,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7A391").s().p("AicDxQg7grgihrQgdhYAUg+QAGgTAKgPQAFgHAEgEIBdhFQBihIAegOQAegPBgBBQAxAgAqAjIAiBVQAgBegEAtQgFAuglAsIgyAyQgMALiHAQIiEAOQgWgBgegVg");
	this.shape_9.setTransform(213.9,148.4,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},3).to({state:[]},1).wait(113));

	// 图层_1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#42332B").s().p("AgQBFQgagagBgJQgCgIAGgsQAGgqAEgJIAWgWIA0ALIg0BzQAPA1AAAEIAAAAQgDAAgVgXg");
	this.shape_10.setTransform(145.4,63.4,1.5,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#42332B").s().p("AhHBcQgKgLgDhDQgEhCAIgPQAHgNBQgbIBQgZIgiBHIggATQggATgEAGQgEAFgKA3IgJA2IAVAkQgqgbgMgOg");
	this.shape_11.setTransform(136.2,91.7,1.5,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#42332B").s().p("AQTIyQgPhNgNgrIgihGIAfBGIAIAQIgIgQIgJgSQg+htgTh8QgWhPgyhcQg7hqgpgqQgVgVjng1Qjmg1gfAJQgZAIhsBfIhoBfQjEi5gogNQgegJjnA1QhPASg3APQhoAbgNAOQgSASgZAnQgaAoggA/QgpBOgWBEIgtBiQgIAxgQAWQgRAWgNAyQgMAtgSBiQgOBOgEBpQgBA0ABAkQgJgQgMgmQgVhOgKhtQgNiTATkrQAUlBAlhUQAVgwBmhcQBvhkCOhcQF5jxEnAAQEoAAF5DxQCPBcBvBkQBmBcAVAwQAlBTATFCQATEqgNCUQgJBtgVBOQgMAmgJAQQAEiSgWh9g");
	this.shape_12.setTransform(149.5,83.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F79084").s().p("AAIAfQgVgVgLgfQgDgKAJgCQAKgDADAJQAHAZAUATQAHAGgHAIQgDAEgEAAQgDAAgEgEg");
	this.shape_13.setTransform(198.2,230.5,1.5,1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F79084").s().p("AgVAfQgHgHAGgHQAUgSAIgaQADgJAJADQAKACgDAKQgLAfgWAVQgDAEgDAAQgEAAgDgEg");
	this.shape_14.setTransform(101.1,230.5,1.5,1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F79084").s().p("Ag3BkQgDgKAJgCQAjgIAQgJQAbgPAHgdQAHgbgIghQgIghgQgXQgFgHAGgHQAHgIAFAIQAUAcAIAlQAJAmgHAhQgIAhgfATQgUAOgnAIIgDABQgGAAgCgIg");
	this.shape_15.setTransform(179.4,204.2,1.5,1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F79084").s().p("AglBFQgWgJgPgQQgggsgRgSQgcghgmgEQgIgBAAgKQgBgKAJABQAwAFAeAhQAPAQAaAsQAcAmAqADQAkADAegoQARgWAdgqQAeghAvgFQAKgBgBAKQABAKgKABQgmAEgbAhQgeApgTAVQgdAgguAAIgBAAQgSAAgSgHg");
	this.shape_16.setTransform(148.8,221.1,1.5,1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F79084").s().p("AAWCVQAKichHiHQgFgIAIgFQAIgGAEAJQBKCMgKChQAAAKgJAAQgJAAAAgKg");
	this.shape_17.setTransform(173.1,184.4,1.5,1.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F79084").s().p("AAtBrQgngIgUgOQgfgTgIghQgHghAJgmQAJglATgcQAGgIAGAIQAGAHgFAHQgQAXgIAhQgIAhAHAbQAHAdAbAPQAQAJAjAIQAJACgDAKQgCAIgGAAIgDgBg");
	this.shape_18.setTransform(118.2,204.2,1.5,1.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F79084").s().p("AgoCUQgKihBKiMQAFgIAIAFQAHAFgEAIQhHCHAJCcQABAKgJAAQgJAAgBgKg");
	this.shape_19.setTransform(124.5,184.4,1.5,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7A391").s().p("AgNCuQgSibgZgZQgOgPgdgwQgRgbgqgUQgpgTgDgGQgPgSgIgNQgQgZAHgmQAHgnAQgSQAIgJAGgCIgFAoQgCArAPARQAKAMAjABQAmACAYAVQAIAHAlA0QAVAfAhgBQAfgBAhgqQAmgvAZgJQAkgMAeAFQAPACAIAFIAEARQACATgPALQgIAFghAOQgbALgsC4QgtC5gfAeQgFAFgFAAQgZAAgOiCg");
	this.shape_20.setTransform(146.3,236.3,1.5,1.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDBEAD").s().p("AhkP4Qg/gRiyjgQiUi7hRiEQgyhRhCjvIg2jeQAoiPAvifQBek8AehNQAghND8hhQB+gwB3ghIBMAWQBbAdBQAeQD8BhAfBNQAgBNBdE8IBXEuIg4DeQhBDvgxBRQhTCFiUC6QixDghAARQg0APgdAEIgTACIgEAAQgVAAhLgVg");
	this.shape_21.setTransform(149.5,158.1,1.5,1.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F79084").s().p("ABfCMQACgngKgkQgnAQgfgBQgogCgTghQgQgbAHglQAFglAXgYQgmgcgwgWQgJgEAFgIQAFgJAJAEQBhAsA4BFQBEBQgHBeQAAAKgKAAQgKAAAAgKgAgegZQgGAZAGAWQAKAiAjADQAdADAigPIACgBQgZg+g+gzQgQARgHAZg");
	this.shape_22.setTransform(33.3,177.8,1.5,1.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7A391").s().p("ABtEOQgdgFgXgNQgbgPg1gqQgpgfg9hSQg+hSgRgvQgPgoArhYQAWgsAYglIASgKQAZgIAhAIQA2AOBIAGICJHmQgQAJgVAIQggAOgVAAIgKgBg");
	this.shape_23.setTransform(31.4,173.4,1.5,1.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F79084").s().p("AhyCMQgHheBEhQQA4hFBhgsQAIgEAGAJQAFAIgJAEQgxAWglAcQAWAYAGAlQAGAlgQAbQgSAhgoACQgfABgngQQgLAkADAnQAAAKgKAAQgKAAAAgKgAhQAuIACABQAjAPAcgDQAkgDAJgiQAHgWgHgZQgGgZgQgRQg+AzgaA+g");
	this.shape_24.setTransform(265.6,177.8,1.5,1.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7A391").s().p("AirEBQgVgIgQgJICJnmQBIgGA2gOQAhgIAZAIQANAEAFAGQAZAlAVAsQArBYgPAoQgRAvg+BSQg9BSgpAfQg2AqgZAPQgYANgdAFIgKABQgVAAgggOg");
	this.shape_25.setTransform(267.5,173.4,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},3).to({state:[]},1).wait(113));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,298.8,313.7);


(lib.安德鲁脑袋正面 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 安德鲁嘴
	this.instance = new lib.安德鲁嘴("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(149.8,249.8,1.35,1.35,0,0,0,-172,-7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},99).wait(18));

	// 安德鲁眼睛
	this.instance_1 = new lib.安德鲁眼睛("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(86.1,126.3,1,1,0,0,180,41.1,42.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},99).wait(18));

	// 安德鲁眼睛
	this.instance_2 = new lib.安德鲁眼睛("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(212.9,126.3,1,1,0,0,0,41.1,42.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},99).wait(18));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#42332B").s().p("AgQBFQgagagBgJQgCgIAGgsQAGgqAEgJIAWgWIA0ALIg0BzQAPA1AAAEIAAAAQgDAAgVgXg");
	this.shape.setTransform(145.4,63.4,1.5,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#42332B").s().p("AhHBcQgKgLgDhDQgEhCAIgPQAHgNBQgbIBQgZIgiBHIggATQggATgEAGQgEAFgKA3IgJA2IAVAkQgqgbgMgOg");
	this.shape_1.setTransform(131.2,69.6,1.5,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#42332B").s().p("AK3F2QgKg5gLgdQgIgYgMgRQgLgOgGgxQgFgkgGhlQgGhLg2hjQgnhHgbgcQgOgOiagjQiagkgUAHQgQAFhJA/IhFA/QiDh7gagIQgUgHiaAkQiaAjgNAOQgZAZgrBSQg2BrgGBLQgGBZgGAgQgFAggLAPQgLAPgJAiQgHAdgNBBQgJA1gCBGIgBA6QgGgKgIgaQgOg0gGhIQgJhjAMjHQAOjWAYg4QAOggBEg9QBKhDBfg8QD8iiDEAAQDFAAD7CiQBgA8BKBDQBEA9AOAgQAYA4ANDWQANDHgIBjQgHBIgOA0QgIAagFAKQAChhgPhUg");
	this.shape_2.setTransform(149.5,83.3,1.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F79084").s().p("AAIAfQgVgVgLgfQgDgKAJgCQAKgDADAJQAHAZAUATQAHAGgHAIQgDAEgEAAQgDAAgEgEg");
	this.shape_3.setTransform(198.2,209.4,1.5,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F79084").s().p("AgVAfQgHgHAGgHQAUgSAIgaQADgJAJADQAKACgDAKQgLAfgWAVQgDAEgDAAQgEAAgDgEg");
	this.shape_4.setTransform(101.1,209.4,1.5,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F79084").s().p("Ag3BkQgDgKAJgCQAjgIAQgJQAbgPAHgdQAHgbgIghQgIghgQgXQgFgHAGgHQAHgIAFAIQAUAcAIAlQAJAmgHAhQgIAhgfATQgUAOgnAIIgDABQgGAAgCgIg");
	this.shape_5.setTransform(179.4,183.1,1.5,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F79084").s().p("AglBFQgWgJgPgQQgggsgRgSQgcghgmgEQgIgBAAgKQgBgKAJABQAwAFAeAhQAPAQAaAsQAcAmAqADQAkADAegoQARgWAdgqQAeghAvgFQAKgBgBAKQABAKgKABQgmAEgbAhQgeApgTAVQgdAgguAAIgBAAQgSAAgSgHg");
	this.shape_6.setTransform(148.8,200,1.5,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F79084").s().p("AAWCVQAKichHiHQgFgIAIgFQAIgGAEAJQBKCMgKChQAAAKgJAAQgJAAAAgKg");
	this.shape_7.setTransform(173.1,163.3,1.5,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F79084").s().p("AAtBrQgngIgUgOQgfgTgIghQgHghAJgmQAJglATgcQAGgIAGAIQAGAHgFAHQgQAXgIAhQgIAhAHAbQAHAdAbAPQAQAJAjAIQAJACgDAKQgCAIgGAAIgDgBg");
	this.shape_8.setTransform(118.2,183.1,1.5,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F79084").s().p("AgoCUQgKihBKiMQAFgIAIAFQAHAFgEAIQhHCHAJCcQABAKgJAAQgJAAgBgKg");
	this.shape_9.setTransform(124.5,163.3,1.5,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7A391").s().p("AgNCuQgSibgZgZQgOgPgdgwQgRgbgqgUQgpgTgDgGQgPgSgIgNQgQgZAHgmQAHgnAQgSQAIgJAGgCIgFAoQgCArAPARQAKAMAjABQAmACAYAVQAIAHAlA0QAVAfAhgBQAfgBAhgqQAmgvAZgJQAkgMAeAFQAPACAIAFIAEARQACATgPALQgIAFghAOQgbALgsC4QgtC5gfAeQgFAFgFAAQgZAAgOiCg");
	this.shape_10.setTransform(146.3,215.2,1.5,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDBEAD").s().p("AhkP4Qg/gRiyjgQiUi7hRiEQgyhRhCjvIg2jeQAoiPAvifQBek8AehNQAghND8hhQB+gwB3ghIBMAWQBbAdBQAeQD8BhAfBNQAgBNBdE8IBXEuIg4DeQhBDvgxBRQhTCFiUC6QixDghAARQg0APgdAEIgTACIgEAAQgVAAhLgVg");
	this.shape_11.setTransform(149.5,158.1,1.5,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F79084").s().p("AhyCMQgHheBEhQQA4hFBhgsQAIgEAGAJQAFAIgJAEQgxAWglAcQAWAYAGAlQAGAlgQAbQgSAhgoACQgfABgngQQgLAkADAnQAAAKgKAAQgKAAAAgKgAhQAuIACABQAjAPAcgDQAkgDAJgiQAHgWgHgZQgGgZgQgRQg+AzgaA+g");
	this.shape_12.setTransform(265.6,185.7,1.5,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F7A391").s().p("AirEBQgVgIgQgJICJnmQBIgGA2gOQAhgIAZAIQANAEAFAGQAZAlAVAsQArBYgPAoQgRAvg+BSQg9BSgpAfQg2AqgZAPQgYANgdAFIgKABQgVAAgggOg");
	this.shape_13.setTransform(267.5,181.3,1.5,1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F79084").s().p("ABfCMQACgngKgkQgnAQgfgBQgogCgTghQgQgbAHglQAFglAXgYQgmgcgwgWQgJgEAFgIQAFgJAJAEQBhAsA4BFQBEBQgHBeQAAAKgKAAQgKAAAAgKgAgegZQgGAZAGAWQAKAiAjADQAdADAigPIACgBQgZg+g+gzQgQARgHAZg");
	this.shape_14.setTransform(33.3,185.7,1.5,1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7A391").s().p("ABtEOQgdgFgXgNQgbgPg1gqQgpgfg9hSQg+hSgRgvQgPgoArhYQAWgsAYglIASgKQAZgIAhAIQA2AOBIAGICJHmQgQAJgVAIQggAOgVAAIgKgBg");
	this.shape_15.setTransform(31.4,181.3,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},99).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,298.8,313.7);


(lib.鸟嘴半侧面 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 半侧面上喙
	this.instance = new lib.半侧面上喙("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(21,1.9,1,1,0,0,0,21.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleY:0.9},0).wait(2).to({scaleY:0.83},0).wait(2).to({scaleY:0.9},0).wait(2).to({scaleY:1},0).wait(2));

	// 半侧面下喙
	this.instance_1 = new lib.半侧面下喙("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.7,28.5,1,1,0,0,0,16.1,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({y:29.9},0).wait(2).to({x:23.9,y:30.3},0).wait(2).to({x:22.7,y:29.9},0).wait(2).to({y:28.5},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0,35.1,59.3);


(lib.鸟头半侧面 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.鸟嘴半侧面("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(41.2,48.9,1,1,0,0,0,32.3,18.4);

	this.instance_1 = new lib.鸟眼睛("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(56.9,35.1,1.253,1,0,0,0,9,17.7);

	this.instance_2 = new lib.鸟眼睛复制("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(21,34.4,1.109,0.892,0,0,180,-0.3,17.9);

	this.instance_3 = new lib.nnd("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(40.1,39.3,1,1,0,0,0,38.6,35.2);

	this.instance_4 = new lib.鸟呆毛侧面("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(52.2,7.7,1,1,0,0,0,1,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(144));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0,79.4,89.7);


(lib.安德鲁说话2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 侧面
	this.instance = new lib.安德鲁脑袋侧面("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(947,176.5,1,1,0,0,0,185.8,164.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({_off:false},0).wait(1).to({startPosition:1},0).wait(3).to({startPosition:4},0).wait(14).to({startPosition:18},0).to({rotation:5.5,x:973.5,y:175.5,startPosition:21},3).wait(24).to({startPosition:21},0).to({rotation:0,x:947,y:176.5,startPosition:18},3).wait(95).to({startPosition:4},0).wait(1).to({startPosition:1},0).wait(3).to({startPosition:0},0).to({_off:true},1).wait(181).to({_off:false},0).wait(1).to({mode:"single",startPosition:1},0).wait(3).to({startPosition:1},0).wait(14).to({startPosition:21},0).to({rotation:5.5,x:973.5,y:175.5},3).wait(4).to({startPosition:21},0).to({rotation:0,x:947,y:176.5},3).wait(4).to({startPosition:21},0).wait(1).to({startPosition:21},0).wait(3).to({startPosition:21},0).to({_off:true},1).wait(89).to({_off:false,mode:"synched",startPosition:0},0).wait(1).to({mode:"single",startPosition:1},0).wait(3).to({startPosition:1},0).wait(4).to({startPosition:21},0).to({rotation:5.5,x:973.5,y:175.5},3).to({startPosition:21},2).to({rotation:0,x:947,y:176.5},3).wait(4).to({startPosition:21},0).wait(1).to({startPosition:21},0).wait(3).to({startPosition:21},0).to({_off:true},1).wait(13).to({_off:false,mode:"synched",startPosition:0},0).wait(1).to({regX:210.6,regY:264.1,x:971.8,y:276.5,startPosition:1},0).to({regY:264.2,rotation:-15,y:276.6},3).wait(49).to({mode:"single",startPosition:50},0).wait(14).to({startPosition:50},0).wait(5).to({regX:185.8,regY:164.1,rotation:0,x:947,y:176.5,mode:"synched",startPosition:4},0).wait(1).to({startPosition:1},0).wait(3).to({startPosition:0},0).to({_off:true},1).wait(50));

	// 半侧面
	this.instance_1 = new lib.安德鲁脑袋半侧面("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(980.7,304.4,1.5,1.5,0,0,0,131.8,194.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(98).to({_off:false},0).to({_off:true},2).wait(148).to({_off:false},0).to({_off:true},2).wait(177).to({_off:false},0).to({_off:true},2).wait(37).to({_off:false},0).to({_off:true},2).wait(85).to({_off:false},0).to({_off:true},2).wait(25).to({_off:false},0).to({_off:true},2).wait(9).to({_off:false},0).to({_off:true},2).wait(77).to({_off:false},0).to({_off:true},2).wait(48));

	// 安德鲁脑袋正面
	this.instance_2 = new lib.安德鲁脑袋正面("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(971.7,323.3,1,1,0,0,0,149.4,310.9);

	this.instance_3 = new lib.安德鲁脑袋正面复制("single",3);
	this.instance_3.parent = this;
	this.instance_3.setTransform(971.7,323.3,1,1,0,0,0,149.4,310.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},72).to({state:[]},2).to({state:[{t:this.instance_2}]},152).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},20).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},23).to({state:[]},6).to({state:[{t:this.instance_2}]},17).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},26).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},19).to({state:[{t:this.instance_2}]},10).to({state:[]},2).to({state:[{t:this.instance_2}]},41).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_2}]},18).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},23).to({state:[{t:this.instance_2}]},6).to({state:[]},2).to({state:[{t:this.instance_2}]},29).to({state:[{t:this.instance_2}]},7).to({state:[]},2).to({state:[{t:this.instance_2}]},81).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},19).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({startPosition:0},0).to({regX:149.5,rotation:6.7,x:986.9,y:324,mode:"synched"},2).wait(4).to({startPosition:66},0).wait(4).to({mode:"single",startPosition:70},0).wait(2).to({mode:"synched",startPosition:0},0).to({regX:149.4,rotation:0,x:971.7,y:323.3,mode:"single"},2).wait(6).to({mode:"synched"},0).wait(72).to({mode:"single",startPosition:72},0).to({_off:true},2).wait(152).to({_off:false},0).wait(3).to({mode:"synched"},0).wait(20).to({startPosition:92},0).to({regX:149.5,rotation:-7.9,x:940.5,y:328.9,mode:"single",startPosition:95},7).to({regX:149.4,rotation:0,x:971.7,y:323.3},7).to({regY:310.8,rotation:7,x:998.8,y:327.2},7).to({regY:310.9,rotation:0,x:971.7,y:323.3},7).wait(3).to({mode:"synched",startPosition:0},0).wait(23).to({mode:"single",startPosition:2},0).to({_off:true},6).wait(17).to({_off:false,startPosition:0},0).wait(4).to({startPosition:0},0).to({regX:149.5,rotation:6.7,x:986.9,y:324,mode:"synched"},2).wait(1).to({startPosition:66},0).wait(26).to({mode:"single",startPosition:92},0).wait(10).to({mode:"synched",startPosition:0},0).to({regX:149.4,rotation:0,x:971.7,y:323.3,mode:"single"},2).wait(1).to({mode:"synched",startPosition:54},0).wait(19).to({mode:"single",startPosition:73},0).wait(10).to({startPosition:72},0).to({_off:true},2).wait(41).to({_off:false,startPosition:73},0).to({_off:true},5).wait(18).to({_off:false,mode:"synched",startPosition:92},0).to({regX:149.5,rotation:-7.9,x:940.5,y:328.9,mode:"single",startPosition:95},7).to({regX:149.4,rotation:0,x:971.7,y:323.3},7).to({regY:310.8,rotation:7,x:998.8,y:327.2},7).to({regY:310.9,rotation:0,x:971.7,y:323.3},7).wait(3).to({startPosition:0},0).wait(23).to({startPosition:2},0).wait(6).to({startPosition:72},0).to({_off:true},2).wait(29).to({_off:false,startPosition:73},0).wait(7).to({startPosition:72},0).to({_off:true},2).wait(81).to({_off:false},0).wait(1).to({mode:"synched"},0).wait(19).to({mode:"single",startPosition:91},0).wait(28));

	// 下臂
	this.instance_4 = new lib.下臂("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1029.2,406.5,1,1,0,0,0,4.4,3);

	this.instance_5 = new lib.下臂复制("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1029.2,406.5,1,1,0,0,0,4.4,3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({startPosition:0},0).to({rotation:6.7,x:1034.3,y:413.4},2).wait(10).to({startPosition:0},0).to({rotation:0,x:1029.2,y:406.5},2).wait(78).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({rotation:-77.7,x:1042.3,y:395.4},3).wait(14).to({startPosition:0},0).to({regY:3.1,rotation:-75.7,x:1066.2,y:357.4},3).wait(24).to({startPosition:0},0).to({regY:3,rotation:-77.7,x:1042.3,y:395.4},3).wait(95).to({startPosition:0},0).to({rotation:0,x:1029.2,y:406.5},3).wait(27).to({startPosition:0},0).to({regY:3.1,rotation:-33.4,x:1023.8,y:385.1},7).to({regY:3,rotation:0,x:1029.2,y:406.5},7).to({rotation:-12.5,x:1062,y:405.6},7).to({rotation:0,x:1029.2,y:406.5},7).to({_off:true},32).wait(17).to({_off:false},0).wait(4).to({startPosition:0},0).to({rotation:6.7,x:1034.3,y:413.4},2).wait(37).to({startPosition:0},0).to({rotation:0,x:1029.2,y:406.5},2).wait(20).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({_off:true},3).wait(121).to({_off:false},0).wait(2).to({startPosition:0},0).to({_off:true},3).wait(33).to({_off:false},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({rotation:-107.7,x:1055.7,y:344.3},3).wait(68).to({rotation:-77.7,x:1042.3,y:395.4},0).to({rotation:0,x:1029.2,y:406.5},3).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(430).to({_off:false},0).to({rotation:-77.7,x:1042.3,y:395.4},3).wait(14).to({startPosition:0},0).to({regY:3.1,rotation:-75.7,x:1066.2,y:357.4},3).wait(4).to({startPosition:0},0).to({regY:3,rotation:-77.7,x:1042.3,y:395.4},3).wait(4).to({startPosition:0},0).to({rotation:0,x:1029.2,y:406.5},3).wait(27).to({startPosition:0},0).to({regY:3.1,rotation:-33.4,x:1023.8,y:385.1},7).to({regY:3,rotation:0,x:1029.2,y:406.5},7).to({rotation:-12.5,x:1062,y:405.6},7).to({rotation:0,x:1029.2,y:406.5},7).to({_off:true},32).wait(5).to({_off:false},0).to({rotation:-77.7,x:1042.3,y:395.4},3).wait(4).to({regX:4.3,regY:3.1,rotation:-126.9},0).to({rotation:-128,x:1066.1,y:357.5},3).to({rotation:-120.7,y:357.4},2).to({regY:3,rotation:-122.7,x:1042.2,y:395.5},3).wait(4).to({startPosition:0},0).to({regX:4.4,rotation:0,x:1029.2,y:406.5},3).to({_off:true},11).wait(131));

	// 下臂
	this.instance_6 = new lib.下臂("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(914.2,406.5,1,1,0,0,180,4.4,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({startPosition:0},0).to({regX:4.3,regY:2.9,skewX:147.9,skewY:327.9,x:916.9,y:330.8},2).to({regX:4.4,regY:2.8,skewX:124.4,skewY:304.4,x:917},3).to({skewX:167.4,skewY:347.4,y:330.9},2).to({skewX:124.4,skewY:304.4,y:330.8},2).wait(3).to({startPosition:0},0).to({regY:3,skewX:0,skewY:180,x:914.2,y:406.5},2).wait(78).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({skewX:7.2,skewY:187.2,x:910.5,y:402.6},3).wait(14).to({startPosition:0},0).to({regX:4.3,skewX:12.7,skewY:192.7,x:915.7,y:397.1},3).wait(24).to({startPosition:0},0).to({regX:4.4,skewX:7.2,skewY:187.2,x:910.5,y:402.6},3).wait(95).to({startPosition:0},0).to({skewX:0,skewY:180,x:914.2,y:406.5},3).wait(27).to({startPosition:0},0).to({regX:4.3,regY:3.1,skewX:30.7,skewY:210.7,x:879,y:408.6},7).to({regX:4.4,regY:3,skewX:0,skewY:180,x:914.2,y:406.5},7).to({regX:4.3,skewX:32.7,skewY:212.7,x:917.1,y:384.9},7).to({regX:4.4,skewX:0,skewY:180,x:914.2,y:406.5},7).to({_off:true},32).wait(17).to({_off:false},0).wait(4).to({startPosition:0},0).to({regX:4.3,regY:2.9,skewX:147.9,skewY:327.9,x:901.8,y:358.4},2).wait(27).to({startPosition:0},0).wait(10).to({startPosition:0},0).to({regX:4.4,regY:3,skewX:0,skewY:180,x:914.2,y:406.5},2).wait(20).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({skewX:7.2,skewY:187.2,x:910.5,y:402.6},3).wait(14).to({startPosition:0},0).to({regX:4.3,skewX:12.7,skewY:192.7,x:915.7,y:397.1},3).wait(4).to({startPosition:0},0).to({regX:4.4,skewX:7.2,skewY:187.2,x:910.5,y:402.6},3).wait(4).to({startPosition:0},0).to({skewX:0,skewY:180,x:914.2,y:406.5},3).wait(27).to({startPosition:0},0).to({regX:4.3,regY:3.1,skewX:30.7,skewY:210.7,x:879,y:408.6},7).to({regX:4.4,regY:3,skewX:0,skewY:180,x:914.2,y:406.5},7).to({regX:4.3,skewX:32.7,skewY:212.7,x:917.1,y:384.9},7).to({regX:4.4,skewX:0,skewY:180,x:914.2,y:406.5},7).wait(32).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({skewX:7.2,skewY:187.2,x:910.5,y:402.6},3).wait(4).to({startPosition:0},0).to({regX:4.3,skewX:12.7,skewY:192.7,x:915.7,y:397.1},3).to({startPosition:0},2).to({regX:4.4,skewX:7.2,skewY:187.2,x:910.5,y:402.6},3).wait(4).to({startPosition:0},0).to({skewX:0,skewY:180,x:914.2,y:406.5},3).wait(11).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({skewX:7.2,skewY:187.2,x:910.5,y:402.6},3).wait(68).to({startPosition:0},0).to({skewX:0,skewY:180,x:914.2,y:406.5},3).wait(52));

	// 躯干
	this.instance_7 = new lib.躯干("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(971.8,459.1,1,1,0,0,0,51.2,136.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({startPosition:0},0).to({rotation:6.7,x:971.1,y:459},2).wait(10).to({startPosition:0},0).to({rotation:0,x:971.8,y:459.1},2).wait(78).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(14).to({startPosition:0},0).to({regX:51.3,rotation:5.5,x:971.3},3).wait(24).to({startPosition:0},0).to({regX:51.2,rotation:0,x:971.8},3).wait(95).to({startPosition:0},0).to({startPosition:0},3).wait(27).to({startPosition:0},0).to({rotation:-7.9,x:959.3,y:463.5},7).to({rotation:0,x:971.8,y:459.1},7).to({rotation:7,x:982.4,y:462.1},7).to({rotation:0,x:971.8,y:459.1},7).to({_off:true},32).wait(17).to({_off:false},0).wait(4).to({startPosition:0},0).to({rotation:6.7,x:971.1,y:459},2).wait(37).to({startPosition:0},0).to({rotation:0,x:971.8,y:459.1},2).wait(20).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(14).to({startPosition:0},0).to({regX:51.3,rotation:5.5,x:971.3},3).wait(4).to({startPosition:0},0).to({regX:51.2,rotation:0,x:971.8},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).wait(27).to({startPosition:0},0).to({rotation:-7.9,x:959.3,y:463.5},7).to({rotation:0,x:971.8,y:459.1},7).to({rotation:7,x:982.4,y:462.1},7).to({rotation:0,x:971.8,y:459.1},7).wait(32).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({regX:51.3,rotation:5.5,x:971.3},3).to({startPosition:0},2).to({regX:51.2,rotation:0,x:971.8},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).wait(11).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(68).to({startPosition:0},0).to({startPosition:0},3).wait(52));

	// 上臂
	this.instance_8 = new lib.上臂("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(998.4,357.5,1,1,0,0,0,1.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({startPosition:0},0).to({rotation:6.7,x:1009.4,y:361.1},2).wait(10).to({startPosition:0},0).to({rotation:0,x:998.4,y:357.5},2).wait(78).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({regY:4.7,rotation:-17,y:357.6},3).wait(14).to({startPosition:0},0).to({rotation:-60.7,x:1007.5,y:360.6},3).wait(24).to({startPosition:0},0).to({rotation:-17,x:998.4,y:357.6},3).wait(95).to({startPosition:0},0).to({regY:4.6,rotation:0,y:357.5},3).wait(27).to({startPosition:0},0).to({regY:4.7,rotation:-33.4,x:971.2,y:361.1},7).to({regY:4.6,rotation:0,x:998.4,y:357.5},7).to({regX:2,rotation:-12.5,x:1021.5,y:364.3},7).to({regX:1.9,rotation:0,x:998.4,y:357.5},7).to({_off:true},32).wait(17).to({_off:false},0).wait(4).to({startPosition:0},0).to({rotation:6.7,x:1009.4,y:361.1},2).wait(37).to({startPosition:0},0).to({rotation:0,x:998.4,y:357.5},2).wait(20).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({regY:4.7,rotation:-17,y:357.6},3).wait(14).to({startPosition:0},0).to({rotation:-60.7,x:1007.5,y:360.6},3).wait(4).to({startPosition:0},0).to({rotation:-17,x:998.4,y:357.6},3).wait(4).to({startPosition:0},0).to({regY:4.6,rotation:0,y:357.5},3).wait(27).to({startPosition:0},0).to({regY:4.7,rotation:-33.4,x:971.2,y:361.1},7).to({regY:4.6,rotation:0,x:998.4,y:357.5},7).to({regX:2,rotation:-12.5,x:1021.5,y:364.3},7).to({regX:1.9,rotation:0,x:998.4,y:357.5},7).wait(32).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({regY:4.7,rotation:-17,y:357.6},3).wait(4).to({startPosition:0},0).to({rotation:-60.7,x:1007.5,y:360.6},3).to({startPosition:0},2).to({rotation:-17,x:998.4,y:357.6},3).wait(4).to({startPosition:0},0).to({regY:4.6,rotation:0,y:357.5},3).wait(11).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({regY:4.7,rotation:-70.7},3).wait(68).to({rotation:-17,y:357.6},0).to({regY:4.6,rotation:0,y:357.5},3).wait(52));

	// 上臂
	this.instance_9 = new lib.上臂("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(945,357.5,1,1,0,0,180,1.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({startPosition:0},0).to({regX:1.8,skewX:101.7,skewY:281.7,x:958.6,y:370.9},2).wait(10).to({startPosition:0},0).to({regX:1.9,skewX:0,skewY:180,x:945,y:357.5},2).wait(78).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({skewX:7.2,skewY:187.2,x:947.2,y:357.9},3).wait(14).to({startPosition:0},0).to({regY:4.7,skewX:12.7,skewY:192.7,x:956.4,y:356.2},3).wait(24).to({startPosition:0},0).to({regY:4.6,skewX:7.2,skewY:187.2,x:947.2,y:357.9},3).wait(95).to({startPosition:0},0).to({skewX:0,skewY:180,x:945,y:357.5},3).wait(27).to({startPosition:0},0).to({regX:1.8,regY:4.7,skewX:12.5,skewY:192.5,x:919.7,y:367.5},7).to({regX:1.9,regY:4.6,skewX:0,skewY:180,x:945,y:357.5},7).to({regY:4.7,skewX:32.7,skewY:212.7,x:969.4,y:360.3},7).to({regY:4.6,skewX:0,skewY:180,x:945,y:357.5},7).to({_off:true},32).wait(17).to({_off:false},0).wait(4).to({startPosition:0},0).to({regX:1.8,skewX:56.7,skewY:236.7,x:958.5,y:358.8},2).wait(27).to({startPosition:0},0).wait(10).to({startPosition:0},0).to({regX:1.9,skewX:0,skewY:180,x:945,y:357.5},2).wait(20).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({skewX:7.2,skewY:187.2,x:947.2,y:357.9},3).wait(14).to({startPosition:0},0).to({regY:4.7,skewX:12.7,skewY:192.7,x:956.4,y:356.2},3).wait(4).to({startPosition:0},0).to({regY:4.6,skewX:7.2,skewY:187.2,x:947.2,y:357.9},3).wait(4).to({startPosition:0},0).to({skewX:0,skewY:180,x:945,y:357.5},3).wait(27).to({startPosition:0},0).to({regX:1.8,regY:4.7,skewX:12.5,skewY:192.5,x:919.7,y:367.5},7).to({regX:1.9,regY:4.6,skewX:0,skewY:180,x:945,y:357.5},7).to({regY:4.7,skewX:32.7,skewY:212.7,x:969.4,y:360.3},7).to({regY:4.6,skewX:0,skewY:180,x:945,y:357.5},7).wait(32).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({skewX:7.2,skewY:187.2,x:947.2,y:357.9},3).wait(4).to({startPosition:0},0).to({regY:4.7,skewX:12.7,skewY:192.7,x:956.4,y:356.2},3).to({startPosition:0},2).to({regY:4.6,skewX:7.2,skewY:187.2,x:947.2,y:357.9},3).wait(4).to({startPosition:0},0).to({skewX:0,skewY:180,x:945,y:357.5},3).wait(11).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({skewX:7.2,skewY:187.2,x:947.2,y:357.9},3).wait(68).to({startPosition:0},0).to({skewX:0,skewY:180,x:945,y:357.5},3).wait(52));

	// 脚
	this.instance_10 = new lib.脚("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(1003.6,635.3,1,1,0,0,180,17.9,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({startPosition:0},0).to({startPosition:0},2).wait(10).to({startPosition:0},0).to({startPosition:0},2).wait(78).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(14).to({startPosition:0},0).to({startPosition:0},3).wait(24).to({startPosition:0},0).to({startPosition:0},3).wait(95).to({startPosition:0},0).to({startPosition:0},3).wait(27).to({startPosition:0},0).to({skewX:7.2,skewY:187.2,x:1028.3,y:632.3},7).to({skewX:0,skewY:180,x:1003.6,y:635.3},7).to({scaleY:0.95,y:636.7},7).to({scaleY:1,y:635.3},7).to({_off:true},32).wait(17).to({_off:false},0).wait(4).to({startPosition:0},0).to({startPosition:0},2).wait(37).to({startPosition:0},0).to({startPosition:0},2).wait(20).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(14).to({startPosition:0},0).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).wait(27).to({startPosition:0},0).to({skewX:7.2,skewY:187.2,x:1028.3,y:632.3},7).to({skewX:0,skewY:180,x:1003.6,y:635.3},7).to({scaleY:0.95,y:636.7},7).to({scaleY:1,y:635.3},7).wait(32).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).to({startPosition:0},2).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).wait(11).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(68).to({startPosition:0},0).to({startPosition:0},3).wait(52));

	// 小腿
	this.instance_11 = new lib.小腿("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(1002.4,547.2,1,1,0,0,180,8.5,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({startPosition:0},0).to({startPosition:0},2).wait(10).to({startPosition:0},0).to({startPosition:0},2).wait(78).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(14).to({startPosition:0},0).to({startPosition:0},3).wait(24).to({startPosition:0},0).to({startPosition:0},3).wait(95).to({startPosition:0},0).to({startPosition:0},3).wait(27).to({startPosition:0},0).to({regX:8.4,skewX:-12.8,skewY:167.2,x:1007.8,y:546.6},7).to({regX:8.5,skewX:0,skewY:180,x:1002.4,y:547.2},7).to({regY:-2.6,scaleY:0.95,y:553.3},7).to({regY:-2.7,scaleY:1,y:547.2},7).to({_off:true},32).wait(17).to({_off:false},0).wait(4).to({startPosition:0},0).to({startPosition:0},2).wait(37).to({startPosition:0},0).to({startPosition:0},2).wait(20).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(14).to({startPosition:0},0).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).wait(27).to({startPosition:0},0).to({regX:8.4,skewX:-12.8,skewY:167.2,x:1007.8,y:546.6},7).to({regX:8.5,skewX:0,skewY:180,x:1002.4,y:547.2},7).to({regY:-2.6,scaleY:0.95,y:553.3},7).to({regY:-2.7,scaleY:1,y:547.2},7).wait(32).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).to({startPosition:0},2).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).wait(11).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(68).to({startPosition:0},0).to({startPosition:0},3).wait(52));

	// 大腿
	this.instance_12 = new lib.大腿("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(989.3,455.1,1,1,0,0,180,21.6,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({startPosition:0},0).to({startPosition:0},2).wait(10).to({startPosition:0},0).to({startPosition:0},2).wait(78).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(14).to({startPosition:0},0).to({startPosition:0},3).wait(24).to({startPosition:0},0).to({startPosition:0},3).wait(95).to({startPosition:0},0).to({startPosition:0},3).wait(27).to({startPosition:0},0).to({regX:21.4,regY:-0.1,skewX:-11.9,skewY:168.1,x:976,y:457.3},7).to({regX:21.6,regY:-0.3,skewX:0,skewY:180,x:989.3,y:455.1},7).to({regX:21.5,skewX:7,skewY:187,x:1000.4,y:460.2},7).to({regX:21.6,skewX:0,skewY:180,x:989.3,y:455.1},7).to({_off:true},32).wait(17).to({_off:false},0).wait(4).to({startPosition:0},0).to({startPosition:0},2).wait(37).to({startPosition:0},0).to({startPosition:0},2).wait(20).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(14).to({startPosition:0},0).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).wait(27).to({startPosition:0},0).to({regX:21.4,regY:-0.1,skewX:-11.9,skewY:168.1,x:976,y:457.3},7).to({regX:21.6,regY:-0.3,skewX:0,skewY:180,x:989.3,y:455.1},7).to({regX:21.5,skewX:7,skewY:187,x:1000.4,y:460.2},7).to({regX:21.6,skewX:0,skewY:180,x:989.3,y:455.1},7).wait(32).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).to({startPosition:0},2).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).wait(11).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(68).to({startPosition:0},0).to({startPosition:0},3).wait(52));

	// 脚
	this.instance_13 = new lib.脚("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(939.9,635.3,1,1,0,0,0,17.9,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4).to({startPosition:0},0).to({startPosition:0},2).wait(10).to({startPosition:0},0).to({startPosition:0},2).wait(78).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(14).to({startPosition:0},0).to({startPosition:0},3).wait(24).to({startPosition:0},0).to({startPosition:0},3).wait(95).to({startPosition:0},0).to({startPosition:0},3).wait(27).to({startPosition:0},0).to({scaleY:0.95,y:636.6},7).to({scaleY:1,y:635.3},7).to({rotation:-9.8,x:911.6,y:627.1},7).to({rotation:0,x:939.9,y:635.3},7).to({_off:true},32).wait(17).to({_off:false},0).wait(4).to({startPosition:0},0).to({startPosition:0},2).wait(37).to({startPosition:0},0).to({startPosition:0},2).wait(20).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(14).to({startPosition:0},0).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).wait(27).to({startPosition:0},0).to({scaleY:0.95,y:636.6},7).to({scaleY:1,y:635.3},7).to({rotation:-9.8,x:911.6,y:627.1},7).to({rotation:0,x:939.9,y:635.3},7).wait(32).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).to({startPosition:0},2).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).wait(11).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(68).to({startPosition:0},0).to({startPosition:0},3).wait(52));

	// 小腿
	this.instance_14 = new lib.小腿("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(941.1,547.2,1,1,0,0,0,8.5,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({startPosition:0},0).to({startPosition:0},2).wait(10).to({startPosition:0},0).to({startPosition:0},2).wait(78).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(14).to({startPosition:0},0).to({startPosition:0},3).wait(24).to({startPosition:0},0).to({startPosition:0},3).wait(95).to({startPosition:0},0).to({startPosition:0},3).wait(27).to({startPosition:0},0).to({scaleY:0.95,y:552.8},7).to({scaleY:1,y:547.2},7).to({regY:-2.6,rotation:13.2,x:932.9,y:541.6},7).to({regY:-2.7,rotation:0,x:941.1,y:547.2},7).to({_off:true},32).wait(17).to({_off:false},0).wait(4).to({startPosition:0},0).to({startPosition:0},2).wait(37).to({startPosition:0},0).to({startPosition:0},2).wait(20).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(14).to({startPosition:0},0).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).wait(27).to({startPosition:0},0).to({scaleY:0.95,y:552.8},7).to({scaleY:1,y:547.2},7).to({regY:-2.6,rotation:13.2,x:932.9,y:541.6},7).to({regY:-2.7,rotation:0,x:941.1,y:547.2},7).wait(32).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).to({startPosition:0},2).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).wait(11).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(68).to({startPosition:0},0).to({startPosition:0},3).wait(52));

	// 大腿
	this.instance_15 = new lib.大腿("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(954.2,455.1,1,1,0,0,0,21.6,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(4).to({startPosition:0},0).to({startPosition:0},2).wait(10).to({startPosition:0},0).to({startPosition:0},2).wait(78).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(14).to({startPosition:0},0).to({startPosition:0},3).wait(24).to({startPosition:0},0).to({startPosition:0},3).wait(95).to({startPosition:0},0).to({startPosition:0},3).wait(27).to({startPosition:0},0).to({regY:-0.2,rotation:-7.9,x:941.3,y:462},7).to({regY:-0.3,rotation:0,x:954.2,y:455.1},7).to({rotation:13.2,x:966.6,y:454.8},7).to({rotation:0,x:954.2,y:455.1},7).to({_off:true},32).wait(17).to({_off:false},0).wait(4).to({startPosition:0},0).to({startPosition:0},2).wait(37).to({startPosition:0},0).to({startPosition:0},2).wait(20).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(14).to({startPosition:0},0).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).wait(27).to({startPosition:0},0).to({regY:-0.2,rotation:-7.9,x:941.3,y:462},7).to({regY:-0.3,rotation:0,x:954.2,y:455.1},7).to({rotation:13.2,x:966.6,y:454.8},7).to({rotation:0,x:954.2,y:455.1},7).wait(32).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).to({startPosition:0},2).to({startPosition:0},3).wait(4).to({startPosition:0},0).to({startPosition:0},3).wait(11).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({startPosition:0},3).wait(68).to({startPosition:0},0).to({startPosition:0},3).wait(52));

	// yy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82C450").s().de(-148,-40,296.1,80.1);
	this.shape.setTransform(973,682.9,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(720));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(795.4,12.4,355.3,718.6);


(lib.鸟说话 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 鸟头半侧面
	this.instance = new lib.鸟头半侧面("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(51.6,49.9,1,1,0,0,0,38.8,44.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(405).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false,startPosition:24},0).to({_off:true},7).wait(309));

	// 图层_6
	this.instance_1 = new lib.右翅膀("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(71,83.3,1,1,49.2,0,0,5.4,29.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(405).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},7).wait(309));

	// 半侧面鸟脚
	this.instance_2 = new lib.半侧面鸟脚("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(71.9,112.1,1,1,0,0,0,6.2,4.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(405).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},7).wait(309));

	// 鸟身体半侧面
	this.instance_3 = new lib.鸟身体半侧面("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(60,111.5,1,1,0,0,0,20.8,48.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(405).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},7).wait(309));

	// 图层_4
	this.instance_4 = new lib.半侧面鸟脚2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(52.2,112.8,1,1,0,0,0,19.1,4.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(405).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},7).wait(309));

	// 图层_5
	this.instance_5 = new lib.左翅膀("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(45.9,88.2,0.9,0.9,8.6,0,0,48.1,4.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(405).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},7).wait(309));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,0,122.8,131);


// stage content:
(lib.无标题3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6633").s().p("AqdoIIAOgIIUuPzIgOAOIs6p7IMuKIIgBABIgSASg");
	this.shape.setTransform(3293.4,264.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E18658").s().p("AmclEIM6J7IgBABIgMANg");
	this.shape_1.setTransform(3317.7,283.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AiFgvIApg/QAiAHClBXIAbAOIhTBHIgwgTIAmAcIgoAhg");
	this.shape_2.setTransform(3386.8,336.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AhfgiIARgSICPByIgVATgAhBhBIABgBIANgOICTBtIgRASg");
	this.shape_3.setTransform(3365.6,321.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D5D5D5").s().p("AhOgxIABgBIAMgNICQBwIgOAPg");
	this.shape_4.setTransform(3365.6,321);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC9966").s().p("Ah1ghIgTggIAVgTIANgOIASgSIAjABIC6BoQilhWgigIIgoA/ICGCfIAAABg");
	this.shape_5.setTransform(3383.7,335.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(264));

	// 安德鲁
	this.instance = new lib.安德鲁说话2("synched",589,false);
	this.instance.parent = this;
	this.instance.setTransform(680.9,624.9,1,1,0,0,0,970.9,325.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(111).to({mode:"single",startPosition:429},0).to({x:811.1,y:664.9,mode:"synched",startPosition:446,loop:false},6).wait(24).to({startPosition:470},0).to({x:742.2,y:666.9,mode:"single",startPosition:474},4).to({mode:"synched",startPosition:479,loop:false},5).wait(48).to({startPosition:527},0).to({startPosition:531},4).wait(1).to({startPosition:532},0).wait(1).to({mode:"single",startPosition:556},0).to({x:990.4,y:580.9,mode:"synched",loop:false},4).wait(17).to({startPosition:586},0).to({x:680.9,y:624.9,mode:"single",startPosition:589},4).wait(35));

	// n红鸟
	this.instance_1 = new lib.鸟说话("single",429);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1299.4,303.2,1.5,1.5,0,0,0,55.4,65.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(151).to({mode:"synched",loop:false},0).wait(7).to({mode:"single",startPosition:405},0).wait(106));

	// jg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C1693D").s().p("AgFAGQgCgDAAgDQAAgDACgCQADgDACAAQADAAACADQADACAAADQAAADgDADQgCADgDAAQgCAAgDgDg");
	this.shape_6.setTransform(1196.3,574.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#723C39").s().p("AgFAGQgCgDAAgDQAAgDACgCQADgDACAAQADAAACADQADACAAADQAAADgDADQgCADgDAAQgCAAgDgDg");
	this.shape_7.setTransform(1196,574.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFD7D1").s().p("AhBiAIB3AVIARDpIiNADg");
	this.shape_8.setTransform(1173.2,498.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#915756").s().p("AgmABIAKiDIBDgCIgBAJIgEEAg");
	this.shape_9.setTransform(1162.7,498.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8E6E2").s().p("AAtAjIhngYIADgwIByAcIAAAvg");
	this.shape_10.setTransform(1174,483.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFCDC5").s().p("Ag7gFIAAgJIAPAAIBnAXIABAGg");
	this.shape_11.setTransform(1172.6,486.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8F5555").s().p("Ag2gJIBtgQIgDAwIgPAAIhCACIgZABg");
	this.shape_12.setTransform(1162.9,482.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#DB6122").ss(1,1,1).p("As7FMIgggNIE1qvIAiADIMvBTIEMIlIElBnIrygC");
	this.shape_13.setTransform(1170.7,519.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B0D08").s().p("ACQlQIADAIIjxI6IAABaIg1AFg");
	this.shape_14.setTransform(1102.6,519.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E0834C").s().p("AhWh4ICvgBIgLDwIimADg");
	this.shape_15.setTransform(1202,573.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C1693D").s().p("AhSgBICmgDIgBAIIimABg");
	this.shape_16.setTransform(1201.4,586.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C16435").s().p("AgFB9IADj5IAIAAIgCDyIAAAHg");
	this.shape_17.setTransform(1192.6,574.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#723C39").s().p("AEJiXIASAAIAAAcIAAETIgSABgAkaCCIAAkYIAMAAIAAAUIAAEEgABKCAIAOkXIAKAAIgCAvIgLDog");
	this.shape_18.setTransform(1214.6,573.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#84221B").s().p("Al4gKILxADIgBAOIhyABIgXAAIgRAAIiCAAIglAAIgKAAIlTACIgUAAIgLAAIgzABg");
	this.shape_19.setTransform(1219,557.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F0CBB6").s().p("AlrjEIEzBuIAyAAIAAEYIioABIi9ACgAlRhaIAADNIDpABIADACIAGjJIjlgOgAAZhDIAAgTIFTgCIgOEXIh8ABIABgJIALjxIiwACIgJAAIgED5IgYABg");
	this.shape_20.setTransform(1187.1,567.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DE854C").s().p("AlTgSICogCIAMAAIAUAAIAZAAIAKAAICmgBIB7gBIALAAIAdgBIBxAAIACAaIqnAVg");
	this.shape_21.setTransform(1203.5,588.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#97694F").s().p("AnYB3IC9gCIAAAsIi9AGgAEHh2IACgwIAlAAIgDAxgAHCimIAXAAIAAAbIgXACgAhnikIAUAAIAAATIgJgBIAAABIgLABg");
	this.shape_22.setTransform(1197.9,575.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E59D6A").s().p("AnljiIAaAJIAAGJIAAAwIAAACIgaABgAHPhQIAXgCIAAEUIgXAAgAhaCtIAAkEIALgBIAAgBIAJABIAAEFgAEUg9IAkABIgSDmIgdAAg");
	this.shape_23.setTransform(1196.6,569.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#590A03").s().p("Ak+FRIE1qvIAhAEIEnJmIgjAJIkUpOIgEgIIkiKgg");
	this.shape_24.setTransform(1116.6,517.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8F5755").s().p("AkSB+IAAhaIDzo6IETJOIAfALIAAHHIolANg");
	this.shape_25.setTransform(1120.6,539.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5F0702").s().p("Ah8goIgagJIgfgLIAkgJIFHB1IAAAWg");
	this.shape_26.setTransform(1163.1,551.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7697AD").s().p("AAQDtIADhDIBGAEIgBBAgAhaDrIAAhIIBSAFIgBBFgAATCbIADhSIBFAFIgBBQgAhaCVIAAhTIBUAFIgCBSgAghiUIAbgrIApAAIAOAsgAgBjIIAWglIALAlg");
	this.shape_27.setTransform(1165.4,553);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EFD7D1").s().p("AhJBOIASgdIBRABIANAAIgNgsIgOAAIgpAAIAGgIIAhAAIANAAIgQgzIAPgZIA0Cdg");
	this.shape_28.setTransform(1167.6,533.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#915756").s().p("AAIA0IgOgsIANAAIANAsgAgIAAIgLglIAIgOIAPAzg");
	this.shape_29.setTransform(1169.5,532.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D06D52").s().p("ABXBwIg/ixIgMAUIgPAZIgIAOIgXAkIgFAJIgbArIgRAdIgRAAIgGgBICDjdIBSDfg");
	this.shape_30.setTransform(1168.7,529.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhAFuIlIh2IknpnIMuBTIEMIlIElBngAkpDRIAFABIARAAICUABIAYAAIATAAIhRjfg");
	this.shape_31.setTransform(1187.8,519.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#701516").s().p("AAOBZIgzidIAMgUIA/Cxg");
	this.shape_32.setTransform(1173.6,532.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(264));

	// 图层_4
	this.instance_2 = new lib.元件3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1258.8,449,1,1,0,0,0,17.5,17.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(225).to({_off:false},0).to({alpha:1},4).wait(35));

	// t
	this.instance_3 = new lib.t("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1170,470,1,1,0,0,0,138.8,59.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(264));

	// 画架
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AjjCuIAAlbIHHAAIAAFbg");
	this.shape_33.setTransform(1227.7,711.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#33CC00").s().p("AjjCuIAAlbIHGAAIAAFbg");
	this.shape_34.setTransform(1168.5,711.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC00").s().p("AjiCuIAAlbIHFAAIAAFbg");
	this.shape_35.setTransform(1109.2,711.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#66CCFF").s().p("AjjCuIAAlbIHGAAIAAFbg");
	this.shape_36.setTransform(1050.1,711.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC6600").s().p("AjiCuIAAlbIHFAAIAAFbg");
	this.shape_37.setTransform(1287,711.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("A3wEJIAAoRMAvgAAAIAAIRg");
	this.shape_38.setTransform(1168.3,710.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CCCCCC").s().p("A3wEJIAAoRMAvgAAAIAAIRg");
	this.shape_39.setTransform(1164.7,713.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#CC9966").ss(1,1,1).p("AVshmIAAEiIAAQNMgrXAAAIAAvHIAAkmQEOj7GQCJQIplmM3GRQIEkHDVEMgA1rgkIAAykMArXAAAIAARiAQntHQAABIg0AzQgzA0hIAAQhJAAg0g0QgygzAAhIQAAhJAygzQA0gzBJAAQBIAAAzAzQA0AzAABJgA1rECQVIiBRFBXQCngiCjAG");
	this.shape_40.setTransform(1170,533.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#61C194").s().p("A1rgFQEOj7GRCJQIolmM3GRQIDkHDWEMIAAEjQijgHinAiQxFhX1ICBg");
	this.shape_41.setTransform(1170,529.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-1.2,42.8,0,-1.2,42.8,106.8).s().p("AwjKiQgtiQAAiYQAAjWBXjDQBUi9CZiRQCZiSDGhQQDNhSDgAAQDhAADNBSQDGBQCZCSQCZCRBUC9QBXDDAADWQAACYgtCQg");
	this.shape_42.setTransform(1174.9,594.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(255,255,255,0.4)","rgba(255,255,255,0.4)"],[0,1],0,9.8,0,-9.8).s().p("AhhgrIA2g2ICNCNIg2A2g");
	this.shape_43.setTransform(1027.6,658.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(255,255,255,0.4)","rgba(255,255,255,0.4)"],[0,1],9.8,0,-9.8,0).s().p("AhhAsICNiNIA2A2IiNCNg");
	this.shape_44.setTransform(1312.6,658.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(255,255,255,0.4)","rgba(255,255,255,0.4)"],[0,1],0,-9.8,0,9.8).s().p("AhhgrIA2g2ICNCNIg2A2g");
	this.shape_45.setTransform(1312.6,410.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(255,255,255,0.4)","rgba(255,255,255,0.4)"],[0,1],-9.8,0,9.8,0).s().p("AhhAsICNiNIA2A2IiNCNg");
	this.shape_46.setTransform(1027.6,410.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D68045").s().p("A+DAOIgXgbMA81AAAIgXAbg");
	this.shape_47.setTransform(1169.6,683.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFD08A").s().p("A+ZAJIAAgQMA8zAAAIAAAQg");
	this.shape_48.setTransform(1169.6,671.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EDB868").s().p("A+ZA5IAAhxMA8zAAAIAABxg");
	this.shape_49.setTransform(1169.6,676);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#EDB155","#EDB45D","#EDB766","#EDB868","#EDB765","#EDB35B","#EDB155"],[0,0.086,0.247,0.522,0.749,0.929,1],-135,0,135,0).s().p("A1FCKIAhkSMApGgABIAkETg");
	this.shape_50.setTransform(1169.8,853.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFD08A").s().p("Az/gJMAoMAAAIAYASMgpJAABg");
	this.shape_51.setTransform(1169.4,839.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#87593A").s().p("Ag4A5QgXgXAAgiQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAigXAXQgYAXghAAQggAAgYgXg");
	this.shape_52.setTransform(1169.9,714.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#DEA152").s().p("AhFBGQgdgdAAgpQAAgoAdgdQAdgdAoAAQApAAAdAdQAdAdAAAoQAAApgdAdQgdAdgpAAQgoAAgdgdg");
	this.shape_53.setTransform(1169.9,716.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D68045").s().p("AnsBKIAAheQAAgWAQgQQAQgPAWAAINtAAQAWAAAQAPQAQAQAAAWIAABeg");
	this.shape_54.setTransform(1170.6,682.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDB868").s().p("Am2FTQgWAAgQgPQgQgQAAgWIAAo7QAAgWAQgQQAQgQAWAAINtAAQAWAAAQAQQAQAQAAAWIAAI7QAAAWgQAQQgQAPgWAAg");
	this.shape_55.setTransform(1170.6,709);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D68045").s().p("AhdNrQgKAAgIgHQgIgIAAgLIAA6hQAAgLAIgIQAIgHAKAAIC6AAQALAAAIAHQAIAIAAALIAAahQAAALgIAIQgIAHgLAAg");
	this.shape_56.setTransform(1170.6,786.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#9C5016").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAQAAAKALQALALAAAOQAAAPgLALQgKALgQAAQgOAAgLgLg");
	this.shape_57.setTransform(1169.9,874.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A37352").s().p("AAyAoQglgQgNAAQgMAAgkAQQgVAJAAgWQAAgcAVgVQAUgUAcAAQAdAAAVAUQAUAVAAAcQAAAQgKAAQgFAAgFgDg");
	this.shape_58.setTransform(1169.9,355);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#87593A").s().p("Ag4A4QgXgWAAgiQAAggAXgXQAYgYAgAAQAhAAAYAYQAXAXAAAgQAAAigXAWQgYAYghAAQggAAgYgYg");
	this.shape_59.setTransform(1169.9,357.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DEA152").s().p("AhFBGQgdgdAAgpQAAgoAdgdQAdgdAoAAQApAAAdAdQAdAdAAAoQAAApgdAdQgdAdgpAAQgoAAgdgdg");
	this.shape_60.setTransform(1169.9,359.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDB868").s().p("AnPA+IAAh7IOfAAIAAB7g");
	this.shape_61.setTransform(1169.6,387.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DEA152").s().p("AlNATIiagJIAAglIPPAAIAAAlQg7AEhZAFQizAJibAAQiZAAi6gJg");
	this.shape_62.setTransform(1169.6,395.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDB868").s().p("AjEDkQgPAAgKgKQgLgLAAgPIAAl/QAAgPALgLQAKgKAPAAIGJAAQAPAAAKAKQALALAAAPIAAF/QAAAPgLALQgKAKgPAAg");
	this.shape_63.setTransform(1169.6,364.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFD08A").s().p("AjNDvQgQAAgLgLQgLgLAAgPIAAmTQAAgPALgLQALgLAQAAIGcAAQAPAAALALQALALAAAPIAAGTQAAAPgLALQgLALgPAAg");
	this.shape_64.setTransform(1169.6,364.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F0AE62").s().p("AgmGlQgjAAgXgVQgXgUAAgcIAArCQAAgcAXgTQAXgTAjAAIBBAAQAlAAAcATQAcAUAAAbIAALCQAAAbgcAVQgdAVgkAAg");
	this.shape_65.setTransform(1170.6,316.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EFEFEF").s().p("A2yUGMAAAgoMMAtlAAAMAAAAoMg");
	this.shape_66.setTransform(1170.1,533.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#DEA152").s().p("AglOLQgQl3AAoUQAAoTAQl3QAPl3AWAAQAWAAAQF3QAQF3AAITQAAIUgQF3QgQF4gWAAQgWAAgPl4g");
	this.shape_67.setTransform(1314.6,533);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#DEA152").s().p("AglOLQgQl3AAoUQAAoTAQl3QAQl3AVAAQAWAAAQF3QAQF3AAITQAAIUgQF3QgQF4gWAAQgVAAgQl4g");
	this.shape_68.setTransform(1026.7,533);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#DEA152").s().p("Av6AmQmmgQAAgWQAAgVGmgQQGngQJTAAQJUAAGnAQQGmAQAAAVQAAAWmmAQQmoAQpTAAQpSAAmogQg");
	this.shape_69.setTransform(1169.2,407.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#DEA152").s().p("Av6AmQmmgPAAgXQAAgVGmgQQGogQJSAAQJTAAGoAQQGmAQAAAVQAAAXmmAPQmlAQpWAAQpVAAmlgQg");
	this.shape_70.setTransform(1169.2,660);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFD08A").s().p("A43AMIAAgXMAxvAAAIAAAXg");
	this.shape_71.setTransform(1170.1,394.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EDB868").s().p("A5IV7MAAAgr1MAyRAAAMAAAAr1g");
	this.shape_72.setTransform(1169.9,532.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D68045").s().p("AANQOMgEdggbIEKAAMAEXAgbg");
	this.shape_73.setTransform(1281.4,586.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F0AE62").s().p("EgIngvWQgGglAOgmQAbhMBggCQA0gCAiASQAcAPAIAXUAAGAARAGnAxHMAGnAxFIj6ANg");
	this.shape_74.setTransform(1291.2,654.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D68045").s().p("EAFKAxIMgMwhgwIAIgbQAIgdAFgKQASgkAtgYIA+B5MAM7BZpIhkHrg");
	this.shape_75.setTransform(1283,655.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D68045").s().p("Ag+A/QgagaAAglQAAgkAagaQAagaAkAAQAlAAAaAaQAaAaAAAkQAAAlgaAaQgaAaglAAQgkAAgagag");
	this.shape_76.setTransform(1332.3,968.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D68045").s().p("AkQQOMAEXggbIEKAAMgEcAgbg");
	this.shape_77.setTransform(1058.5,586.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F0AE62").s().p("EgIpAxkMAGngxFUAGngxHAAGgARQAIgXAcgPQAigSA0ACQBgACAbBMQANAmgFAlMgNXBhHg");
	this.shape_78.setTransform(1048.6,654.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D68045").s().p("EgHmAp8MAM7hZpIA/h5QAsAYASAkQAJARAMAxMgMvBgwIg6Afg");
	this.shape_79.setTransform(1056.9,655.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D68045").s().p("Ag+A/QgagaAAglQAAgkAagaQAagaAkAAQAlAAAaAaQAaAaAAAkQAAAlgaAaQgaAaglAAQgkAAgagag");
	this.shape_80.setTransform(1007,968.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#82C450").s().p("A2MH2QpNhSAAh0QAAhACeiMQCviaEAiPQEyiqFMhjQGMh1GCAAQGDAAGLB1QFNBjEyCqQEACPCvCaQCeCMAABAQAAB0pNBSQpMBStBAAQtAAApMhSg");
	this.shape_81.setTransform(1165.6,938.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]}).wait(264));

	// 背景
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2B0D08").s().p("AEOg7IhjgCIAADIIgnACIAAjMIgrgBIhFCoIggABIA8iqIizgDIgJCfIgnACIAHiiIhTgCIAHCcIg1gGIgGiXIg1gBIgXgpIBLACIgBgrIAzAAIACAtIBWADIABgoIAqACIgCAoIC9AGIAJgcIAuAAIgLAdIAcACIAAgjIAngIIAAAsIBmADIABgaIAbgMIAAAnIBUADIAAAfIhTgCIABDVIgrACg");
	this.shape_82.setTransform(239.7,659.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#C1693D").s().p("AgKANQgFgGAAgHQAAgHAFgFQAFgFAFAAQAHAAAEAFQAEAFABAHQgBAHgEAGQgEAFgHAAQgFAAgFgFg");
	this.shape_83.setTransform(482.1,638.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#723C39").s().p("AgKANQgFgGABgHQgBgHAFgFQAFgFAFAAQAGAAAFAFQAFAFgBAHQABAHgFAGQgFAFgGAAQgFAAgFgFg");
	this.shape_84.setTransform(481.5,638.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EFD7D1").s().p("AiDkAIDuApIAiHTIkZAFg");
	this.shape_85.setTransform(435.9,486.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F8E6E2").s().p("ABaBGIjPgwIAHhhIDkA4IAABfg");
	this.shape_86.setTransform(437.4,456.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#8F5555").s().p("AhugUIDdgfIgHBhIgeABIiFADIgzACg");
	this.shape_87.setTransform(415.2,454.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#915756").s().p("AhMACIAUkHICFgEIAAASIgJIBg");
	this.shape_88.setTransform(414.9,485.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EFCDC5").s().p("Ah3gLIABgRIAdgBIDQAvIABAMg");
	this.shape_89.setTransform(434.6,461.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#AA2A10").s().p("AmpB0IqQjrIYpAiIJKDNg");
	this.shape_90.setTransform(494.7,590.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E3D4C9").s().p("ACEhuIAPDVIklAIg");
	this.shape_91.setTransform(327,664.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E0834C").s().p("AiujxIFggDIgCA4IgTGrIlOAGg");
	this.shape_92.setTransform(493.4,636.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C1693D").s().p("AimgDIFOgGIgCARIlNACg");
	this.shape_93.setTransform(492.3,661.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#733831").s().p("Ai8guIF5gDIAABWIl5ANg");
	this.shape_94.setTransform(409.7,667.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#DE854C").s().p("AqmgmIFQgCIAXAAIAoAAIAxgBIAVAAIFNgDID1gCIAYAAIA4AAIDigCIAEA1I1NAsg");
	this.shape_95.setTransform(496.5,666.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#84221B").s().p("ArxgUIXjAEIgDAfIjjABIgtAAIgjAAIkEABIhKAAIgVAAIqlADIgoAAIgXAAIhmABg");
	this.shape_96.setTransform(527.4,604.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F0CBB6").s().p("ArUjiIA1AAIAAEhIAVABIG9ACIAEAFIAIkpIC3AAIAAHAIlQACIl6ADgAA0jiIA4AAIgGG/IgyABgAHJDIIATmqID5AAIgXG6Ij2ACg");
	this.shape_97.setTransform(463.3,640.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#C16435").s().p("AgLD7IAGnAIABg1IAQAAIgDHmIgBAPg");
	this.shape_98.setTransform(474.7,637.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#97694F").s().p("ACeAvIAEheIBKAAIgHBggAITgwIAuAAIAAA1IguAEgApAgrIAoAAIAAAlIgRAAIAAABIgXABg");
	this.shape_99.setTransform(522.2,610.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D7A78D").s().p("AHZCmIADg4IlhADIgSAAIAAA1Ig4AAIAAhLIAAgmIKngDIgGB0gAjECmIAFhrInLgbIgYANIAAB5Ig1AAIAAlLIJlDbIBlgBIAABxg");
	this.shape_100.setTransform(463.6,601.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#7697AD").s().p("AAhHZIAEiFICNAHIgDCBgAi1HVIAAiPICkAKIgDCIgAAmE1IAHijICJAJIgDCigAi1EqIAAioICnAMIgDClgAhDkpIA1hXIBUAAIAcBYgAgDmSIAshJIAXBJg");
	this.shape_101.setTransform(420.3,595.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#915756").s().p("AAQBoIgbhYIAZAAIAbBYgAgRgBIgXhJIARgcIAfBlg");
	this.shape_102.setTransform(428.5,555.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EFD7D1").s().p("AiTCcIAkg6ICkABIAZAAIgbhYIgaAAIhTAAIALgQIBDAAIAaAAIgghmIAegyIBoE7g");
	this.shape_103.setTransform(424.7,555.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D06D52").s().p("ACuDgIh/ljIgYAoIgdAyIgSAcIgtBJIgKARIg2BXIgjA6IgiAAIgKgDIEHm6ICiG/g");
	this.shape_104.setTransform(426.8,549);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#701516").s().p("ADwDhIhok6IAYgpIB/FkgAhlDcIi6m8IHDACIkHG6g");
	this.shape_105.setTransform(415.5,548.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#A82B06").s().p("ADRGvIjrgrIijlUIDfg8IC6G9gAk1jLIhujlIKbAKICsEMg");
	this.shape_106.setTransform(383.3,527.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E59D6A").s().p("AvKnFIA0ATIAAFLIAAHGIAABiIAAAEIg0ABgAOeiiIAugDIAAIpIguABgAi1iwIAWgBIAAgBIASAAIAABLIAAHAIgoABgAIph7IBGABIgkHOIg4AAgAmPC+Im9gCIADmpIHKAcIgEBqIgIEqgApPCRICPADIARAAIAEh/IgTgCIiMgIgAsmCNIChADIAWAAIAEiHIgXgBIikgJgApJgSICMAIIATAAIAFihIgUgBIiKgJgAsmgdICkAJIAXABIAGilIgZgBIiogMg");
	this.shape_107.setTransform(482.7,628);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#5F0702").s().p("Aj4hQIg0gTIgTgGIgrgQIBHgRIKPDrIAAAqg");
	this.shape_108.setTransform(415.7,592.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#DB6122").s().p("AnsJXIg7h8IDrArIANAFIALAAIAiAAIEmACIAwABIAnAAIihnBInEgCIjgA8Ih5j6ILbAwIiskMIqdgKIiKkfIZeCmIIZRLg");
	this.shape_109.setTransform(435.8,518.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#AA5F4D").s().p("AidBgIE4jlIADAsIkWDdIgWACg");
	this.shape_110.setTransform(324.4,662.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#522A1E").s().p("AirAVIAAgpIDpAAIBfAAIAPAkIhIAFg");
	this.shape_111.setTransform(292.9,674);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#602D2A").s().p("AiaBsIAAgDIA/gyIAOgLIC9iVIArgCIhMDXg");
	this.shape_112.setTransform(291.2,661.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#2B0D08").s().p("AEgqgIAHAPInkR2IAAC0IhpAIg");
	this.shape_113.setTransform(294.7,527.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#590A03").s().p("Ap+KjIJq1gIBEAHICKEgIBuDlIB5D6ICjFVIA7B7IhIARIhGiWIgFgLIghhGImbtwIgJgUIgYgzIgHgPIpFVBg");
	this.shape_114.setTransform(322.6,525);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#8F5755").s().p("ABFMtIgDgrIlKAOIgrACIi+CVIAAntIDyjsIFigHIF3DgIAAJSImGAKgAnxDTICWgDIiWCDgAEADEIDagFIAAB1gAnhA6IAHgTIADgGIAIgVIBpBkIiRACgAmzg9IF6vFIGaNxIjyD6IlgAFgAGHhAIBGCVIArAPIkBADg");
	this.shape_115.setTransform(333.2,571.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#723C39").s().p("Am/HQIl4jhIliAIIgXAAIjbDOIAAAeIgSARIADHoIg/AxIAAsEIAAi0IHlx1IAYAzImGPeICyCmIAkAAIFhgFIDzj7IAhBGIihCzIAVAAIECgDIATAGIAAONIgxABgA2LD8IgTAAIABCPIASgQICViCgAqaDsIgdABID4CEIAAgUIAAh1gA2mCaIAUAAICSgCIhphjIgJAUIAIgVIgOgNgAzvQQIBNjYIFLgOIk5DmgAW3F9IAjAAIAAA6IAAInIgjABgAFvOzIAAnBIAAhxIAXAAIAAAoIAAIKgAQ4OuIAXm8IAGh0IAUAAIgEBfIgWHRgAklMVIAAkjIAAh5IAYgNIgDGqgAB7LtIADiAIASABIgEB/gAhILqIADiJIAWACIgECHgAB/JOIADihIAUABIgFChgAhFJEIADilIAZACIgFCkg");
	this.shape_116.setTransform(425.5,567.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#64302F").s().p("AnpH+IARgSIAAgeIDcjOIAWAAIjyDsIAAHtIgPAMgAnqEFIASAAIAAB/IgSAQgAD8D2IAdgBIDaBxIAAAUgAnyCjIAuhzIAOAOIgIAUIgDAHIgHATIgWA3gAj8CgIizimIGGveIAJATIl6PGIDCCrgAD6CZIChizIAFAMIiQCng");
	this.shape_117.setTransform(330.7,567);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#D1DE42").s().p("AoQGbQg2hBgNg4QgMA3iHgLQiDgKg0gvQhEg9gChCQAAgYAHgnIANhKQgogDgYgjQgVggACgpQADgqAbgVQAfgYAzAQQh1hgAthYQAnhMB6geQBsgbBmBAQAaAQAgAbQAVASAAgEQAPhdDEAOQBCAEBHAQQA9AOAJAHQgIgdAegcQAdgaA2gRQB+gmCCAtQB8AsAPAKQArAcAVBSQAqggA1ABQAwACAhAbQAiAcgGAjQgHApg6AhQCdgKBgANQB/ARBUA9QAbAUAPAUQgcgUgmgPQhDgZhRgGQhBgFhYAIQhvAJhbAZQgqADguAIQgahdhUg4QgxgghIACQg8ACg/AYQhAAZgtA0QhPgkhKgBQhLgBg0ArQgwAngSBAQg4gJg1AGQgpAFgeAlQgbAhAAAlQAAAmAaAgQAbAfAqALQgkBKAqBtQANAiAWAiQAaA4AvA3QhHgwg0g+g");
	this.shape_118.setTransform(1694.9,591.1,0.36,0.36);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#7AB157").s().p("AiTFaQh1gUhHhiQAAALgKAWQgNAggYAQQhIAyiDh3QgXA6g1AOQgxANhDgXQAbgCASgEQB9gZAlhyQAbAJAggIQAdgIAagTQAXgQAXgXQBAA3B8ApQBRAbBMgBQBcgBA4gqQAegXAMghQB9ADBkghQBtgkAWhKQAOgugXgoQgWglgtgTQBAggAwg1QAxg2AMgsQAhAsgTAqQgTAphEAeQBHABBhAeQB4AkgRAsQgOAkgyALQgeAGg6gCQA2A0ggAqQgaAjhSAYQhEAThUAGQhNAFgggJQAxBKhMA8Qg+AxhcALQhoAOhGAAQgpAAgcgFg");
	this.shape_119.setTransform(1712.4,601.2,0.36,0.36);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#A9D048").s().p("ADrI6Qh0gThHhjQgBAMgJAVQgOAggXAQQhHAziEh3QgcBIhNAEQhFADhYgyQhUgvhChHQhEhLgPhBQgMA3iHgLQiDgKg0gvQhEg9gChCQAAgYAHgnIANhJQgogDgYgkQgVggACgpQADgqAbgVQAfgYAzAQQh1hgAthYQAnhMB6geQBsgbBmBAQAaAQAgAbQAVASAAgEQAPhgDRASQBFAGBGARQAuALAIAFQgHgbAdgbQAdgcA2gQQCAgnCBAtQB8AsAPAKQArAcAVBSQAqggA1ABQAwACAhAbQAiAcgGAjQgHApg6AhQCdgKBgANQB/ARBUA9QBKA3gHA2QgHA3hXAlQBHABBiAdQB4AlgSArQgOAkgxALQgeAHg7gCQA2A1gfAqQgaAjhSAXQhFAUhTAFQhOAGgggKQAxBKhLA8Qg/AxhcAMQhpANhFAAQgpAAgdgFg");
	this.shape_120.setTransform(1698.6,593.1,0.36,0.36);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#629552").s().p("AlnFsQhkiLgJjKQhiiLgPgdQgqhYAAiKQAAgrACgVQAEgiAOgiQAWCEA+A1QAnAhBvA0QAmDCBqBkQA0AzA8ANQA5ANA4gXQCGCKC0g7QCxg6B9jTIAIgOIAAALQAADfhsCeQhtCeiZAAQhXAAhOg5QgtAwgzAZQg1Abg6AAQiLAAhmiMg");
	this.shape_121.setTransform(1654.5,612.7,0.36,0.36);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#A9D048").s().p("ADyIoQhWgBhphHQg5gmgzg3QhGgMhPg0QhfhAg7hZQg6hYAJhBQgqhAgRg7QgSg9AMguQAKgrAigXQAggWAygCQghhHAOg2QAOg7BAgKQA+gKBRAqQAAgIADgHQAQhDBMgEQBMgEBbA9QBaA8A1BaQA1BZgPBDQBQA/AsBSQAsBSgPA9QgHAcgTASQAiA5ANAzQAOA2gKApQgLArgiAXQghAWgzAAQAEAdgFAUQgRBChRAAIgFAAg");
	this.shape_122.setTransform(1661.3,581.1,0.36,0.36);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#7AB157").s().p("AmkNSQhkhZgJiCQhIhCgphWQgphZAAhjQAAhaAjhTQAhhRA/g/Qg/hbAAhwQgBh9BNhgQBMheBygVIgCggQAAiOBghkQBehkCFAAQCEAABeBiQBfBiABCMQB4AQBQBgQBSBhAACCQAAA6gTA5QA8A+AhBOQAiBQAABXQAABbgkBTQgjBQg/A/QANAvAAAsQAACPhsBmQhtBmiZAAQhYAAhOglQhbBAh0AAQiLAAhlhag");
	this.shape_123.setTransform(1656.7,588.6,0.36,0.36);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#73321D").s().p("AAnEAQg4gPgBgOQgOjAghinIgfiCIAgAuQAlA6AeA9QBjDDgFCeQgBAHgOAAQgOAAgdgHg");
	this.shape_124.setTransform(1655.8,626.4,0.36,0.36);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#73321D").s().p("AhxHgIASpmQAAg/hKhiQg2hIg7gzIAyg9QAmAhAxA4QBPBcAeBKIBJAAQAehKBPhcQAxg4AmghIAyA5Qg6Ayg3BLQhKBkAAA/IASJmg");
	this.shape_125.setTransform(1657.7,640.7,0.36,0.36);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#7AB157").s().p("AmjIHQhuhlgPiVQgTgPgTgWQCjAaBjhrQAggiAUgwQARgoAKg1IANhIIAJgdIACgGIANgWQADAAAKgKIAOgNIAbgRIBNg0QAsgfAcgdQA+hBAahTQAZhPgKhYQBLAjA1BCQA1BCASBSQB3ANBRBaQBSBbAAB6QAABEgdA/QgcA8gyAtQAMAsAAApQAACGheBeQheBfiEAAQhBAAg7gZQhdA5hsAAQiXAAhvhmg");
	this.shape_126.setTransform(1631.1,609.6,0.36,0.36);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#A9D048").s().p("Al5IXQhuhlgPiVQg5gugghBQghhEAAhNQAAh1BLhbQBKhaBygXQAGiQBnhkQBohkCPAAQB/AABiBQQBgBQAbB6QB3ANBRBaQBSBaAAB6QAABFgdA+QgcA9gxAsQAMAsgBAqQABCFheBfQheBeiFAAQhAAAg8gZQhcA5htAAQiWAAhwhmg");
	this.shape_127.setTransform(1629.6,609,0.36,0.36);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#73321D").s().p("AhpGrIARokQAAg5hChXQgvg/g1gvIAvgzQAnAiAoAtQBJBSAeBGIAAjHIBFAAIAADHQAehHBDhRQAsg2AdgZIApAzQg2AvgwA/QhEBXAAA5IAPIkg");
	this.shape_128.setTransform(1630.3,643.8,0.36,0.36);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#385B3D").s().p("AlXCDQBHgVApgtQAJgKC4j9QA7ASA8ArQAiAaA4AvQAuAlAiADQAsAEAxgrQg8B2h0BGQh3BKiNgBQiIAAhzhDg");
	this.shape_129.setTransform(1715.9,607.3,0.36,0.36);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#385B3D").s().p("AkCC6QhthKgzh3QAmgIAigMQAHAGBCh5QBBh7AJAGQCVBVAVAJQBTAiBggSQAggGAoASQASAIA1AiQArAaAYAGQAjAJAYgXQgkCTh2BeQh5BhibAAQiHAAhwhLg");
	this.shape_130.setTransform(1693.2,610.6,0.36,0.36);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#629552").s().p("Ak5E6QiCiCAAi4QAAi3CCiCQCCiCC3AAQC4AACCCCQCCCCAAC3QAAC4iCCCQiCCCi4AAQi3AAiCiCg");
	this.shape_131.setTransform(1692.8,604,0.36,0.36);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#73321D").s().p("ABDCfQABg0gbhDQg0iFiLhJIBnAwQBtBBAiBKIA3CSg");
	this.shape_132.setTransform(1686.6,620.7,0.36,0.36);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#73321D").s().p("AhFBVIA9irQAXAoAagQIAVgYQAGCoACADQACACgjAAIhqgCg");
	this.shape_133.setTransform(1692.6,626.2,0.36,0.36);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#73321D").s().p("AhBgDQAThPA5gmQATgMAUgGIAQgEQhFAsgDBjQgBAyAMApIgxAzg");
	this.shape_134.setTransform(1692.5,621.6,0.36,0.36);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#73321D").s().p("AiTCaQAUhFAvhKQBdiRCHgTIggAXQgnAfggAiQhmBugCBtg");
	this.shape_135.setTransform(1698.6,620.9,0.36,0.36);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#73321D").s().p("AiJGIIAjsPIDNAAIAjMPg");
	this.shape_136.setTransform(1692.7,640.5,0.36,0.36);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#82C450").s().p("EhkXAEOMBc4gJzQ/Zi2asAxUAasAAzhJNgOyQAzgNFvgXQGPgaBKgKIAAASMCRKAGMMAAAAnFg");
	this.shape_137.setTransform(1903.6,797.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#629552").s().p("AvKGfQimgBkegRQkxgThDgGQjYgUiXgjQh3gdh5g8QiYhLC1gEQgngViTgcQi7gghggTQluhGAihRQAchAEXgrQCTgXDUgTQCegVHVgWQG4gUC2geQFRg3DygLQD7gNFTAYQC/AOFTAnQF3ArCbAOQBoAJD+AOQDlAOB/ANQCrASELBaQEiBjCRAXQEEApCJAeQDLArARAwQASAyjSAbQkYAjmVgVIlTgVQjMgMiPgBQhsgBi5AkQjOAohWAFQiQAJklgPQkfgPiVAKQiUAKjAAjQjaAqh2AUQiyAdj2AAIgYAAg");
	this.shape_138.setTransform(421.9,685.9,0.9,0.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#7AB157").s().p("A0dIwQqggeiDhSQhIgulbgUQjOgMoogLQo5gLkNgOQm9gYjVgyQiAgfjfhzQjXhxiIgbIi7gkQiKgchjgdQkphVg4h4QgfhCCcgxQBsgiC1gVQGKgvGgAJQEJAGKxAiQBGADDIARQDaASCsAIQJcAfNmgbQBHgDNzhJQMGhBC3AOIHnAvQFjAiEvAOQDaAKEOgiQFRgqCUgFQG6gQN9B5QCsAYCwADQCGACDXgJQCAgGDkAMQD8AOBpgBQDWgDE4AUIINAjQFVATAxBhQATAlgcApQgZAkgvAZQhsA5mtBRQk6A8m0BAQFDAEDcAsQDeAtABA9QAABDj4AwQj4AwlfACQlfACj5guQj5gtgBhCQAAgfA8gcQjDATiSAGQi4AJifgJQl5gUvMAaQv0AbkgAuQhOAMnOBaQlIBAjZAQQirANjnAAQjjAAkegMg");
	this.shape_139.setTransform(559.3,700.1,0.9,0.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#82C450").s().p("A0lKzIAA1mQCoDBDeCxQC5CTDwCSQDKB6EECFQJHErMHClg");
	this.shape_140.setTransform(7.5,762.6,0.9,0.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#A9D048").s().p("EjmfAnEMAAAhMWQA0AlHtgIQFugFDNgPQS+hXIBgTQK1gaPlASQIGAAJlATQJLASE5AYQKRAxPWAOQPpAOJ/AuQJxAsFMAUQITAhGvAOQPOAhS7gVQWsgZSigyQVyg7TEhmUEcpAUXjaoA4hg");
	this.shape_141.setTransform(1216.5,869.9,0.9,0.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#3391AA").s().p("AgfAOQgEgKgMgQIBgAAIgNASIgDAIg");
	this.shape_142.setTransform(244,197,0.9,0.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgHC3QgEglgQhBQgJgpgEgzIgBgsQAAg0AMglQAMgmARAAQARAAANAmQAMAlAAA0IgBAsQgEAzgJApQgQBBgEAlg");
	this.shape_143.setTransform(244.1,181.8,0.9,0.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#34A6C4").s().p("AgRC3QgJglghhBQgVgpgIgzIgDgsQAAg0AbglQAbgmAlAAQAmAAAbAmQAbAlAAA0IAAAAIgDAsQgIAzgVApQgVApgNAjIgIAag");
	this.shape_144.setTransform(244.1,181.8,0.9,0.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgZC3QgNglgxhBQgegpgLgzIgGgsQAAg0AoglQAogmA2AAQA3AAAoAmQAnAlAAA0IgEAsQgLAzgfApQgfApgSAjIgNAag");
	this.shape_145.setTransform(244,181.8,0.9,0.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#34A6C4").s().p("AgfC3QgEgKgMgQQgXgjgmgpQgmgpgNgzIgHgsQAAg0AxglQAxgmBEAAQBFAAAxAmQAwAlAAA0IABAAIgHAsQgNAzgmApQgmApgXAjIgQAag");
	this.shape_146.setTransform(244.1,181.8,0.9,0.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#CB8456").s().p("AgSABIAAgBIAlAAIAAABg");
	this.shape_147.setTransform(244.1,199.5,0.9,0.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#CB8456").s().p("AgEAAIAGgTIADABIgGASIADAUIgCAAg");
	this.shape_148.setTransform(246.1,199.6,0.9,0.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#CB8456").s().p("AgBAUIADgUIgGgSIADgBIAGATIgEAUg");
	this.shape_149.setTransform(242,199.6,0.9,0.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#CB8456").s().p("AgFAQQgIAAgGgGQgGgGAAgHIAAgMIAzAAIAAAMQAAAHgGAGQgFAGgJAAg");
	this.shape_150.setTransform(244.1,202.6,0.9,0.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#F1F9FA").s().p("Al9F+QieieAAjgQAAjfCeieQCeifDfAAQDgAACeCfQCeCeAADfQAADgieCeQieCfjgAAQjfAAieifg");
	this.shape_151.setTransform(1808.4,243,0.72,0.72,0,0,180);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#F1F9FA").s().p("Aj5D5QhnhnABiSQgBiRBnhnQBohoCRAAQCSAABnBoQBoBnAACRQAACShoBnQhnBoiSAAQiRAAhohog");
	this.shape_152.setTransform(1853,256.9,0.72,0.72,0,0,180);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#F1F9FA").s().p("ABMFSQiHgFhBAAIiiAFQhJABgggLQgogPgSgsQgRgtAAhgQAAjACJiJQCJiIDAAAQDBAACJCIQCJCJgBDAQABCnjIAhQg+AKhmAAIgbAAg");
	this.shape_153.setTransform(1758,255,0.72,0.72,0,0,180);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#F1F9FA").s().p("AysCZQg/AAgtgtQgtgtAAg/QAAg+AtgtQAtgtA/AAMAlZAAAQA/AAAtAtQAtAtAAA+QAAA/gtAtQgtAtg/AAg");
	this.shape_154.setTransform(1800.3,276.1,0.72,0.72,0,0,180);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#DBEFF1").s().p("AmgGhQititAAj0QAAjzCtitQCtitDzAAQD0AACtCtQCsCtAADzQAAD0isCtQitCtj0AAQjzAAititg");
	this.shape_155.setTransform(912.1,-59.9,0.72,0.72,0,0,180);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#DBEFF1").s().p("AkPEQQhxhxAAifQAAieBxhxQBwhxCfAAQCgAABwBxQBxBxAACeQAACfhxBxQhwBxigAAQifAAhwhxg");
	this.shape_156.setTransform(863.4,-44.6,0.72,0.72,0,0,180);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#DBEFF1").s().p("AE5FwQhqgEhGAAIjbAEQiDAChOgMQjZgkAAi2QAAjRCViWQCViVDSAAQDTAACVCVQCVCWAADRQAABpgTAxQgSAwgsAQQgeALg/AAIgWgBg");
	this.shape_157.setTransform(967.1,-46.7,0.72,0.72,0,0,180);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#DBEFF1").s().p("A0ZCnQhFAAgxgxQgygxAAhFQAAhEAygxQAxgxBFAAMAozAAAQBFAAAxAxQAyAxAABEQAABFgyAxQgxAxhFAAg");
	this.shape_158.setTransform(920.8,-23.7,0.72,0.72,0,0,180);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F1F9FA").s().p("AsNJBQh+AAhZhZQhZhZAAh+QAAhyBMhWQBLhUBvgQQANikB5hvQB5hxCmAAQBEAABAAWQA/AUA1AnQA+huBthBQBwhDCEAAQDGAACMCMQCMCMAADGQAAAbgGApIAxAAQB9AABaBYQBZBaAAB9QAAB+hZBZQhaBZh9AAg");
	this.shape_159.setTransform(881,282.2,0.461,0.461,0,0,180);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFDF73").s().p("AlQMeQibhCh4h3Qh4h5hBibQhEihgBiwQABivBEihQBBicB4h3QB4h4CbhCQChhECvAAQCwAAChBEQCbBCB4B4QB4B3BCCcQBDChAACvQAACwhDChQhCCbh4B5Qh4B3ibBCQihBEiwAAQivAAihhEg");
	this.shape_160.setTransform(1544.7,209.2,0.72,0.72,0,0,180);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#7AB157").s().p("ArzD/QiHAAhhgnQhhgoAAg3QAAgvBKglQBIglBvgIIAAgEQAAhIB9gyQB8gzCxAAQCLAABwAiQBBgwBxgbQB1gcCJAAQDOAACSA7QCRA8AABTQAAAUgKAUQCEACBbAmQBdAnAAA2QAAA3hhAoQhhAniIAAg");
	this.shape_161.setTransform(123.4,643.5,0.9,0.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#629552").s().p("AnuD/QhZAAg/gnQhAgoAAg3QAAgvAwglQAwglBIgIIAAgEQAAhIBTgyQBRgzBzAAQBbAABLAiQAqgwBKgbQBMgcBaAAQCHAABgA7QBfA8AABTQAAATgGAVQBWACA7AmQA9AnAAA2QAAA3g/AoQhAAnhYAAg");
	this.shape_162.setTransform(27.6,643.5,0.9,0.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#385B3D").s().p("AnNDrQhVAAgygYQg3gbAAgxIAAhaQAAgUAogNQAfgKBLgKIAAgDQABhCBLgvQBLguBrgBQBUAABFAgQAngsBEgaQBGgaBTAAQB9ABBYA2QBYA3AABNQAAATgGASQBQADA3AiQA3AkABAyQgBAyg6AlQg7AlhRgBg");
	this.shape_163.setTransform(-52.5,645.2,0.9,0.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#D1DE42").s().p("Ai8CWQgghaBDg4QAVgRAfgOIAegMIAcggQAcgfA4gdQAigQAwgGQA3gFAWARQhCgBg6BCQg8BEAZBAQglgSgigDQgrgEgZAVQgsAlgcAuIgMATIgDABQgCAAgBgFg");
	this.shape_164.setTransform(101.3,497.9,0.9,0.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#73321D").s().p("AnrAUIAAgnIPXAAIAAAng");
	this.shape_165.setTransform(214.8,625.6,0.9,0.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#CB8456").s().p("AnrAVIAAgpIPXAAIAAApg");
	this.shape_166.setTransform(214.8,622,0.9,0.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#A85138").s().p("AnrAjIAAhFIPXAAIAABFg");
	this.shape_167.setTransform(214.8,610.7,0.9,0.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#A85138").s().p("AnrAjIAAhFIPXAAIAABFg");
	this.shape_168.setTransform(214.8,602.3,0.9,0.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#A85138").s().p("AnrAjIAAhFIPXAAIAABFg");
	this.shape_169.setTransform(214.8,594,0.9,0.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgQEuIAApbIAhAAIAAJbg");
	this.shape_170.setTransform(251.8,620.1,0.9,0.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgQEuIAApbIAhAAIAAJbg");
	this.shape_171.setTransform(176.9,620.1,0.9,0.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#D1DE42").s().p("AoQGbQg2hBgNg4QgMA3iHgLQiDgKg0gvQhEg9gChCQAAgYAHgnIANhKQgogDgYgjQgVggACgpQADgqAbgVQAfgYAzAQQh1hgAthYQAnhMB6geQBsgbBmBAQAaAQAgAbQAVASAAgEQAPhdDEAOQBCAEBHAQQA9AOAJAHQgIgdAegcQAdgaA2gRQB+gmCCAtQB8AsAPAKQArAcAVBSQAqggA1ABQAwACAhAbQAiAcgGAjQgHApg6AhQCdgKBgANQB/ARBUA9QAbAUAPAUQgcgUgmgPQhDgZhRgGQhBgFhYAIQhvAJhbAZQgqADguAIQgahdhUg4QgxgghIACQg8ACg/AYQhAAZgtA0QhPgkhKgBQhLgBg0ArQgwAngSBAQg4gJg1AGQgpAFgeAlQgbAhAAAlQAAAmAaAgQAbAfAqALQgkBKAqBtQANAiAWAiQAaA4AvA3QhHgwg0g+g");
	this.shape_172.setTransform(108.2,489.1,0.9,0.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#7AB157").s().p("AiTFaQh1gUhHhiQAAALgKAWQgNAggYAQQhIAyiDh3QgXA6g1AOQgxANhDgXQAbgCASgEQB9gZAlhyQAbAJAggIQAdgIAagTQAXgQAXgXQBAA3B8ApQBRAbBMgBQBcgBA4gqQAegXAMghQB9ADBkghQBtgkAWhKQAOgugXgoQgWglgtgTQBAggAwg1QAxg2AMgsQAhAsgTAqQgTAphEAeQBHABBhAeQB4AkgRAsQgOAkgyALQgeAGg6gCQA2A0ggAqQgaAjhSAYQhEAThUAGQhNAFgggJQAxBKhMA8Qg+AxhcALQhoAOhGAAQgpAAgcgFg");
	this.shape_173.setTransform(151.9,514.2,0.9,0.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#A9D048").s().p("ADrI6Qh0gThHhjQgBAMgJAVQgOAggXAQQhHAziEh3QgcBIhNAEQhFADhYgyQhUgvhChHQhEhLgPhBQgMA3iHgLQiDgKg0gvQhEg9gChCQAAgYAHgnIANhJQgogDgYgkQgVggACgpQADgqAbgVQAfgYAzAQQh1hgAthYQAnhMB6geQBsgbBmBAQAaAQAgAbQAVASAAgEQAPhgDRASQBFAGBGARQAuALAIAFQgHgbAdgbQAdgcA2gQQCAgnCBAtQB8AsAPAKQArAcAVBSQAqggA1ABQAwACAhAbQAiAcgGAjQgHApg6AhQCdgKBgANQB/ARBUA9QBKA3gHA2QgHA3hXAlQBHABBiAdQB4AlgSArQgOAkgxALQgeAHg7gCQA2A1gfAqQgaAjhSAXQhFAUhTAFQhOAGgggKQAxBKhLA8Qg/AxhcAMQhpANhFAAQgpAAgdgFg");
	this.shape_174.setTransform(117.4,494,0.9,0.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#629552").s().p("AlnFsQhkiLgJjKQhiiLgPgdQgqhYAAiKQAAgrACgVQAEgiAOgiQAWCEA+A1QAnAhBvA0QAmDCBqBkQA0AzA8ANQA5ANA4gXQCGCKC0g7QCxg6B9jTIAIgOIAAALQAADfhsCeQhtCeiZAAQhXAAhOg5QgtAwgzAZQg1Abg6AAQiLAAhmiMg");
	this.shape_175.setTransform(7.2,542.9,0.9,0.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#A9D048").s().p("ADyIoQhWgBhphHQg5gmgzg3QhGgMhPg0QhfhAg7hZQg6hYAJhBQgqhAgRg7QgSg9AMguQAKgrAigXQAggWAygCQghhHAOg2QAOg7BAgKQA+gKBRAqQAAgIADgHQAQhDBMgEQBMgEBbA9QBaA8A1BaQA1BZgPBDQBQA/AsBSQAsBSgPA9QgHAcgTASQAiA5ANAzQAOA2gKApQgLArgiAXQghAWgzAAQAEAdgFAUQgRBChRAAIgFAAg");
	this.shape_176.setTransform(24.1,464,0.9,0.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#7AB157").s().p("AmkNSQhkhZgJiCQhIhCgphWQgphZAAhjQAAhaAjhTQAhhRA/g/Qg/hbAAhwQgBh9BNhgQBMheBygVIgCggQAAiOBghkQBehkCFAAQCEAABeBiQBfBiABCMQB4AQBQBgQBSBhAACCQAAA6gTA5QA8A+AhBOQAiBQAABXQAABbgkBTQgjBQg/A/QANAvAAAsQAACPhsBmQhtBmiZAAQhYAAhOglQhbBAh0AAQiLAAhlhag");
	this.shape_177.setTransform(12.7,482.9,0.9,0.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#73321D").s().p("AAnEAQg4gPgBgOQgOjAghinIgfiCIAgAuQAlA6AeA9QBjDDgFCeQgBAHgOAAQgOAAgdgHg");
	this.shape_178.setTransform(10.4,577.3,0.9,0.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#73321D").s().p("AhxHgIASpmQAAg/hKhiQg2hIg7gzIAyg9QAmAhAxA4QBPBcAeBKIBJAAQAehKBPhcQAxg4AmghIAyA5Qg6Ayg3BLQhKBkAAA/IASJmg");
	this.shape_179.setTransform(15.1,613,0.9,0.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#7AB157").s().p("AmjIHQhuhlgPiVQgTgPgTgWQCjAaBjhrQAggiAUgwQARgoAKg1IANhIIAJgdIACgGIANgWQADAAAKgKIAOgNIAbgRIBNg0QAsgfAcgdQA+hBAahTQAZhPgKhYQBLAjA1BCQA1BCASBSQB3ANBRBaQBSBbAAB6QAABEgdA/QgcA8gyAtQAMAsAAApQAACGheBeQheBfiEAAQhBAAg7gZQhdA5hsAAQiXAAhvhmg");
	this.shape_180.setTransform(-51.4,535.2,0.9,0.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#A9D048").s().p("Al5IXQhuhlgPiVQg5gugghBQghhEAAhNQAAh1BLhbQBKhaBygXQAGiQBnhkQBohkCPAAQB/AABiBQQBgBQAbB6QB3ANBRBaQBSBaAAB6QAABFgdA+QgcA9gxAsQAMAsgBAqQABCFheBfQheBeiFAAQhAAAg8gZQhcA5htAAQiWAAhwhmg");
	this.shape_181.setTransform(-55.2,533.7,0.9,0.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#73321D").s().p("AhpGrIARokQAAg5hChXQgvg/g1gvIAvgzQAnAiAoAtQBJBSAeBGIAAjHIBFAAIAADHQAehHBDhRQAsg2AdgZIApAzQg2AvgwA/QhEBXAAA5IAPIkg");
	this.shape_182.setTransform(-53.3,620.8,0.9,0.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#385B3D").s().p("AlXCDQBHgVApgtQAJgKC4j9QA7ASA8ArQAiAaA4AvQAuAlAiADQAsAEAxgrQg8B2h0BGQh3BKiNgBQiIAAhzhDg");
	this.shape_183.setTransform(160.6,529.5,0.9,0.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#385B3D").s().p("AkCC6QhthKgzh3QAmgIAigMQAHAGBCh5QBBh7AJAGQCVBVAVAJQBTAiBggSQAggGAoASQASAIA1AiQArAaAYAGQAjAJAYgXQgkCTh2BeQh5BhibAAQiHAAhwhLg");
	this.shape_184.setTransform(104,537.8,0.9,0.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#629552").s().p("Ak5E6QiCiCAAi4QAAi3CCiCQCCiCC3AAQC4AACCCCQCCCCAAC3QAAC4iCCCQiCCCi4AAQi3AAiCiCg");
	this.shape_185.setTransform(102.9,521.3,0.9,0.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#73321D").s().p("ABDCfQABg0gbhDQg0iFiLhJIBnAwQBtBBAiBKIA3CSg");
	this.shape_186.setTransform(87.5,562.9,0.9,0.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#73321D").s().p("AhFBVIA9irQAXAoAagQIAVgYQAGCoACADQACACgjAAIhqgCg");
	this.shape_187.setTransform(102.4,576.6,0.9,0.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#73321D").s().p("AhBgDQAThPA5gmQATgMAUgGIAQgEQhFAsgDBjQgBAyAMApIgxAzg");
	this.shape_188.setTransform(102.1,565.1,0.9,0.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#73321D").s().p("AiTCaQAUhFAvhKQBdiRCHgTIggAXQgnAfggAiQhmBugCBtg");
	this.shape_189.setTransform(117.4,563.4,0.9,0.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#73321D").s().p("AiJGIIAjsPIDNAAIAjMPg");
	this.shape_190.setTransform(102.8,612.5,0.9,0.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["#289357","#28A78C"],[0,1],-401.6,146.8,-401.6,-151).s().p("EjFtAYdMAAAgseQJgGPLoDrQMmEAL/k2QO7mCQsiYQDbggCnBNQRcIDP9KHQHnE0GrlTQKBn+NREsQHmCsFekjQNPrARxmTQCDgvCPgLQJUg0GDFdQAQAPAVAOIBuhIIDOA1IELiUIIJD3IHog0IMkFMQE5hoE5hqQSYmRTYD9IAhAIQdpGbbQmbMAifAdPIAAOTg");
	this.shape_191.setTransform(1154.4,595);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.lf(["#64B674","#60CBAF"],[0,1],-425.2,198.3,-425.2,-197.7).s().p("Ei/2AfGIpli+MAAAgjtQAAiDgDiDQhxohW8ksQW9ksBsBUQBrBUAYAZIB2gxIBvBhQDgjxE+g+QM6imJbJwQKJKfNRE7QImDLHUnIQEJkDEPEBQHyHXKGBjQHUBGEnmMQUm7sVyN6QV0N5ITAAQQklpL9iyQL+izJTBDQJUBESHF7QSHF8Hll7QHll7GHBVQFhgkQEJ0QTCLnNsQ6QhCCQiLBKQqMFcroASg");
	this.shape_192.setTransform(1178.1,503.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#D86527").s().p("AhYAlQgMgZghgwIELAAQgVAfgOAXIgKATg");
	this.shape_193.setTransform(561.4,-59.3,0.9,0.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FEDA99").s().p("AgWH3QgLhjgqi0QgahygKiOIgFh4QAAiQAjhnQAihnAvABQAwgBAiBnQAiBmAACRIABAAIgFB4QgJCOgbByQgaBxgQBeIgLBIg");
	this.shape_194.setTransform(561.4,-101.2,0.9,0.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#F07E2D").s().p("AgwH3QgGgZgSgvQgjheg6hxQg5hygViOIgKh4QAAiRBKhmQBKhnBpABQBpgBBKBnQBLBnAACQIAAAAIgJB4QgWCOg5ByQg6BxgjBeQgSAvgGAZg");
	this.shape_195.setTransform(561.4,-101.2,0.9,0.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FEDA99").s().p("AhHH3QgJgZgZgvQg0hehUhxQhUhygfiOQgJgsgEgrIgBghQAAiQBthnQBshnCZABQCZgBBsBnQBtBmAACRIABAAIgBAhQgEArgJAsQgfCOhUByQhUBxgzBeIgjBIg");
	this.shape_196.setTransform(561.4,-101.2,0.9,0.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#F07E2D").s().p("AhYH3QgLgZgggvQhAhehohxQhohygmiOQgMgsgEgrIgCghQAAiQCHhnQCGhnC+ABQC+gBCGBnQCHBmAACRIABAAIgCAhQgEArgMAsQgmCOhoByQhoBxhABeIgrBIg");
	this.shape_197.setTransform(561.4,-101.2,0.9,0.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#CB8456").s().p("AgzAEIAAgGIBnAAIAAAGg");
	this.shape_198.setTransform(561.4,-52.2,0.9,0.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#CB8456").s().p("AgMAAIATg2IAGACIgSA0IAKA2IgFABg");
	this.shape_199.setTransform(567,-52.1,0.9,0.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#CB8456").s().p("AgEA2IAKg2IgSg0IAGgCIATA2IgMA3g");
	this.shape_200.setTransform(555.9,-52.1,0.9,0.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#CB8456").s().p("AglAsQgOAAgKgKQgKgKAAgOIAAg1ICPAAIAAA1QAAAOgKAKQgKAKgOAAg");
	this.shape_201.setTransform(561.4,-43.7,0.9,0.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["#FFFFFF","#00AAFF"],[0.02,1],0,259.8,0,-259.7).s().p("Eiu8AxhMAAAhjAMFd4AAAMAAABjAg");
	this.shape_202.setTransform(1010.6,259.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82}]}).wait(264));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(847.8,393.6,3512.3,1241.3);
// library properties:
lib.properties = {
	id: 'BFEF9FF9EEDEA64CBE8A67499B6D87DA',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BFEF9FF9EEDEA64CBE8A67499B6D87DA'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;