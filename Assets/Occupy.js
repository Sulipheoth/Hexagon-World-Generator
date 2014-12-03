var posX : int;
var posZ : int;

function Update () {
	posX = Mathf.Floor(transform.position.x/15);
	posZ = Mathf.Floor(transform.position.z/13.8564);
	//print (posX + ", " + posZ);
	var c = GameObject.Find("Master").GetComponent(ChunkTracker).GetChunkLog();
	print(c);
	print(posX);
	print(posZ);
	
	if(c.length < posX +1) { c.length = posX +1; }
	if(!c[posX]) {
		c[posX] = new Array();
		c[posX].length = posZ +1;
		c[posX][posZ] = true;
	} else {
		if(c[posX].length < posZ +1) {
			c[posX].length = posZ +1;
		}
		c[posX][posZ] = true;
	}
}