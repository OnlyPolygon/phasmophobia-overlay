const version = "0.3.0 (Gameplay Mechanics)";

// Order is important:
// EMF-5 | Freezing | Spirit Box | Writing | Orbs | Fingerprints | DOTS
// 1 is true    // 0 is false

// BANSHEE =     "0000111"
// DEMON =       "0101010"
// DEOGEN =      "0011001"
// GORYO =       "1000011"
// HANTU =       "0100110"
// JINN =        "1100010"
// MARE =        "0011100"
// MIMIC =       "0110010"
// MOROI =       "0111000"
// MYLING =      "1001010"
// OBAKE =       "1000110"
// ONI =         "1100001"
// ONRYO =       "0110100"
// PHANTOM =     "0010011"
// POLTERGEIST = "0011010"
// RAIJU =       "1000101"
// REVENANT =    "0101100"
// SHADE =       "1101000"
// SPIRIT =      "1011000"
// THAYE =       "0001101"
// TWINS =       "1110000"
// WRAITH =      "1010001"
// YOKAI =       "0010101"
// YUREI =       "0100101"

const EVIDENCE = {
  0: "emf-svg",
  1: "freezing-svg",
  2: "spiritBox-svg",
  3: "writing-svg",
  4: "orbs-svg",
  5: "fingerprints-svg",
  6: "dots-svg",
};

const ANSWER = {
  "0000111": "Banshee",
  "0101010": "Demon",
  "0011001": "Deogen",
  "1000011": "Goryo",
  "0100110": "Hantu",
  "1100010": "Jinn",
  "0011100": "Mare",
  "0110110": "Mimic",
  "0110010": "Mimic",
  "0111000": "Moroi",
  "1001010": "Myling",
  "1000110": "Obake",
  "1100001": "Oni",
  "0110100": "Onryo",
  "0010011": "Phantom",
  "0011010": "Poltergeist",
  "1000101": "Raiju",
  "0101100": "Revenant",
  "1101000": "Shade",
  "1011000": "Spirit",
  "0001101": "Thaye",
  "1110000": "Twins",
  "1010001": "Wraith",
  "0010101": "Yokai",
  "0100101": "Yurei",
};
const GHOSTS = [
  ["Banshee", "0000111"],
  ["Demon", "0101010"],
  ["Deogen", "0011001"],
  ["Goryo", "1000011"],
  ["Hantu", "0100110"],
  ["Jinn", "1100010"],
  ["Mare", "0011100"],
  ["Mimic", "0110110"],
  ["Moroi", "0111000"],
  ["Myling", "1001010"],
  ["Obake", "1000110"],
  ["Oni", "1100001"],
  ["Onryo", "0110100"],
  ["Phantom", "0010011"],
  ["Poltergeist", "0011010"],
  ["Raiju", "1000101"],
  ["Revenant", "0101100"],
  ["Shade", "1101000"],
  ["Spirit", "1011000"],
  ["Thaye", "0001101"],
  ["Twins", "1110000"],
  ["Wraith", "1010001"],
  ["Yokai", "0010101"],
  ["Yurei", "0100101"],
];
compare = [
  "Banshee",
  "Demon",
  "Deogen",
  "Goryo",
  "Hantu",
  "Jinn",
  "Mare",
  "Mimic",
  "Moroi",
  "Myling",
  "Obake",
  "Oni",
  "Onryo",
  "Phantom",
  "Poltergeist",
  "Raiju",
  "Revenant",
  "Shade",
  "Spirit",
  "Thaye",
  "Twins",
  "Wraith",
  "Yokai",
  "Yurei",
];
current = "0000000";
options = [];
evdCount = 0;

// Creates a function that lets me replace a character at a specific location (Made for updating current evidence)
String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

// Reloads page to reset everything
function reset() {
  for (var i = 0; i < 7; i++) {
    const ELEMENT = document.getElementById(EVIDENCE[i]);
    ELEMENT.classList.add("inactive");
    ELEMENT.classList.remove("active");
    ELEMENT.classList.remove("impossible");
    document.getElementById("ghost-type").innerHTML = "Searching...";
  }
  location.reload();
}

// Calcultes the avaliable ghosts for 2 given evidences.
function updateOptions(round) {
  options = [];
  ind = [];
  for (let i = 0; i < current.length; i++) {
    if (current[i] === "1") {
      ind.push(i);
    }
  }
  if (round === 2) {
    for (let j = 0; j < GHOSTS.length; j++) {
      if (GHOSTS[j][1][ind[0]] === "1" && GHOSTS[j][1][ind[1]] === "1") {
        options.push(GHOSTS[j][0]);
      }
    }
  }
  if (round === 3) {
    for (let j = 0; j < GHOSTS.length; j++) {
      if (
        GHOSTS[j][1][ind[0]] === "1" &&
        GHOSTS[j][1][ind[1]] === "1" &&
        GHOSTS[j][1][ind[2]] === "1"
      ) {
        options.push(GHOSTS[j][0]);
      }
    }
  }
}

// Disables the button of evidence that isn't possible
function disableButton() {
  var tmp = 0;

  // Adds current options evidnces to tmp
  for (var i = 0; i < options.length; i++) {
    tmp += parseInt(GHOSTS[compare.indexOf(options[i])][1]);
  }
  // Makes sure leading 0s are added back after math
  if (String(tmp).length < 7) {
    tmp = ("0000000" + tmp).slice(-7);
  }
  console.log(tmp);
  hold = String(tmp);
  // Turns icon red and disables onClick
  for (var i = 0; i < hold.length; i++) {
    if (hold[i] < 1) {
      const ELEMENT = document.getElementById(EVIDENCE[i]);
      ELEMENT.classList.remove("inactive");
      ELEMENT.classList.add("impossible");
      ELEMENT.onclick = null;
    }
  }
}

function updateEvidence(evidence) {
  // If not update current to have a 1 in the evidence position
  current = current.replaceAt(evidence, "1");
  // Update icon to green and disable onClick
  const ELEMENT = document.getElementById(EVIDENCE[evidence]);
  ELEMENT.classList.remove("inactive");
  ELEMENT.classList.add("active");
  ELEMENT.onclick = null;
}

// Disables any evidence that isn't 1 in current
function disableButtonFinal() {
  for (var i = 0; i < current.length; i++) {
    if (current[i] != 1) {
      const ELEMENT = document.getElementById(EVIDENCE[i]);
      ELEMENT.classList.remove("inactive");
      ELEMENT.classList.add("impossible");
      ELEMENT.onclick = null;
    }
  }
}

// Finalizes overlay
function finalEvidence() {
  pick = ANSWER[current];
  disableButtonFinal();
  document.getElementById("ghost-type").innerHTML = pick;
}

// Main Function
function checkEvidence(evidence) {
  evdCount++;
  updateEvidence(evidence);

  // If it's the 3rd+ evidence
  if (evdCount >= 3) {
    if (current[4] != "1" || evdCount === 4) {
      finalEvidence();
    } else {
      updateOptions(3);
      disableButton();
      var write = String(options).replace(/,/g, ", ");
      document.getElementById("ghost-type").innerHTML = write;
    }
  }

  // On the second evidence
  if (evdCount === 2) {
    updateOptions(2);
    disableButton();
    // Adds a space between options and writes it
    var write = String(options).replace(/,/g, ", ");
    document.getElementById("ghost-type").innerHTML = write;
  }
}

// Checks of the clicked evidence hasn't been selected (Probably not needed)
function evidenceSelect(evidence) {
  if (current[evidence] != 1) {
    checkEvidence(evidence);
  }
}
