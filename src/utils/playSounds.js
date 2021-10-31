import {Howler} from "howler"
import * as Tone from 'tone';


const synth = new Tone.PolySynth().toDestination();
let pitch = 3;

// synth.set("detune", -1200);


const chords = {
    "CMajor" : ["C", "E", "G"],
    "CMinor" : ["C", "Eb", "G"],
    "DMajor" : ["D", "Gb", "A"],
    "DMinor" : ["D", "G", "A"],
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