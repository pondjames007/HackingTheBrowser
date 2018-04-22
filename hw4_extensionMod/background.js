var scaling = false;

var displays = [];
chrome.system.display.getInfo(function (ds){
  for (var display of ds){
    displays.push(display.bounds);
  }
});

function initWin(win){
  for (var display of displays){
    if (win.left >= display.left && win.left <= display.left + display.width &&
      win.top >= display.top && win.top <= display.top + display.height){
        win.left = display.left;
        win.top = display.top;
        win.width = display.width;
        win.height = display.height;
        originalWins[win.id] = win;
        break;
    }
  }
}

var originalWins = {};
chrome.windows.getAll({}, function (winArr){
  for (var win of winArr){
    initWin(win);
  }
});

chrome.windows.onCreated.addListener(function (win){
  initWin(win);
});

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse){
  if (msg.message == 'shrink' && sender.tab.active){
    var newWidth = Math.round(msg.width * 0.9);
    if (!scaling){
      scaleWindow(sender.tab.windowId, newWidth);
    }
  }
});

function scaleWindow(windowId, newWidth){
  scaling = true;
  console.log("called")
  // var scale = 0.9;
  // var original = originalWins[windowId];

  //var newWidth = Math.round(original.width * scale);
  var params = {
    
    width: newWidth
  };
  // if (newWidth < 400){
  //   delete params.left;
  // }

  chrome.windows.update(windowId, params, function (win){
    scaling = false;
  });
}

