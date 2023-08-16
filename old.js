const version = "8.1.0 (Tempest)";

// Order is important here:
// EMF-5 | Freezing | Spirit Box | Writing | Orbs | Fingerprints | DOTS
// 1 is true
// 0 is false

const BANSHEE =     "0000111",
      DEMON =       "0101010",
      DEOGEN =      "0011001",
      GORYO =       "1000011",
      HANTU =       "0100110",
      JINN =        "1100010",
      MARE =        "0011100",
      MIMIC =       "0110010",
      MOROI =       "0111000",
      MYLING =      "1001010",
      OBAKE =       "1000110",
      ONI =         "1100001",
      ONRYO =       "0110100",
      PHANTOM =     "0010011",
      POLTERGEIST = "0011010",
      RAIJU =       "1000101",
      REVENANT =    "0101100",
      SHADE =       "1101000",
      SPIRIT =      "1011000",
      THAYE =       "0001101",
      TWINS =       "1110000",
      WRAITH =      "1010001",
      YOKAI =       "0010101",
      YUREI =       "0100101";

//Setup for two evidence display
const EFr =   "1100000",
      ES =    "1010000",
      EW =    "1001000",
      EO =    "1000100",
      EFi =   "1000010",
      ED =    "1000001",

      FrS =   "0110000",
      FrW =   "0101000",
      FrO =   "0100100",
      FrFi =  "0100010",
      FrD =   "0100001",

      SW =    "0011000",
      SO =    "0010100",
      SFi =   "0010010",
      SD =    "0010001",

      WO =    "0001100",
      WFi =   "0001010",
      WD =    "0001001",

      OFi =   "0000110",
      OD =    "0000101",

      FiD =   "0000011";

var evidence = "0000000"; 

function setEvidence(div){

  switch(div){
    case "emf-svg":
      //Disables EMF
      if (evidence[1]==="1"&&evidence[4]==="1" || evidence[2]==="1"&&evidence[4]==="1" || 
        evidence[2]==="1"&&evidence[5]==="1" || evidence[3]==="1"&&evidence[4]==="1" ||
        evidence[3]==="1"&&evidence[6]==="1" ||
        evidence[1]==="1"&&evidence[2]==="1"&&evidence[3]==="1" ||
        evidence[4]==="1"&&evidence[5]==="1"&&evidence[6]==="1" ||
        evidence[1]==="1"&&evidence[3]==="1"&&evidence[5]==="1") {
        break;
      }
      else{
        evidence = updateGhost(0);
        document.getElementById(div).style.fill = 'rgba(50, 205, 50, 1)';

        //Excludes Orbs if Writing/Freezing/SpiritBox are selected
        if (evidence[3]==="1" || evidence[1]==="1" || evidence[2]==="1") {
         document.getElementById("orbs-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }

        //Excludes Fingers if SpiritBox is selected
        if (evidence[2]==="1") {
          document.getElementById("fingerprints-svg").style.fill = 'rgba(234, 66, 29, 0.6)'; 
        }

        //Excludes Freezing if Orbs are selected
        if (evidence[4]==="1") {
          document.getElementById("freezing-svg").style.fill = 'rgba(234, 66, 29, 0.6)'; 
        }

        //Excludes Writing if Orbs/Dots are selected
        if (evidence[4]==="1" || evidence[6]==="1") {
          document.getElementById("writing-svg").style.fill = 'rgba(234, 66, 29, 0.6)'; 
        }

        //Excludes SpiritBox if Orbs/Fingers are selected
        if (evidence[4]==="1" || evidence[5]==="1") {
          document.getElementById("spiritBox-svg").style.fill = 'rgba(234, 66, 29, 0.6)'; 
        }

        //Excludes Dots if Writing is selected
        if (evidence[3]==="1") {
          document.getElementById("dots-svg").style.fill = 'rgba(234, 66, 29, 0.6)'; 
        }

        break;
      }

    case "spiritBox-svg":
      //Disables Spirit Box
      if (evidence[0]==="1"&&evidence[4]==="1" || evidence[0]==="1"&&evidence[5]==="1" ||
        evidence[1]==="1"&&evidence[6]==="1" || evidence[4]==="1"&&evidence[5]==="1" ||
        evidence[1]==="1"&&evidence[3]==="1"&&evidence[4]==="1" ||
        evidence[3]==="1"&&evidence[4]==="1"&&evidence[6]==="1" ||
        evidence[0]==="1"&&evidence[1]==="1"&&evidence[3]==="1") {
        break;
      }
      else {
        evidence = updateGhost(2);
        document.getElementById(div).style.fill = 'rgba(50, 205, 50, 1)';

        //Excludes Freezing if Dots is selected
        if (evidence[6]==="1") {
          document.getElementById("freezing-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }

        //Excludes Orbs if EMF/Fingers are selected
        if (evidence[0]==="1" || evidence[5]==="1") {
         document.getElementById("orbs-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }

        //Excludes Fingers if EMF/Orbs are selected
        if (evidence[0]==="1" || evidence[4]==="1") {
          document.getElementById("fingerprints-svg").style.fill = 'rgba(234, 66, 29, 0.6)'; 
        }

        //Excludes EMF if Fingers/Orbs is selected
        if (evidence[5]==="1" || evidence[4]==="1") {
          document.getElementById("emf-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }

        //Excludes Dots if Freezing is selected
        if (evidence[1]==="1") {
          document.getElementById("dots-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }

        break;
      }

    case "fingerprints-svg":
      //Disables Fingers
      if (evidence[0]==="1"&&evidence[2]==="1" || evidence[1]==="1"&&evidence[6]==="1" ||
        evidence[2]==="1"&&evidence[4]==="1" || evidence[3]==="1"&&evidence[4]==="1" ||
        evidence[4]==="1"&&evidence[6]==="1" || evidence[3]==="1"&&evidence[6]==="1" ||
        evidence[1]==="1"&&evidence[2]==="1"&&evidence[3]==="1" ||
        evidence[0]==="1"&&evidence[1]==="1"&&evidence[3]==="1") {
        break;
      }
      else {
        evidence = updateGhost(5);
        document.getElementById(div).style.fill = 'rgba(50, 205, 50, 1)';

        //Excludes Orbs if Writing/SpiritBox are selected
        if (evidence[3]==="1" || evidence[2]==="1") {
          document.getElementById("orbs-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }

        //Excludes SpiritBox if EMF/Orbs are selected
        if (evidence[0]==="1" || evidence[4]==="1") {
          document.getElementById("spiritBox-svg").style.fill = 'rgba(234, 66, 29, 0.6)'; 
        }

        //Excludes EMF if SpiritBox is selected
        if (evidence[2]==="1") {
          document.getElementById("emf-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }

        //Excludes Writing if Orbs/Dots are selected
        if (evidence[4]==="1" || evidence[6]==="1") {
          document.getElementById("writing-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }

        //Excludes Dots if Freezing/Writing is selected
        if (evidence[1]==="1" || evidence[3]==="1") {
          document.getElementById("dots-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }

        //Excludes Freezing if Dots is selected
        if (evidence[6]==="1") {
          document.getElementById("freezing-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }

        break;
      }

    case "orbs-svg":
      //Disables Orbs
      if (evidence[0]==="1"&&evidence[1]==="1" || evidence[0]==="1"&&evidence[2]==="1" || 
        evidence[0]==="1"&&evidence[3]==="1" || evidence[2]==="1"&&evidence[5]==="1" ||
        evidence[3]==="1"&&evidence[5]==="1" || 
        evidence[0]==="1"&&evidence[5]==="1"&&evidence[6]==="1" ||
        evidence[1]==="1"&&evidence[2]==="1"&&evidence[3]==="1" ||
        evidence[2]==="1"&&evidence[3]==="1"&&evidence[6]==="1") {
        break;
      }
      else{
        evidence = updateGhost(4);
        document.getElementById(div).style.fill = 'rgba(50, 205, 50, 1)';

        //Excludes Fingers if Writing/SpiritBox is selected
        if (evidence[3]==="1" || evidence[2]==="1") {
          document.getElementById("fingerprints-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }

        //Excludes EMF if Freezing/Writing/SpiritBox is selected-
        if (evidence[1]==="1" || evidence[3]==="1" || evidence[2]==="1") {
          document.getElementById("emf-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }

        //Excludes Freezing if EMF is selected
        if (evidence[0]==="1") {
          document.getElementById("freezing-svg").style.fill = 'rgba(234, 66, 29, 0.6)'; 
        }

        //Excludes Writing if EMF/Fingers is selected
        if (evidence[0]==="1" || evidence[5]==="1") {
          document.getElementById("writing-svg").style.fill = 'rgba(234, 66, 29, 0.6)'; 
        }

        //Excludes SpiritBox if EMF/Fingers are selected
        if (evidence[0]==="1" || evidence[5]==="1") {
          document.getElementById("spiritBox-svg").style.fill = 'rgba(234, 66, 29, 0.6)'; 
        }

        break;
      }

    case "writing-svg":
      //Disables Writing
      if (evidence[0]==="1"&&evidence[4]==="1" || evidence[0]==="1"&&evidence[6]==="1" || 
        evidence[1]==="1"&&evidence[6]==="1" || evidence[4]==="1"&&evidence[5]==="1" ||
        evidence[5]==="1"&&evidence[6]==="1" ||
        evidence[0]==="1"&&evidence[1]==="1"&&evidence[5]==="1" ||
        evidence[1]==="1"&&evidence[2]==="1"&&evidence[5]==="1" ||
        evidence[0]==="1"&&evidence[1]==="1"&&evidence[2]==="1" ||
        evidence[2]==="1"&&evidence[4]==="1"&&evidence[6]==="1" ||
        evidence[1]==="1"&&evidence[2]==="1"&&evidence[4]==="1") {
        break;
      }
      else {
        evidence = updateGhost(3);
        document.getElementById(div).style.fill = 'rgba(50, 205, 50, 1)';

        //Excludes Orbs if EMF/Fingers are selected
        if (evidence[0]==="1" || evidence[5]==="1") {
          document.getElementById("orbs-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }

        //Excludes Fingers if Orbs/Dots are selected
        if (evidence[4]==="1" || evidence[6]==="1") {
          document.getElementById("fingerprints-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }

        //Excludes Dots if Freezing/EMF/Fingers is selected
        if (evidence[1]==="1" || evidence[0]==="1" || evidence[5]==="1") {
          document.getElementById("dots-svg").style.fill = 'rgba(234, 66, 29, 0.6)'; 
        }

        //Excludes EMF if Dots/Orbs is selected
        if (evidence[6]==="1" || evidence[4]==="1") {
          document.getElementById("emf-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }

        //Excludes Freezing if Dots is selected
        if (evidence[6]==="1") {
          document.getElementById("freezing-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }

        break;
      }  

    case "freezing-svg":
      //Disables Freezing
      if (evidence[0]==="1"&&evidence[4]==="1" || evidence[2]==="1"&&evidence[6]==="1" ||
        evidence[3]==="1"&&evidence[6]==="1" || evidence[5]==="1"&&evidence[6]==="1" ||
        evidence[0]==="1"&&evidence[3]==="1"&&evidence[5]==="1" ||
        evidence[0]==="1"&&evidence[2]==="1"&&evidence[3]==="1" ||
        evidence[5]==="1"&&evidence[2]==="1"&&evidence[3]==="1" ||
        evidence[2]==="1"&&evidence[3]==="1"&&evidence[4]==="1") {
        break;
      }
      else{
        evidence = updateGhost(1);
        document.getElementById(div).style.fill = 'rgba(50, 205, 50, 1)';

        //Excludes EMF if Orbs is selected
        if (evidence[4]==="1") {
          document.getElementById("emf-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }
        //Excludes Orbs if EMF is selected
        if (evidence[0]==="1") {
          document.getElementById("orbs-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }

        //Excludes Writing if Dots is selected
        if (evidence[6]==="1") {
          document.getElementById("writing-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }

        //Excludes Dots if SpiritBox/Fingers/Writing is selected
        if (evidence[2]==="1" || evidence[5]==="1" || evidence[3]==="1") {
          document.getElementById("dots-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }
        
        //Excludes SpiritBox if Dots is selected
        if (evidence[6]==="1") {
          document.getElementById("spiritBox-svg").style.fill = 'rgba(234, 66, 29, 0.6)'; 
        }
        //Excludes Fingers if Dots is selected
        if (evidence[6]==="1") {
          document.getElementById("fingerprints-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }

      break;
      }

    case "dots-svg":
      //Disables Dots
      if(evidence[0]==="1"&&evidence[3]==="1" || evidence[1]==="1"&&evidence[2]==="1" || 
        evidence[1]==="1"&&evidence[3]==="1" || evidence[1]==="1"&&evidence[5]==="1" ||
        evidence[3]==="1"&&evidence[5]==="1" ||
        evidence[2]==="1"&&evidence[3]==="1"&&evidence[4]==="1" ||
        evidence[0]==="1"&&evidence[4]==="1"&&evidence[5]==="1"){
        break;
      }
      else{
        evidence = updateGhost(6);
        document.getElementById(div).style.fill = 'rgba(50, 205, 50, 1)';
        
        //Excludes Freezing if SpiritBox/Fingers/Writing is selected
        if (evidence[2]==="1" || evidence[5]==="1" || evidence[3]==="1") {
          document.getElementById("freezing-svg").style.fill = 'rgba(234, 66, 29, 0.6)'; 
        }

        //Excludes SpiritBox if Freezing is selected
        if (evidence[1]==="1") {
          document.getElementById("spiritBox-svg").style.fill = 'rgba(234, 66, 29, 0.6)'; 
        }
        //Excludes Fingers if Freezing/Writing is selected
        if (evidence[1]==="1" || evidence[3]==="1") {
          document.getElementById("fingerprints-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }
        //Excludes EMF if Writing is selected
        if (evidence[3]==="1") {
          document.getElementById("emf-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }
        //Excludes Writing if EMF/Freezing/Fingers is selected
        if (evidence[0]==="1" || evidence[1]==="1" || evidence[5]==="1") {
          document.getElementById("writing-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
        }

        break;
      }

    case "reset":
      //Resets the overlay
      evidence = "0000000";
      document.getElementById("emf-svg").style.fill = 'rgb(255, 255, 255)';
      document.getElementById("freezing-svg").style.fill = 'rgb(255, 255, 255)';
      document.getElementById("spiritBox-svg").style.fill = 'rgb(255, 255, 255)';
      document.getElementById("writing-svg").style.fill = 'rgb(255, 255, 255)';
      document.getElementById("orbs-svg").style.fill = 'rgb(255, 255, 255)';
      document.getElementById("fingerprints-svg").style.fill = 'rgb(255, 255, 255)';
      document.getElementById("dots-svg").style.fill = 'rgb(255, 255, 255)';
      document.getElementById("ghost-type").innerHTML = "Searching...";
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
  }
}

function updateGhost(g){
  var guess = evidence.substring(0,g) + "1" + evidence.substring(g+1);

  switch(guess){
    //Displays options after two evidence have been found

    //EMF
    case EFr:
      document.getElementById("ghost-type").innerHTML = "Twins, Jinn, Shade, Oni ";
      document.getElementById("ghost-type").style.fontSize = "150px";
      break;
    case ES:
      document.getElementById("ghost-type").innerHTML = "Spirit, Twins, Wraith";
      document.getElementById("ghost-type").style.fontSize = "150px";
      break;
    case EW:
      document.getElementById("ghost-type").innerHTML = "Spirit, Myling, Shade";
      document.getElementById("ghost-type").style.fontSize = "150px";
      break;
    case EO:
      document.getElementById("ghost-type").innerHTML = "Raiju, Obake";
      document.getElementById("ghost-type").style.fontSize = "150px";
      break;
    case EFi:
      document.getElementById("ghost-type").innerHTML = "Obake, Myling, Jinn, Goryo";
      document.getElementById("ghost-type").style.fontSize = "150px";
      break;
    case ED:
      document.getElementById("ghost-type").innerHTML = "Wraith, Goryo, Raiju, Oni";
      document.getElementById("ghost-type").style.fontSize = "150px";
      break;

    //Freezing
    case FrS:
      document.getElementById("ghost-type").innerHTML = "Twins, Mimic, Onryo, Moroi";
      document.getElementById("ghost-type").style.fontSize = "150px";
      break;
    case FrW:
      document.getElementById("ghost-type").innerHTML = "Shade, Moroi, Demon, Revenant";
      document.getElementById("ghost-type").style.fontSize = "125px";
      break;
    case FrO:
      document.getElementById("ghost-type").innerHTML = "Onryo, Hantu, Revenant, Yurei";
      document.getElementById("ghost-type").style.fontSize = "150px";
      break;
    case FrFi:
      document.getElementById("ghost-type").innerHTML = "Jinn, Mimic, Hantu, Demon";
      document.getElementById("ghost-type").style.fontSize = "150px";
      break;
    case FrD:
      document.getElementById("ghost-type").innerHTML = "Oni, Yurei";
      document.getElementById("ghost-type").style.fontSize = "150px";
      break;

    //Spiritbox
    case SW:
      document.getElementById("ghost-type").innerHTML = "Spirit, Poltergeist, Mare, Moroi, Deogen";
      document.getElementById("ghost-type").style.fontSize = "125px";
      break;
    case SO:
      document.getElementById("ghost-type").innerHTML = "Mare, Onryo, Yokai";
      document.getElementById("ghost-type").style.fontSize = "150px";
      break;
    case SFi:
      document.getElementById("ghost-type").innerHTML = "Poltergeist, Mimic, Phantom";
      document.getElementById("ghost-type").style.fontSize = "150px";
      break;
    case SD:
      document.getElementById("ghost-type").innerHTML = "Wraith, Phantom, Yokai, Deogen";
      document.getElementById("ghost-type").style.fontSize = "150px";
      break;

    //Writing
    case WO:
      document.getElementById("ghost-type").innerHTML = "Mare, Revenant, Thaye";
      document.getElementById("ghost-type").style.fontSize = "150px";
      break;
    case WFi:
      document.getElementById("ghost-type").innerHTML = "Myling, Poltergeist, Demon";
      document.getElementById("ghost-type").style.fontSize = "125px";
      break;
    case WD:
      document.getElementById("ghost-type").innerHTML = "Deogen, Thaye";
      document.getElementById("ghost-type").style.fontSize = "150px";
      break;

    //Orbs
    case OFi:
      document.getElementById("ghost-type").innerHTML = "Obake, Hantu, Banshee";
      document.getElementById("ghost-type").style.fontSize = "150px";
      break;
    case OD:
      document.getElementById("ghost-type").innerHTML = "Raiju, Yokai, Banshee, Thaye, Yurei";
      document.getElementById("ghost-type").style.fontSize = "115px";
      break;

    //Fingers
    case FiD:
      document.getElementById("ghost-type").innerHTML = "Goryo, Phantom, Banshee";
      document.getElementById("ghost-type").style.fontSize = "150px";
      break;

    //Displays final ghost
    case BANSHEE:
      document.getElementById("ghost-type").innerHTML = "Banshee";
      document.getElementById("emf-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case DEMON:
      document.getElementById("ghost-type").innerHTML = "Demon";
      document.getElementById("emf-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("spiritBox-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case DEOGEN:
      document.getElementById("ghost-type").innerHTML = "Deogen";
      document.getElementById("orbs-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case GORYO:
      document.getElementById("ghost-type").innerHTML = "Goryo";
      document.getElementById("orbs-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case HANTU:
      document.getElementById("ghost-type").innerHTML = "Hantu";
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case JINN:
      document.getElementById("ghost-type").innerHTML = "Jinn";
      document.getElementById("writing-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case MARE:
      document.getElementById("ghost-type").innerHTML = "Mare";
      document.getElementById("freezing-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("dots-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case MIMIC:
      document.getElementById("ghost-type").innerHTML = "Mimic";
      document.getElementById("writing-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case MOROI:
      document.getElementById("ghost-type").innerHTML = "Moroi";
      document.getElementById("fingerprints-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("emf-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("orbs-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case MYLING:
      document.getElementById("ghost-type").innerHTML = "Myling";
      document.getElementById("freezing-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case OBAKE:
      document.getElementById("ghost-type").innerHTML = "Obake";
      document.getElementById("dots-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case ONI:
      document.getElementById("ghost-type").innerHTML = "Oni";
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case ONRYO:
      document.getElementById("ghost-type").innerHTML = "Onryo";
      document.getElementById("writing-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case PHANTOM:
      document.getElementById("ghost-type").innerHTML = "Phantom";
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case POLTERGEIST:
      document.getElementById("ghost-type").innerHTML = "Poltergeist";
      document.getElementById("freezing-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case RAIJU:
      document.getElementById("ghost-type").innerHTML = "Raiju";
      document.getElementById("fingerprints-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case REVENANT:
      document.getElementById("ghost-type").innerHTML = "Revenant";
      document.getElementById("spiritBox-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case SHADE:
      document.getElementById("ghost-type").innerHTML = "Shade";
      document.getElementById("fingerprints-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("spiritBox-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case SPIRIT:
      document.getElementById("ghost-type").innerHTML = "Spirit";
      document.getElementById("freezing-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case THAYE:
      document.getElementById("ghost-type").innerHTML = "Thaye";
      document.getElementById("spiritBox-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case TWINS:
      document.getElementById("ghost-type").innerHTML = "The Twins";
      document.getElementById("writing-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case WRAITH:
      document.getElementById("ghost-type").innerHTML = "Wraith";
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case YOKAI:
      document.getElementById("ghost-type").innerHTML = "Yokai";
      document.getElementById("writing-svg").style.fill = 'rgba(234, 66, 29, 0.6)';
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    case YUREI:
      document.getElementById("ghost-type").innerHTML = "Yurei";
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
    default:
      document.getElementById("ghost-type").innerHTML = "Searching...";
      document.getElementById("ghost-type").style.fontSize = "200px";
      break;
  }

  return guess;
}