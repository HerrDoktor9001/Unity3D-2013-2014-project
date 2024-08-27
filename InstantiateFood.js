private var destroyTime : float = 2;
private var IsCreated : boolean = false;
var Drop : Transform;
//var pointsToAdd : float = 5;
var health : float = 100;


function Update () {

if(health < 1){
	    
	    GetComponent.<Animation>().Play("IdleHold");
		Destroy (gameObject, destroyTime);
//		PointManager.points += pointsToAdd;
		
		if(!IsCreated){

		Criar ();
	    
		IsCreated = true;
		
		}

}
}

function Criar () {

Instantiate (Drop, transform.position, Quaternion.identity);


}

function ApplyDamage(dmg : float) {

 Debug.Log("Itz Woking");

	health -= dmg;

}