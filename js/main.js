/********************************************
********** Confirmation envoi formulaire ****
********************************************/
function Message() {
  confirm ("Etes vous sur de vouloir envoyer votre message?")
}


/* Date + Heure */
// var today=new Date();
// var jour=today.getDate();
// var mois=today.getMonth()+1;
// var an=today.getFullYear();
// var heure = today.getHours();
// var minutes = today.getMinutes();
//
// function date() {
//   document.getElementById("time").innerHTML = "Nous sommes le " + jour + "/"  + mois + "/" + an + " il est " + heure + ":" + minutes ;
// }


/***********************************************
***************** Chrono second *****************
************************************************/
var seconds = 0;
var el = document.getElementById('seconds-counter');

function incrementSeconds() {
  seconds += 1;
  el.innerText = "You have been here for " + seconds + " seconds.";
}

var cancel = setInterval(incrementSeconds, 1000);


/**********************************************
************ Alt onmouseover ******************
**********************************************/

function myFunction(th, x) {
  var z = "demo" + th.id.substr(5);

  if (x==1) {
    var x = document.getElementById(th.id).alt;
    document.getElementById(z).innerHTML = x;}
    else {
      document.getElementById(z).innerHTML = "";
    }
  }


  /*********************************************
  *************** Categories Tabs *******************
  **********************************************/

  function openCategorie(evt, categorieName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(categorieName).style.display = "block";
    evt.currentTarget.className += " active";
  }
