import { A } from '@solidjs/router';

function Home() {
    return (
        <main class="p-8 h-full">
            <A href="/about" class="btn link link-accent">
                About
            </A>
            <A href="/card-builder" class="btn link link-accent">
                Card Builder
            </A>
            <A href="/new-game" class="btn link link-accent">
                Start New Game
            </A>
        </main>
    );
}

export default Home;
