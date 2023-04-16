
import { useEffect, useRef, useState } from 'react';
import { useSearchBox, UseSearchBoxProps } from 'react-instantsearch-hooks';
import { useSelector } from 'react-redux';
import './styles.css'
import { setActiveSearchString } from '../../../state/slices/activeEntities';
import { AppDispatch } from '../../../state/store';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';

export type SearchBoxProps = UseSearchBoxProps;

export function SearchBox(props: SearchBoxProps) {
    const { query, refine } = useSearchBox(props);
    const [inputValue, setInputValue] = useState(query);
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch: AppDispatch = useDispatch()

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        event.stopPropagation();

        if (inputRef.current) {
            inputRef.current.blur();
        }
    }

    function handleReset(event: React.FormEvent) {
        event.preventDefault();
        event.stopPropagation();

        setInputValue('');

        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    // Track when the value coming from the React state changes to synchronize
    // it with InstantSearch.
    useEffect(() => {
        if (query !== inputValue) {
            refine(inputValue);
        }
    }, [inputValue, refine]);

    // Track when the InstantSearch query changes to synchronize it with
    // the React state.
    useEffect(() => {
        // Bypass the state update if the input is focused to avoid concurrent
        // updates when typing.
        if (document.activeElement !== inputRef.current && query !== inputValue) {
            setInputValue(query);
        }
    }, [query]);

    return (
        <div className="searchBoxContainer">
            <div className="ais-SearchBox">
                <form
                    action=""
                    className="ais-SearchBox-form"
                    noValidate
                    onSubmit={handleSubmit}
                    onReset={handleReset}
                >
                    <Input.Search
                        // ref={inputRef}
                        className={`ais-SearchBox-input searchBoxInput `}
                        autoComplete="on"
                        autoCorrect="on"
                        autoCapitalize="on"
                        placeholder={"Search for a stock 🔍"}
                        spellCheck={false}
                        maxLength={512}
                        type="search"
                        value={inputValue}
                        onChange={(event) => {
                            dispatch(setActiveSearchString(event.currentTarget.value));
                            setInputValue(event.currentTarget.value)
                        }}
                    />
                </form>
            </div>
        </div>
    );
}
