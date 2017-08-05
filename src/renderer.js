const loader = require('monaco-loader')

loader().then((monaco) => {
  const el = document.getElementById('container')

  const editor = monaco.editor.create(el, {
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true,
  })
})
