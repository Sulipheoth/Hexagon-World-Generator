var posX : int;
var posZ : int;

function Awake () {
	posX = Mathf.Floor(transform.position.x/15);
	posZ = Mathf.Floor(transform.position.z/14); //13.8564);
	//print (posX + ", " + posZ);
	name = ("x" + posX + "z" + posZ);
}