export interface CompanyData {
    _id: string;
    name: string;
    symbol: string;
    sector: string;
    lastDiv: number;
    range: string;
    beta: number;
    volAvg: number;
    industry: string;
    website: string;
    ceo: string;
    image: string;
    description: string;
}

export interface Topic {
    topic: string;
    relevance_score: string;
}

export interface NewsArticle {
    authors: string[];
    banner_image: string;
    category_within_source: string;
    overall_sentiment_label: string;
    overall_sentiment_score: number;
    source: string;
    source_domain: string;
    summary: string;
    time_published: string;
    title: string;
    topics: Topic[];
    url: string;
}

export interface NumbersData {
    _id: string,
    name: string,
    symbol: string,
    sector: string
    volatility_q1: number,
    volatility_q2: number,
    volatility_q3: number,
    volatility_q4: number,
    correlation_q1: number,
    correlation_q2: number,
    correlation_q3: number,
    correlation_q4: number,
    volatility_predicted: string
}