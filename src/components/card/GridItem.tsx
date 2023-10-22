import Scafold from '@/types/scafold';
import './GridItem.css';
import { HiOutlineLockClosed, HiSolidQuestionMarkCircle, HiOutlineUser, HiOutlineHashtag } from 'solid-icons/hi';
interface Props {
    onClick: () => void;
    scafolding: Scafold;
}

function GridItem(props: Props) {
    const style = () => {
        return {
            'background-color': props.scafolding.backgroundColor,
        };
    };

    const contentImage = () => {
        const topItem = props.scafolding.contains.length > 0 ? props.scafolding.contains.slice(-1)[0] : null;
        switch (topItem?.type) {
            case 'item':
                return <HiSolidQuestionMarkCircle class="" />;
            // generic item icon regardless of item value
            case 'enemy':
                return <HiOutlineHashtag class="" />;
            // one of the enemy icons based on value
            case 'player':
                return <HiOutlineUser class="" />;
            // one of the avatar images based on .value
            case 'door':
                return <HiOutlineLockClosed class="" />;
            // opened or closed image based on .value
            default:
                return null;
        }
    };

    return (
        <div class="grid-item" style={style()} onClick={props.onClick}>
            {contentImage()}
        </div>
    );
}

export default GridItem;
