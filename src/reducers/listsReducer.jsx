import { CONSTANTS } from "../actions";
let ListId = 2;
let cardId = 5;

const initialState = [
    {
        title: "Last episode",
        id: `list-${0}`,
        cards:
            [
                {
                    id: `card-${0}`,
                    text: "we have created a static list"
                },
                {
                    id: `card-${1}`,
                    text: "we used a mix between material ui react and styled components"
                }
            ]
    },
    {
        title: "This episode",
        id: `list-${1}`,
        cards:
            [
                {
                    id: `card-${2}`,
                    text: "we will create our fist reducer"
                },
                {
                    id: `card-${3}`,
                    text: "and render many cards on our list with static data"
                },
                {
                    id: `card-${4}`,
                    text: "we will also make some changes"
                }
            ]
    }
];


const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${ListId}`
            };
            ListId += 1;
            return [...state, newList];

        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,
                id: `list-${cardId}`
            }
            cardId += 1;

            const newState = state.map(list => {
                if (list.id === action.payload.ListId) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                }
                else {
                    return list;
                }
            });

            return newState;
        }

        case CONSTANTS.DRAG_HAPPENED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId,
                type
            } = action.payload;

            if(type==="list"){
                const list = newState.splice(droppableIndexStart, 1);
                newState.splice(droppableIndexEnd,0,...list)
                return newState
            }

            const newState = [...state];
            if (droppableIdStart === droppableIdEnd) {
                const list = state.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1)
                list.cards.splice(droppableIndexEnd, 0, ...card)
            }
            if(droppableIdStart!=droppableIdEnd){
                const listStart = state.find(list=>  droppableIdStart === list.id)
                const card = listStart.cards.splice(droppableIndexStart, 1)
                const listEnd = state.find(list => droppableIdEnd === list.id)
                listEnd.cards.splice(droppableIndexEnd, 0, ...card)
            }


        default:
            return state;
    }
};
export default listsReducer;