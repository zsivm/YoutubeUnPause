const elementToObserve = document.querySelector("ytd-popup-container");

const observer = new MutationObserver(() => {
    console.log("yt-popup-container got a child element");
    observer.disconnect();
    removeAllChildNodes(elementToObserve);
    console.log("Removed all children from yt-popup-container");
    // todo: emulate click required?
    this.activateObserver();
    console.log("Observer is watching again!");
});

this.activateObserver();
console.log("Observer is watching!");

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function activateObserver() {
    observer.observe(elementToObserve, {subtree: true, childList: true});
}