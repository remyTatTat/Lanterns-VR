
class LampPost {

  constructor(x, y, z, radius){

    this.xOffset = random(0, 100)
    this.zOffset = random(0, 100)

    this.on = false
    this.co = new Cone({
			x: x, y: y, z: z,
			height: 0.5,
			radiusBottom: radius, radiusTop: 0,
			red: 200, green: 120, blue: 20,
      rotationX: 180,
      clickFunction: function(lamp1) {
        world.slideToObject(lamp1, 1000)
      }
		});
  	world.add(this.co);

    this.cy = new Cylinder({
  			x: x, y: 0, z: z,
  			height: 4, radius: 0.01,
  			red: 45, green: 3, blue: 0
  	});
    world.add(this.cy)

    this.sp = new Sphere({
      x: x, y: 0, z: z,
      radius: 0.1,
      red: 200, green: 120, blue: 20
    })
    world.add(this.sp)

  }

  move() {

    var x = map(noise(this.xOffset), 0, 1, -1, 1)
    var z = map(noise(this.zOffset), 0, 1, -1, 1)

    if (this.co.x >= 101 || this.co.x <= -101) {
      x *= -1
    }
    if (this.co.z >= 101 || this.co.z <= -101){
      z *= -1
    }
    if (this.cy.x >= 101 || this.cy.x <= -101) {
      x *= -1
    }
    if (this.cy.z >= 101 || this.cy.z <= -101){
      z *= -1
    }
    if (this.sp.x >= 101 || this.sp.x <= -101) {
      x *= -1
    }
    if (this.sp.z >= 101 || this.sp.z <= -101){
      z *= -1
    }

    this.co.nudge(x, 0, z)
    this.cy.nudge(x, 0, z)
    this.sp.nudge(x, 0, z)

    this.xOffset += 0.01
    this.zOffset += 0.01
  }

  update() {
    if (this.on) {
      this.r = 255
      this.g = 240
      this.b = 158
    } else {
      this.r = random(50, 200)
      this.g = random(20, 100)
      this.b = random(20, 50)
    }
    this.co.setColor(this.r, this.g, this.b)
  }

  checkIfOn(isOn) {
    if (isOn) {
      this.on = true
    } else {
      this.on = false
    }
  }

}
