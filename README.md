# YoutubeUnPause
This chrome extension for YouTube presses the "Are you still watching?" popup button for you, so you can listen to
playlists without having to manually press the "Ok" button on the popup every few hours.

## The Issue that needed solution:
I myself like to listen to YouTube music while I am coocking or when Im doing something around the house and I don't like the new feature, which pauses the video and asks for confirmation. It is unnecessary and exhausting to always be near the computer and physically press the button over and over again.
In my experience the popup appears every 45 to 85 minutes for being inactive (I didn't find any definitive interval on the web. If you find something, it would help a lot.). And since I am a programmer and like learning new things, like creating a chrome extension, I challenged myself to create this extension and do it in one day from scratch. I hope this extension will be as usefull as I would like it to be.

## Version 1.1
    How to use:
    - See in Version 1.0.

    Change log:
    - The extension now clicks and then removes the specified DOM element, which appears over time.
    - Now it works continuously even if the popup appears multiple times. (tested)
    - Logs are commented out, they are not necessary for the extension to work properly. They will
      not clutter the console log, but can be uncommented for testing purpose.

    Known issues:
    - When the popup appears, there is a maximum of 5 seconds where the music can stop, due to the algorithm
      checking if the popup appeared, this is not very noticable though.

## Version 1.0
    How to use:
    - To be able to use the extension, you have to go to Chrome extensions and enable Developer mode.
    - Load unpacked extension from github: https://github.com/zsivm/YoutubeUnPause
    - Go to https://www.youtube.com/{any_video_or_playlist}
    - For first time use, you have to enable the extension in the chrome header, and click on the icon.

    Change log:
    - The extension searches for a specific DOM element, which only appears when the popup appeared.
    - After that, the button is clicked and the video continues.

    For Testing with fakeytpopup.html:
    - Add the "<all_urls>" parameter to the contet script matchers like this:
    ```
    "content_scripts": [
        {
            "matches": [
                "https://www.youtube.com/*",
                "<all_urls>" 
            ],
            "js": [
                "content.js"
            ]
        }
    ],
    ```
    Known issues:
    - Since the DOM element does not disappear after clicking on the confirm button, the button keeps being clicked every 5 seconds, and a toast message appears in the lower left corner "Thank you for your confirmation".
    - If you Pause the video, it will continue playing in the next 5 seconds due to the previous error.
    - For now it is not possible to toggle the extension. You have to enable the extension or disable it in chrome.
    - No icon yet
    - Performance issues are not experienced