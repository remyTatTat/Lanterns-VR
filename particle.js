
class Particle {

  constructor(x, y, z, radius){

    this.r = random(50, 200)
    this.g = random(20, 100)
    this.b = random(20, 50)

    this.on = false

    this.xOffset = random(0, 1000)
    this.yOffset = random(0, 1000)
    this.zOffset = random(0, 1000)

    /*this.ring = new Sphere({
      x: x, y: y, z: z,
      radius: radius,
      red: random(50, 200), green: random(20, 100), blue: random(20, 50),

      clickFunction:function(me) {
        me.setRadius(radius++)
        world.slideToObject(me, 3000)
      }
    })*/

    this.ring = new Ring({
  						x: x , y: y, z: z,
  						radiusInner: 0.5,
  						radiusOuter: 1,
  						side: 'double',
  						red:random(50, 200), green:random(20, 100), blue:random(20, 50),
  					});
  	world.add(this.ring);

  }

  move() {
    var x = map(noise(this.xOffset), 0, 1, -1, 1)
    var y = map(noise(this.yOffset), 0, 1, -1, 1)
    var z = map(noise(this.zOffset), 0, 1, -1, 1)

    if (this.ring.x >= 200 || this.ring.x <= -200) {
      x *= -1
    }
    if (this.ring.y >= 100 || this.ring.y <= 10){
      y *= -1
    }
    if (this.ring.z >= 200 || this.ring.z <= -200){
      z *= -1
    }

    this.ring.nudge(x, y, z)

    this.xOffset += 0.01
    this.yOffset += 0.01
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
    this.ring.setColor(this.r, this.g, this.b)
  }

  checkIfOn(isOn) {
    if (isOn) {
      this.on = true
    } else {
      this.on = false
    }
  }

}
