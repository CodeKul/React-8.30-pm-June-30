import React, {createContext, useState} from 'react';
import Audio1 from "../assets/Audio1.mp3"
import Audio2 from "../assets/Audio2.mp3"
import Audio3 from "../assets/Audio3.mp3"
import Audio4 from "../assets/Audio4.mp3"
import Audio5 from "../assets/Audio5.mp3"


export const MusicPlayerContext = createContext()

export const MusicPlayerProvider = (props) => {

    const [state, setState] = useState({
        audioPlayer: new Audio(),

        tracks: [
            {
                name : "Audio 1",
                file: Audio1
            },
            {
                name : "Audio 2",
                file: Audio2
            },
            {
                name : "Audio 3",
                file: Audio3
            },
            {
                name : "Audio 4",
                file: Audio4
            },
            {
                name : "Audio 5",
                file: Audio5
            },
        ],

        currentTrackIndex: null,
        isPlaying: false
    })

    return(

        <MusicPlayerContext.Provider value={[state, setState]}>
            {props.children}
        </MusicPlayerContext.Provider>
    );

}


