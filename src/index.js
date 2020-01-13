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
  const formatCode = codeBlock => {
    const codeBlockCopy = codeBlock
    const codeBlockLines = codeBlockCopy.split('\n')
    const flaggedExtraneousNewlines = codeBlockLines.map((line, index) => {
      if (index === 0 || index === codeBlockLines.length - 1) {
        if (line.trim().length === 0) {
          return null
        } else {
          return line
        }
      } else {
        if (line.trim().length === 0) {
          return line.trim()
        } else {
          return line
        }
      }
    })
    const noExtraneousNewlines = flaggedExtraneousNewlines.filter(line => line !== null)
    const leadingWhitespaceAmount = noExtraneousNewlines[0].search(/\S|$/)
    const noLeadingWhiteSpace = noExtraneousNewlines.map((line, index) => {
      if (index === 0) {
        return line.trim()
      } else {
        if (line.trim().length === 0) {
          return line
        } else {
          const currentWhitespace = line.search(/\S|$/)
          return `${' '.repeat(currentWhitespace - leadingWhitespaceAmount)}${line.trim()}`
        }
      }
    })
    console.log(noLeadingWhiteSpace)

    return codeBlockCopy
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
          {formatCode(children)}
        </code>
      </pre>
    </div>
  )
}

export default CodeBlock
