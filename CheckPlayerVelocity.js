var PlayerMotor: CharacterController;
var PlayerVelocity: Vector3;
var forwardVelocity: Vector3;

function Start () {
  PlayerMotor= GameObject.FindWithTag("Player").GetComponent.<CharacterController>();
}

function Update () {

    PlayerVelocity= PlayerMotor.velocity;
    forwardVelocity=Vector3(0,0, PlayerVelocity.z);
}

// z axis front/back;
// y axis up/down;
// x axis left/right;