var deable: GameObject;
private var disabled: boolean = false;
var SwitchWeaponScript: SwitchWeapon;
var clock: GameObject;

function Update(){

   if (Input.GetKey("l") && !disabled){
   
      deable.SetActive(false); 
      disabled=true;
      SwitchWeaponScript.enabled=false;
      clock.SetActive(false);												
   }
   
   else if (Input.GetKey("l") && disabled){
   
       deable.SetActive(true);
       disabled=false;
       SwitchWeaponScript.enabled=true;
       clock.SetActive(true);
   }
}