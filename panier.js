var prix_a_payer=0;

// Récupération des achats


let paniers=JSON.parse(localStorage.getItem('paniers'));
console.log(paniers);
let total=0;
for (var i = 0; i<paniers.length; i++) {
		total=total+paniers[i].quantite;
	}

document.getElementById("total_article").innerText=total;

// Afficher le nombre d'article
document.getElementById("votre_panier").textContent=total+"  article(s)";

// Afficher les articles du panier en détail

		//Création des éléments html de la carte produit 
	for (let i in paniers) {	
		let lien=document.createElement("a");
		let carte=document.createElement("div");
		let image_produit=document.createElement("img");
		let nombre_produit=document.createElement("span");
		let nomEtprix_produit=document.createElement("div");
		let nom_produit=document.createElement("p");
		let prix_produit=document.createElement("p");
		let prix_total=document.createElement("p");
				
		// Récupérer les articles dans le panier

		let carte_produit=document.getElementById('nos-produits');
		carte_produit.appendChild(lien).href="#";

		// insérer la carte dans le lien
		lien.appendChild(carte).classList.add("carte_produit_mini");
		
		// Insérer l'image dans la carte
		carte.appendChild(image_produit).classList.add("image_produit_mini");
		image_produit.src=paniers[i].url;
		carte.appendChild(nombre_produit)
		.classList.add("nombre_article");
		nombre_produit.textContent=paniers[i].quantite;
		
		// Insérer le nom  du produit dans la carte
		carte.appendChild(nomEtprix_produit).classList.add("nomEtprix_produit_mini");
		nomEtprix_produit.appendChild(nom_produit).classList.add("nom_produit");
		nom_produit.textContent=paniers[i].nom;

		// Insérer le prix du produit
		nomEtprix_produit.appendChild(prix_produit).classList.add("prix_produit")
		prix_produit.textContent='Prix/u: '+ paniers[i].prix_unitaire+'€';

		// Insérer le prix total du produit
		carte.appendChild(prix_total)
		.textContent='Prix total: '+ paniers[i].prix+'€'
		prix_total.classList.add("prix_total");

		prix_a_payer=prix_a_payer+paniers[i].prix;

}		
// fin de création des éléments html

document.getElementById("toal_a_payer")
.textContent=prix_a_payer+ ' €';





// Formatage des informations du formulaire



    
// -------- Début écoute du bouton d'envoi submit ----------//

let formulaire=document.getElementById('formulaire');

formulaire.addEventListener('submit',function (f){
	
	// variables nom
	let nom=document.querySelector("#nom");
    let erreurNom=document.getElementById('erreurNom');

	let regex1=/^[a-zA-Z-\s]+$/; // nom/ prenom // Autoriser les lettre maj et min, le tiret et l'espace + répéter plusieurs fois

	// Le champs nom //
    
    // trim retire les espaces initiaux et finaux
    if (nom.value.trim()==""){
        erreurNom.textContent="Ce champs est obligatoire !";
        erreurNom.classList.add('message_erreur');
        nom.style.border='1px dashed red';
        f.preventDefault();

    }else if (regex1.test(nom.value)==false){
        erreurNom.textContent="Ce nom n'est pas valide !";
        erreurNom.classList.add('message_erreur');
        nom.style.border='1px dashed red';
        f.preventDefault();
    }
    else {
    	nom.style.border='1px dashed green';
    	nom.style.background='#CDF4AB';
        erreurNom.style.display="none";
        
    }

// Le champs prénom //

	let prenom=document.querySelector("#prenom");
    let erreurPrenom=document.getElementById('erreurPrenom');
    
    if (prenom.value.trim()==""){
        
        erreurPrenom.textContent="Ce champs est obligatoire !";
        erreurPrenom.classList.add('message_erreur');
        prenom.style.border='1px dashed red';
        f.preventDefault();

    }else if (regex1.test(prenom.value)==false){
        
        erreurPrenom.textContent="Ce prénom n'est pas valide !";
        erreurPrenom.classList.add('message_erreur');
        prenom.style.border='1px dashed red';
        f.preventDefault();
    }
    else {
        prenom.style.border='1px dashed green';
        erreurPrenom.style.display="none";
    }

// Le champs adresse //
    let adresse=document.querySelector("#adresse");
    let erreurAdresse=document.getElementById('erreurAdresse');
    let regexadresse=/^[a-zA-Z-\s]+$/;
    
    if (adresse.value.trim()==""){
        
        erreurAdresse.textContent="Ce champs est obligatoire !";
        erreurAdresse.classList.add('message_erreur');
        adresse.style.border='1px dashed red';
        f.preventDefault();

    }else if (regexadresse.test(adresse.value)==false){
        
        erreurAdresse.textContent="Cette adresse est incorrect !";
        erreurAdresse.classList.add('message_erreur');
        adresse.style.border='1px dashed red';
        f.preventDefault();
    }
    else {
        adresse.style.border='1px dashed green';
        erreurAdresse.style.display="none";
    }
    
	
// Le champs ville

	let ville=document.querySelector("#ville");
    let erreurVille=document.getElementById('erreurVille');
    let regexville=/^[a-zA-Z-\s]+$/;
    
    if (ville.value.trim()==""){
        
        erreurVille.textContent="Ce champs est obligatoire !";
        erreurVille.classList.add('message_erreur');
        ville.style.border='1px dashed red';
        f.preventDefault();

    }else if (regexville.test(ville.value)==false){
        
        erreurVille.textContent="Ce nom de ville est incorrect !";
        erreurVille.classList.add('message_erreur');
        ville.style.border='1px dashed red';
        f.preventDefault();
    }
    else {
        ville.style.border='1px dashed green';
        erreurVille.style.display="none";
    }
    
// Le champs code postal
	
	let codepostal=document.querySelector("#code_postal");
    let erreurCodepostal=document.getElementById('erreurCodepostal');
    let regexcodepostal =/^(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}$/;
    
    if (codepostal.value.trim()==""){
        
        erreurCodepostal.textContent="Ce champs est obligatoire !";
        erreurCodepostal.classList.add('message_erreur');
        codepostal.style.border='1px dashed red';
        f.preventDefault();

    }else if (regexcodepostal.test(codepostal.value)==false){
        
        erreurCodepostal.textContent="Ce code postal est incorrect !";
        erreurCodepostal.classList.add('message_erreur');
        codepostal.style.border='1px dashed red';
        f.preventDefault();
    }
    else {
        codepostal.style.border='1px dashed green';
        erreurCodepostal.style.display="none";
    }

// Le champs Email

	let mail=document.querySelector("#mail");
    let erreurMail=document.getElementById('erreurMail');
    let regexmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (mail.value.trim()==""){
        
        erreurMail.textContent="Ce champs est obligatoire !";
        erreurMail.classList.add('message_erreur');
        mail.style.border='1px dashed red';
        f.preventDefault();

    }else if (regexmail.test(mail.value)==false){
        
        erreurMail.textContent="Cet e-mail est invalide !";
        erreurMail.classList.add('message_erreur');
        mail.style.border='1px dashed red';
        f.preventDefault();
    }
    else {
        mail.style.border='1px dashed green';
        erreurMail.style.display="none";
    }
   
// Le champs N° Tél

let tel=document.querySelector("#tel");
    let erreurTel=document.getElementById('erreurTel');
    let regextel=/^(0|\+33)[1-9]([-._\s]?[0-9]{2}){4}$/
    
    if (tel.value.trim()==""){
        
        erreurTel.textContent="Ce champs est obligatoire !";
        erreurTel.classList.add('message_erreur');
        adresse.style.border='1px dashed red';
        f.preventDefault();

    }else if (regextel.test(tel.value)==false){
        
        erreurTel.textContent="Le format de ce numéro est incorrect !";
        erreurTel.classList.add('message_erreur');
        tel.style.border='1px dashed red';
        f.preventDefault();
    }
    else {
        tel.style.border='1px dashed green';
        erreurTel.style.display="none";
        }


// Fin écoute submit

// Récupérer les données du formulaire

let contact={
        firstName:nom.value,
        lastName:prenom.value,
        address:adresse.value,
        city:ville.value,
        email:mail.value,
        };


//local storage

localStorage.setItem("contact",JSON.stringify(contact));
});
let contact=JSON.parse(localStorage.getItem('contact'));

console.log(contact);

// Envoi des données au serveur avec fetch POST

// 1- Regrouper le panier et le formulaire dans un objet ORDER



let errayStringsProducts=[];
for (var i = 0; i < paniers.length; i++) {
    id=paniers[i].id_;
    console.log(id);
    errayStringsProducts.push(id);
}

console.log(errayStringsProducts);

let order={
    
    contact:contact,
    products:errayStringsProducts,
};
/*
console.log(order);
localStorage.setItem("order",JSON.stringify(order));
alert(order);

let order = {
        "contact": {
            "firstName": nom.value,
            "lastName": "prenom.value",
            "address":"adresse.value",
            "city":"ville.value",
            "email":"mail.value",
        },
        
        
        "products":["5be1ed3f1c9d44000030b061","5be1ef211c9d44000030b062"]
    };*/

//2- Envoi de la requête
let promise=fetch("http://localhost:3000/api/teddies/order",{
    method:"POST",
    body:JSON.stringify(order),
    headers:{"Content-Type":"application/json",},
   

   });

    promise.then(async(response)=>{
        try{
            const retourServeur=await response.json();
            console.log("OrderId: ",retourServeur.orderId);

        }
        catch(e){
            console.log(e);
        }
    });
        
    

  /*  .catch((err)=>{
        let erreur=document.getElementById("nos-produits")
        .textContent="Erreur: Accès au serveur impossible ! Le contenu de la page ne peut pas être affiché!"*/
  


/*
    
     
});
alert("2");

*/


// Aller sur la page commande

/*confirmer_commande.onclick=()=>{
	document.location.href="commande.html";
}*/

