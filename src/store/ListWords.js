import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [
    'автомобиль',
    'банан',
    'велосипед',
    'гитара',
    'дом',
    'еж',
    'ёлка',
    'жираф',
    'зонт',
    'икра',
    'йод',
    'книга',
    'лампа',
    'молоко',
    'носок',
    'облако',
    'печенье',
    'рюкзак',
    'собака',
    'телефон',
    'утка',
    'фонарь',
    'хлеб',
    'цветок',
    'шапка',
    'щит',
    'электроника',
    'юбка',
    'яблоко',
    'ящик',
  ],
}

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addWords(state, action) {
      const result = action.payload.name
      state.data.unshift(result)
    },
    delWords(state, action) {
      state.data = state.data.filter(
        (el) => el.toLowerCase() !== action.payload.toLowerCase()
      )
    },
    editWords(state, action) {
      const { oldWord, newWord } = action.payload;
      state.data = state.data.map(word =>
        word.toLowerCase() === oldWord.toLowerCase() ? newWord : word
      );
    }
    
  },
})

export const { addWords, delWords, editWords } = wordsSlice.actions

export default wordsSlice.reducer
