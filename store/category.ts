import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface Category {
  id: string
  name: string
  created_at?: string
}

interface CategoriesState {
  categories: Category[]
}

const initialState: CategoriesState = {
  categories: []
}

const category = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload
    }
  }
})

export const { setCategories } = category.actions
export default category.reducer
