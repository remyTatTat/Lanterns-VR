
function setup() {

  createCanvas(windowWidth, windowHeight)

  for (let i = 0; i <= windowWidth/10; i++) {
    let dot = new Dot(random(50, 200), random(20, 100), random(20, 50), random(5, 20))
    particles.push(dot)
  }

}

var enter
function preload() {
  enter = loadImage('images/enter.png')
}

let particles = []

function draw() {

  background(color(255, 215, 158))

  for (let i = 0; i < particles.length; i++) {
    particles[i].moveAndDisplay()
  }

  /*push()
  stroke('#2E0400')
  strokeWeight(2)
  rectColor = color(74, 7, 0)
  rectColor.setAlpha(200)
  fill(rectColor)
  rect(width*0.1, height*0.1, width*0.8, height*0.8)
  pop()*/

  background(0, 70)

  imageMode(CENTER)
  image(enter, width/2, height/2)

}

class Dot {

  constructor(r, g, b, radius) {

    this.x = random(0, width)
    this.y = random(0, height)

    this.r = r
    this.g = g
    this.b = b

    this.radius = radius

    this.xSpeed = radius/10
    this.ySpeed = radius/10

  }

  moveAndDisplay() {

    this.x += this.xSpeed
    this.y += this.ySpeed

    stroke(color(this.r, this.g, this.b))
    strokeWeight(this.radius/12)
    noFill()
    ellipse(this.x, this.y, this.radius)

    if (this.y > height + this.radius) {
      this.y = -this.radius
    }
    if (this.x > width + this.radius) {
      this.x = -this.radius
    }

  }

}
