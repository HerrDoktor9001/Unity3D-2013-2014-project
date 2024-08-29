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

// aug. 2024: notes to younger self: simplify code, make it more readable!
// application of "Guard Clauses Technique"?
// 1st, remove loose code from update and store it in its own function (calling 'return' in 'Update()' causes issues in Papyrus... maybe same in .js?)
// 2nd, check for our fail trigger:
   // if (!Input.GetKey("l")){ return; } <- if user NOT pressing down 'l' key, stop execution
// 3rd, continue code as usual:
   // if (disabled){ ... do stuff ...} else { ... do stuff ...} <- as 'disabled' property is binary (a bool, either true or false), no need for 'else if', as 'else' can only capture the inverse condition here...
//4th, make sure to call our new independent function in 'Update()'

// another option would be to simply nest our if clauses:
// if (Input.GetKey("l")){
//  if (disabled){ ... Do Stuff ...} else { ... Do Stuff ...}
//}

// ALTERNATIVELLY, we could choose a more elegant route:
// for each key press, we toggle a boolean,
// and send the bool value to our external variables.
// something like:

//function Update(){

//   if (Input.GetKey("l")){
//      disabled = !disabled                  <- if false when pressed, will become true
      
//      deable.SetActive(disabled);            <- will be set to false or true according to 'disable' bool state;
//      SwitchWeaponScript.enabled=disabled;   <- idem supra
//      clock.SetActive(disabled);			     <- idem supra									
//   }
//}
