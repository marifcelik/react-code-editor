import { useContext, createContext, useState } from 'react';

const EditorContext = createContext();

function EditorProvider({ children }) {

    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
    
    const value = { html, setHtml, css, setCss, js, setJs }

    return (
        <EditorContext.Provider value={value}>
            {children}
        </EditorContext.Provider>
    )
}

export { EditorProvider, EditorContext, useContext }
