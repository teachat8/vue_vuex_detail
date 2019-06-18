import {SET_USER_CODE} from './mutationsTypes'

export default {
  set_user_code({commit}, id){
    commit('SET_USER_CODE', id)
  }
}
