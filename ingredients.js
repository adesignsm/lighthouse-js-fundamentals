var weaponChoice = ["M9-Silenced", "AR-15", "MK-49 Rifle", "M4A1", "L96A1", "mP5-Silenced", "AA-12"];
var FLAG = 0;

for (var i = 0; i < weaponChoice.length; i++) {

	console.log(weaponChoice[i]);
}

console.log("WHILE LOOP");

while( FLAG < weaponChoice.length) {

	console.log(weaponChoice[FLAG]);
	FLAG++;
}

console.log("FINAL PART");

for (var ii = weaponChoice.length - 1; ii >= 0; ii--) {

	console.log(weaponChoice[ii]);
}