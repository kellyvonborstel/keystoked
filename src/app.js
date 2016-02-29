
// TODO:
// rebuild using angular
// add more shortcuts
// order shortcuts randomly
// deploy

// to keep track of current shortcut object
var counter = 0;
// select menu -- choose which app shortcuts to practice
var currentApp;
// var defaultApp = sublimeShortcuts;
// select menu -- choose hint to have no delay, 5 seconds, or no hint
var hintDelay;
// there are four sets to choose from, or user can practice all sets
var currentSet;

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

// shuffle array of shortcuts
var shuffle = function(array) {
  var copy = array.slice();
  var shuffled = [];
  while (shuffled.length < array.length) {
    var rand = Math.floor(Math.random() * copy.length);
    shuffled.push(copy[rand]);
    copy.splice(rand, 1);
  }
  return shuffled;
}


// start button
$('button').on('click', function() {
  // prevent default browser events related to keyboard shortcuts
  $(window).keydown(function(event) {
    preventDefaultBehaviors();
  });
  startApp();
});

var clearFields = function() {
  $('.inputField').attr('placeholder', '').focus();
  $('.command').text('Type shortcut for command');
};

// determine which app's shortcuts to use
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

// determine which set of shortcuts to practice
var chooseSet = function() {
  var setChoice = $('.sets option:selected').val();
  clearFields();
  if (setChoice === 'set1') {
    currentSet = shuffle(currentApp.set1);
  } else if (setChoice === 'set2') {
    currentSet = shuffle(currentApp.set2);
  } else if (setChoice === 'set3') {
    currentSet = shuffle(currentApp.set3);
  } else if (setChoice === 'set4') {
    currentSet = shuffle(currentApp.set4);
  } else {
    currentSet = shuffle(currentApp[0].concat(currentApp[1], currentApp[2], currentApp[3]));
  }
};

var practiceShortcuts = function() {
  // TODO: change counter to random number
  if (counter >= currentSet.length) {
    counter = 0;
  }
  // show command
  $('.command').text(currentSet[counter].command);

  // variable for timeout id so it can be cleared later
  var revealShortcut1 = setTimeout(function() {
    // show answer as placeholder after chosen delay period
    $('.inputField').attr('placeholder', currentSet[counter].correct);
  }, hintDelay);
  // listen for user to type correct shortcut
  listener.simple_combo(currentSet[counter].keys, function() {
    // show correct answer when user types it
    $('.inputField').attr('placeholder', currentSet[counter].correct);
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
  chooseSet()
  // select menu -- choose hint to have no delay, 5 seconds, or no hint
  hintDelay = $('.hints option:selected').val();
  clearFields();
  practiceShortcuts();
};
