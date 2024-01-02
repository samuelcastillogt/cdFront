import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/principal.slice'
import enviromentSlice from './slices/enviroment.slice'
import adsSlice from './slices/ads.slice'
import userSlice from './slices/user.slice'
import BLOG  from './slices/blog.slice'
export const store = configureStore({
  reducer: {
    principal: counterReducer,
    enviroment: enviromentSlice,
    ads: adsSlice,
    user: userSlice,
    blog: BLOG
  },
})