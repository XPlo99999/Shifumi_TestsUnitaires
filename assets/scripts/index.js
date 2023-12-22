
// Initialise la partie

const choixObjet = ["pierre", "feuille", "ciseaux"];
let joueur1Gagne = 0;
let joueur2Gagne = 0;
let nombreTours = 0;

function choixAleatoire() {

    // Calcule aléatoire

    const choixObjetAleatoire = Math.floor(Math.random() * choixObjet.length);
    return choixObjet[choixObjetAleatoire];
}

function tourParTour() {

    // Choix du calcule aléatoire affecté aux joueurs

    const joueur1Choix = choixAleatoire();
    const joueur2Choix = choixAleatoire();

    const resultatParManche = joueurGagnant(joueur1Choix, joueur2Choix);

    document.getElementById("resultat").innerText = `Joueur 1 : ${joueur1Choix} | Joueur 2 : ${joueur2Choix} | Résultat : ${resultatParManche}`; nombreTours++;
    document.getElementById("tours").innerText = `Manche : ${nombreTours}`;

    if (resultatParManche === "Joueur 1 gagne") {

        joueur1Gagne++;

    } else if (resultatParManche === "Joueur 2 gagne") {

        joueur2Gagne++;

    };

    // Joueur 1 ou joueur 2 gagne 2 manches

    if (joueur1Gagne === 2 || joueur2Gagne === 2) {

        alert(`${joueur1Gagne === 2 ? "Joueur 1" : "Joueur 2"} remporte la partie!`);
        joueur1Gagne = 0;
        joueur2Gagne = 0;
        nombreTours = 0;
        document.getElementById("tours").innerText = "";

    };

    // Historique

    choixObjet.forEach (function(choixObjet)
    {
        console.log(`Joueur 1 : ${joueur1Choix} | Joueur 2 : ${joueur2Choix} | Résultat : ${resultatParManche}`);
    });
};

function joueurGagnant(choix1, choix2) {

    // Egalité

    if (choix1 === choix2) {

        return "Il y a égalité ! Veuillez rejouer la manche.";

    };

    // Joueur 1 gagne la manche

    if (

        (choix1 === "pierre" && choix2 === "ciseaux") || (choix1 === "feuille" && choix2 === "pierre") || (choix1 === "ciseaux" && choix2 === "feuille")

    )  {

        return "Joueur 1 gagne";

    };

    // Joueur 2 gagne la manche

    if (

        (choix1 === "ciseaux" && choix2 === "pierre") || (choix1 === "pierre" && choix2 === "feuille") || (choix1 === "feuille" && choix2 === "ciseaux")

    )  {

        return "Joueur 2 gagne";

    };
};

// Pour l'export des fonctions vers les tests

module.exports = {
    choixAleatoire,
    tourParTour,
    joueurGagnant
};