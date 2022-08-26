import { Base } from "./base";

export interface Character {    
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Base;
    location: Base;
    image: string;
    episode: string [];
    url: string;
    created: string;
}
