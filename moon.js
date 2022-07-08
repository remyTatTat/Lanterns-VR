
class Moon {

 constructor() {

   this.container = new Container3D({
     x:0, y:1, z:-5
   })
   world.add(this.container)

   this.moon = new OBJ({
 		asset: 'moonObj',
 		mtl: 'moonMtl',
 		x: 100, y: 250, z: -250,
    scaleX: 1, scaleY: 1, scaleZ: 1,
 		rotationX: 270, rotationY:0
 	});
 	this.container.addChild(this.moon);

 }

 spin() {
   this.container.spinY(-0.1)
   this.moon.spinY(1)
 }

}
