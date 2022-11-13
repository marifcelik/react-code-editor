import { useContext, EditorContext } from '@/context';
import { useMemo } from 'react';
import './style.css'

function Preview() {
    const { html, css, js } = useContext(EditorContext);

    const srcDoc = useMemo(() => {
        if (!(html || css || js))
            return false

        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>${css}</style>
        </head>
        <body>
            ${html}
            <script type="module">${js}</script>
        </body>
        </html>
    `
    }, [html, css, js])

    return (
        <>
            {srcDoc ? <iframe srcDoc={srcDoc} /> : <div className='splash'>// no comment</div>}
        </>
    )
}

export default Preview