/** 
* Script for YouTube lazy loading support. Slightly customized from:  
* 
* https://ourcodeworld.com/articles/read/1383/how-to-properly-configure-lazy-loading-of-a-youtube-embed-video
*
* We're using lazy loading to avoid the "Watch on YouTube" branding shown on videos at load time.   
*/

(function(){
    let youTubeContainers = document.querySelectorAll(".embed-youtube");

    // Iterate over every YouTube container
    for (let i = 0; i < youTubeContainers.length; i++) {

        let container = youTubeContainers[i];

        if ( navigator.maxTouchPoints && navigator.maxTouchPoints > 1) {
    
            // We found that this methodology doesn't work well on mobile devices. (Mobile YouTube 
            // doesn't support the autoplay attribute, so the lazy loading approach implemented here 
            // would require two clicks to play the video on mobile devices). Accordingly, we throw in 
            // the towel and just load the video synchronously on mobile.
            let iframe = document.createElement( "iframe" );
    
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
            
            iframe.setAttribute("src", "https://www.youtube.com/embed/"+ container.dataset.videoId +"?rel=0&showinfo=0&autoplay=0");
    
            container.innerHTML = "";
            container.appendChild( iframe );
        }
        else {
            let imageSource = "https://img.youtube.com/vi/"+ container.dataset.videoId +"/sddefault.jpg"; 
    
            // Load the Thumbnail Image asynchronously.
            let image = new Image();
            image.src = imageSource;
            image.addEventListener("load", function() {
                container.appendChild(image);
            });
    
            // When the user clicks on the container, load the embedded YouTube video.
            container.addEventListener("click", function() {
                let iframe = document.createElement( "iframe" );
    
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
                // Important: add the autoplay GET parameter, otherwise the user would need to click over the YouTube video again to play it 
                iframe.setAttribute("src", "https://www.youtube.com/embed/"+ this.dataset.videoId +"?rel=0&showinfo=0&autoplay=1");
    
                // Clear Thumbnail and load the YouTube iframe
                this.innerHTML = "";
                this.appendChild( iframe );
            });
        }
    }
})();
