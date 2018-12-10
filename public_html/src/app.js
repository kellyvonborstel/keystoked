
// keep track of current shortcut's index
var shortcutIndex = 0;
// which editor's shortcuts to practice
var editor;
// which practice set or all shortcuts
var set;
// how much delay before hint appears
var hintDelay;

// set up keypress listener
var inputField = $('.inputField');
var listenerDefaults = {
    is_unordered: true,
    prevent_repeat: true,
    is_solitary: true  
};
var listener = new window.keypress.Listener(inputField, listenerDefaults);

// prevent any keyed input from displaying inside input field
$('.inputField').keypress(function() {
  return false;
});

// shuffle arry of shortcuts https://stackoverflow.com/a/2450976/1293256
var shuffle = function (array) {
	var currentIndex = array.length;
	var temporaryValue, randomIndex;
	// while there remain elements to shuffle
	while (0 !== currentIndex) {
		// pick a remaining element
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// swap it with the current element
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};

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

$('.editors').change(function() {
  clearFields();
});

$('.sets').change(function() {
  clearFields();
});

$('.hints').change(function() {
  clearFields();
});

// determine editor choice - sublime, atom, or vs code
var chooseEditor = function() {
  var editorChoice = $('.editors option:selected').val();
  clearFields();
  if (editorChoice === 'atom') {
    editor = atomShortcuts;
  } else if (editorChoice === 'vscode') {
    editor = vsCodeShortcuts;
  } else {
    editor = sublimeShortcuts;
  }
};

// determine which set of shortcuts to practice
var chooseSet = function() {
  chooseEditor();
  var setChoice = $('.sets option:selected').val();
  clearFields();
  if (setChoice === 'edit') {
    set = shuffle(editor.edit);
  } else if (setChoice === 'navigate') {
    set = shuffle(editor.navigate);
  } else if (setChoice === 'select') {
    set = shuffle(editor.select);
  } else if (setChoice === 'findReplace') {
    set = shuffle(editor.findReplace);
  } else if (setChoice === 'general') {
    set = shuffle(editor.general);
  } else {
    set = shuffle(editor.edit.concat(editor.navigate, editor.select,editor.findReplace, editor.general));
  }
};

var practiceShortcuts = function() {
  if (shortcutIndex >= set.length) {
    shortcutIndex = 0;
  }
  // show command
  $('.command').text(set[shortcutIndex].command);

  // timeout id so it can be cleared later
  var revealShortcut = setTimeout(function() {
    // show answer as placeholder after chosen delay length
    $('.inputField').attr('placeholder', set[shortcutIndex].correct);
  }, hintDelay);
  $('.editors').change(function() {
    clearFields();
    clearTimeout(revealShortcut);
  });

  $('.sets').change(function() {
    clearFields();
    clearTimeout(revealShortcut);
  });

  $('.hints').change(function() {
    clearFields();
    clearTimeout(revealShortcut);
  });
  // listen for user to type correct shortcut
  listener.simple_combo(set[shortcutIndex].keys, function() {
    // show correct answer when user types it
    $('.inputField').attr('placeholder', set[shortcutIndex].correct);
    // delay after user types correct answer so answer doesn't disappear immediately
    setTimeout(function() {
      // if user types correct keys, prevent hint from displaying
      clearTimeout(revealShortcut);
      $('.inputField').attr('placeholder', '');
      // remove current listener
      listener.reset();
      shortcutIndex++;
      practiceShortcuts();
    }, 300);
  });
};

var startApp = function() {
  shortcutIndex++;
  chooseSet();
  hintDelay = $('.hints option:selected').val();
  clearFields();
  practiceShortcuts();
};
