var worldScale : float = 1; 

var level_small : float;
var level_nor : float; 
var level_big : float; 
var level_gigantic : float; 
var level_global : float;

function Update () {
	if (Input.GetKey ("1")) {
		worldScale = level_small;
	}
	if (Input.GetKey ("2")) {
		worldScale = level_nor;
	}
	if (Input.GetKey ("3")) {
		worldScale = level_big;
	}
	if (Input.GetKey ("4")) {
		worldScale = level_gigantic;
	}
	if (Input.GetKey ("5")) {
		worldScale = level_global;
	}
	else {
		worldScale = level_nor;
	}
}