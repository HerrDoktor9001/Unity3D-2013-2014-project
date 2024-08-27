#pragma strict

//  For now, this scripts sends the Interior Cell's name (Set in the 'intName' var. Ex: 'Abandoned House') to the Interior_loader.js script.
// There, the Interior Cell's name will be used on the GUI instruction to the Player.

// Also left, commented out, some piece of code to create a reference ID from the 'intName' var, should it ever be needed. 
// It will remove all spaces & lower all characters to LowerCase.

var intName: String;
var script: Interior_loader;
var sceneName: String;

var isSet: boolean= false;

function OnTriggerStay (hit : Collider) {

	if (hit.gameObject.tag == "Player") {
		
		script.interiorName = intName;
		script.sceneName = sceneName;
		script.Phrase();
	}
}

function LateUpdate(){
	
	if (!isSet){
		if (script == null){
		
			Find();
		}
		else if (script != null){
		
			isSet= true;
		}
	}
}

function Find(){
	
	script= GameObject.FindWithTag("Player").GetComponent(Interior_loader);
}

//var refID: String;
// function Start () {
	
	// refID= intName.Replace(' ', '');
	// refID= refID.ToLower();
// }

