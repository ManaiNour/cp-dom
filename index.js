var chos = document.getElementById('chosen');
var i = document.getElementById('i1');
var j = document.getElementById('i2');
var k = document.getElementById('i3');
var e = document.getElementById('i4');
var f = document.getElementById('i5');
var a = document.getElementsByTagName('div')
var p = document.getElementById("plus");
var m = document.getElementById("moin");
var n = document.getElementById("num");

var pi = document.getElementById("p1");
var pii = document.getElementById("p2");
var piii = document.getElementById("p3");
var piiii = document.getElementById("p4");
var piiiii = document.getElementById("p5");

var p = document.getElementById("prix");

var w;


function select() {
  chos.src = i.src;
  n.innerHTML = 1;
  p.innerHTML = pi.innerHTML;
  w = pi.innerHTML;
  document.getElementsByClassName('box2')[0].style.display = 'flex';
}
function select2() {
  chos.src = j.src;
  n.innerHTML = 1
  p.innerHTML = pii.innerHTML;
  w = pii.innerHTML
  document.getElementsByClassName('box2')[0].style.display = 'flex';
}
function select3() {

  chos.src = k.src;
  n.innerHTML = 1
  p.innerHTML = piii.innerHTML;
  w = piii.innerHTML
  document.getElementsByClassName('box2')[0].style.display = 'flex';
}
function select4() {

  chos.src = k.src;
  n.innerHTML = 1
  p.innerHTML = piiii.innerHTML;
  w = piii.innerHTML
  document.getElementsByClassName('box2')[0].style.display = 'flex';
}
function select5() {

  chos.src = k.src;
  n.innerHTML = 1
  p.innerHTML = piiiii.innerHTML;
  w = piiiii.innerHTML
  document.getElementsByClassName('box2')[0].style.display = 'flex';
}
function plus() {

  n.innerHTML++


  p.innerHTML = n.innerHTML * w

}
function moin() {
  if (n.innerHTML > 1) {
    n.innerHTML--

    p.innerHTML = (n.innerHTML * w)
  }
  else { n.innerHTML = 1 }


}
function sup() {
  document.getElementsByClassName('box2')[0].style.display = 'none';

}