import NewsGrid from "../../components/organisms/NewsGrid"
import BaseLayout from "../../components/templates/Baselayout"

const NewsPage = () => {
    return (
        <BaseLayout center={<NewsGrid />} />
    )
}

export default NewsPage