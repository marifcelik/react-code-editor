import IcoMoon from 'react-icomoon';
import iconSet from '@/selection.json'

function SVGIcon(props) {
    return (
        <>
            <IcoMoon {...props} iconSet={iconSet} />
        </>
    )
}

export default SVGIcon