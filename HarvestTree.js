var CanGiveFood : boolean = false;
var Drop : Transform;
var Instantiated : boolean = false;
var GaveFood : boolean = false;
private var ShowText : boolean = true;
var DropY : float = 5.0;
var DropX : float = 2.0;
var DropZ : float = 0.0;

function Update () {

var Pontos = PointManager.points;
if (Input.GetKeyDown("f") && CanGiveFood ) {

Give();
PointManager.points -= 5.0;

//ShowText = false;

}

if (Pontos <= 0){CanGiveFood = false;}

if (GaveFood){

Instantiated = false;
//ShowText = true;

}

if (!CanGiveFood){

ShowText = false;
}

if (CanGiveFood){

ShowText = true;
}

}

function OnTriggerEnter (hit : Collider) {

if (hit.gameObject.GetComponent.<Collider>().tag == "Player") {

Debug.Log("WOHOOO");

CanGiveFood = true;

}
}

function OnTriggerExit (hit : Collider){

if (hit.gameObject.tag == "Player") {

CanGiveFood = false;

}
}

function Give () {

yield WaitForSeconds(5);
if (!Instantiated){
Instantiate (Drop, transform.position + Vector3(DropX, DropY, DropZ), Quaternion.identity);
Instantiated = true;
GaveFood = true;
}

}

function OnGUI(){
if(CanGiveFood && ShowText){
GUI.Label(new Rect(Screen.width/2 - 75, Screen.height - 100, 150, 30), "Press 'F' to harvest food");
}
}