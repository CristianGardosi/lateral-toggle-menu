// Check per vedere se la navigazione aside è aperta o chiusa in modo da aprirla o chiuderla di conseguenza
// Inizialmente è chiusa quindi è sensato settare lo status su false, ma posso scegliere liberamente
let toggleAsideStatus = false;
// Funzione apertura/chiusura
let toggleFunction = () => {
    let getSidebar = document.querySelector('.nav-sidebar');
    let getSidebarUl = document.querySelector('.nav-sidebar ul');
    let getSidebarTitle = document.querySelector('.nav-sidebar span');
    let getSidebarLinks = document.querySelectorAll('.nav-sidebar a');

    if (toggleAsideStatus === false) {
        getSidebar.style.width = '300px';
        getSidebarUl.style.visibility = 'visible';
        getSidebarTitle.style.opacity = '.5';

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = '1';
        }

        toggleAsideStatus = true;

    }
    else if (toggleAsideStatus === true) {
        getSidebar.style.width = '80px';
        getSidebarUl.style.visibility = 'hidden';
        getSidebarTitle.style.opacity = '0';

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = '0';
        }

        toggleAsideStatus = false;

    }
}




