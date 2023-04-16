import React from 'react'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits } from 'react-instantsearch-hooks-web';
import SearchHits from '../SearchHits';
import './styles.css'
import { SearchBox } from '../../atoms/SearchBox';

const searchClient = algoliasearch(
    "AB57CPNYCS",
    "b9479b4210d1a59ca9be2ad35ad194b3"
);

const SearchUI = () => {
    return (
        <InstantSearch searchClient={searchClient} indexName={"stock-metadata"}>
            <div className="search-container" >
                <SearchBox />
                <SearchHits />
            </div>
        </InstantSearch>
    )
}

export default SearchUI
