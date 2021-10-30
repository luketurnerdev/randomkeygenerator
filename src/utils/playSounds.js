import {Howler} from "howler"
import * as Tone from 'tone';


const synth = new Tone.PolySynth().toDestination();

let chordNotes = ["C4", "E4", "G4"];



export const activateChord = (paused, currentChord, duration) => {

    // currentChord is a string eg "C Major"

    // Create switch statement for converting:
    // "C Major" ==> "CEG" etc.
    console.log(paused)
    synth.triggerAttackRelease(chordNotes, 999, 0.5);
    // const loop = new Tone.Loop(time => {
    // }, "4n").start(0);

    if (!paused) {
        synth.releaseAll(Tone.now())
    }
}

export const playCurrentChord = () => {
    Howler.stop()

    // playCustomChord('xyz')

    
}
export const handleChordChange = () => {
        
    console.log('handle change')
    // stop prev chord
    // stopSynth();
    
    // Play new chord
    
    
    
}

export const stopSynth = () => {
    console.log('stop func')
    synth.triggerRelease(Tone.now());
  }