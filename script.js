// ========================================
// Sélection du livre
// ========================================

const cover = document.getElementById("cover");

const page1Left = document.getElementById("page1-left");
const page1Right = document.getElementById("page1-right");

const page2Left = document.getElementById("page2-left");
const page2Right = document.getElementById("page2-right");

const page3Left = document.getElementById("page3-left");
const page3Right = document.getElementById("page3-right");

const previousPage = document.getElementById("previousPage");
const nextPage = document.getElementById("nextPage");

// Son de page
const pageTurnSound = new Audio("sounds/page-turn.mp3");

pageTurnSound.volume = 0.30;

// Sons de la couverture
const bookOpenSound = new Audio("sounds/book-open.mp3");
const bookCloseSound = new Audio("sounds/book-close.mp3");

bookOpenSound.volume = 0.25;
bookCloseSound.volume = 0.25;

// Musique d'ambiance
const ambientMusic = new Audio("sounds/fjord-nordic.mp3");

ambientMusic.volume = 0.20;
ambientMusic.loop = true;

// ========================================
// État du livre
// ========================================

let isOpen = false;
let isTurning = false;
let currentPage = 1;


// ========================================
// Ouverture du grimoire
// ========================================

cover.addEventListener("click", function () {

    openBook();

});


// ========================================
// Navigation vers la droite
// ========================================

nextPage.addEventListener("click", function () {

    if (isTurning) return;

    if (currentPage === 1) {

        turnPage1To2();

    } else if (currentPage === 2) {

        turnPage2To3();

    }

});


// ========================================
// Page 1 → Page 2
// ========================================

function turnPage1To2() {

    isTurning = true;

    // Son de page
    pageTurnSound.currentTime = 0;
    pageTurnSound.play();

    setTimeout(function () {
    pageTurnSound.pause();
    pageTurnSound.currentTime = 0;
    }, 700);

    // Réinitialisation complète de la page 2
    page2Left.classList.remove("hidden");
    page2Right.classList.remove("hidden");

    page2Left.classList.remove("flip");
    page2Left.classList.remove("flip-back");

    page2Right.classList.remove("flip");
    page2Right.classList.remove("flip-back");

    // On prépare la page 2 derrière
    page2Left.style.zIndex = "1";
    page2Right.style.zIndex = "1";


    // Les pages actuelles passent devant
    page1Left.style.zIndex = "2";
    page1Right.style.zIndex = "3";


    // La page droite actuelle tourne
    page1Right.classList.add("flip");


    // La page gauche change après 200 ms
    setTimeout(function () {

        page1Left.classList.add("hidden");

    }, 200);


    // Fin de la rotation
    setTimeout(function () {

        page1Right.classList.add("hidden");
        page1Right.classList.remove("flip");

        page2Left.style.zIndex = "2";
        page2Right.style.zIndex = "2";

        currentPage = 2;

        previousPage.classList.add("active");
        nextPage.classList.add("active");

        isTurning = false;

    }, 200);

}


// ========================================
// Page 2 → Page 3
// ========================================

function turnPage2To3() {

    isTurning = true;

// Son de page
    pageTurnSound.currentTime = 0;
    pageTurnSound.play();

    setTimeout(function () {
    pageTurnSound.pause();
    pageTurnSound.currentTime = 0;
    }, 700);

     // Réinitialisation complète de la page 3
    page3Left.classList.remove("hidden");
    page3Right.classList.remove("hidden");

    page3Left.classList.remove("flip");
    page3Left.classList.remove("flip-back");

    page3Right.classList.remove("flip");
    page3Right.classList.remove("flip-back");


    // On prépare la page 3 derrière
    page3Left.classList.remove("flip");
    page3Right.classList.remove("flip");

    page3Left.classList.remove("hidden");
    page3Right.classList.remove("hidden");

    page3Left.style.zIndex = "1";
    page3Right.style.zIndex = "1";


    // Les pages actuelles passent devant
    page2Left.style.zIndex = "2";
    page2Right.style.zIndex = "3";


    // La page droite actuelle tourne
    page2Right.classList.add("flip");


    // La page gauche change après 200 ms
    setTimeout(function () {

        page2Left.classList.add("hidden");

    }, 200);


    // Fin de la rotation
    setTimeout(function () {

        page2Right.classList.add("hidden");
        page2Right.classList.remove("flip");

        page3Left.style.zIndex = "2";
        page3Right.style.zIndex = "2";

        currentPage = 3;

        previousPage.classList.add("active");
        nextPage.classList.remove("active");

        isTurning = false;

    }, 200);

}

// =====================================
// Page 3 → Page 2
// =====================================

function turnPage3To2() {

    isTurning = true;

    // Son de page
    pageTurnSound.currentTime = 0;
    pageTurnSound.play();

    setTimeout(function () {
    pageTurnSound.pause();
    pageTurnSound.currentTime = 0;
    }, 700);

    // On prépare la page 2 derrière
    page2Left.classList.remove("hidden");
    page2Right.classList.remove("hidden");

    page2Left.style.zIndex = "1";
    page2Right.style.zIndex = "1";

    // La page 3 passe devant
    page3Left.style.zIndex = "2";
    page3Right.style.zIndex = "3";

    // La page droite de la page 3 tourne
    page3Left.classList.add("flip-back");

    // La page gauche de la page 3 disparaît rapidement
    setTimeout(function () {

        page3Left.classList.add("hidden");

    }, 200);

    // Fin de la rotation
    setTimeout(function () {

        // On cache complètement la page 3
        page3Left.classList.add("hidden");
        page3Right.classList.add("hidden");
        page3Right.classList.remove("flip-back");

        // La page 2 reprend le dessus
        page2Left.style.zIndex = "2";
        page2Right.style.zIndex = "2";

        currentPage = 2;

        // Depuis la page 2, on peut aller à gauche OU à droite
        previousPage.classList.add("active");
        nextPage.classList.add("active");

        isTurning = false;

    }, 200);
}

// =====================================
// Page 2 → Page 1
// =====================================

function turnPage2To1() {

    isTurning = true;

    // Son de page
    pageTurnSound.currentTime = 0;
    pageTurnSound.play();

    setTimeout(function () {
    pageTurnSound.pause();
    pageTurnSound.currentTime = 0;
    }, 700);

    // On prépare la page 1 derrière
    page1Left.classList.remove("hidden");
    page1Right.classList.remove("hidden");

    page1Left.style.zIndex = "2";
    page1Right.style.zIndex = "2";

    // La page 2 passe devant
    page2Left.style.zIndex = "2";
    page2Right.style.zIndex = "3";

    // La page droite de la page 2 tourne
    page2Left.classList.add("flip-back");

    // La page gauche actuelle disparaît rapidement
    setTimeout(function () {
    page2Left.classList.add("hidden");
    }, 200);

    // La page 1 droite apparaît rapidement
    setTimeout(function () {
    page1Right.classList.remove("hidden");
    }, 200);

    // Fin du retour
    setTimeout(function () {

    // On cache complètement la page 2
    page2Left.classList.add("hidden");
    page2Right.classList.add("hidden");
    page2Right.classList.remove("flip");

    // La page 1 reprend le dessus
    page1Left.style.zIndex = "2";
    page1Right.style.zIndex = "2";

    currentPage = 1;

    previousPage.classList.add("active");
    nextPage.classList.add("active");

    isTurning = false;

}, 400);
}

// ========================================
// Ouverture du grimoire
// ========================================

function openBook() {

    if (isOpen) return;

    isOpen = true;

    currentPage = 1;

    // Son d'ouverture du grimoire
    bookOpenSound.currentTime = 0;
    bookOpenSound.play();

// Remise à zéro des pages avant ouverture
const pages = [
    page1Left,
    page1Right,
    page2Left,
    page2Right,
    page3Left,
    page3Right
];

pages.forEach(function(page) {

    page.classList.add("hidden");
    page.classList.remove("flip");
    page.classList.remove("flip-back");

});

    // Réinitialisation complète de la couverture
    cover.classList.remove("open");

    cover.style.transform = "rotateY(0deg)";
    cover.style.opacity = "1";
    cover.style.visibility = "visible";
    cover.style.pointerEvents = "auto";

    // Ouverture de la couverture
   setTimeout(function () {
    cover.classList.add("open");
}, 10);


    // Affichage de la première double page
    page1Left.classList.remove("hidden");
    page1Right.classList.remove("hidden");


    // Les autres pages restent cachées
    page2Left.classList.add("hidden");
    page2Right.classList.add("hidden");

    page3Left.classList.add("hidden");
    page3Right.classList.add("hidden");


    // La couverture ne reçoit plus les clics
    cover.style.cursor = "default";

    previousPage.classList.add("active");
    nextPage.classList.add("active");
}

previousPage.addEventListener("click", function () {

    if (isTurning) return;

    if (currentPage === 3) {
        turnPage3To2();

    } else if (currentPage === 2) {
        turnPage2To1();

    } else if (currentPage === 1) {
        closeBook();
    }
});

function closeBook() {

    if (isTurning) return;

    isTurning = true;

    // Son de fermeture du grimoire
    bookCloseSound.currentTime = 0;
    bookCloseSound.play();

    // ========================================
    // Nettoyage de toutes les pages
    // ========================================

    page1Left.classList.add("hidden");
    page1Right.classList.add("hidden");

    page2Left.classList.add("hidden");
    page2Right.classList.add("hidden");

    page3Left.classList.add("hidden");
    page3Right.classList.add("hidden");


    // ========================================
    // Remise à zéro des animations
    // ========================================

    const pages = [
        page1Left,
        page1Right,
        page2Left,
        page2Right,
        page3Left,
        page3Right
    ];

    pages.forEach(function(page) {

        page.classList.remove("flip");
        page.classList.remove("flip-back");

    });


    // ========================================
    // Remise à zéro des profondeurs
    // ========================================

    page1Left.style.zIndex = "2";
    page1Right.style.zIndex = "2";

    page2Left.style.zIndex = "1";
    page2Right.style.zIndex = "1";

    page3Left.style.zIndex = "0";
    page3Right.style.zIndex = "0";


    // ========================================
    // Navigation
    // ========================================

    previousPage.classList.remove("active");
    nextPage.classList.remove("active");


    // ========================================
    // Fermeture de la couverture
    // ========================================

    cover.classList.remove("open");


    // ========================================
    // Fin de fermeture
    // ========================================

    setTimeout(function() {

        isOpen = false;
        currentPage = 1;

        cover.style.cursor = "pointer";

        document.body.classList.remove("scene-active");

        isTurning = false;

    }, 800);

}

    // Clic sur le livre du décor
    const bookTrigger = document.getElementById("book-trigger");

    bookTrigger.addEventListener("click", function () {

    // Démarrage de la musique d'ambiance
    if (ambientMusic.paused) {
    ambientMusic.play();
}

    // Lancement de la transition
    document.body.classList.add("scene-active");

});

    const bookCloseArea = document.getElementById("book-close-area");

    bookCloseArea.addEventListener("click", function () {
    if (!isOpen || isTurning) return;

    closeBook();
});

// ========================================
// Particules de poussière
// ========================================

const dustContainer = document.getElementById("dust-particles");

for (let i = 0; i < 25; i++) {

    const dust = document.createElement("span");

    dust.classList.add("dust");

    dust.style.left = Math.random() * 100 + "%";
    dust.style.top = Math.random() * 100 + "%";

    dust.style.animationDelay = Math.random() * 6 + "s";
    dust.style.animationDuration = 5 + Math.random() * 6 + "s";

    dustContainer.appendChild(dust);
}

