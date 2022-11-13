import { EditorProvider } from './context'
import CodeEditor from '@/components/CodeEditor'
import Header from '@/components/Header'
import Preview from '@/components/Preview'
import Footer from '@/components/Footer'
import './App.css'

function App() {
  return (
    <EditorProvider>
      <CodeEditor />
      <div className="container">
        <Header />
        <Preview />
        <Footer />
      </div>
    </EditorProvider>
  )
}

export default App