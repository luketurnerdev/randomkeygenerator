import {Howl, Howler} from 'howler';

//Major

import cMajorSound from "../Sounds/Piano/CMajorPiano.mp3"
import dbMajorSound from "../Sounds/Piano/DbMajorPiano.mp3";
import dMajorSound from "../Sounds/Piano/DMajorPiano.mp3";
import ebMajorSound from "../Sounds/Piano/EbMajorPiano.mp3";
import eMajorSound from"../Sounds/Piano/EMajorPiano.mp3"
import fMajorSound from "../Sounds/Piano/FMajorPiano.mp3";
import gbMajorSound from "../Sounds/Piano/GbMajorPiano.mp3";
import gMajorSound from "../Sounds/Piano/GMajorPiano.mp3";
import abMajorSound from "../Sounds/Piano/AbMajorPiano.mp3";
import aMajorSound from "../Sounds/Piano/AMajorPiano.mp3";
import bbMajorSound from "../Sounds/Piano/BbMajorPiano.mp3";
import bMajorSound from "../Sounds/Piano/BMajorPiano.mp3";

// Minor

import cMinorSound from "../Sounds/Piano/CMinorPiano.mp3"
import dbMinorSound from "../Sounds/Piano/DbMinorPiano.mp3";
import dMinorSound from "../Sounds/Piano/DMinorPiano.mp3";
import ebMinorSound from "../Sounds/Piano/EbMinorPiano.mp3";
import eMinorSound from"../Sounds/Piano/EMinorPiano.mp3"
import fMinorSound from "../Sounds/Piano/FMinorPiano.mp3";
import gbMinorSound from "../Sounds/Piano/GbMinorPiano.mp3";
import gMinorSound from "../Sounds/Piano/GMinorPiano.mp3";
import abMinorSound from "../Sounds/Piano/AbMinorPiano.mp3";
import aMinorSound from "../Sounds/Piano/AMinorPiano.mp3";
import bbMinorSound from "../Sounds/Piano/BbMinorPiano.mp3";
import bMinorSound from "../Sounds/Piano/BMinorPiano.mp3";

// Defining Howl instances

// Major
const CMajor = new Howl ({src : [cMajorSound], volume:0.3});

const DbMajor = new Howl ({src : [dbMajorSound], volume:0.3});

const DMajor = new Howl({src: [dMajorSound], volume: 0.3})


const EbMajor = new Howl({src: [ebMajorSound], volume: 0.3})

const EMajor = new Howl({src: [eMajorSound], volume: 0.3})

const FMajor = new Howl({src: [fMajorSound], volume: 0.3})

const GbMajor = new Howl({src: [gbMajorSound], volume: 0.3})

const GMajor = new Howl({src: [gMajorSound], volume: 0.3})

const AbMajor = new Howl({src: [abMajorSound], volume: 0.3})

const AMajor = new Howl({src: [aMajorSound], volume: 0.3})

const BbMajor = new Howl({src: [bbMajorSound], volume: 0.3})

const BMajor = new Howl({src: [bMajorSound], volume: 0.3})


// Minor

const CMinor = new Howl({src: [cMinorSound], volume: 0.3})

const DbMinor = new Howl({src: [dbMinorSound], volume: 0.3})

const DMinor = new Howl({src: [dMinorSound], volume: 0.3})

const EbMinor = new Howl({src: [ebMinorSound], volume: 0.3})

const EMinor = new Howl({src: [eMinorSound], volume: 0.3})

const FMinor = new Howl({src: [fMinorSound], volume: 0.3})

const GbMinor = new Howl({src: [gbMinorSound], volume: 0.3})

const GMinor = new Howl({src: [gMinorSound], volume: 0.3})

const AbMinor = new Howl({src: [abMinorSound], volume: 0.3})

const AMinor = new Howl({src: [aMinorSound], volume: 0.3})

const BbMinor = new Howl({src: [bbMinorSound], volume: 0.3})

const BMinor = new Howl({src: [bMinorSound], volume: 0.3})

export const chords = {
    "CMajor": CMajor,
    "DbMajor": DbMajor,
    "DMajor": DMajor,
    "EbMajor": EbMajor,
    "EMajor": EMajor,
    "FMajor": FMajor,
    "GbMajor": GbMajor,
    "GMajor": GMajor,
    "AbMajor": AbMajor,
    "AMajor": AMajor,
    "BbMajor": BbMajor,
    "BMajor": BMajor,
    "CMinor": CMinor,
    "DbMinor": DbMinor,
    "DMinor": DMinor,
    "EbMinor": EbMinor,
    "EMinor": EMinor,
    "FMinor": FMinor,
    "GbMinor": GbMinor,
    "GMinor": GMinor,
    "AbMinor": AbMinor,
    "AMinor": AMinor,
    "BbMinor": BbMinor,
    "BMinor": BMinor,
}

