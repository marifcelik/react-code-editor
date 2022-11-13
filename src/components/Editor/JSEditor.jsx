import { useContext, EditorContext } from '@/context';
import Editor from '@monaco-editor/react'

function JSEditor() {
    const { js, setJs } = useContext(EditorContext);

    return (
        <Editor
            height="calc(100% - 7rem)"
            theme="vs-dark"
            value={js}
            language='javascript'
            options={{
                fontFamily: 'monospace',
                minimap: { enabled: false },
                unicodeHighlight: { allowedLocales: { tr: true } }
            }}
            onChange={setJs}
        />
    )
}

export default JSEditor