import { configureStore } from "@reduxjs/toolkit";
import ShopsReducer from './ShopsSlice'

const store = configureStore({
    reducer: {
        shops: ShopsReducer,
    }
})

export default store;