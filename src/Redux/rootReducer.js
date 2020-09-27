import { combineReducers } from 'redux'
import FeaturedDevelopers from './FeaturedDevelopers/reducer'

const rootReducer = combineReducers({
  featureDevelopers: FeaturedDevelopers,
})

export default rootReducer
