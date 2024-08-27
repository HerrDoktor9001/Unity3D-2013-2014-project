#pragma strict
var CanChange: boolean;
var CanShowText: boolean;
var Frase = "";
var CodigoDaArma = "";
var Player: Transform;

/// Global variables ///
var SwitchWeaponScript: SwitchWeapon;

/// Instantiate variables ///
var InstantiatePickUp: GameObject [];

var mCode: String;
var mCode2: String;

function Start(){

   SwitchWeaponScript = GameObject.FindWithTag("variableHolder").GetComponent("SwitchWeapon");
}

function Update (){

var PrimarySelected = SwitchWeaponScript.PrimarySelected;
var SecondarySelected = SwitchWeaponScript.SecondarySelected;
//var SwitchWeapScript = SwitchWeaponScript.GetComponent("SwitchWeapon");
mCode = SwitchWeaponScript.Code;
mCode2 = SwitchWeaponScript.Code2;

  if (Input.GetKeyDown("e") && CanChange){
      
      if (PrimarySelected == true){
        
         
         if(CodigoDaArma!= mCode){  // If weapon ID different than Code2 ID,
         
          
            
          if (mCode!=mCode2){
            InstantiateAfterPickUp();
          }
          if (mCode2 != "NULL"){ 
          SwitchWeaponScript.Code = CodigoDaArma;}
         else if (mCode2 == "NULL"){
           SwitchWeaponScript.Code2 = CodigoDaArma;}
         if(mCode != "NULL" && mCode2 != "NULL"){
         SwitchWeaponScript.EnableDisable();
         }
         Debug.Log("WORKS MAN");
         Destroy(gameObject);
        }
         else if (CodigoDaArma == mCode){Debug.Log("SAME CODE");}
      
      }
      else if (SecondarySelected == true){
       
        
          if (CodigoDaArma != mCode2){
            
          
          //if (mCode!=mCode2){
              InstantiateAfterPickUp();//}
              SwitchWeaponScript.Code2 = CodigoDaArma;
          //else if (mCode==mCode2){Debug.Log("Prim, Sec codes different");}
           if(mCode != "NULL" && mCode2 != "NULL"){
              SwitchWeaponScript.EnableDisable();
           }
          Destroy(gameObject);}
          else if (CodigoDaArma == mCode2){Debug.Log("SAME CODE");}
      
      }
  }
  
  WaitToShow();

}

function OnTriggerEnter(hit : Collider){

  if (hit.gameObject.tag == "Player") {
  
      CanChange = true;
      CanShowText = true;
  
  }

}

function OnTriggerExit (hit : Collider){

  if (hit.gameObject.tag == "Player") {
  
     CanChange = false;
     CanShowText = false;
  
  }

}

function OnGUI (){

   if (CanShowText){
   
     GUI.Label(new Rect(Screen.width/2 - 75, Screen.height - 170, 150, 40), Frase);
   
   }
}

function WaitToShow (){
     
     if (CanShowText){
     yield WaitForSeconds (5);
     CanShowText = false;
     }     
}  

function InstantiateAfterPickUp (){

var CurPrimWeapon = SwitchWeaponScript.Code;
var CurSecWeapon = SwitchWeaponScript.Code2;
var PrimarySelected = SwitchWeaponScript.PrimarySelected;
var SecondarySelected = SwitchWeaponScript.SecondarySelected;
   if (mCode != "NULL" && mCode2 != "NULL"){
   Debug.Log("NOT NULL");
    if (PrimarySelected){
      Debug.Log("Primary Selected");
      if (CurPrimWeapon == "A"){ //M4
      
         Instantiate(InstantiatePickUp[0], Player.transform.position+Vector3(0,-6,0), Player.transform.rotation);  
      }
      
      if (CurPrimWeapon == "B"){ // FAL
      
         Instantiate(InstantiatePickUp[1], Player.transform.position+Vector3(0,0,2), Player.transform.rotation);
      }
      
      if (CurPrimWeapon == "C"){//Don't know 
      
         Instantiate(InstantiatePickUp[2], Player.transform.position+Vector3(0,0,2), Player.transform.rotation);
      }
    }
    
    if (SecondarySelected){
     Debug.Log("Secondary Selected");
      if (CurSecWeapon == "A"){
          Debug.Log("Picked A");
          Instantiate(InstantiatePickUp[0], Player.transform.position+Vector3(0,-6,0), Player.transform.rotation);  
          Debug.Log("Dropped A");
      }
      
      if (CurSecWeapon =="B"){
         
       Instantiate(InstantiatePickUp[1], Player.transform.position+Vector3(0,0,1.5), Player.transform.rotation); 
       Debug.Log("DROPED B"); 
      }
    
      if (CurSecWeapon == "C"){
      
        Instantiate(InstantiatePickUp[2], Player.transform.position+Vector3(0,-6,0), Player.transform.rotation);  
      }
    
    }
     
   }
}  