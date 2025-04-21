import React, { Children, useState } from 'react';
import TapButton from './TapButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
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
        <Section title="Examples" id="examples">
            <Tabs
                ButtonsContainer="menu"

                buttons={
                    <>
                        <TapButton
                            isSelected={selectedTopic === 'components'}
                            onClick={() => handleClick('components')}
                        >
                            Components
                        </TapButton>
                        <TapButton
                            isSelected={selectedTopic === 'jsx'}
                            onClick={() => handleClick('jsx')}
                        >
                            JSX
                        </TapButton>
                        <TapButton
                            isSelected={selectedTopic === 'props'}
                            onClick={() => handleClick('props')}
                        >
                            Props
                        </TapButton>
                        <TapButton
                            isSelected={selectedTopic === 'state'}
                            onClick={() => handleClick('state')}
                        >
                            State
                        </TapButton>
                    </>
                }
            >
                {tabContent}
            </Tabs>
        </Section >
    );
}