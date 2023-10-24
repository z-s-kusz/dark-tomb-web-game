import { Character } from "./character";

export interface Monster extends Character {
    hpByPlayers: {
        1: number; // dunno if this is okay or if key should be string
        2: number;
        3: number;
        4: number;
    }
}
