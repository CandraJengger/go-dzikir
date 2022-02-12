import { combineReducers } from 'redux';
import authReducer from './auth';
import quranReducer from './quran';

export const rootReducer = combineReducers({ auth: authReducer, quran: quranReducer });
