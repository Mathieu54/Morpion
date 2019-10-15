$(function() {
  	var joueur = 1;
  	var table = $('table');
  	var info = $('.info');
  	var tour = $('.tour_joueur');
  	var total_coup = 0;
  	var jouable = true;
  	afficher_joueur_suivant(tour, joueur);
  
  	$('td').click(function() {
  	if(jouable == true) {
	    	td = $(this);
	    	$('.info').text("").css("color", "gray");
	    	var etat = getetat(td);
	    if(!etat) {
	      	var icone = defineiconeForCurrentPlayer(joueur);
	      	changeetat(td, icone);
	      		    	total_coup++;
	       	console.log(total_coup);
	      	if(check_win(table, icone)) {
	      		if(joueur == 1) {
	      			$('.info').text("Le Joueur " + joueur + " a gagné la partie !").css("color", "orange");
	      			tour.text('');
	      			jouable = false;
	      		} else {
	      			$('.info').text("Le Joueur " + joueur + " a gagné la partie !").css("color", "blue");
	      			tour.text('');
	      			jouable = false;
	      		}
	      	} else if(total_coup > 8) {
	      		$('.info').text("Égalité ! Il faut recommencer !").css("color", "gray");
	      		tour.text('');
	      		jouable = false;
	      	} else {
	        	joueur = setNextPlayer(joueur);
	        	afficher_joueur_suivant(tour, joueur);
	      	}
	    } else {
	      	$('.info').text("Erreur la case est déjà prise !").css("color", "red");
	    }
	}
  });
  
  	$('.reset_morpion').click(function() {
    	joueur = 1;
    	$('.info').text("Vous pouvez commencer à jouer !").css("color", "gray");
    	reset_morpion(table);
    	afficher_joueur_suivant(tour, joueur);
    	total_coup = 0;
    	jouable = true;
  	});
  
});

function reset_morpion(table) {
  table.find('td').each(function() {
    $(this).removeClass('rond').removeClass('croix');
  });
}

function afficher_joueur_suivant(tour, joueur) {
	if(joueur == 1) {
		tour.text('Joueur : '+joueur+ ' à toi de jouer !').css("color", "orange");
	} else {
		tour.text('Joueur : '+joueur+ ' à toi de jouer !').css("color", "blue");
	}
}

function getetat(td) {
  if(td.hasClass('croix') || td.hasClass('rond')) {
    return 1;
  } else {
    return 0;
  }
}

function changeetat(td, icone) {
  return td.addClass(icone);
}

function defineiconeForCurrentPlayer(joueur) {
  if(joueur == 1) {
    return 'croix';
  } else {
    return 'rond';
  }
}

function setNextPlayer(joueur) {
  if(joueur == 1) {
    return joueur = 2;
  } else {
    return joueur = 1;
  }
}

function check_win(table, icone) {
  var won = 0;
  if(table.find('.case1').hasClass(icone) && table.find('.case2').hasClass(icone) && table.find('.case3').hasClass(icone)) {
    won = 1;
  } else if (table.find('.case1').hasClass(icone) && table.find('.case4').hasClass(icone) && table.find('.case7').hasClass(icone)) {
    won = 1;
  } else if (table.find('.case1').hasClass(icone) && table.find('.case5').hasClass(icone) && table.find('.case9').hasClass(icone)) {
    won = 1;
  } else if (table.find('.case4').hasClass(icone) && table.find('.case5').hasClass(icone) && table.find('.case6').hasClass(icone)) {
    won = 1;
  } else if (table.find('.case7').hasClass(icone) && table.find('.case8').hasClass(icone) && table.find('.case9').hasClass(icone)) {
    won = 1;
  } else if (table.find('.case2').hasClass(icone) && table.find('.case5').hasClass(icone) && table.find('.case8').hasClass(icone)) {
    won = 1;
  } else if (table.find('.case3').hasClass(icone) && table.find('.case6').hasClass(icone) && table.find('.case9').hasClass(icone)) {
    won = 1;
  } else if (table.find('.case3').hasClass(icone) && table.find('.case5').hasClass(icone) && table.find('.case7').hasClass(icone)) {
    won = 1;
  }
  return won;
}


