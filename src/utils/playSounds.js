import {Howler} from "howler"
import * as Tone from 'tone';

const verb = new Tone.Reverb(1);
const chorus = new Tone.Chorus(2,4,1);
let currentChord = ""
let chordNotes = [];
// const filter = new Tone.AutoFilter("8n").toDestination().start();
const filter = new Tone.Filter(1500, "highpass").toDestination();
const limiter = new Tone.Limiter(-10).toDestination();
const synth = new Tone.PolySynth().toDestination().connect(limiter);

synth.set
    ({
        "harmonicity": 2,
        "oscillator": {
            "type": "amsine2",
              "modulationType" : "sine",
              "harmonicity": 1.01
        },
        "envelope": {
            "attack": 0.006,
            "decay": 4,
            "sustain": 0.6,
            "release": 1.2
        },
        "modulation" : {
            //   "volume" : 0,
              "type": "amsine2",
              "modulationType" : "sine",
              "harmonicity": 12
        },
        "modulationEnvelope" : {
            "attack": 0.006,
            "decay": 0.2,
            "sustain": 0.2,
            "release": 0.4
        }
    })

// implement pitch A,B,C, (d)
// seperate 'synth settings page' where user can change each

let pitches = [3,4,4,4];
// let pitches = [4];

// in dB
synth.volume.value = -13;


const convertSliderVolToDecibels = sliderVol => {
    let logModifier = 0.25303030
    // -7 dB = MAX
    // -36 dB = min (without being muted)
    console.log(sliderVol * logModifier - 37 )
    return sliderVol === 0 ? -10000 : (sliderVol * logModifier - 37 )
}

const chords = {
    // Major
    "CMajor" : ["C", "E", "G"],
    "DbMajor" : ["Db", "F", "Ab"],
    "DMajor" : ["D", "Gb", "A"],

    "EbMajor" : ["Eb", "G", "Bb"],

    "EMajor" : ["E", "Ab", "B"],
    
    "FMajor" : ["F", "A", "C"],

    "GbMajor" : ["Gb", "Bb", "Db"],
    "GMajor" : ["G", "B", "D"],

    "AbMajor" : ["Ab", "C", "Eb"],

    "AMajor" : ["A", "Db", "E"],

    "BbMajor" : ["Bb", "D", "F"],
    "BMajor" : ["B", "Eb", "Gb"],

    
    // Minor
    "CMinor" : ["C", "Eb", "G"],
    "DbMinor" : ["Db", "E", "Ab"],
    "DMinor" : ["D", "F", "A"],
    "EbMinor" : ["Eb", "Gb", "Bb"],
    "EMinor" : ["E", "G", "B"],
    "FMinor" : ["F", "Ab", "C"],
    "GbMinor" : ["Gb", "A", "Db"],
    "GMinor" : ["G", "Bb", "D"],
    "AbMinor" : ["Ab", "B", "Eb"],
    "AMinor" : ["A", "C", "E"],
    "BbMinor" : ["Bb", "Db", "F"],
    "BMinor" : ["B", "D", "Gb"],


}

export const setVolume = value => {
    synth.volume.value = (convertSliderVolToDecibels(value));
}
export const activateChord = (chord) => {
    console.log('received request to activate upcoming chord of ' + chord)
    // save it locally
    
    currentChord = chord;
    
    // Stops the current chord
    synth.releaseAll(Tone.now())

    // chord is a string eg "C Major"
    // "C Major" ==> ["C4", "G4", "E4"] etc.
    chordNotes = chords[chord].map((key, i) => key + pitches[i]);

    synth.triggerAttackRelease(chordNotes, 999, 1);
  
}

export const pauseSynth = () => {
        synth.releaseAll(Tone.now())
}
export const resumeSynth = () => {
    // if (timeLeft === delayInSeconds) {
        // activateChord(upcomingChord)
    // }
    if (currentChord) {

        let chordNotes = chords[currentChord].map((key, i) => key + pitches[i]);

        synth.triggerAttackRelease(chordNotes, 999, 1);
    }

}


export const stopSynth = () => {
    synth.triggerRelease(Tone.now());
  }