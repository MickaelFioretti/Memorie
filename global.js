
// difficulty levels 0  1  2
var cardsByLevel = [8, 12, 16];
// carte a trouver
var faceDesCarte =  {   0 : [0, 1, 2, 3, 0, 1, 2, 3],//0
                        1 : [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5],//1
                        2 : [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7],//2 
};
// verification des cartes
var verifCarte = [];
// id des image
var tabId = [];

// constente
const LAST_LEVEL = 2;
const linkImg = "./assets/img/";
const backLinkImg = linkImg + "dosDeCarte.png";
// variable
var level = 0;
var cardLevel = cardsByLevel[level];
var faceCardLevel = faceDesCarte[level];
var buttonReplay = document.querySelector('#replay');

