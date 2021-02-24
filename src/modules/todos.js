// action type 
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// action creator
// todo データで使うID 
let nextId = 1; 
export const addTodo = text => ({
    type : ADD_TODO,
    todo : {
        id : nextId++,
        text : text // text
    }
});

export const toggleTodo = id => ({
    type : TOGGLE_TODO,
    id : id // id
});

// state 初期値のtypeは、全てのタイプが可能
// からの配列にオブジェクトを代入する
const initialState = [];

export default function todos( state=initialState, action ) {
    switch (action.type) {
        case ADD_TODO :
            return state.concat(action.todo);
        case TOGGLE_TODO :
            return state.map(
                todo =>
                    todo.id === action.id // idが同じなら
                    ? { ...todo, done: !todo.done } // done の値を　反転
                    : todo　
            );
        default:
            return state;
    }
}
