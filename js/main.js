/* Confirmation envoi formulaire */
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



/* Chrono second */
var seconds = 0;
var el = document.getElementById('seconds-counter');

function incrementSeconds() {
    seconds += 1;
    el.innerText = "You have been here for " + seconds + " seconds.";
}

var cancel = setInterval(incrementSeconds, 1000);
