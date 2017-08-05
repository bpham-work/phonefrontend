import { Actions } from '../actions';

export const authToken = (state: string = "1", action: {actionType: string, payload: string}) => {
    switch (action.actionType) {
        case Actions.SET_AUTH_TOKEN:
            return action.payload;
    }
};