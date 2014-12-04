var viewDist : int = 40;
var spawn : GameObject;

function Update () {
	var camDist = Vector3.Distance(GameObject.Find("FocalPoint").transform.position, transform.position);
	var posX = Mathf.Floor(transform.position.x/15);
	var posZ = Mathf.Floor(transform.position.z/13.8564);
	//print(camDist);
	if (camDist < viewDist && !(GameObject.Find("x" + posX + "z" + posZ)) && !(GameObject.Find("x" + posX + "z" + posZ + "(Clone)"))){
		spawn.name = ("x" + posX + "z" + posZ);	
		Instantiate (spawn, Vector3(posX * 15, 0, posZ * 13.8564), Quaternion.identity);
		spawn.name = "World";
	}	
}