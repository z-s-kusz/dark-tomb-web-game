import Scafold from '@/types/scafold';
import './Card.css';
import GridItem from './GridItem';
import { mergeProps } from 'solid-js';

interface Props {
    scafolding: Scafold[];
    onClick: (cardIndex: number, boxIndex: number) => void;
    cardIndex?: number;
}
function Card(props: Props) {
    const merged = mergeProps({ cardIndex: 0 }, props);

    const handleClick = (index: number) => {
        props.onClick(merged.cardIndex, index);
    };

    const items = () => {
        let collection = [];
        for (let i = 0; i < 49; i++) {
            collection.push(<GridItem onClick={() => handleClick(i)} scafolding={props.scafolding[i]} />);
        }
        return collection;
    };

    return <section class="card-grid">{items()}</section>;
}

export default Card;
