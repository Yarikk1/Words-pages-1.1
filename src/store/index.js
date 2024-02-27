import { configureStore } from '@reduxjs/toolkit'

import wordsSlice from './ListWords'

export default configureStore({
  reducer: {
    "words": wordsSlice,
  }
})