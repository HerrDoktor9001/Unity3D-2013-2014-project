#pragma strict

// This script will be the base of the Interior Cells loading/unloading. It is one of the 'backbone' scripts & must 
// be located  on the Player!. 

// Here it will check if the Player hit any 'doors', show the GUI instructions when applicable, wait for Player input,
// and finally load the applicable level. 

// This script works together with the 'InteriorName.js' script, which should be located on the 'door' trigger collider,
// as it will send the Interior's name & scene to be loaded. 

var opendoor: boolean= false;        // Checks if Player opened door;
var handler: GameObject;             // 'Backbone' script handler; In this case, the SaveGame object;
private var spawnPoint: Transform;           // Player spawn point in new level. Set automagically;
var lightContainer: GameObject;
var interiorName: String;           // Name of the Interior level to enter. To show in the GUI. Sent by 'InteriorName.js';

var frase: String;
private var inCollider: boolean= false;
var sceneName: String;

function Phrase(){
	
	frase= "Press 'E' to enter " + interiorName;
}

function OnTriggerStay (hit : Collider) {

	if (hit.gameObject.tag == "Interior") {
		
		inCollider= true;
		
		if (Input.GetKeyDown("e")){            // To do: Set 'Action' button and replace GetKey with GetButton;
		
		   opendoor= true;                     // If Player presses 'Action', & is inTrigger, load interior;
	    }
		
		if (opendoor){
			
			var async : AsyncOperation = Application.LoadLevelAsync (sceneName);
			DisableItems();                                                            // Calls disableItems function. Disables any necessary scripts/components;
			yield async;                                                               // Loads interior level;
			Debug.Log("Interior loaded."); 
			newPos();                                                                  // Spawn Player in the set position.
			
			inCollider= false;
			opendoor= false;
		}
		
	}
}

function OnTriggerExit (hit: Collider){
	
	if (hit.gameObject.tag == "Interior") {
		
		inCollider= false;
		//sceneName= "NULL";
	}
}

function OnGUI () { 

	if (inCollider){
    GUI.Label(new Rect(Screen.width/2 - 75, Screen.height - 170, 150, 40), frase); }
     
}

function DisableItems(){
	
	lightContainer.GetComponent.<Light>().enabled = false;
	(handler.GetComponent("DisableParticleNight") as MonoBehaviour).enabled = false;
	
}

function newPos(){
	
	spawnPoint= GameObject.FindWithTag("spawnPoint").transform;
	transform.position = new Vector3(spawnPoint.position.x, spawnPoint.position.y, spawnPoint.position.z);
}