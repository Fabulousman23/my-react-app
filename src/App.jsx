import React, { useState } from 'react';
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Consepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton onSelect={() => handleClick('components')}>Components</TapButton>
            <TapButton onSelect={() => handleClick('jsx')}>JSX</TapButton>
            <TapButton onSelect={() => handleClick('props')}>Props</TapButton>
            <TapButton onSelect={() => handleClick('state')}>State</TapButton>
          </menu>
          {tabContent}
        </section >
      </main >
    </div >
  );
}

export default App;