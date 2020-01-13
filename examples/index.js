import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import CodeBlock from '../src/index'

const Main = () => {
  return (
    <Fragment>
      {/* <CodeBlock theme='dark' language='javascript'>
        {`
          const sum = (a, b) => a + b
          
          const sum = (a, b) => a + b
          
          
          const sum = (a, b) => a + b
        `}
      </CodeBlock> */}
      <CodeBlock theme='dark' language='css' codeBlockStyles={{ marginTop: 8, marginBottom: 8 }}>
        {`
          .Code_Block > .copy-button {
            position: absolute;
            top: 13px;
            right: 13px;
            margin: 0;
            background: grey;
            padding: 8px;
          }
                     
          .Code_Block > .copy-button {
            position: absolute;
            top: 13px;
            right: 13px;
            margin: 0;
            background: grey;
            padding: 8px;
          }
   
          .Code_Block > .copy-button {
            position: absolute;
            top: 13px;
            right: 13px;
            margin: 0;
            background: grey;
            padding: 8px;
          }
        `}
      </CodeBlock>
      {/* <CodeBlock theme='dark' language='python'>
        {`
          try:
            print(f'{a + b}')
          except:
            print('Something went wrong')
        `}
      </CodeBlock> */}
    </Fragment>
  )
}

ReactDom.render(<Main />, document.getElementById('app'))
