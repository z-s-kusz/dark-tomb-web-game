import './GridItem.css';

interface Props {
    color: string;
    onClick: () => void;
}

function GridItem(props: Props) {
    return <div class="grid-item" style={{ 'background-color': props.color }} onClick={props.onClick}></div>;
}

export default GridItem;
