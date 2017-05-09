var physics
var particless = [];
var particlesss = [];
var attractor;

var s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;
var api = "https://api.foursquare.com/v2/venues/search?categoryId=4d4b7105d754a06374d81259&limit=100&radius=2000&";
var apiKey = "&oauth_token=144OWBGBGEJSDNOFLY3TKSKFEJVC5IE1P1TXJHVXFABJUNB3&v=20170228";
var query = "40.7294636,-73.996101";
var query1;
var input;
var place;

var places = [];
var radius;

var locations = [];

var balls = [];
var lat, lng;
var space1, space2;
// var space2;
// var space3;
//var space4;
var comet;
var foodIcon, barIcon, dessertIcon;
var grey, white;
var particles;

var star1, star2, star3, star4, star5;
var foot1, foot2, foot3, foot4, foot5;
//var dot;

function preload() {
  // s1 = loadSound('/assets/0.mp3');
  // s2 = loadSound('/assets/1.mp3');
  // s3 = loadSound('/assets/2.mp3');
  // s4 = loadSound('/assets/3.mp3');
  // s5 = loadSound('/assets/4.mp3');
  // s6 = loadSound('/assets/5.mp3');
  // s7 = loadSound('/assets/6.mp3');
  // s8 = loadSound('/assets/7.mp3');
  // s9 = loadSound('/assets/8.mp3');
  // s10 = loadSound('/assets/9.mp3');
  // s11 = loadSound('/assets/10.mp3');
  foodIcon = loadImage("food.png");
  barIcon = loadImage("bar.png");
  dessertIcon = loadImage("icecream.png");
  grey = loadImage("greyParticle.png");
  //white=loadImage("whiteparticles.png");
  star1 = loadImage("1star.png");
   star2 = loadImage("2star.png");
   star3 = loadImage("3star.png");
   star4 = loadImage("4star.png");
   star5 = loadImage("5star.png");
   foot1 = loadImage("1foot.png");
   foot2 = loadImage("2foot.png");
   foot3 = loadImage("3foot.png");
   foot4 = loadImage("4foot.png");
   foot5 = loadImage("5foot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (0);
  // Initialize the physics
  physics=new VerletPhysics2D();
  physics.setDrag(0.01);

  // for(var i=0; i<50; i++) {
  //   particless.push(new Particle(new Vec2D(random(width),random(height)),random(0.1,1.5),10,-0.01));
  // }
  // for(var i=0; i<50; i++) {
  //   particlesss.push(new Particle(new Vec2D(random(width),random(height)),random(0.1,1.5),10,-1));
  // }

attractor = new Particle(new Vec2D(width/2, height/2), 1, width, 0.5);
for (var i = 0; i < 100; i++) {
    
    balls.push(new Particle(new Vec2D(random(width),random(height)),random(0.1,1.5),10,-0.01));
  }

  setShakeThreshold(20);

  
  //physics.addBehavior(new GravityBehavior(new Vec2D(0,0.5)));

  // Set the world's bounding box
  physics.setWorldBounds(new Rect(0,0,width,height));


 


  space2 = loadImage("space2.jpg");
  comet = loadImage("comet.png");
  //image(space1,0,0);

 if (!navigator.geolocation) {
    alert("navigator.geolocation is not available");
  }
  navigator.geolocation.getCurrentPosition(setPos);

}

function setPos(position) {
  lat = position.coords.latitude;
  lng = position.coords.longitude;
  background(0);
  fill(255);
  textSize(32);
  text("Current position: " + nf(lat,2,2) + " " + nf(lng,2,2), 10, height/2);

  foursquareAsk(lat, lng);
}

function foursquareAsk(latitude, longitude) {
  //
  query = 'll=' + Number(latitude) + ',' + Number(longitude);
  var url = api + query + apiKey;

  loadJSON(url, gotData);

}

function gotData(data) {
	place = data;

  //for (var i = 0; i < place.response.venues.length; i++)

  for (var i = 0; i < 30; i++)
  {
     var prefix = place.response.venues[i].categories[0].icon.prefix;
     var f = prefix.indexOf('/food/');

     console.log(i);
if(place.response.venues[i].categories[0].name!=null){
  	balls[i].category= place.response.venues[i].categories[0].name;
}


    //'balls[i].category= place.response.venues[i].categories[0].name
    balls[i].f = prefix.indexOf('/food/');

    balls[i].dessert= prefix.indexOf('/food/cafe_');

    var bar = prefix.indexOf('/nightlife/');
    balls[i].bar = prefix.indexOf('/nightlife/');
if(place.response.venues[i].stats.checkinsCount!=null){
  balls[i].checkinsCount =place.response.venues[i].stats.checkinsCount;
}
if(place.response.venues[i].location.distance!=null){
  balls[i].distance=place.response.venues[i].location.distance;
}
  }


  for (var i = 0; i < 30; i++){
if(place.response.venues[i].name!=null){
    balls[i].venue = place.response.venues[i].name;
  }
if (address=place.response.venues[i].location.address!=null){
    balls[i].address=place.response.venues[i].location.address;
  }
    if (place.response.venues[i].contact.formattedPhone!=null){
    balls[i].contact=place.response.venues[i].contact.formattedPhone;
  }
  }
  }


function draw() {
  physics.update();
  //background(0,100);

 //    attractor.display();
 //  for (var i=0; i<particless.length; i++){
 //    particless[i].display();
 //  }
 // for (var i=0; i<particlesss.length; i++){
 //    particless[i].display();
 //  }
  image(space2,0,0);

  //noprotect
  for (var i = 0; i < 30; i++) {
   balls[i].move();
   balls[i].turn();
    balls[i].display();

  }

    if (touchIsDown) {
    attractor.lock();
    attractor.set(touchX,touchY);
  } else {
    attractor.unlock();
  }
}



function deviceShaken() {
  for (var i = 0; i < balls.length; i++) {
    balls[i].shake();

  }
     // attractor.lock();
    // attractor.set(random(0,width),random(0,height));
    // attractor.unlock();

//    attractor.shake();

  
}
