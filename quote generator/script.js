const req = new XMLHttpRequest();
req.open("GET",'https://api.quotable.io/random?maxLength=100', true);
req.send();

req.onload = function(){
	const json = JSON.parse(req.responseText);
	console.log(json);

	$("#box1").text(json.content);
	 $("#box2").text(json.author);
	 $("#btn").click(function (){
	 	location.reload();
	 })
}
