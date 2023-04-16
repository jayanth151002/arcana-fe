import { Button } from "antd"
import NewsGrid from "../../components/organisms/NewsGrid"
import BaseLayout from "../../components/templates/Baselayout"
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfDocument from "../../components/organisms/PDFDocument";
import './styles.css'
import { CompanyData, NewsArticle } from "../../components/atoms/CompanyReport/types";
import { AppDispatch, RootState } from "../../state/store";
import { useSelector } from "react-redux";
import CompanyReport from "../../components/atoms/CompanyReport";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { StockData } from "../../components/organisms/CompanyModal";
import { setDataDumpArticles, setDataDumpComp } from "../../state/slices/activeEntities";
import { useDispatch } from "react-redux";


interface DownloadCompanyReportProps {
    companyData: CompanyData;
    articles: NewsArticle[];
}


const NewsPage = () => {
    const activeStockSymbol = useSelector((state: RootState) => state.activeEntities.activeCompanySymbol)
    const { data: stockNewsData } = useQuery({
        queryKey: ["stockNewsData"],
        queryFn: async () => await axios.get(
            `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${activeStockSymbol}&apikey=SLLKCQL1JYMRS300`
        ),
    }) as { isLoading: boolean, data: any }
    const { data: companyData } = useQuery({
        queryKey: ["stockData"],
        queryFn: async () => {
            return await axios.get(
                `https://api.arcana.coursepanel.in/stocks/${activeStockSymbol}`
            )
        },
    }) as { isLoading: boolean, data: StockData }
    const cData = (companyData as any)?.data
    const sData = (stockNewsData as any)?.data
    const articles = sData?.feed?.slice(0, 10)
    const dispatch: AppDispatch = useDispatch()
    if (cData) dispatch(setDataDumpComp(cData));
    if (articles) dispatch(setDataDumpArticles(articles));
    const numbers = useSelector((state: RootState) => state.activeEntities.dataDump.numbers)
    return (
        <>
            <BaseLayout center={<NewsGrid companyData={cData} articles={articles} />} />
            {/* Create an ant design button below */}
            <div className="float-button">
                <PDFDownloadLink
                    document={<CompanyReport numbers={numbers} companyData={cData} articles={articles} />}
                    fileName={`${cData?.symbol}_report.pdf`}
                >
                    {({ blob, url, loading, error }) =>
                        loading ? 'Loading document...' : 'Download Company Report'
                    }
                </PDFDownloadLink>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

export default NewsPage