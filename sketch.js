
var world
var container
var b
var rings = []
var lamps = []
var music
var moon
radius = 0.5

let song
let lightSwtich
let weird

function preload() {
  song = loadSound('music/eveningFall.mp3')
  lightSwitch = loadSound('music/lightSwitch.mp3')
  weird = loadSound('music/weird.mp3')
}

var isOn = false

var enable1 = false
var enable2 = false

function setup() {

  song.setVolume(0.5)
  weird.setVolume(0.4)

  noCanvas()
  noiseDetail(24)

  world = new World('VRScene')

  for (let i = 0; i < 750; i++) {
    let dot = new Particle(random(-50, 50), random(50, 99), random(-50, 50), radius)
    rings.push(dot)
  }

  var p = new Plane({
			x: 0, y: 0, z: 0,
			width: 1000, height: 1000,
			red: 50, green: 50, blue: 60,
      rotationX: -90, repeatX: 1000, repeatY: 1000,
			asset: 'ground'
	});
	world.add(p);

  sky2 = new Sphere({
	 		x: 0, y: 0, z: 0,
	 		red: 50, green: 40, blue: 50,
	 		radius: 500,
			asset: 'bgCustom',
      repeatX: 5, repeatY: 5
	 	})
 	world.add(sky2)

  // make center lamp
  var c1 = new Cylinder({
			x: 0, y: 2, z: 0,
			height: 1, radius: 0.25,
			red: 255, green: 255, blue: 255,
      asset:'lantern', rotationY: 180,
      clickFunction: function(cyl) {
        isOn = !isOn; first = true;
        lightSwitch.play();
        if (isOn) {
          weird.play();
        }
        enable1 = true
        enable2 = !enable2;
      }
	});
	world.add(c1);

  var c2 = new Cylinder({
			x: 0, y: 0, z: 0,
			height: 4, radius: 0.01,
			red: 45, green: 3, blue: 0,
	});
	world.add(c2);

  var bottom = new Sphere({
    x: 0, y: 0, z: 0,
    radius:0.1,
    red:198, green: 146, blue: 90,
  })
  world.add(bottom)

  for (let i = 0; i < 1000; i++) {
    let tempLamp = new LampPost(random(-100, 100), 2, random(-100, 100), 0.5)
    lamps.push(tempLamp)
  }

  moon = new Moon()

  song.loop()

}

let first = true
function draw() {

  if (enable1) {
    for (let i = 0; i < rings.length; i++) {
      rings[i].checkIfOn(isOn)
      if (first) {
        rings[i].update()
      }
      if (enable2) {
        rings[i].move()
      }
    }
  }

  for (let i = 0; i < lamps.length; i++) {
    lamps[i].checkIfOn(isOn)
    if (first) {
      lamps[i].update()
    }
    if (enable2) {
      lamps[i].move()
    }
  }

  if (first) {
    first = false
  }

  sky2.spinY(0.03)
  sky2.spinZ(0.05)
  moon.spin()

}
