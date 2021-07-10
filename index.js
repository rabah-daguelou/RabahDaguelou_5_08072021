
// Récupération de tous les produits de l'API via Fetch
let api="http://localhost:3000/api/teddies"

fetch(api)		
	.then((res)=>res.json())
	.catch((err)=>{
		let erreur=document.getElementById("nos-produits")
		.textContent="Erreur d'accès au serveur ! Le contenu de la page ne peut pas être affiché!"
	})
	.then((data)=>{

		//Création des éléments html de la carte produit 
		
		for (var i = 0; i <data.length; i++) {
						
		const carte=document.createElement("div");
		const image_produit=document.createElement("img");
		const nomEtprix_produit=document.createElement("div");
		const nom_produit=document.createElement("p");
		const prix_produit=document.createElement("p");
		const lien=document.createElement("a");

		// Insérer les éléments

		//insérer la div carte

		let carte_produit=document.getElementById('nos-produits');
		carte_produit.appendChild(lien).href="produit.html?"+data[i]._id;

		lien.appendChild(carte).classList.add("carte_produit");

		
		// Insérer l'image
		carte.appendChild(image_produit).classList.add("image_produit");
		image_produit.src=data[i].imageUrl;
		
		// Insérer le nom  et le prix
		carte.appendChild(nomEtprix_produit).classList.add("nomEtprix_produit")
		nomEtprix_produit.appendChild(nom_produit).classList.add("nom_produit")
		nom_produit.textContent=data[i].name;
		nomEtprix_produit.appendChild(prix_produit).classList.add("prix_produit")
		prix_produit.textContent=data[i].price/100+",00 €"
		}

/* une fonction globale 
		let prix=changerPrix(data.price);
		function changerPrix(price) {
		return price/100
		}
*/

	});


	
	
	
// Récupérations des produits individuellement

		