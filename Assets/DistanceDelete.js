var Distance : int;

function Update () {
	var CamDist = Vector3.Distance(GameObject.Find("FocalPoint").transform.position, transform.position);
	if (CamDist > Distance) {
		Destroy (gameObject);
	}
}