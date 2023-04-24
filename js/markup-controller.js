// /**
//  * This file should not be used in prod. 
//  * 
//  * Here assembled some helper functions we use for the markup project testing
//  */


/**
 * Checks the query parameter and enables Left to Right layout if /?rtl=true is present
 */
function setupLeftToRight() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
   
    if (params.rtl == 'true') {
        document.documentElement.setAttribute("lang", 'ar');
        document.documentElement.setAttribute("dir", 'rtl');

        document.querySelectorAll('link[rel=stylesheet]').forEach(function(elem) {
            console.log(elem);
            elem.disabled = true;
        })

        document.querySelector('head').insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="css/main.rtl.min.css">');
    }
};

// main scrips
setupLeftToRight();
//# sourceMappingURL=markup-controller.js.map
