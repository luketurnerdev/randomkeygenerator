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

// Defining Audio instances

// Major
const CMajor = new Audio(cMajorSound);
CMajor.volume = 0.3;

const DbMajor = new Audio(dbMajorSound);
DbMajor.volume = 0.3;

const DMajor = new Audio(dMajorSound);
DbMajor.volume = 0.3;

const EbMajor = new Audio(ebMajorSound);
DbMajor.volume = 0.3;

const EMajor = new Audio(eMajorSound);
DbMajor.volume = 0.3;

const FMajor = new Audio(fMajorSound);
EMajor.volume = 0.3;

const GbMajor = new Audio(gbMajorSound);
EMajor.volume = 0.3;

const GMajor = new Audio(gMajorSound);
EMajor.volume = 0.3;

const AbMajor = new Audio(abMajorSound);
EMajor.volume = 0.3;

const AMajor = new Audio(aMajorSound);
EMajor.volume = 0.3;

const BbMajor = new Audio(bbMajorSound);
EMajor.volume = 0.3;

const BMajor = new Audio(bMajorSound);
EMajor.volume = 0.3;


// Minor

const CMinor = new Audio(cMinorSound);
CMinor.volume = 0.3;

const DbMinor = new Audio(dbMinorSound);
DbMinor.volume = 0.3;

const DMinor = new Audio(dMinorSound);
DbMinor.volume = 0.3;

const EbMinor = new Audio(ebMinorSound);
DbMinor.volume = 0.3;

const EMinor = new Audio(eMinorSound);
DbMinor.volume = 0.3;

const FMinor = new Audio(fMinorSound);
EMinor.volume = 0.3;

const GbMinor = new Audio(gbMinorSound);
EMinor.volume = 0.3;

const GMinor = new Audio(gMinorSound);
EMinor.volume = 0.3;

const AbMinor = new Audio(abMinorSound);
EMinor.volume = 0.3;

const AMinor = new Audio(aMinorSound);
EMinor.volume = 0.3;

const BbMinor = new Audio(bbMinorSound);
EMinor.volume = 0.3;

const BMinor = new Audio(bMinorSound);
EMinor.volume = 0.3;

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

