export type Character = {
    name: string;
    icon: any;
    image: string;
    ac: number;
    speed: number;
    maxHp: number;
    actions: {
        [key: string]: Attack | Action;
    }
}

type ActionBase = {
    name: string;
    type: 'attack' | 'move' | 'overwatch' | 'action';
}

export interface Attack extends ActionBase {
    toHit: number;
    // range: if used for calcs needs to split to range min and max
    // currently only displayed to user so a string is fine
    range: string;
    targets: number,
    modifiers: '' | 'seeking' | 'penetrating',
    dmg: number;
}

export interface Action extends ActionBase {
    description: string;
}
