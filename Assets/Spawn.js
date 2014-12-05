var spawn : GameObject;

function Update () {
	var camDist = Vector3.Distance(GameObject.Find("FocalPoint").transform.position, transform.position);
	var posX = Mathf.Floor(transform.position.x/15);
	var posZ = Mathf.Floor(transform.position.z/14); //13.8564);
	//print(camDist);
	var coord : String =   "x" + posX + "z" + posZ;
	if (!(GameObject.Find(coord))){
		spawn.name = (coord);	
		Instantiate (spawn, Vector3(posX * 15, 0, posZ * 14), Quaternion.identity);
		spawn.name = "World";
	}	
}