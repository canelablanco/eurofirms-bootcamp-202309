import React from "react"

export default function Logo() {
    console.log('Logo')

    const horseAudioRef = React.useRef()
    const tweetAudioRef = React.useRef()

    function handleMouseOverLogo() {
        tweetAudioRef.current.play()
    }

    return <div>
        <svg version="1.1"
            width="30" height="30"
            xmlns="http://www.w3.org/2000/svg"
            onMouseOver={handleMouseOverLogo}>

            <rect width="30" height="30" fill="tomato" />

            <circle cx="15" cy="15" r="8" fill="yellow" />

            <polygon points="25,6 5,40 45,40" fill="dodgerblue" />
        </svg>

        <audio className="hidden" id="tweet-audio" controls ref={tweetAudioRef}>
            <source src="https://cdn.freesound.org/previews/360/360306_6437556-lq.ogg" type="audio/ogg" />
            <source src="https://cdn.freesound.org/previews/360/360306_6437556-lq.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    </div>
}