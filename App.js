const element = React.createElement('h1', {className: "heading"}, React.createElement('div', { className: "child"}, 'studentsss'))

const reactRoot = ReactDOM.createRoot(document.getElementById('root'))

reactRoot.render(element)