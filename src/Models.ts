export interface IPartDef {
    category: string,
    id: string,
    name: string,
    description: string,
    symbol: string,
    baseCost: number,
    baseDurability: number,
    basePower: number,
    baseHeat: number,
    stage: number
}

export interface IReactorProperties {
    cols: number,
    rows: number
};

export interface IGameData {
    currentHeat: number;
    maxHeat: number;
    currentEnergy: number;
    maxEnergy: number;
    moneyOwned: number;
    heatGrowPerTick: number;
    energyGrowPerTick: number;
}
