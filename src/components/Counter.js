import React from 'react';

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
    const onChange = event => {
        // e.target.value の Typeは、文字列のため、数字に変換する
        onSetDiff(parseInt(event.target.value, 10));
    };
    return (
        <div>
            <h1>Counter ページ</h1>
            <h1>{ number }</h1>
            <div>
                <input 
                    type="number"
                    value={diff}
                    min="1"
                    onChange={onChange}
                />
                <button onClick={onIncrease}>増加</button>
                <button onClick={onDecrease}>減少</button>
            </div>
        </div>
    );
}

export default Counter;