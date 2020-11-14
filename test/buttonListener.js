document.addEventListener('DOMContentLoaded', function() {
    var okButton = document.getElementById('button1');
    okButton.addEventListener('click', function() {
        //console.log("button was clicked");
        let oButton = document.createElement("BUTTON");
        oButton.innerHTML = "NEW BUTTON";
        oButton.id="button";
        oButton.classList.add("style-scope", "yt-button-renderer", "style-blue-text", "size-default");
        document.body.appendChild(oButton);
      });
}, false);