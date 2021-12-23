import { combineReducers } from "../utils";

import auth from "./auth";
import common from "./common";

const reducers = combineReducers(auth, common);

export default reducers;
