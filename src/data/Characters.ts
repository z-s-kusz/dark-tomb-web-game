import { Character } from "@/types/character";

export const character1: Character = {
    name: 'Aldrich',
    icon: '',
    image: '',
    ac: 13,
    speed: 5,
    maxHp: 8,
    actions: {
        broadsword: {
            name: 'Broadsword',
            type: 'attack',
            toHit: -1,
            range: '1',
            dmg: 2,
            modifiers: '',
            targets: 1,
        },
        dash: {
            name: 'Dash',
            type: 'move',
            description: 'Move 3 additional spaces.',
        },
        daggerSling: {
            name: 'Dagger Sling',
            type: 'attack',
            toHit: 3,
            range: '3-5',
            dmg: 1,
            modifiers: 'seeking',
            targets: 1,
        },
        strikeBack: {
            name: 'Strike Back',
            type: 'overwatch',
            description: 'If you are hit, attacker takes same damage +1.'
        }
    },
};

export const character2: Character = {
    name: 'Oden',
    icon: '',
    image: '',
    ac: 15,
    speed: 6,
    maxHp: 7,
    actions: {
        boltStrike: {
            name: 'Bolt Strike',
            type: 'attack',
            toHit: -2,
            range: '3-5',
            targets: 2,
            modifiers: '',
            dmg: 2,
        },
        dash: {
            name: 'Dash',
            type: 'move',
            description: 'Move 3 additional spaces.',
        },
        battleAxe: {
            name: 'Battle Axe',
            type: 'attack',
            toHit: 1,
            range: '1',
            targets: 1,
            modifiers: '',
            dmg: 1,
        },
        heal: {
            name: 'Heal',
            type: 'action',
            description: 'Roll d20. Heal 1 HP on a roll >= 14. 1 use per level.'
        }
    },
};

export const allCharacters = [
    character1,
    character2
];
