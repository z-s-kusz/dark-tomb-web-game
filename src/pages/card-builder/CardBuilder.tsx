import Card from '@/components/card/Card';
import Scafold from '@/types/scafold';
import { createSignal } from 'solid-js';
import colors from 'tailwindcss/colors';

const buildDefaultScafolding = (): Scafold[] => {
    const defaultScafold: Scafold[] = [];
    for (let i = 0; i < 49; i++) {
        defaultScafold.push({
            backgroundColor: '#fff',
            contains: [],
            spawns: null,
            isHighlighted: false,
        });
    }
    return defaultScafold;
};

const yellow = colors.yellow[200];
const gray = colors.stone[600];
const green = colors.green[600];
const blue = colors.blue[600];
const brown = colors.amber[950];
const white = '#fff';
const black = '#000';

export default function CardBuilder() {
    const [scafolding, setScafolding] = createSignal(buildDefaultScafolding());
    const [selectedItem, setSelectedItem] = createSignal<string | null>(null);

    const handleCardClick = (cardIndex: number, boxIndex: number) => {
        console.log('in parent', cardIndex, boxIndex);
        if (!selectedItem()) return;

        const nextScafolding = scafolding().map((item, i) => {
            if (boxIndex === i) {
                return {
                    ...item,
                    backgroundColor: selectedItem()!,
                };
            }
            return item;
        });
        setScafolding(nextScafolding);
    };

    return (
        <main>
            <Card scafolding={scafolding()} onClick={handleCardClick} />
            <div>
                <h1 class="text-xl">Tiles/Colors:</h1>
                <ul>
                    <li>
                        <button
                            class="btn"
                            onClick={() => setSelectedItem(gray)}
                            style={{ 'background-color': gray, color: white }}>
                            Stone/Gray
                        </button>
                    </li>
                    <li>
                        <button
                            class="btn"
                            onClick={() => setSelectedItem(blue)}
                            style={{ 'background-color': blue, color: white }}>
                            Water/Blue
                        </button>
                    </li>
                    <li>
                        <button
                            class="btn"
                            onClick={() => setSelectedItem(green)}
                            style={{ 'background-color': green, color: black }}>
                            Grass/Green
                        </button>
                    </li>
                    <li>
                        <button
                            class="btn"
                            onClick={() => setSelectedItem(yellow)}
                            style={{ 'background-color': yellow, color: black }}>
                            Sand/Yellow
                        </button>
                    </li>
                    <li>
                        <button
                            class="btn"
                            onClick={() => setSelectedItem(brown)}
                            style={{ 'background-color': brown, color: white }}>
                            Wood/Brown
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <h1 class="text-xl">Items:</h1>
                <ul>
                    <li>Spoon</li>
                    <li>4-Leaf Clover</li>
                </ul>
            </div>
            <div>
                <h1 class="text-xl">Enemies:</h1>
                <ul>
                    <li>Bat (rabid)</li>
                    <li>Moose (normal)</li>
                </ul>
            </div>
        </main>
    );
}