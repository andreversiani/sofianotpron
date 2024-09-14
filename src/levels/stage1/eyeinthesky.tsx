import { BaseLevel } from "../../components/BaseLevel"
import { useComment } from "../../hooks/useComment"
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';

function EyeInTheSky() {

  const songLyrics = `I am the eye in the sky
  Looking at you
  I can read your mind`

  const tip1 = 'De quem é o olho no céu?'
  
  return (
    <BaseLevel imagePath="eyeinthesky.jpg" title="مصر" imageText="14">
      {useComment(tip1)}
      <AudioPlayer 
        src={'/audio/eyeinthesky.mp3'}
        style={{ maxWidth: '300px', borderRadius: '10px' }}
        autoPlay={true}
        loop={true}
        showJumpControls={false}
        showFilledProgress={false}
      />
      {useComment(songLyrics)}
    </BaseLevel>
  )
}

export default EyeInTheSky
