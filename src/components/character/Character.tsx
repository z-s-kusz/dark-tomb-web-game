import HPGrid from './HPGrid';
import { CgShield, CgArrowRight, CgYinyang } from 'solid-icons/cg';
import './Character.css';
import AttackIcon from '../attack-icon/AttackIcon';

interface Props {}

export default function Character(props: Props) {
    const name = 'Scandra';
    const ac = 12;
    const speed = 5;
    const icon = <CgYinyang class="text-red-800 text-3xl" />;

    return (
        <div class="character-card">
            <div class="character-image"></div>
            <div class="name bg-teal-400 text-5xl">
                {name}
                <div class="char-icon">{icon}</div>
            </div>
            <div class="attributes">
                <div class="grid-pile">
                    <CgShield class="text-teal-400 text-5xl" />
                    <p class="text-white text-xl">{ac}</p>
                </div>
                <div class="grid-pile">
                    <CgArrowRight class="text-teal-400 text-5xl" />
                    <p class="text-white text-xl">{speed}</p>
                </div>
            </div>
            <div class="actions bg-red-200">
                <AttackIcon />
            </div>
            <div class="health">
                <HPGrid maxHealth={10} currentHealth={10} />
            </div>
        </div>
    );
}
