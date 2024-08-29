#pragma strict

var script: lightDistance;
var Light: GameObject;

var skyTime: SkyTimeAccess;
var Tonemap: Tonemapping;

var toneInt: float;

private var k: float;

function Start () {

     k = 0.45;  // Constant, to calculate Light intensity; Equals max tonemap intensity.
}

function tonemapIntensity(){
	
	toneInt= Tonemap.middleGrey;
}

function lightIntensity(){
	
	Light.GetComponent.<Light>().intensity = 3*toneInt/k;      // REGRA DE 3s: Multiplies maximum light intensity by current tonemap intensity, divides by max tonemap intensity;
	                                                           // max light intens * cur tonemap intens / max tonemap intens = cur light intensity;
}

function Update () {
    
	tonemapIntensity();
	lightIntensity();
	
    if(script.playerIsInLight){
		Light.GetComponent.<Light>().enabled = true;
	}
	else{Light.GetComponent.<Light>().enabled=false;}
}


// aug. 2024: notes to younger self: simplify code!
// if 'k' is constant, declare it instead of filling it: private var k: float = 0.45; <- no need for 'Start()' function.

// instead of filling a variable, "tonemapIntensity()" function should be a function variable (possible in .js?):
// float function tonemapIntensity(){ return Tonemap.middleGray; }.
// Instead of using 'toneInt' in 'lightIntensity()' func., we call 'tonemapIntensity()' itself, which returns desired float value.

// instead of using 'if' conditional statements, we can simply set our variable via a bool:
// 1st, set a bool function:
	// bool function bPlayerInLight(){ return script.playerIsInLight; }
// 2nd, tie our desired external variable to our bool:
	// Light.GetComponent.<Light>().enabled = bPlayerInLight();

// now 'Update()' should look someting like:
// function Update() {
// 	lightIntensity();
// 	Light.GetComponent.<Light>().enabled = bPlayerInLight();
//}
// .: much cleaner, less verbose, less wasted code...
