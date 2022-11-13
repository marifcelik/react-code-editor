import { useContext, EditorContext } from '@/context';
import { useReactMediaRecorder } from 'react-media-recorder';
import Webcam from 'react-webcam'
import Draggable from 'react-draggable';
import SVGIcon from '../SVGIcon';
import './style.css'

function Header() {
    const { webcamOn, setWebcamOn } = useContext(EditorContext)
    const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ screen: true, audio: false })

    return (
        <>
            {webcamOn && <Draggable><Webcam mirrored={true} /></Draggable>}
            <header>
                {(mediaBlobUrl && status === 'stopped') &&
                    <a href={mediaBlobUrl} download='video.mp4' className='icon download'>
                        <SVGIcon icon='download' color='#fff' size={25} />
                    </a>}
                <button onClick={() => setWebcamOn(!webcamOn)} className='icon'>
                    <SVGIcon icon={webcamOn ? 'webcamOff' : 'webcamOn'} color='#fff' size={36} />
                </button>
                <button onClick={status !== 'recording' ? startRecording : stopRecording} className={`icon ${status == 'recording' && 'recording'}`}>
                    <SVGIcon icon={status == 'recording' ? 'recordOff' : 'record'} color='#fff' size={36} />
                </button>
            </header>
        </>
    )
}

export default Header