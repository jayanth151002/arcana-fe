import { Modal } from "antd"
import { useCallback } from "react";
import { setIsModalOpen } from "../../../state/slices/activeEntities";
import { AppDispatch, RootState } from "../../../state/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { useQuery } from '@tanstack/react-query'

interface StockData {
    name: string,
    symbol: string,
    sector: string,
    lastDiv: number,
    range: string,
    beta: number,
    volAvg: number,
    industry: string,
    website: "https://www.envivabiomass.com",
    ceo: string,
    image: "https://financialmodelingprep.com/image-stock/EVA.png",
    description: "Enviva Inc. produces and sells utility-grade wood pellets. The company's products are used as a substitute for coal in power generation, and combined heat and power plants. It serves power generators in the United Kingdom, Europe, and Japan. The company was formerly known as Enviva Partners, LP. Enviva Inc. was incorporated in 2013 and is headquartered in Bethesda, Maryland."
}

const CompanyModal = () => {
    const dispatch: AppDispatch = useDispatch()
    const handleOk = useCallback(async () => {
        dispatch(setIsModalOpen(false))
    }, []);
    const open = useSelector((state: RootState) => state.activeEntities.isModalOpen)
    const handleCancel = () => {
        dispatch(setIsModalOpen(false))
    };
    const activeStockSymbol = useSelector((state: RootState) => state.activeEntities.activeCompanySymbol)
    const { isLoading, data } = useQuery({
        queryKey: ["stockData"],
        queryFn: async () => await axios.get(
            `api.arcana.coursepanel.in/stocks/${activeStockSymbol}`
        ),
    }) as { isLoading: boolean, data: StockData }

    return (
        data ? <Modal
            title={`${data.name} (${data.symbol})`}
            visible={open}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <img src={data?.image} alt={data?.name} />
            <h2>CEO : {data?.ceo} </h2>
            <h2>Sector : {data?.sector} </h2>
            <h2>Industry : {data?.industry} </h2>
            <hr />
            <h3>Range : {data?.range} </h3>
            <h3>Beta : {data?.beta} </h3>
            <h3>Volume Average : {data?.volAvg} </h3>
            <h3>Last dividend paid: {data?.lastDiv}</h3>
            <hr />
            <h3>Website : {data?.website} </h3>
            <p>{data.description}</p>

        </Modal> : <></>
    )
}

export default CompanyModal