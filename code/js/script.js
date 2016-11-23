$(function(){
	var height = window.screen.height;
	var scale = null;
	var width = document.body.clientWidth;
	if(width < 768)
		scale = 4;
	 else if(width < 1200)
	 	scale = 2;
	 else
	 	scale = 1;
	 height /= scale;
	document.querySelector("#fake_personal_information").style.height = Number(height).toString() + "px";
	document.querySelector("#essay").style.height = Number(height).toString() + "px";
	document.querySelector("#useful_material_and_links_to_them").style.height = Number(height).toString() + "px";
	document.querySelector("#intresting_films_and_books").style.height = Number(height).toString() + "px";
})(window);