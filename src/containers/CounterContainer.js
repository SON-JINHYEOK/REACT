import React from 'react';
import Counter from '../components/Counter';
import Home from '../components/Home';

import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
    // useSelectorは、Storeのstateを照会する Hook
    // stateの値は、store.getState() 呼び出した結果と同じ
    const { number, diff } = useSelector(state => ({
        number : state.counter.number,
        diff : state.counter.diff
    }));

    // useDispatchは、 Reduxでdispatchを使える Hook
    const dispatch = useDispatch();
    // Actionを Dispatchする function
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <>
            <Counter 
            // State
            number={ number }
            diff={ diff }
            // ActionをDispatchするfunctionを propsする
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
            />
        </>
    );
}

export default CounterContainer;