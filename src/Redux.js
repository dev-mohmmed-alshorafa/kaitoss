import { configureStore, createSlice } from '@reduxjs/toolkit'
const countSlice = createSlice({
  name: 'counter',
  initialState: {
    user: null,
    isLoginLoading: false,
    contents: [],
    sample: [],
    keys: [],
    activeItemMenu: 0,
    lng: 'ar',
    update: false,
    page:0
  },
  reducers: {
    login(state, action) {
      state.user = action.payload
    },
    setIsLoginLoading(state, action) {
      state.isLoginLoading = action.payload
    },
    setContents(state, action) {
      state.contents = action.payload
    },
    setSample(state, action) {
      state.sample = action.payload
    },
    setKeys(state, action) {
      state.keys = action.payload
    },
    setActiveItemMenu(state, action) {
      state.activeItemMenu = action.payload
    },
    setLng(state, action) {
      state.lng = action.payload
    },
    setUpdate(state, action) {
      state.update = !state.update
    },setPage(state, action) {
      state.page = action.payload
    },
  },
})
export const actions = countSlice.actions
const store = configureStore({
  reducer: countSlice.reducer,
})
export default store
