import { Monster } from "@/types/monster";

export const m1: Monster = {
    name: 'Dragon',
    icon: '',
    image: '',
    ac: 11,
    speed: 3,
    maxHp: 11,
    hpByPlayers: {
        1: 5,
        2: 7,
        3: 9,
        4: 11,
    },
    actions: {
        attack: {
            name: 'Attack',
            type: 'attack',
            toHit: 1,
            range: '3-4',
            dmg: 2,
            modifiers: 'seeking',
            targets: 1,
        },
    },
};

export const m2: Monster = {
    name: 'Oram',
    icon: '',
    image: '',
    ac: 12,
    speed: 4,
    maxHp: 12,
    hpByPlayers: {
        1: 6,
        2: 8,
        3: 10,
        4: 12,
    },
    actions: {
        attack: {
            name: 'Attack',
            type: 'attack',
            toHit: 2,
            range: '1-3',
            dmg: 3,
            modifiers: 'penetrating',
            targets: 2,
        },
    },
};

export const allMonsters = [
    m1,
    m2
];
