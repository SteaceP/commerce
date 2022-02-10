import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middleware = [];

if (process.env.NODE_ENV === "development") middleware.push(logger);
const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(rootReducer, composedEnhancer);
export const persistor = persistStore(store);
