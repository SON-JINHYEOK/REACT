//action 他のモジュールのActionと重複を防ぐために、モジュール名を入れる
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//初期 State宣言
const initialState = {
    number : 0,
    diff : 1
}
//action creator 
//export : 送るために付ける
export const setDiff = diff => ({ type:SET_DIFF , diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// reducer
// reducerは、export defaultで送る
export default function counter( state=initialState, action ) {
    switch (action.type) {
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            };
        case INCREASE:
            return {
                ...state,
                number : state.number + state.diff
            };
        case DECREASE:
            return {
                ...state,
                number : state.number - state.diff
            }
        default:
            return state;
    }
}
