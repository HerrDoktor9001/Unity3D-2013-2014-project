var PrimarySlot: GameObject;
var PrimarySlotAnim: GameObject;
var SecondarySlot : GameObject;
var SecondarySlotAnim : GameObject;

 var Sound : AudioClip;

 var PrimarySelected : boolean = false;
 var SecondarySelected : boolean = false;
 private var IsSwitching : boolean = false;
 var IsSwitching2: boolean;
 
 var DrawAnimSecondary : String = "draw";
 var DrawAnimPrimary : String = "draw";
 var HolstAnimPrimary: String= "holster";
 
 var SecondaryShootScript : GameObject;
 var animTime : float = 2.0;

function Start (){
	PrimarySelected = true;
	//PrimarySlotAnim.animation.Rewind(DrawAnim);
	PrimarySlotAnim.GetComponent.<Animation>().Play(DrawAnimPrimary);
	PrimarySlot.gameObject.SetActive(true);
	SecondarySlot.gameObject.SetActive(false);
}

function Update(){Switch();}

function Switch(){ 
var MuzzleFlash1 = PrimarySlot.Find("MuzzleFlash");
var MuzzleFlash2 = SecondarySlot.Find("MuzzleFlash");
IsSwitching2 = IsSwitching;
if (Input.GetKeyDown("1")){
	if (SecondarySelected){
	IsSwitching = true;
		yield WaitForSeconds(animTime);

		PrimarySelected = true;
		SecondarySelected = false;
		Audio();
//		SecondarySlotAnim.animation.Rewind("Draw");
		PrimarySlotAnim.GetComponent.<Animation>().Play(DrawAnimPrimary);
		PrimarySlot.gameObject.SetActive(true);
		SecondarySlot.gameObject.SetActive(false);
		//if(MuzzleFlash1.active){
		//MuzzleFlash1.SetActive(false);}
		IsSwitching = false;
	}
 } 
   else if(Input.GetKeyDown("2")) {
	if (PrimarySelected) {
	IsSwitching = true;
	yield WaitForSeconds(animTime);
	PrimarySlot.gameObject.SetActive(false);
	SecondarySlot.gameObject.SetActive(true);
	                                     
	SecondarySlotAnim.GetComponent.<Animation>().CrossFade(DrawAnimSecondary); // Draw anim
	
	    SecondarySelected = true;
	    PrimarySelected = false;
	    Audio();
		//SecondaryShootScript.GetComponent("GunScript").enabled = true;
		//MuzzleFlash = GameObject.Find("MuzzleFlash");
		//if(MuzzleFlash2.active){
		//MuzzleFlash2.SetActive(false);}
	IsSwitching = false;
	
	}
 }
 }
function Audio() {
GetComponent.<AudioSource>().PlayOneShot(Sound);
GetComponent.<AudioSource>().volume = 0.4;}