// add your code here to make the calculator work

var nbr1 = '';
var nbr2 = '';
var quelNb = true;
var operator = '';
var result;

function afficherLesNombres() {
	if ($(this).html() === 'c') {
		$('#result').html('');
		nbr1 = '';
		nbr2 = '';
		quelNb = true;
		result = '';
	}
	else if ($(this).html() === '=') {
		afficherResultat();
		nbr1 = result;
		nbr2 = '';
	} 
	else if ($(this).html() === '+') {
			if(quelNb == false) {
				afficherResultat();
				nbr1 = result;
				nbr2 = '';
			}
			quelNb = false;
			operator = '+';
			$('#result').html('');
	}
	else if ($(this).html() === '-') {
			if(quelNb == false) {
				afficherResultat();
				nbr1 = result;
				nbr2 = '';
			}
			quelNb = false;
			operator = '-';
			$('#result').html('');
	}	
	else if ($(this).html() === '*') {
			if(quelNb == false) {
				afficherResultat();
				nbr1 = result;
				nbr2 = '';
			}
			quelNb = false;
			operator = '*';
			$('#result').html('');
	}	
	else if ($(this).html() === '/') {
			if(quelNb == false) {
				afficherResultat();
				nbr1 = result;
				nbr2 = '';
			}
			quelNb = false;
			operator = '/';
			$('#result').html('');
	}
	else {
		$('#result').append($(this).html());
		if (quelNb) {
			nbr1+=$(this).html();
		}else {
			nbr2+=$(this).html();
		}
	}

}



function afficherResultat() {
	if (operator === '+') {
		result = parseInt(nbr1) + parseInt(nbr2);
	}	
	else if (operator === '-') {
		result = parseInt(nbr1) - parseInt(nbr2);
	}	
	else if (operator === '/') {
		result = parseInt(nbr1) / parseInt(nbr2);
	}	
	else if (operator === '*') {
		result = parseInt(nbr1) * parseInt(nbr2); 
	}
	console.log(operator);
	console.log(parseInt(nbr1));
	console.log(parseInt(nbr2));
	console.log(result);

	$('#result').html(result);
}

$('.btn').click(afficherLesNombres);