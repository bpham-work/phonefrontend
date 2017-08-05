import { Actions } from '../actions';

import { UserModel } from '../models/user.model';

export const user = (state: UserModel, action: {actionType: string, payload: string}) => {
    switch (action.actionType) {
        case Actions.SET_USER:
            return action.payload;
    }
};