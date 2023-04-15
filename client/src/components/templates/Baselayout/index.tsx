import { Layout } from 'antd';
import "./styles.css"
const { Header, Content, Footer } = Layout;


interface BaseLayoutProps {
    center: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ center }) => {
    return (
        <Layout className={'ant-layout-has-sider'} >
            <Layout className="site-layout">
                <Header className="site-layout-background header" style={{ padding: 0 }} >
                    <h1>Copilot for Investors</h1>
                </Header>
                <Content className='content'>
                    {center}
                </Content>
                <Footer className='footer'>
                    Footer
                </Footer>
            </Layout>
        </Layout>
    );
};

export default BaseLayout;
