// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Child class constructor
// function ParticleAtt(position, radius, range, strength){
//   VerletParticle2D.call(this,position);
//   this.r= radius;
//   physics.addParticle(this);
//   physics.addBehavior(new AttractionBehavior(this, range, strength));
// this.display = function(){
//     fill(200,170);
//     //stroke(200);
//     //strokeWeight(0.00001);
//     noStroke();
//     ellipse(this.x,this.y,this.r*2,this.r*2);
// }
// }

function Particle(position, radius, range, strength) {
  VerletParticle2D.call(this,position);
  this.r= radius;
  physics.addParticle(this);
  physics.addBehavior(new AttractionBehavior(this, range, strength));

  // Override the display method
  
  this.x = random(width);
  this.y = random(height);
  this.xspeed = random(0, 0.1);
  this.xdir = 1;
  this.yspeed = random(0, 0.1);
  this.ydir = 1;
  this.oxspeed = this.xspeed;
  this.oyspeed = this.yspeed;
this.venue = "test";
  this.address = "address";
  this.grow = 0;
  this.cgrow = 0;
  this.pgrow = 0;
  this.growing = false;
  this.venue.length = this.venue.length;
  this.f = "foodtest";
  this.bar = "bartest";
  this.dessert = "dessert";
  this.checkinsCount = 0;
  this.contact = "0";
  this.category = "";
  this.distance = 0;

  this.move = function() {
    this.x += this.xspeed * this.xdir;
    this.y += this.yspeed * this.ydir;

    this.xspeed = lerp(this.xspeed, this.oxspeed, 0.1);
    this.yspeed = lerp(this.xspeed, this.oyspeed, 0.1);


  };

  this.turn = function() {
    if (this.x < 0) {
      this.x = 0;
      this.xdir = -this.xdir;
      // if (!s1.isPlaying()) {
      //   s1.play();
      // }

      // if (s1.isPlaying() && !s5.isPlaying()) {
      //   s5.play();
      // }

    } else if (this.y < 0) {
      this.y = 0;
      this.ydir = -this.ydir;
      // if (!s2.isPlaying()) {
      //   s2.play();
      // }
      // if (s2.isPlaying() && !s6.isPlaying()) {
      //   s6.play();
      // }

    } else if (this.x > width) {
      this.x = width;
      this.xdir = -this.xdir;
      // if (!s3.isPlaying()) {
      //   s3.play();
      // }
      // if (s3.isPlaying() && !s7.isPlaying()) {
      //   s7.play();
      // }
    } else if (this.y > height) {
      this.y = height;
      this.ydir = -this.ydir;
      // if (!s4.isPlaying()) {
      //   s4.play();
      // }
      // if (s4.isPlaying() && !s8.isPlaying()) {
      //   s8.play();
      // }
    }
  };

  this.shake = function() {
    this.xspeed *= random(1, 3);
    this.yspeed *= random(1, 3);

    this.growing = false;
  };


this.display = function(){
    fill(200,170);
    //stroke(200);
    //strokeWeight(0.00001);
    noStroke();
    ellipse(this.x,this.y,this.r*2,this.r*2);
  

    


if (this.x > windowWidth / 2 - 7 && this.x < windowWidth / 2 + 7 && this.y > windowHeight / 2 - 7 && this.y < windowHeight / 2 + 7) {
      //this.x = windowWidth / 2;
      //this.y = windowHeight / 2;
      this.growing = true;


    }

    //ellipse(this.x, this.y, windowHeight,windowHeight);

    if (this.growing) {

      for (var i = 0; i < 30; i++) {
        balls[i].x = 0 || windowWidth;
        balls[i].y = 0 || windowHeight;
        //balls[i].x=  (random(10,100)+ windowWidth);
        // balls[i].y= 0-random(0,10)&&random(0,10)+windowHeight;
      }
      this.x = windowWidth / 2;
      this.y = windowHeight / 2;
      noStroke();
      var grayvalues = 255 / 100;
      var size = windowWidth * 3;
      var steps = size / 100;
      for (i = 0; i < 100; i++) {
        fill(0, i * grayvalues);
        ellipse(this.x, this.y, this.pgrow * (size - i * steps), this.pgrow * (size - i * steps));
        //ellipse(windowWidth/2-windowWidth*1.3/2,windowHeight/2 - windowWidth * 1.3 / 2, windowWidth * 1.3,windowWidth * 1.3);
      }
     //image(particles, this.x - this.pgrow * windowWidth * 5 / 2, this.y - this.pgrow * windowWidth * 5 / 2, this.pgrow * (windowWidth * 5), this.pgrow * (windowWidth * 5));
      image(comet, this.x - this.cgrow * windowWidth * 2 / 2, this.y - this.cgrow * windowWidth * 2 / 2, this.cgrow * (windowWidth * 2), this.cgrow * (windowWidth * 2));


     // image(grey, this.x - this.grow * windowWidth * 2 / 2, this.y - this.grow * windowWidth * 2 / 2, this.grow * (windowWidth * 2), this.grow * (windowWidth * 2));
      image(grey, this.x - this.pgrow * windowWidth * 5 / 2, this.y - this.pgrow * windowWidth * 5 / 2, this.pgrow * (windowWidth * 5), this.pgrow * (windowWidth * 5));


      //if touchIsDown to the image, go to another page that has menu, address& rating?

      textSize(this.grow * 20);
      fill(255, 255, 255,200);
      text(this.venue, this.x - this.venue.length * 3.7, this.y - 25);
      textSize(this.grow * 10);

      text(this.category, this.x - this.category.length * 2, this.y - 12);
      text(this.address, this.x - this.address.length * 2, this.y + 50);
      text(this.contact, this.x - this.contact.length * 2, this.y + 60);
      //text(this.checkinsCount, this.x, this.y);
     // text(this.distance, this.x, this.y+35);

      //rating
      if (this.checkinsCount < 10) {
        image(star1, this.x - 25, this.y + 10, 50, 8);
      }
      if (this.checkinsCount >= 10 && this.checkinsCount < 100) {
        image(star2, this.x - 25, this.y + 10, 50, 8);
      }
      if (this.checkinsCount >= 100 && this.checkinsCount < 1000) {
        image(star3, this.x - 25, this.y + 10, 50, 8);
      }
      if (this.checkinsCount >= 1000 && this.checkinsCount < 10000) {
        image(star4, this.x - 25, this.y + 10, 50, 8);
      }
      if (this.checkinsCount >= 10000) {
        image(star5, this.x - 25, this.y + 10, 50, 8);
      }
      //distance
  if (this.distance < 50) {
        image(foot1, this.x - 25, this.y + 25, 50, 10);
      }
      if (this.distance >= 50 && this.distance < 100) {
        image(foot2, this.x - 25, this.y + 25, 50, 10);
      }
      if (this.distance >= 100 && this.distance < 200) {
        image(foot3, this.x - 25, this.y + 25, 50, 10);
      }
      if (this.distance >= 200 && this.distance < 300) {
        image(foot4, this.x - 25, this.y + 25, 50, 10);
      }
      if (this.distance >= 300) {
        image(foot5, this.x - 25, this.y + 25, 50, 10);
      }





      //grow
      this.grow += 0.02;
      if (this.grow >= 0.8) {
        this.grow = 0.8;
      }
      this.cgrow += 0.01;
      if (this.cgrow >= 1) {
        this.cgrow = 1;
      }
      this.pgrow += 0.2;
      if (this.pgrow >= 20) {
        this.pgrow = 20;
      }
    }


    if (this.f > -1) {
      // fill(255);
      //ellipse(this.x,this.y,10,10);

      image(foodIcon, this.x - 6, this.y - 6, 10, 10);
    }

    if (this.dessert > -1) {

      image(dessertIcon, this.x - 6, this.y - 6, 10, 10);
    }
    if (this.bar > -1) {
      //fill(0,255,255);
      //ellipse(this.x,this.y,10,10);
      image(barIcon, this.x - 6, this.y - 6, 10, 10);
    }

    //img(this.img, this.x, this.y, 50,50);


  
  };

}



// Inherit from the parent class
Particle.prototype = Object.create(VerletParticle2D.prototype);
Particle.prototype.constructor = Particle;

//Particle.prototype = Object.create(VerletParticle2D.prototype);
//ParticleAtt.prototype.constructor = ParticleAtt;
