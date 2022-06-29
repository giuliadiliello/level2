export interface ISentimentResponse {
    data: ISentiment[];
    symbol: string;
}


export interface ISentiment {
    symbol: string;
    year: number;
    month: number;
    change: number;
    mspr: number;
}