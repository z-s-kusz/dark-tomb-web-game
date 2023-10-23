import { CgHeart } from 'solid-icons/cg';
import './HPGrid.css';

interface Props {
    maxHealth: number;
    currentHealth: number;
}

export default function HPGrid(props: Props) {
    const boxes = () => {
        let collection = [];
        for (let i = 0; i < props.maxHealth; i++) {
            let box = <div class="health-box">{i + 1}</div>;
            if (i === props.currentHealth - 1) {
                box = (
                    <div class="health-box">
                        {i + 1}
                        <CgHeart class="text-red-400" />
                    </div>
                );
            }
            collection.push(box);
        }
        return collection;
    };

    return <div class="health-grid">{boxes()}</div>;
}
