var expPrefab1:GameObject;
var expPrefab2:GameObject;

function Update () {
	if(Input.GetMouseButtonDown(0)){
		var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		Instantiate (expPrefab1, ray.direction * 40, expPrefab1.transform.rotation);
	} else if(Input.GetMouseButtonDown(2)){
		var ray2 = Camera.main.ScreenPointToRay (Input.mousePosition);
		Instantiate (expPrefab2, ray2.direction * 40, expPrefab1.transform.rotation);
	}
}