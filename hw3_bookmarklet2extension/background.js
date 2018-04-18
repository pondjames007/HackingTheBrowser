console.log('Content Script via Browser Action background page, version 1');
// Docs for 'onClicked' are here:
// https://developer.chrome.com/extensions/browserAction#event-onClicked

chrome.browserAction.onClicked.addListener(function() {
  console.log('Clicked the browser action!');


    chrome.tabs.executeScript({file: 'bookmarklet.js'}, function() {
      console.log('background script injected content_script');
    });

});
