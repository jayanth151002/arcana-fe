import React from 'react';
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image,
    Link,
} from '@react-pdf/renderer';
import { CompanyData, NewsArticle, NumbersData } from './types';

const styles = StyleSheet.create({
    page: {
        padding: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    section: {
        marginBottom: 20,
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
    },
    newsTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    newsText: {
        fontSize: 10,
        marginBottom: 5,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
});

interface CompanyReportProps {
    companyData: CompanyData;
    articles: NewsArticle[];
    numbers: NumbersData;
}

const CompanyReport: React.FC<CompanyReportProps> = ({
    companyData,
    articles,
    numbers
}) => {
    return (
        companyData && (<Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.title}>{companyData.name}</Text>
                    <Image style={styles.image} src={companyData.image} />
                    <Text style={styles.text}>Symbol: {companyData.symbol}</Text>
                    <Text style={styles.text}>Sector: {companyData.sector}</Text>
                    <Text style={styles.text}>Industry: {companyData.industry}</Text>
                    <Text style={styles.text}>CEO: {companyData.ceo}</Text>
                    <hr />
                    <Text style={styles.text}>
                        Website:{' '}
                        <Link src={companyData.website}>{companyData.website}</Link>
                    </Text>
                    <Text style={styles.text}>Description: {companyData.description}</Text>
                    <hr />
                    <br />
                    <Text style={styles.text}>RISKS</Text>
                    <Text style={styles.text}>Volatility Q1: {numbers.volatility_q1}</Text>
                    <Text style={styles.text}>Volatility Q2: {numbers.volatility_q2}</Text>
                    <Text style={styles.text}>Volatility Q3: {numbers.volatility_q3}</Text>
                    <Text style={styles.text}>Volatility Predicted for upcoming quarter Q4: {numbers.volatility_q4}</Text>
                    <br />
                    <hr />
                    <Text style={styles.text}>RETURNS</Text>
                    <Text style={styles.text}>Predicted return: {numbers.correlation_q4}</Text>
                    <Text style={styles.text}>Latest Correlation: {numbers.correlation_q3}</Text>
                    <hr />
                    <br />
                </View>

                <View style={styles.section}>
                    <Text style={styles.subtitle}>News Articles</Text>
                    {articles?.map((article, index) => (
                        <View key={index} style={styles.section}>
                            <Text style={styles.newsTitle}>{article.title}</Text>
                            <Text style={styles.newsText}>{article.summary}</Text>
                            <Text style={styles.newsText}>
                                Source: {article.source} ({article.source_domain})
                            </Text>
                            <Text style={styles.newsText}>
                                Published:{' '}
                                {new Date(article.time_published).toLocaleString()}
                            </Text>
                            <Text style={styles.newsText}>
                                URL:{' '}
                                <Link src={article.url}>
                                    {article.url.length > 50
                                        ? article.url.slice(0, 50) + '...'
                                        : article.url}
                                </Link>
                            </Text>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>)
    );
};

export default CompanyReport;
