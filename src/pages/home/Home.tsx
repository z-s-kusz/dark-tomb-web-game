import { createSignal } from 'solid-js';
// import './Home.css';

function Home() {
    const [count, setCount] = createSignal(0);

    return (
        <>
            <div> hello there lets make some clickable elements to start</div>
            <button onClick={() => setCount(count() + 1)}>clicked: {count()}</button>
        </>
    );
}

export default Home;
