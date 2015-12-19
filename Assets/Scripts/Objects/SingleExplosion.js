var Color1 : Color;
var Color2 : Color;
var Color3 : Color;
var Color4 : Color;
var Color5 : Color;

var Scale : float = 1.0;

private var rays : Ray[] ;
private var scales : float[];
private var StartTime : float;

function Start() {
	StartTime = Time.time;
	var scale = Random.Range(3.0 * Scale, 5.0 * Scale);
	transform.localScale = Vector3(scale,scale,scale);
	var mesh : Mesh = GetComponent(MeshFilter).mesh;
	var vertices : Vector3[] = mesh.vertices;
	rays = new Ray[vertices.length];
	scales = new float[vertices.length];

	for (var i = 0; i < vertices.Length;i++) {
		rays[i] = Ray(Vector3(0,0,0), vertices[i]);
		scales[i] = Random.Range(1.0,2.0);
		vertices[i] = Vector3(0,0,0);
	}
	mesh.vertices = vertices;
	mesh.RecalculateBounds();

}

var TweenTime : float = 5;

function Update () {	
	
	var mesh : Mesh = GetComponent(MeshFilter).mesh;
	var vertices : Vector3[] = mesh.vertices;
	var colors : Color[] = new Color[vertices.Length];
	
	var lastColor : Color;
	var nextColor : Color;
	var lastStep : float;
	
	var timeNow : float = Mathf.Sin(((Time.time - StartTime) / TweenTime) * Mathf.PI / 2);
	if((Time.time - StartTime) / TweenTime >= 1) Destroy(gameObject);

	for (var i = 0; i < vertices.Length;i++) {
		var dist = Vector3.Distance(Vector3(0,0,0), vertices[i]) / Scale;
		if(dist < 0.25) {
			lastColor = Color1;
			nextColor = Color2;
			lastStep = 0;
		} else if(dist < 0.5) {
			lastColor = Color2;
			nextColor = Color3;
			lastStep = 0.25;
		} else if(dist < 0.75) {
			lastColor = Color3;
			nextColor = Color4;
			lastStep = 0.5;
		} else {
			lastColor = Color4;
			nextColor = Color5;
			lastStep = 0.75;
		}
			lastStep = 0;
	
		vertices[i] = rays[i].direction * Mathf.Lerp(lastStep,scales[i],timeNow);
		colors[i] = Color.Lerp(lastColor, nextColor, (dist >= 1) ? 1 : (dist % 0.25) / 0.25);
	}
	
	mesh.colors = colors;
	mesh.vertices = vertices;
	mesh.RecalculateBounds();
}