import './Card.css';
import GridItem from './GridItem';
import colors from 'tailwindcss/colors';

function Card() {
    const handleClick = (index: number) => {
        console.log('clicked box index', index);
    };

    let items = [];
    for (let i = 0; i < 49; i++) {
        items.push(<GridItem color={colors.green[600]} onClick={() => handleClick(i)} />);
    }
    return <section class="card-grid">{items}</section>;
}

export default Card;
