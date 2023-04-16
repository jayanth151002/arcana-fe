import "./styles.css"
import { Col, Row, FloatButton, Drawer } from 'antd';
import NewsContent from '../../molecules/NewsContent';
import { WechatOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { setIsSliderOpen } from "../../../state/slices/activeEntities";

const NewsGrid = () => {

    const isSliderOpen = useAppSelector((state) => state.activeEntities.isSliderOpen) as boolean
    const dispatch = useAppDispatch();
    const handleSlider = () => {
        dispatch(setIsSliderOpen({ isSliderOpen: !isSliderOpen }))
    }
    return (
        <Row className="news-content">

            <Col span={24}>
                <NewsContent />
            </Col>
            {/* <Col span={8}>
                <FloatButton icon={<WechatOutlined />} type="primary" style={{ right: 40, marginBottom: "4rem" }} onClick={handleSlider} badge={{ count: "!" }} />
                <Drawer title="InvestorGPT" placement="right" onClose={handleSlider} open={isSliderOpen} size="large">
                    <p>InvestorGPT</p>
                </Drawer>
            </Col> */}
        </Row>
    )
}

export default NewsGrid