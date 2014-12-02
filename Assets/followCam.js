var camOrigin : Vector3;
private var frame : int = 0;

function Update () {
	var cam = GameObject.Find("Main Camera");
	var camPos = cam.transform.position;
	frame ++;
	if (frame == 1){
		camOrigin = camPos;
	}
	//print(cam);
	transform.position.x = (Mathf.Floor(camPos.x/3)*3) - camOrigin.x;
	transform.position.z = (Mathf.Floor(camPos.z/1.73205)*1.73205) - camOrigin.z;
}