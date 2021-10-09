import cMajorSound from "../Sounds/Piano/CMajorPiano.mp3"
import eMajorSound from"../Sounds/Piano/EMajorPiano.mp3"
import dbMajorSound from "../Sounds/Piano/DbMajorPiano.mp3";

const CMajor = new Audio(cMajorSound);
CMajor.volume = 0.3;

const DbMajor = new Audio(dbMajorSound);
DbMajor.volume = 0.3;

const EMajor = new Audio(eMajorSound);
EMajor.volume = 0.3;

export const chords = {
    "CMajor": CMajor,
    "DbMajor": DbMajor,
    "EMajor": EMajor,
}

