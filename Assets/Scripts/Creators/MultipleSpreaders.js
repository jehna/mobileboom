var Spreader : GameObject;
var SpreaderCount : int = 3;

function Awake() {
	for(var i : int = 0; i<SpreaderCount; i++) {
		Instantiate(Spreader, transform.position, Quaternion.identity);
	}
}

function Start() {
	Destroy(gameObject);
}

