export type Content = {
    type: string;
    value: any;
}

type Scafold = {
    backgroundColor: string;
    spawns: string | null;
    contains: Content[];
    isHighlighted: boolean;
}

export default Scafold;
