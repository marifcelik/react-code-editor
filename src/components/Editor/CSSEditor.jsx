import { useContext, EditorContext } from '@/context';
import Editor from '@monaco-editor/react'
import { emmetCSS } from 'emmet-monaco-es';

function CSSEditor() {
    const { css, setCss } = useContext(EditorContext);

    return (
        <Editor
            height="calc(100% - 7rem)"
            theme="vs-dark"
            value={css}
            language='css'
            options={{
                fontFamily: 'monospace',
                minimap: { enabled: false },
                unicodeHighlight: { allowedLocales: { tr: true } }
            }}
            onChange={setCss}
            onMount={() => emmetCSS(window.monaco)}
        />
    )
}

export default CSSEditor