export type RocketData = {
  id: number;
  name: string;
}

let id = 0;

const createRocket = (name: string): RocketData => ({ id: id++, name });

const ROCKETS: Array<RocketData> = [
  createRocket('Firefly Alpha'),
  createRocket('SpaceX Starship'),
  createRocket('RS1'),
  createRocket('Red Dwarf'),
];

export const getRockets = async () => ROCKETS;
