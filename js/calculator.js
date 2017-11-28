// add your code here to make the calculator work

function afficherLesNombres() {
	$('#result').append($(this).html());
}

$('.btn').click(afficherLesNombres)
