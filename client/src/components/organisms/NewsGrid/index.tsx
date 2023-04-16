import "./styles.css"
import { Card, Col, Row, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { setDataDumpComp, setIsSliderOpen } from "../../../state/slices/activeEntities";
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { StockData } from "../CompanyModal";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { CompanyData } from "../../atoms/CompanyReport/types";

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





interface StockNewsData {
    authors: string[]
    banner_image: string
    category_within_source: string
    overall_sentiment_label: string
    overall_sentiment_score: number
    source: string
    source_domain: string
    summary: string
    time_published: string //"20230415T175030"
    title: string
    topics: { topic: string, relvance_score: number }[]
    url: string
}

interface CompanyReportProps {
    companyData: CompanyData;
    articles: NewsArticle[];
}


const NewsGrid: React.FC<CompanyReportProps> = ({
    companyData,
    articles,
}) => {
    const cData = companyData
    return (
        <Row className="news-content">
            <ul>
                <li>
                    <h1><a href={cData?.website}>{cData?.name} ({cData?.symbol})</a></h1>
                    <img src={cData?.image} alt={cData?.name} />
                    <h2>CEO : {cData?.ceo} </h2>
                    <h2>Sector : {cData?.sector} </h2>
                    <h2>Industry : {cData?.industry} </h2>
                    <hr />
                    <h3>Range : {cData?.range} </h3>
                    <h3>Beta : {cData?.beta} </h3>
                    <h3>Volume Average : {cData?.volAvg} </h3>
                    <h3>Last dividend paid: {cData?.lastDiv}</h3>
                    <hr />
                    <h3>Website : {cData?.website} </h3>
                    <p>{cData?.description}</p>
                </li>
            </ul>
            {articles && <NewsGallery articles={articles} />}
        </Row>
    )
}


const { Title, Text } = Typography;
const { Meta } = Card;

interface NewsGalleryProps {
    articles: NewsArticle[];
}

const NewsGallery: React.FC<NewsGalleryProps> = ({ articles }) => {
    // Sort the articles by date
    const sortedArticles = articles?.slice()?.sort((a, b) => {
        return new Date(b.time_published).getTime() - new Date(a.time_published).getTime();
    });

    return (
        <div className="news-gallery">
            <h2>Top News</h2>
            <Row gutter={16}>
                {sortedArticles?.map((article, index) => (
                    <Col key={index} xs={24} sm={12} md={8} lg={6}>
                        <Card
                            hoverable
                            style={{ marginBottom: '16px' }}
                            cover={<img alt="banner_image" src={article.banner_image} />}
                            onClick={() => window.open(article.url, '_blank')}
                        >
                            <Meta
                                title={article.title}
                                description={
                                    <>
                                        <Text>{article.summary}</Text>
                                        <br />
                                        <Text type="secondary">{article.source}</Text>
                                        <br />
                                        <Text type="secondary">
                                            Topics:{' '}
                                            {article?.topics?.map((t, i) => (
                                                <span key={i}>{t.topic + (i < article.topics.length - 1 ? ', ' : '')}</span>
                                            ))}
                                        </Text>
                                    </>
                                }
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};


export default NewsGrid