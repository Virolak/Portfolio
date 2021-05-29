
// Add event listener
window.addEventListener("load", function() {

    const matrix = this.document.getElementById("matrix");
    const title = this.document.getElementById("title");

    function generateBinary() {

        // Clear the innerHTML of the matrix element
        matrix.innerHTML = "";

        // Set matrix height equal to height of title element
        matrix.style.height = title.clientHeight + "px";
    
        // Generates binary strings
        for (var i = 0; i <= Math.round(window.innerWidth / 20); i++) {
    
            // Define length of binary string
            var numCharacters = Math.floor(Math.random() * (20 - 8) + 8);
            var binary = ""
    
            // Create binary string
            for (var j = 0; j <= numCharacters; j++) {
                binary += Math.round(Math.random());
            }
    
            // Add a div with the codeblock class to matrix
            matrix.innerHTML += "<div class=\"codeBlock\">" + binary + "</div>"
        }
    
        const codeBlocks = this.document.getElementsByClassName("codeBlock");
    
        for (var i = 0; i < codeBlocks.length; i++) {
            codeBlocks[i].style.left = Math.random() * this.window.innerWidth + "px";
    
            var topOrBottom = Math.round(Math.random());
    
            if (topOrBottom == 0) {
                codeBlocks[i].style.bottom = matrix.clientHeight + "px";
                codeBlocks[i].classList.add("moveDown");
            } else {
                codeBlocks[i].style.top = matrix.clientHeight + "px";
                codeBlocks[i].classList.add("moveUp");
            }
            codeBlocks[i].style.animationDuration = Math.round(Math.random() * (30 - 10) + 10) + "s";
            codeBlocks[i].style.opacity = Math.random() * (0.8 - 0.1) + 0.1;
        }
    }

    generateBinary();
    this.window.addEventListener("resize", generateBinary)
});