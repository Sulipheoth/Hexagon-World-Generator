var water : UnityEngine.Color;
var beach : UnityEngine.Color;
//var land : UnityEngine.Color;
var jungle : UnityEngine.Color;
var desert : UnityEngine.Color;
var wasteland : UnityEngine.Color;
var plains : UnityEngine.Color;
var mountain : UnityEngine.Color;
var snow : UnityEngine.Color;

var seed : int = 62168;
var foobar : float = 1;
var biomeScale : int = 1;
var subBiomeScale : int = 3;

function Update () {
	var height : float = transform.position.y;
	if (height > 9 * foobar){
		renderer.material.color = snow;
	}
	else if (height > 8 * foobar){
		renderer.material.color = mountain;	
	}
	else if (height > 5 * foobar){
		//renderer.material.color = land;
		if (Mathf.PerlinNoise(transform.position.x/biomeScale, transform.position.z/biomeScale) > .5){
			//renderer.material.color = jungle;
			if (Mathf.PerlinNoise(transform.position.x/subBiomeScale, transform.position.z/subBiomeScale) > .5){
				renderer.material.color = jungle;
			}
			else if (Mathf.PerlinNoise(transform.position.x/subBiomeScale, transform.position.z/subBiomeScale) <= .5){
				renderer.material.color = desert;
			}
		}
		if (Mathf.PerlinNoise(transform.position.x/biomeScale, transform.position.z/biomeScale) <= .5){
			renderer.material.color = snow;
			
			if (Mathf.PerlinNoise(transform.position.x/subBiomeScale + seed, transform.position.z/subBiomeScale + seed) > .5){
				renderer.material.color = wasteland;
			}
			else if (Mathf.PerlinNoise(transform.position.x/subBiomeScale + seed, transform.position.z/subBiomeScale + seed) <= .5){
				renderer.material.color = plains;
			}
			
		}
	}
	else if (height > 4 * foobar){
		renderer.material.color = beach;
	}
	else if (height <= 4 * foobar){
		renderer.material.color = water;
	}
	//print(height);
}