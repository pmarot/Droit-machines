$(document).ready(function() {
    //
    $.ajax({
        url: 'http://localhost:3002/users',
        type: 'GET',
        success: function (affichUsers) {
            console.log(affichUsers);
            for (var i = 0; i < affichUsers.length; i++) {
                console.log(affichUsers[i]);  
                var info = "";
                $('#liste_utilisateurs').append('<ul class="list-group"><li class="list-group-item">Nom: ' + affichUsers[i].nom + ' Prenom: '  + affichUsers[i].prenom + ' </li></ul>'); 
        }; 
        
        },
        error: function (resultat, statut, erreur) {

            alert('ERROR ERROR');
        }
    });
    //
    
});