import React from 'react'
import MathJax from '@innodoc/react-mathjax-node'

const App = () => (
  <>
    <MathJax.Provider>
      <h3>Working</h3>
      <p>
        <MathJax.Span texCode="f(x)=x^2" />
        <br />
        <MathJax.Span texCode="ü" />
        <br />
        <MathJax.Span texCode="\begin{aligned}a\end{aligned}" />
      </p>
    </MathJax.Provider>
    <MathJax.Provider>
      <h3>Broken</h3>
      <code>{'\\begin{aligned}ü\\end{aligned}'}</code>
      <p>
        <MathJax.Span texCode="\begin{aligned}ü\end{aligned}" />
      </p>
    </MathJax.Provider>
  </>
)

export default App
