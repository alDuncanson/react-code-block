import React, { useEffect, useState } from 'react'

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

  // attach highlighting on page load event
  useEffect(() => hljs.initHighlightingOnLoad())

  // copy code block
  const copyCode = () => {
    
  }

  // return jsx
  return (
    <div className={`Code_Block ${theme === 'dark' && 'dark-theme'} ${theme === 'light' && 'light-theme'}`}>
      <p
        className='copy-button'
        style={copyButtonStyles}
        onClick={() => copyCode()}
      >Copy</p>
      <p className='hidden-code'>{children}</p>
      <pre style={codeBlockStyles}>
        <code className={`code-block ${language && `language-${language}`}`}>
          {children}
        </code>
      </pre>
    </div>
  )
}

export default CodeBlock
