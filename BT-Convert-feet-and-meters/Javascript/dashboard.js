function feetToMeters() {
   let feet = document.getElementById('feet').value; 
   let meter = 0.305 * feet;
    document.getElementById('meters').value = meter;
}
function metersToFeet() {
    let meter = document.getElementById('meters').value;
    let feet = 3.279 * meter ;
    document.getElementById('feet').value = feet;
 }
 