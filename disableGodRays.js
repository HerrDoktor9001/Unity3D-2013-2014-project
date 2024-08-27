#pragma strict

private var shader: SunShafts;

private var time: float;
private var timeContainer: SkyTimeAccess;


function Start () {

    shader= Camera.main.GetComponent.<SunShafts>();
	timeContainer= gameObject.GetComponent("SkyTimeAccess");
}

function setTime() {
	
	time= timeContainer.rCurTime;
}

function raysDisable() {
	
	if (time > 18.4 || time < 4.3) {          // between 18.4pm and 3.5am,
		
		shader.useDepthTexture= false;         // disables rays effect.
		shader.maxRadius= -1.0f;
	}
	else {                                    // Else,
		
		shader.useDepthTexture= true;          // enables rays effect.
		shader.maxRadius= 0.75f;
	}
}

function Update () {

     setTime();
	 raysDisable();
}