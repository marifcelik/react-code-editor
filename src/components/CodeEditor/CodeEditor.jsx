import { useState } from 'react'
import { HTMLEditor, CSSEditor, JSEditor } from '@/components/Editor'
import Button from '@/components/Button';
import './style.css'

function CodeEditor() {
    const [activeTab, setActiveTab] = useState('html');

    return (
        <aside>
            <nav>
                <Button active={activeTab === 'html'} onClick={() => setActiveTab('html')}>html</Button>
                <Button active={activeTab === 'css'} onClick={() => setActiveTab('css')}>css</Button>
                <Button active={activeTab === 'js'} onClick={() => setActiveTab('js')}>js</Button>
            </nav>
            {activeTab === 'html' && <HTMLEditor />}
            {activeTab === 'css' && <CSSEditor />}
            {activeTab === 'js' && <JSEditor />}
        </aside>
    )
}

export default CodeEditor