//var newMaterial : Material; 
//private var screenCenter : Vector3;
// private var raycastHit : RaycastHit; 
// private var theRenderer : Renderer; 
// private var originalMaterial : Material;
//
// 
//function Start () { screenCenter = Vector3(.5F, .5F, 0); } 
//
//function Update () { var ray : Ray = Camera.main.ViewportPointToRay(screenCenter); // creates a ray going from camera to viewport center 
//if (Physics.Raycast(ray, raycastHit)) { // get what that ray hits 
//var hitRenderer : Renderer = raycastHit.transform.GetComponent.<Renderer>(); //get the renderer of the hit object 
//if (hitRenderer) { if (theRenderer != null){ //if we've already assigned a renderer 
//if (theRenderer == hitRenderer) return; //if this the same renderer do nothing 
//else theRenderer.material = originalMaterial; // if it's a different one, put the original material back 
//} theRenderer = hitRenderer; originalMaterial = hitRenderer.sharedMaterial; hitRenderer.material = newMaterial; } } else if (theRenderer != null) { // if we didn't hit anything and there exists a changed renderer, put the original material back 
//theRenderer.material = originalMaterial; theRenderer = null; } 
//}

var Player: Transform; // Player position;
var t: Transform; // this objects position;

var originalMat: Material; // Material to get replaced (original Material);
var newMat: Material; // Material to replace with;
var theRenderer: Renderer;

function Start(){  

   theRenderer= GetComponent.<Renderer>();
   originalMat= theRenderer.material;
}

 function Update(){
  var WaterMode2= GetComponent("Water").WaterMode;
    Player= GameObject.FindWithTag("Player").transform;
   // t= this.transform;
    
    var distance= Vector3.Distance(transform.position, Player.position);
    
    if(distance >20){
    
      // theRenderer.material=newMat;
     
      WaterMode2 = WaterMode2.Simple;
    }
    else {
    
     // theRenderer.material= originalMat;
    }    
 } 