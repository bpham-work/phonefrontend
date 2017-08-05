import { combineReducers } from '@ngrx/store';

import { authToken } from './reducers/authtoken.reducer';
import { user } from './reducers/user.reducer';

export const rootReducers = combineReducers({
    authToken: authToken,
    user: user
});