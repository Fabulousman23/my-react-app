import React, { useState } from 'react';
import TapButton from './TapButton.jsx';
import { EXAMPLES } from '../data.jsx'; // Corrected import (case-sensitive)

export default function Examples() {
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
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TapButton
                    isSelected={selectedTopic === 'components'}
                    onSelect={() => handleClick('components')}
                >
                    Components
                </TapButton>
                <TapButton
                    isSelected={selectedTopic === 'jsx'}
                    onSelect={() => handleClick('jsx')}
                >
                    JSX
                </TapButton>
                <TapButton
                    isSelected={selectedTopic === 'props'}
                    onSelect={() => handleClick('props')}
                >
                    Props
                </TapButton>
                <TapButton
                    isSelected={selectedTopic === 'state'}
                    onSelect={() => handleClick('state')}
                >
                    State
                </TapButton>
            </menu>
            {tabContent}
        </section>
    );
}