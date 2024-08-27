#pragma strict

var health: float;
private var o_health: float;
private var animObj: GameObject;
private var rb: Rigidbody;
private var script: FlockChild;
var pointsToAdd: int =1;

var isDead: boolean;
private var pointadded: boolean;
var feather: GameObject;

var controller: FlockController;

var isContainer: boolean;


function Start () {

   controller= GameObject.FindObjectOfType(FlockController);
   o_health = health;
   rb= GetComponent.<Rigidbody>();
   rb.isKinematic= true;
   animObj= transform.FindChild("Model").gameObject;
   script= gameObject.GetComponent("FlockChild");
   isDead= false; pointadded= false;
}

function Update () {

     Die();
	 Points();
}

function ApplyDamage(dmg:float){
	
	health -= dmg;
}

function Die (){
	
	if (health < o_health){
		
		//controller.AddChild(1);
		animObj.GetComponent.<Animation>().Stop();
		rb.isKinematic= false;
		script.enabled= false;
		isDead= true;
		
		if (isContainer){
			gameObject.tag="container";
		}
		//Remove();
	}
}

function Points (){
	
	    if (isDead){
		   
		   if (!pointadded){
		      Particle();
			  PointManager.points += pointsToAdd;
			  pointadded= true;
		   }
		}
		
}

function Particle (){
	
		Instantiate(feather, transform.position, transform.rotation);
		controller.remove();
		
}

function Remove (){
	
	// yield WaitForSeconds(5);
	 Destroy(gameObject, 5);
}