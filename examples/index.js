import React from 'react'
import ReactDom from 'react-dom'
import CodeBlock from '../src/index'

ReactDom.render(
  <CodeBlock language='javascript'>
    {`
      onSubmit(e) {
        e.preventDefault()
        const job = {
          title: 'Developer',
          company: 'Facebook' 
        }
      }
    `}
  </CodeBlock>,
  document.getElementById('app')
)
