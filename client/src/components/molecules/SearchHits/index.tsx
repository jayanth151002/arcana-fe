import { Button, Table } from 'antd';
import { useHits, UseHitsProps } from 'react-instantsearch-hooks';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { RootState } from '../../../state/store';
import { setIndices } from '../../../state/slices/activeEntities';

interface StockRowProps {
    key: string;
    name: string;
    symbol: string;
    sector: string;
    industry: string;
    ceo: string;
    description: string
}

const SearchHits = () => {
    const activeIndices = useAppSelector((state: RootState) => state.activeEntities.indices)
    const dispatch = useAppDispatch();

    const handleClick = (index: string) => {
        if (index !== "Benchmark") {
            dispatch(setIndices({ index: index }))
        }
    }
    const { hits } = useHits() as unknown as { hits: StockRowProps[] };
    // JAYANTH LOOK AT THESE HITS
    console.log(hits)
    return (<>
        {hits.map((hit: any) => (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <span>
                    {hit.name} <span></span>
                </span>
                <span>
                    <Button>
                        <span style={{ fontWeight: "700" }} onClick={() => handleClick(hit.symbol)}>
                            {activeIndices?.includes(hit.name) ? "✅" : "+"}
                        </span>
                    </Button>
                </span>
            </div>
        ))}
    </>)
}

export default SearchHits;