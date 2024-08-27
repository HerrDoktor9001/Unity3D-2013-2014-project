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