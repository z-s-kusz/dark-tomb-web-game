import HPGrid from './HPGrid';
import './Character.css';

export default function Character() {
    return (
        <div class="character-card">
            <HPGrid maxHealth={10} currentHealth={10} />
        </div>
    );
}
