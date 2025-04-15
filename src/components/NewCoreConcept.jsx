import CoreConcepts from './CoreConcepts';
import { CORE_CONCEPTS } from '../data.jsx';

export default function NewCoreConcept() {
    return (
        < section id="core-concepts" >
            <h2>Core Consepts</h2>
            <ul>
                {CORE_CONCEPTS.map((concept) => (<CoreConcepts key={concept.title} {...concept} />))}
            </ul>
        </section>
    )
}
