import { Button } from "antd"
import NewsGrid from "../../components/organisms/NewsGrid"
import BaseLayout from "../../components/templates/Baselayout"
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfDocument from "../../components/organisms/PDFDocument";

const NewsPage = () => {
    return (
        <>
            <BaseLayout center={<NewsGrid />} />
            {/* Create an ant design button below */}
            <PDFDownloadLink
                document={<PdfDocument data={"i am data"} />}
                fileName="exported-document.pdf"
            >
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Download PDF'
                }
            </PDFDownloadLink>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

export default NewsPage