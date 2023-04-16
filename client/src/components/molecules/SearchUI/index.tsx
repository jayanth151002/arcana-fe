import React from 'react'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web';
import './styles.css'

const searchClient = algoliasearch(
    "AB57CPNYCS",
    "b9479b4210d1a59ca9be2ad35ad194b3"
);

function Hit({ hit }: any) {
    console.log({ hit })
    return (
        <article>
            {/* <img src={hit.image} alt={hit.name} /> */}
            {/* <p>{hit.categories[0]}</p> */}
            <p>{hit.name}</p>
            {/* <p>${hit.price}</p> */}
        </article>
    );
}

const SearchUI = () => {
    return (
        <InstantSearch searchClient={searchClient} indexName={"stock-metadata"}>
            <div>
                <SearchBox />
                <br />
                <Hits hitComponent={Hit} />
            </div>
        </InstantSearch>
    )
}

export default SearchUI
