import { use, useState } from 'react';
import { CORE_CONCEPTS } from './data.jsx';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TapButton from './components/TapButton.jsx';
import { Children } from 'react';

function App() {
  // const [selectedTopic, setSelectedTopic] = useState('Please Click on a Button');
  const selectedTopicState = useState('Please Click on a Button');
  const selectedTopic = selectedTopicState[0];
  const setSelectedTopic = selectedTopicState[1];


  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
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
            <TapButton onSelect={() => handleClick('Components')}>Components</TapButton>
            <TapButton onSelect={() => handleClick('JSX')}>JSX</TapButton>
            <TapButton onSelect={() => handleClick('Props')}>Props</TapButton>
            <TapButton onSelect={() => handleClick('State')}>State</TapButton>
          </menu>
          <div>{selectedTopic}</div>
        </section>
      </main>
    </div >
  );
}

export default App;