import { useContext, EditorContext } from '@/context';
import './style.css'

function Preview() {
    const { html, css, js } = useContext(EditorContext);

    const srcDoc = `
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
            <script>${js}</script>
        </body>
        </html>
    `

    return (
        <>
            <iframe srcDoc={srcDoc} />
        </>
    )
}

export default Preview