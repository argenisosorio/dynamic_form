$(document).ready(function() {

var MaxInputs = 100; //Maximo de inputs para agregar

/*
#####################################################
##### Contadores de los campos y divs agregados #####
#####################################################
*/
var texto_cortoFieldCount = 0;
var area_texto_cortoFieldCount = 0;
var area_texto_largoFieldCount = 0;
var seleccionFieldCount = 0;
var form_area = $("#form_area"); // Input Box Wrapper ID
var x = form_area.length; // Initial Field Count
 
/*
##############################################
##### Para obtener los ID de los botones #####
##############################################
*/
var texto_cortofield = $("#texto_corto");
var area_texto_cortofield = $("#area_texto_corto");
var area_texto_largofield = $("#area_texto_largo");
var seleccionfield = $("#seleccion");
//$(form_area).sortable(); // To Make Added Fields Sortable

/*
####################################
##### Para agregar Texto corto #####
####################################
*/
$(texto_cortofield).click(function() {
	if (x <= MaxInputs) {
	texto_cortoFieldCount++;
	$(form_area).append('<div>' + '<div class="texto_corto" id="form_area_0' + texto_cortoFieldCount + '"><b>' + texto_cortoFieldCount + ")" + ' <label>Texto Corto: </label></b><br />' +
	'<input type="text" name="text_corto' + texto_cortoFieldCount + '" id="campo_' + texto_cortoFieldCount + '" placeholder="Escribe el texto..." size="47"/>' + '<button class="removeclass00">x</button>' + '<br>' + '</div>' + '</div><br />');
}
return false;
});
$("body").on("click", ".removeclass00", function() {
	$(this).parent('div').remove();
	x--;
	texto_cortoFieldCount--;
	return false;
});

/*
#########################################
##### Para agregar Area texto corto #####
#########################################
*/
$(area_texto_cortofield).click(function() {
	if (x <= MaxInputs) {
	area_texto_cortoFieldCount++;
	$(form_area).append('<div>' + '<div class="area_texto_corto" id="form_area_0' + area_texto_cortoFieldCount + '"><b>' + area_texto_cortoFieldCount + ")" + ' <label>Area de Texto Corto: </label></b><br />' +
	'<textarea name="area_texto_corto' + area_texto_cortoFieldCount + '" id="campo_' + area_texto_cortoFieldCount + '" placeholder="Escribe el texto..." rows="4" cols="60"/></textarea>' + '<button class="removeclass01">x</button>' + '</div>' + '</div><br />');
}
return false;
});
$("body").on("click", ".removeclass01", function() {
	$(this).parent('div').remove();
	x--;
	area_texto_cortoFieldCount--;
	return false;
});

/*
#########################################
##### Para agregar Area texto largo #####
#########################################
*/
$(area_texto_largofield).click(function() {
	if (x <= MaxInputs) {
	area_texto_largoFieldCount++;
	$(form_area).append('<div>' + '<div class="area_texto_largo" id="form_area_0' + area_texto_largoFieldCount + '"><b>' + area_texto_largoFieldCount + ")" + ' <label>Area de Texto largo: </label></b><br />' +
	'<textarea name="area_texto_largo' + area_texto_largoFieldCount + '" id="campo_' + area_texto_largoFieldCount + '" placeholder="Escribe el texto..." rows="10" cols="60"/></textarea>' + '<button class="removeclass02">x</button>' + '</div>' + '</div><br />');
}
return false;
});
$("body").on("click", ".removeclass02", function() {
	$(this).parent('div').remove();
	x--;
	area_texto_largoFieldCount--;
	return false;
});

/*
##################################
##### Para agregar seleccion #####
##################################
*/
$(seleccionfield).click(function() {
	if (x <= MaxInputs) {
	seleccionFieldCount++;
	$(form_area).append('<div>' + '<div class="seleccion" id="form_area_0' + seleccionFieldCount + '"><b>' + seleccionFieldCount + ")" + ' <label>Selección: </label></b><br />' +
	'<select name="seleccion' + seleccionFieldCount + '" id="campo_' + seleccionFieldCount + '"><option>Sí<option>No</select>' + '<button class="removeclass03">x</button>' + '</div>' + '</div><br />');
}
return false;
});
$("body").on("click", ".removeclass03", function() {
	$(this).parent('div').remove();
	x--;
	seleccionFieldCount--;
	return false;
});

/*
########################################
##### Resetear todos los elementos #####
########################################
*/
$("#reset").on("click", function() {
	$("#form_area").empty();
});

});

