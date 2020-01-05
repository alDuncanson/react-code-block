import React, { useEffect } from 'react'

// import Prism and plugins
import Prism from 'prismjs'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'

// import styles
import './style.css'
import './prism.css'

/**
 * 
 */
const CodeBlock = ({ children, language }) => {

  useEffect(() => {
    Prism.highlightAll()
    Prism.plugins.NormalizeWhitespace.setDefaults({
      'remove-trailing': true,
      'remove-indent': true,
      'left-trim': true,
      'right-trim': true,
      /*'break-lines': 80,
      'indent': 2,
      'remove-initial-line-feed': false,
      'tabs-to-spaces': 4,
      'spaces-to-tabs': 4*/
    })
  }, [])

  /**
   * return jsx
   */
  return (
    <div className='Code_Block'>
      <p className='copy-button' onClick={() => copy()}>Copy</p>
      <pre>
        <code className={`language-${language}`}>
          {children}
        </code>
      </pre>
    </div>
  )
}

export default CodeBlock
