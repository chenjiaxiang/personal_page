$(function(){
	var creat_films_items = function(res){
		var result = "";
		for (var i = 0; i < res.length; i++) {
			var items = "<div class='films_items'>";
			if(res[i].link!=""){
				items += "<a href='" + res[i].link + "'>";
				items += res[i].name;
				items += "</a>";
			}
			else{
				items += "<div>" + res[i].name + "</div>";
			}
			console.log(items);
			items += "<div>" + res[i].type + "</div>";
			items += "<div>" + res[i].rate + "</div>";
			items += "</div>";
			result += items;
		}
		return result;
	}
	var My_innerHtml = "<div>";
	var testinner = "<span>hello</span>";
	document.querySelector("button")
		.addEventListener("click", function () {
	$ajaxUtils
		.sendGetRequest("./data/films.json",
			function(res) {
				My_innerHtml += creat_films_items(res) + "</div>";
				console.log(My_innerHtml);
				document.querySelector(".films_and_books_container")
					.innerHTML = My_innerHtml;
				// console.log(res.name);
			});
	});

})(window);