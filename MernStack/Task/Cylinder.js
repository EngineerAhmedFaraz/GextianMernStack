function Cylinder(h , d) {
    this.h = h;
    this.d = d;
  }
  
  Cylinder.prototype.Volume = function () {
    var r = this.d/2;
    return this.h*Math.PI*r*r;
  };
  
  var Cylinder1 = new Cylinder(9, 5);
 document.write('volume =', Cylinder1.Volume().toFixed(5));
  