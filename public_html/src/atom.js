
var atomShortcuts = {

  edit: [
    {
      command: 'Duplicate line',
      correct: '⌘ + ⇧ + D',
      keys: 'meta shift d' 
    },
    {
      command: 'Join lines',
      correct: '⌘ + J',
      keys: 'meta j' 
    },
    {
      command: 'Delete line',
      correct: '⌃ + ⇧ + K',
      keys: 'ctrl shift k' 
    },
    {
      command: 'Outdent selected text',
      correct: '⌘ + [',
      keys: 'meta [' 
    },
    {
      command: 'Indent selected text',
      correct: '⌘ + ]',
      keys: 'meta ]' 
    },
    {
      command: 'Cut to end of line',
      correct: '⌃ + K',
      keys: 'ctrl k' 
    },
    {
      command: 'Delete to end of word',
      correct: '⌥ + D',
      keys: 'option d' 
    },
    {
      command: 'Toggle line comments',
      correct: '⌘ + /',
      keys: 'meta /' 
    }
  ],

  navigate: [
    {
      command: 'Go to line',
      correct: '^ + G',
      keys: 'ctrl g' 
    },
    {
      command: 'Go to matching bracket',
      correct: '⌃ + M',
      keys: 'ctrl m' 
    },
    {
      command: 'Move to beginning of word',
      correct: '⌥ + B',
      keys: 'option b' 
    },
    {
      command: 'Move to end of word',
      correct: '⌥ + F',
      keys: 'option f' 
    },
    {
      command: 'Move to beginning of line',
      correct: '⌃ + A',
      keys: 'ctrl a' 
    },
    {
      command: 'Move to end of line',
      correct: '⌃ + E',
      keys: 'ctrl e' 
    }
  ],

  select: [
    {
      command: 'Select left character',
      correct: '⇧ + ^ + B',
      keys: 'shift ctrl b' 
    },
    {
      command: 'Select right character',
      correct: '⇧ + ^ + F',
      keys: 'shift ctrl f' 
    },
    {
      command: 'Select to beginning of word',
      correct: '⇧ + ⌥ + B',
      keys: 'shift option b' 
    },
    {
      command: 'Select to end of word',
      correct: '⇧ + ⌥ + F',
      keys: 'shift option f' 
    },
    {
      command: 'Select entire word',
      correct: '⇧ + ⌃ + W',
      keys: 'shift ctrl w' 
    },
    {
      command: 'Select next',
      correct: '⌘ + D',
      keys: 'meta d' 
    },
    {
      command: 'Select line',
      correct: '⌘ + L',
      keys: 'meta l' 
    }
  ],

  findReplace: [
    {
      command: 'Find string in current file',
      correct: '⌘ + F',
      keys: 'meta f' 
    },
    {
      command: 'Find modified, untracked (git) file',
      correct: '⌘ + ⇧ + B',
      keys: 'meta shift b' 
    },
    {
      command: 'Find string in all project files',
      correct: '⌘ + ⇧ + F',
      keys: 'meta shift f' 
    },
    {
      command: 'Find next matching string',
      correct: '⌘ + G',
      keys: 'meta g' 
    },
    {
      command: 'Find previous matching string',
      correct: '⌘ + ⇧ + G',
      keys: 'meta shift g' 
    },
    {
      command: 'Select next matching string',
      correct: '⌘ + D',
      keys: 'meta d' 
    },
    {
      command: 'Select all matching strings',
      correct: '⌘ + ⌃ + G',
      keys: 'meta ctrl g' 
    },
    {
      command: 'Replace string in current file',
      correct: '⌘ + ⌥ + F',
      keys: 'meta option f' 
    },
    {
      command: 'Find open file',
      correct: '⌘ + B',
      keys: 'meta b' 
    }
  ],

  general: [
    {
      command: 'Fold code',
      correct: '⌘ + ⌥ + [',
      keys: 'meta option [' 
    },
    {
      command: 'Unfold code',
      correct: '⌘ + ⌥ + ]',
      keys: 'meta option ]' 
    },
    {
      command: 'Fold selected text',
      correct: '⌘ + ⌥ + ⌃ + F',
      keys: 'meta option ctrl f' 
    },
    {
      command: 'Open command palette',
      correct: '⌘ + ⇧ + P',
      keys: 'meta shift p' 
    },
    {
      command: 'Toggle full screen',
      correct: '⌘ + ^ + F',
      keys: 'meta ctrl f' 
    },
    {
      command: 'Hide other applications',
      correct: '⌘ + ⌥ + H',
      keys: 'meta option h' 
    },
    {
      command: 'Hide atom',
      correct: '⌘ + H',
      keys: 'meta h' 
    },
    {
      command: 'Search for symbol in file',
      correct: '⌘ + R',
      keys: 'meta r' 
    },
    {
      command: 'Search for symbol across project',
      correct: '⌘ + ⇧ + R',
      keys: 'meta shift r' 
    },
    {
      command: 'Decrease font size',
      correct: '⌘ + -',
      keys: 'meta -' 
    },
    {
      command: 'Increase font size',
      correct: '⌘ + =',
      keys: 'meta =' 
    }
  ]

};
