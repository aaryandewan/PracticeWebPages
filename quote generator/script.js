var cntr1 = 0;
var cntr2 = -1;
var globalCntr = 0;
var pagenumber = 1;
var obj = {};
var url = 'https://api.unsplash.com/search/photos?client_id=gZhxjV-IKUCDxd4oQOzrsDyiO-H5MVMn8M5cmjXpJOQ&query=minimalistic&orientation=landscape';
function callUnsplashAPI(counter, pageNo){
		globalCntr++;
		url += '&page=' + pageNo;
		fetch(url).then(function(response){
			return response.json();
			}).then(function(json){
				obj = json;
})
		};
callUnsplashAPI(globalCntr, 1);

$("#btn").click(function (){
	// console.log(12);
	var t0 = performance.now()
		fetch('https://api.quotable.io/random?maxLength=100').then(function(response){
				return (response.json());
	}).then(function(json){
		// console.log(json);
		var t1 = performance.now();
		// console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

		$("#box1").text(json.content);
		$("#box2").text(json.author);
	})

	if (cntr2 < 9)
		cntr2++;
	else if(cntr2 == 9){
		cntr2=0;
		pagenumber++;
		callUnsplashAPI(globalCntr, pagenumber);
	}
	// console.log("The src is --- " + obj.results[cntr2].urls.full);
	var logo = document.getElementById('simp');
	//logo.src = obj.results[cntr2].urls.regular;
	// $("simp").attr("src", obj.results[cntr2].urls.full);
	document.getElementsByTagName("body")[0].style.backgroundImage="url(" + obj.results[cntr2].urls.regular; + ");"


	 })

