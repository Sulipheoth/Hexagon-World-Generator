var moveMultiplierX : float = 1;
var moveMultiplierY : float = 1;
var clickFrames : int = 0;
var mouseOrigin : Vector2;
var transformOrigin : Vector2; // real important

function Update () {
	if (Input.GetMouseButton(0)){
		clickFrames ++;
		if (clickFrames == 1){
			mouseOrigin = Vector2(Input.mousePosition.x / Screen.width, Input.mousePosition.y / Screen.height);
			transformOrigin = Vector2(transform.position.x, transform.position.z);
			//print(mouseOrigin.y);
		}
		transform.position.x = transformOrigin.x - (((Input.mousePosition.x / Screen.width) - mouseOrigin.x) * moveMultiplierX);
		transform.position.z = transformOrigin.y - (((Input.mousePosition.y / Screen.height) - mouseOrigin.y) * moveMultiplierY);
	}
	else {
		clickFrames = 0;
		mouseOrigin = Vector2(Input.mousePosition.x / Screen.width, Input.mousePosition.y / Screen.height);
		transformOrigin = Vector2(transform.position.x, transform.position.y);
	}
}