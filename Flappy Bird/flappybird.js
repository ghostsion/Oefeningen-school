/**
 * 
 */
setInterval(birdDown, 100);
setInterval(checkColission, 50);
setInterval(pipesLeft, 100);
//setInterval(createPipe, 2000);
setTimeout(createPipe, 500);

const pipeArray = [];

 var bird = document.getElementById("birdGif");
 
 bird.style.top = 100 + "px";
 bird.style.left = 100 + "px";
 
 var birdTop = bird.style.top;
 var birdLeft = bird.style.left;
 var birdBottom = bird.style.bottom;
 
 console.log(birdTop, birdLeft);
 
 function birdDown(){
	 if(parseInt(birdTop) < 600){
	 
	 birdTop = parseInt(birdTop) + 5;
	 bird.style.top = birdTop + "px"; 
	 
	 }
 }
 
 document.addEventListener('keydown', (event) => {
  var name = event.key;
  var code = event.code;
  console.log(name, code);
  
  if(name == "ArrowUp" && parseInt(birdTop) > -365){
	  birdTop = parseInt(birdTop) - 15;
	  bird.style.top = birdTop + "px";
	 
  }
  
  })
  

 

	  var maximum = 100;
	  var minimum = 700;
	 var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	 
	 var pipeLeft = 1300;
  
 function createPipe(){
	 
	 const imgPipe = new Image();
	 imgPipe.src = "https://content.instructables.com/FMS/5JNN/IM9E2EVN/FMS5JNNIM9E2EVN.png?auto=webp&frame=1&md=eb6c88d20c5f04cd0d2cd98b36e7b8dd";
	 imgPipe.style.top = randomnumber;
	 imgPipe.style.left = pipeLeft + "px";
	 imgPipe.style.height = 1000 + "px";
	 imgPipe.style.width = 100 + "px";
	 imgPipe.classList.add('pipe');
	 
	 pipeArray.push(imgPipe);
	 
	 document.getElementById("pipediv").appendChild(imgPipe);
	 
  }
  
  
  function checkColission(){
	 if(randomnumber <= (parseInt(birdTop) + 450)){
  } 
  }
  
  
  function pipesLeft(){  
	  let pipes = document.getElementsByClassName('pipe')
	  for(var x = 0; x < pipes.length; x++){
		  
	  	var pipeLeft = pipes[x].style.left;
	 	pipeLeft = parseInt(pipeLeft) - 10;
	 	pipes[x].style.left = pipeLeft + "px";	
	 	  
	  console.log(pipes[x].style.left);
		  
	  }
  }