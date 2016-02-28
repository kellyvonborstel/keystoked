
// TODO:
// rebuild using angular
// prevent chrome shortcuts -- in progress
// add more apps
// add more shortcuts
// order shortcuts randomly
// deploy

// to keep track of current shortcut object
var counter = 0;
// select menu -- choose which app shortcuts to practice
var currentApp;
var defaultApp = sublimeShortcuts;
// select menu -- choose hint to have no delay, 5 seconds, or no hint
var hintDelay;

// set up listener
var inputField = $('.inputField');
var listenerDefaults = {
    is_unordered: true,
    prevent_repeat: true,
    is_solitary: true  
};
var listener = new window.keypress.Listener(inputField, listenerDefaults);

// to prevent any keyed input from displaying inside input field
$('.inputField').keypress(function() {
  return false;
});
$('button').on('click', function() {
  // prevent default browser events related to keyboard shortcuts
  $(window).keydown(function(event) {
    // prevent default behavior for Command + R

    // UNCOMMENT THIS WHEN READY TO DEPLOY

    // if (event.metaKey && event.keyCode == 82) { 
    //   console.log("event captured");
    //   event.preventDefault(); 
    // }
    // prevent default behavior for Command + S
    if (event.metaKey && event.keyCode == 83) { 
      console.log("event captured");
      event.preventDefault(); 
    }
    // prevent default behavior for Command + O
    if (event.metaKey && event.keyCode == 79) { 
      console.log("event captured");
      event.preventDefault(); 
    }
    // prevent default behavior for Command + L
    if (event.metaKey && event.keyCode == 76) { 
      console.log("event captured");
      event.preventDefault(); 
    }
    // prevent default behavior for Command + P
    if (event.metaKey && event.keyCode == 80) { 
      console.log("event captured");
      event.preventDefault(); 
    }
    // prevent default behavior for Command + Option + B
    if (event.metaKey && event.altKey && event.keyCode == 66) { 
      console.log("event captured");
      event.preventDefault(); 
    }
    // prevent default behavior for Command + [
    if (event.metaKey && event.keyCode == 219) { 
      console.log("event captured");
      event.preventDefault(); 
    }
    // prevent default behavior for Command + ]
    if (event.metaKey && event.keyCode == 221) { 
      console.log("event captured");
      event.preventDefault(); 
    }
    // prevent default behavior for Command + Control + F
    if (event.metaKey && event.ctrlKey && event.keyCode == 70) { 
      console.log("event captured");
      event.preventDefault(); 
    }
    // prevent default behavior for Command + F
    if (event.metaKey && event.keyCode == 70) { 
      console.log("event captured");
      event.preventDefault(); 
    }
    // prevent default behavior for Command + -
    if (event.metaKey && event.keyCode == 189) { 
      console.log("event captured");
      event.preventDefault(); 
    }
    // prevent default behavior for Command + =
    if (event.metaKey && event.keyCode == 187) { 
      console.log("event captured");
      event.preventDefault(); 
    }
    // prevent default behavior for Command + ,
    if (event.metaKey && event.keyCode == 188) { 
      console.log("event captured");
      event.preventDefault(); 
    }
    // prevent default behavior for Command + Option + H
    if (event.metaKey && event.altKey && event.keyCode == 72) { 
      console.log("event captured");
      event.preventDefault(); 
    }
    // prevent default behavior for Command + H
    if (event.metaKey && event.keyCode == 72) { 
      console.log("event captured");
      event.preventDefault(); 
    }
    // prevent default behavior for Command + Control + DOWN
    // if (event.metaKey && event.ctrlKey && event.keyCode == 40) { 
    //   console.log("event captured");
    //   event.preventDefault();
    //   event.stopPropagation();
    //   $(this).volume = 0.0;

    // }
  });
  startApp();
});

var clearFields = function() {
  $('.inputField').attr('placeholder', '').focus();
  $('.command').text('Type shortcut for command');
};

// determine which app's shortcuts objects to use
var chooseApp = function() {
  var appChoice = $('.apps option:selected').val();
  clearFields();
  if (appChoice === 'sublime') {
    currentApp = sublimeShortcuts;
  } else if (appChoice === 'atom') {
    currentApp = atomShortcuts;
  } else {
    currentApp = defaultApp;
  }
};

var practiceShortcuts = function() {
  // TODO: change counter to random number
  if (counter >= currentApp.length) {
    counter = 0;
  }
  // show command
  $('.command').text(currentApp[counter].command);

  // variable for timeout id so it can be cleared later
  var revealShortcut1 = setTimeout(function() {
    // show answer as placeholder after chosen delay period
    $('.inputField').attr('placeholder', currentApp[counter].correct);
  }, hintDelay);
  // listen for user to type correct shortcut
  listener.simple_combo(currentApp[counter].keys, function() {
    // show correct answer when user types it
    $('.inputField').attr('placeholder', currentApp[counter].correct);
    // slight delay after user types correct answer so it can stay displayed briefly
    setTimeout(function() {
      // if user types correct keys, prevent hint from displaying
      clearTimeout(revealShortcut1);
      $('.inputField').attr('placeholder', '');
      // remove current listener
      listener.reset();
      counter++;
      practiceShortcuts();
    }, 300);
  });
};

var startApp = function() {
  counter++;
  chooseApp();
  // select menu -- choose hint to have no delay, 5 seconds, or no hint
  hintDelay = $('.hints option:selected').val();
  clearFields();
  practiceShortcuts();
};
