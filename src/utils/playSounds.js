import {Howler} from "howler"
import * as Tone from 'tone';

const verb = new Tone.Reverb(1);

const synth = new Tone.PolySynth().toDestination().connect(verb);
let pitch = 3;

// synth.set("detune", -1200);


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

export const activateChord = (chord) => {
    // chord is a string eg "C Major"
    // "C Major" ==> ["C4", "G4", "E4"] etc.

    synth.releaseAll(Tone.now())
    let chordNotes = chords[chord].map(key => key + pitch);

    synth.triggerAttackRelease(chordNotes, 999, 1);
  
}

export const pauseSynth = () => {
        synth.releaseAll(Tone.now())
}
export const resumeSynth = () => {
        // synth.releaseAll(Tone.now())
}


export const stopSynth = () => {
    console.log('stop func')
    synth.triggerRelease(Tone.now());
  }