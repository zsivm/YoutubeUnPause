const elementToObserve = document.querySelector("ytd-popup-container");

const observer = new MutationObserver(() => {

    console.log("yt-popup-container got a child element");

    let confirmPopup = document.querySelector("yt-confirm-dialog-renderer");

    console.log("confirmPopup content", confirmPopup);
    
    if(confirmPopup) {

        console.log("The confirm popup appeared");
        observer.disconnect();
        
        clickButton();
        removeConfirmPopup(confirmPopup);
        activateObserver();
    }
});

this.activateObserver();

function clickButton() {
    document.getElementById("confirm-button").click();
    console.log("Confirm button clicked");
}

function removeConfirmPopup(confirmPopup) {
    elementToObserve.removeChild(confirmPopup);
    console.log("Removed confirmPopup from parent");
}

function activateObserver() {
    observer.observe(elementToObserve, {subtree: true, childList: true});
    console.log("Observer is watching");
}