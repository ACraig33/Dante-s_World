const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d');

console.log("Im running!");
   
canvas.width=1024;
canvas.height=576;

   
   //const scaledCanvas = { 
	  // width: canvas.width /4;
	  // height: canvas.height/4; }
   
   const gravity = 0.5;
   
   
  class Sprite { 
    constructor({position,imageSrc}){ 
		this.position = position;
		this.image = new Image();
		this.image.src = imageSrc;
    }
    draw() { 
    if (!this.image) return
		c.drawImage(this.image, this.position.x, this.position.y);
    }
    
    update(){
		this.draw();
    }
  }
   
   class Player { 
   constructor(position) { 
	   this.position= position;
      this.velocity= {
      x=0,
      y=1,
      
   }
   this.height = 100;
    }
     draw(){
		 c.fillStyle= "red";
		 c.fillRect(this.position.x,this.position.y,100,this.height);
    
    }
    
    update(){ 
		this.draw();
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
     if( this.position.y +this.height);
     this.velocity.y += gravity;
    }
    
   }
   
   const player =new Player({
      x:0, 
      y:0,
   })
   
   const keys ={ 
     d: pressed: false, 
   }
    const keys ={ 
     a: pressed: false,  
   }
    const keys ={ 
     w: pressed: false, 
   }
   const background= new Sprite ({
     position: { 
     x:0,
     y:0,
     }, 
     imageSrc: 'Dantes_World/images/background.png';
   })
   function animation(){
	   window.requestAmimationFrame(animation);
	   c.fillStyle= "white";
	   c.fillRect (0,0,canvas.width,canvas.height);
   
   
	   c.save();
	   c.scale(4,4);
	   c.restore();
	   c.translate(0,-background.image.height + scaled.height);
   
   
   
	   background.update();
	   player.update();
   
	   player.velocity.x=0 ;
   if(keys.d.pressed) player.velocity.x= 1;
     else if (keys.a.pressed) player.velocity =-1;
      
      
   }
   
   animation();
   
   
   window(.AddEventListener('keydown', (event) => { 
   switch(event.key){ 
      case 'd': 
		  keys.d.pressed= true;
        break
        
      case 'a': 
		  keys.a.pressed= true;
        break
        
      case 'w': 
		  player.velocity.x= -15;
        break  
       
   }
   })
    window(.AddEventListener('keyup', (event) => { 
   switch(event.key){ 
      case 'd': 
		  keys.d.pressed= false;
        break
        
      case 'a': 
		  keys.a.pressed= false;
        break
        

});
  