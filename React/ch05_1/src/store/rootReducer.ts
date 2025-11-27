import type { Actions } from './actions'
import type { AppState } from './AppState'

const initalAppState = {
  today: new Date()
}

export const rootReducer = (state: AppState = initalAppState, action: Actions) => {
  switch (action.type) {
    case 'setToday': {
      return { ...state, today: action.today }
    }
  }
  return state // 필수
}
