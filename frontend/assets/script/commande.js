// Récupération du panier et du formulaire
let commandeInfos=JSON.parse(localStorage.getItem('commandeInfos'));

// Récupération du nom du client et l'afficher
document.getElementById('nom')
.textContent=commandeInfos.nomContact+ '  '+commandeInfos.prenomContact;

// Afficher le prix total
document.getElementById('total_commande')
.textContent=commandeInfos.prix_a_payer + '  €'

// Récupérer l'id du serveur et l'afficher

document.getElementById('identifiant')
.textContent=commandeInfos.identifiant;

// Vider Local storage
localStorage.clear();

// Bouton retour à l'accueil
accueil.onclick=()=> {
    document.location.href="index.html";
}

