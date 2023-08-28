import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/Userslice";

export default configureStore({
    reducer: {
        User: userSlice
}
});