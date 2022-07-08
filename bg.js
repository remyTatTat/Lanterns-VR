
function setup() {

  createCanvas(1920, 1080)
  background("#1A100B")

  for (let i = 0; i < 125; i++) {
    let z = random(1, 10)
    let r = random(10, width-10)
    let q = random(10, height-10)
    console.log(r + " dog " + q)

    push()
    ellipseMode(CENTER)
    translate(r, q)
    fill(color(random(100, 255), random(100, 255), random(100, 255)))
    ellipse(0, 0, z)

    noFill()
    stroke(color(random(100, 150), random(100, 150), random(100, 150)))
    ellipse(0, 0, z * 2)

    noFill()
    stroke(color(random(100, 150), random(100, 150), random(100, 150)))
    ellipse(10, 10, z *1.5)
    pop()

  }

}

/*



*/
