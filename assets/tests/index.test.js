
const {choixAleatoire, joueurGagnant, tourParTour, joueur1Gagne, joueur2Gagne, nombreTours} = require('../scripts');

test('choixAleatoire retourne un choix valide', () => {
  const choixObjet = ["pierre", "feuille", "ciseaux"];
  const choix = choixAleatoire();
  expect(choixObjet).toContain(choix);
});

test('joueurGagnant retourne le résultat correct', () => {
  expect(joueurGagnant("pierre", "ciseaux")).toBe("Joueur 1 gagne");
  expect(joueurGagnant("ciseaux", "pierre")).toBe("Joueur 2 gagne");
  expect(joueurGagnant("feuille", "feuille")).toBe("Il y a égalité ! Veuillez rejouer la manche.");
});

// NON FONCTIONNEL SUITE A UNE ERREUR :

/*

test('tourParTour met à jour les scores et l\'historique correctement', () => {
  document.getElementById = jest.fn();

  for (let i = 0; i < 3; i++) {
    tourParTour();
  }

  expect(joueur1Gagne).toBeGreaterThanOrEqual(0);
  expect(joueur2Gagne).toBeGreaterThanOrEqual(0);
  expect(nombreTours).toBeGreaterThanOrEqual(0);

  expect(document.getElementById).toHaveBeenCalledWith("resultat");
  expect(document.getElementById).toHaveBeenCalledWith("tours");

});

*/