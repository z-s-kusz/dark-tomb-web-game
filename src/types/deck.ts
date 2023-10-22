import Scafold from "./scafold";

export type Card = {
    name: string;
    scafolding: Scafold[];
};

type Deck = {
    name: string;
    cards: Card[];
}

export default Deck;
