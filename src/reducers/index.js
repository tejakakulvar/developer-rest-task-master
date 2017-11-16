/* eslint-disable import/newline-after-import */
/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
/* Populated by react-webpack-redux:reducer */
import { combineReducers } from 'redux';
import auth from '../reducers/auth.js';
import account from '../reducers/account.js';
import projects from '../reducers/projects.js';
import productlist from './productlist';
import modal from './modal';
const reducers = {
    auth,
    account,
    projects,
    productlist,
    modal
};
const combined = combineReducers(reducers);
module.exports = combined;
