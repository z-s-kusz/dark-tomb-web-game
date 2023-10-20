import Scafold from '@/types/scafold';
import './Card.css';
import GridItem from './GridItem';
import colors from 'tailwindcss/colors';
import { mergeProps } from 'solid-js';

interface Props {
    scafolding?: Scafold[];
    onClick: (cardIndex: number, boxIndex: number) => void; // will this NEED to be added in merged props?
}
function Card(props: Props) {
    const merged = mergeProps({ scafolding: [] }, props);

    const handleClick = (index: number) => {
        props.onClick(100, index); // TODO put real card index here
    };

    const items = () => {
        let collection = [];
        for (let i = 0; i < 49; i++) {
            const color = merged.scafolding.length >= 49 ? merged.scafolding[i].backgroundColor : colors.green[200];
            collection.push(<GridItem color={color} onClick={() => handleClick(i)} />);
        }
        return collection;
    };

    return <section class="card-grid">{items()}</section>;
}

export default Card;
