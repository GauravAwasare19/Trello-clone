import { CONSTANTS } from "../actions"
export const addCard = (ListId ,text) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: {text, ListId}
    };
}