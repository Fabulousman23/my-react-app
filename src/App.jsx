import React, { useState, Fragment } from 'react';
import { CORE_CONCEPTS } from './data.jsx';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TapButton from './components/TapButton.jsx';
import { EXAMPLES } from './data.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();


  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  let tabContent = <p>Please select a Topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }
  return (
    <Fragment>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Consepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (<CoreConcepts key={concept.title} {...concept} />))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleClick('components')}>Components</TapButton>
            <TapButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleClick('jsx')}>JSX</TapButton>
            <TapButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleClick('props')}>Props</TapButton>
            <TapButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleClick('state')}>State</TapButton>
          </menu>
          {tabContent}
        </section >
      </main >
    </Fragment >
  );
}

export default App;