const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
async function checkButton() {
    while(true) {
        let aElements = document.getElementsByClassName('style-scope yt-button-renderer style-blue-text size-default');
        if(aElements.length === 0) {
            await sleepNow(5000);
            console.log("Button not found, wait for 5 sec."); // for testing purpose
        } else {
            if(aElements[0].id === "button") {
                aElements[0].click();
                console.log("Button clicked successfully, wait for 5 sec.");
                await sleepNow(5000);
            }
        }
    }
}

checkButton();