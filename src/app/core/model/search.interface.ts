export interface ISymbolLookup {
    count: number;
    result: ISymbol[];
}

export interface ISymbol {
    description: string;
    displaySymbol: string;
    symbol: string;
    type: string;
}


  