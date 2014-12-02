var mapScale : int = 1;
var heightScale : int = 10;

var foobar : float = 1;

function Update () {
	var height = Mathf.PerlinNoise(transform.position.x/mapScale, transform.position.z/mapScale);
	height = Mathf.Floor(height * heightScale) - 2;  
	if (height < 4){
		height = 4;
	}
	transform.position.y = height * foobar;
}