import {Howler} from "howler"
import * as Tone from 'tone';

const verb = new Tone.Reverb(1);

const synth = new Tone.PolySynth().toDestination().connect(verb);

// implement pitch A,B,C, (d)
// seperate 'synth settings page' where user can change each

let pitches = [2,3,3,3];

// in dB
synth.volume.value = -20;


const convertSliderVolToDecibels = sliderVol => {

    // -7 dB = MAX
    // -36 dB = min (without being muted)
    console.log(sliderVol * 0.30303030 - 37 )
    return sliderVol === 0 ? -10000 : (sliderVol * 0.30303030 - 37 )
    // return makeNegative((sliderVol * -0.30303030 ))
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
    // chord is a string eg "C Major"
    // "C Major" ==> ["C4", "G4", "E4"] etc.

    synth.releaseAll(Tone.now())
    let chordNotes = chords[chord].map((key, i) => key + pitches[i]);

    synth.triggerAttackRelease(chordNotes, 999, 1);
  
}

export const pauseSynth = () => {
        synth.releaseAll(Tone.now())
}
export const resumeSynth = () => {
        // synth.releaseAll(Tone.now())
}


export const stopSynth = () => {
    synth.triggerRelease(Tone.now());
  }