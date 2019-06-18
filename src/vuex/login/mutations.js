import {SET_USER_CODE} from './mutationsTypes'

export default {
  [SET_USER_CODE](state, code){
    state.userCode = code
  }
}
