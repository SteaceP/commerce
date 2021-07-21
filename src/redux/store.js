import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./root-reducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(logger));

export const store = createStore(rootReducer, composedEnhancer);
export const persistor = persistStore(store);
