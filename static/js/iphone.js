/* 
 * This module hides all page elements with the hide-iphone class when running on iPhone.
 * 
 * This was necessary to work around bugs in Google Slides that prevent some of the site 
 * features (module preview/edit buttons) from working on iPhone. 
*/

(function(){
    let hiddenElements = document.querySelectorAll(".hide-iphone");

    for (let i = 0; i < hiddenElements.length; i++) {
        let container = hiddenElements[i];

        if (navigator.userAgent.includes('iPhone')) {
            container.setAttribute("style", "display:none");
        }
    }
})();
