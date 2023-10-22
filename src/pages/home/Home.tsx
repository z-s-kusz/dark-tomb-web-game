import { A } from '@solidjs/router';
import { createSignal } from 'solid-js';

function Home() {
    const [count, setCount] = createSignal(0);

    return (
        <>
            <div> hello there lets make some clickable elements to start</div>
            <button onClick={() => setCount(count() + 1)}>clicked: {count()}</button>
            <A href="/about">About</A>
            <A href="/card-builder">Card Builder</A>
        </>
    );
}

export default Home;
