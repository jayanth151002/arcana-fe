import { Layout } from 'antd';
import "./styles.css"
import Chart from '../../molecules/Chart';
import Search from '../../molecules/Search';
import Metrics from '../../molecules/Metrics';
import SearchUI from '../../molecules/SearchUI';

const { Sider, Content } = Layout;

const ChartsGrid = () => {
    return (
        <Layout>
            <Layout>
                <Content className="content">
                    <Chart />
                </Content>
                <Sider className='sider'>
                    <SearchUI />
                </Sider>
            </Layout>
            <Content className="content" >
                <Metrics />
            </Content>
        </Layout>
    )
}

export default ChartsGrid