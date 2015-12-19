var Explosion : GameObject;
var Step : float = 0.3;
var LiveTime : float = 2.0;
var ExplosionCount : int = 3;

private var numIntantiated : int = 0;
function Start() {
	InvokeRepeating("Spawn", LiveTime / ExplosionCount, LiveTime / ExplosionCount);
}

function Spawn() {
	
	Instantiate(Explosion, transform.position, Explosion.transform.rotation);
	numIntantiated++;
	if(numIntantiated >= ExplosionCount) Destroy(gameObject);
	Move();
}

function Move() {
	
	transform.position = transform.TransformPoint(Step,0,0);
}