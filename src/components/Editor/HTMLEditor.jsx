import { useContext, EditorContext } from '@/context';
import Editor from '@monaco-editor/react'
import { emmetHTML } from 'emmet-monaco-es';

function HTMLEditor() {
    const { html, setHtml } = useContext(EditorContext);

    return (
        <Editor
            height="calc(100% - 7rem)"
            theme="vs-dark"
            value={html}
            language='html'
            options={{
                fontFamily: 'monospace',
                minimap: { enabled: false },
                unicodeHighlight: { allowedLocales: { tr: true } }
            }}
            onChange={setHtml}
            onMount={() => emmetHTML(window.monaco)}
        />
    )
}

export default HTMLEditor