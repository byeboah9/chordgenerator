function generateRandomName() {
  const chordNames = [
    "Em", "C", "D", "G", "E", "A", "Am", "Dm", "A7", "D7", "F", "F#", "A#", "Cm", "G#", "B", "C7", "Bm"
  ];

  // For when I become more advanced
  // const chordNames = [
  //   "Ab", "Abm", "A", "Am", "A#", "A#m", "Bb", "Bbm", "B", "Bm", "C", "Cm", "C#", 
  //   "C#m", "Db", "Dbm", "D", "Dm", "D#", "D#m", "Eb", "Ebm", "E", "Em", "F", "Fm", 
  //   "F#", "F#m", "Gb", "Gbm", "G", "Gm", "G#", "G#m"
  // ];
  
  const randomChordName = chordNames[Math.floor(Math.random() * chordNames.length)];
  return randomChordName;
}

function displayNewChord() {
  const newChord = generateRandomName();
  document.getElementById("chordDisplay").textContent = newChord;
}

// Update name every 7 seconds
setInterval(displayNewChord, 7000);

// Initial display
displayNewChord();
