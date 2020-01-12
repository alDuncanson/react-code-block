import React, { useEffect, useState, useRef } from 'react'

// import styles
import './style.css'
import './theme.css'

// import highlight.js
import hljs from 'highlight.js'

/**
 * Formatted code blocks
 */
const CodeBlock = ({
  children,
  theme,
  language,
  codeBlockStyles,
  copyButtonStyles
}) => {

  // was the copy button clicked recently
  const [copyClicked, setCopyClicked] = useState(false)

  // hidden code block ref
  const copyCodeRef = useRef()

  // attach highlighting on page load event
  useEffect(() => hljs.initHighlightingOnLoad())

  useEffect(() => {
    setTimeout(() => {
      setCopyClicked(false)
    }, 1000)
  }, [copyClicked])

  // copy code block to clipboard
  const copyCode = () => {
    copyCodeRef.current.focus()
    copyCodeRef.current.select()
    document.execCommand('copy')
    setCopyClicked(true)
  }

  // format code block
  const formattedCode = () => {
    console.log(children.match(/\n/g))
  }

  // return jsx
  return (
    <div className={`Code_Block ${theme === 'dark' && 'dark-theme'} ${theme === 'light' && 'light-theme'}`}>
      <p className={`copied-text ${copyClicked && 'show'}`}>Copied</p>
      <p className='copy-button' style={copyButtonStyles} onClick={() => copyCode()}>
        Copy
      </p>
      <textarea ref={copyCodeRef} className='hidden-code' defaultValue={children} />
      <pre style={codeBlockStyles}>
        <code className={`code-block ${language && `language-${language}`}`}>
          {formattedCode()}
        </code>
      </pre>
    </div>
  )
}

export default CodeBlock
