import React, {useEffect, useState} from 'react';
import {
    useAppDispatch,
    useAppSelector,
} from '../store/hooks';
import {
    changeQuote,
    getKanyeQuote, KanyeState,
    selectKanye,
} from '../store/features/kanyeSlice';

const Status = () => {
    const {
        error,
        pending,
    } = useAppSelector(selectKanye);
    return error ? <>some shit error happened</> : pending ? <>loading</> : <>done</>
}

const Input = () => {
    const {
        data,
        pending,
    } = useAppSelector(selectKanye);
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(data.quote);
    }, [data.quote])

    return <div>
        <input disabled={pending} type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <button onClick={() => dispatch(changeQuote(value))} type='submit'>change</button>
    </div>
}

const kanye: React.FC = () => {
    const dispatch = useAppDispatch();
    const {
        data,
        pending,
        error,
    } = useAppSelector(selectKanye);

    console.log({data, pending, error})

    return (
        <div>
            <h2>Generate random Kanye West quote</h2>
            <h1><Status/></h1>
            {data && <p>{data.quote}</p>}
            <button onClick={() => dispatch(getKanyeQuote())} disabled={pending}>
                Generate Kanye Quote
            </button>

            <Input/>
        </div>
    );
};

export default kanye;