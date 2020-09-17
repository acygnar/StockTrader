import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    founds: 10000,
    order:[],
    stocks:[
      {id: 1, name:'BMW' , price: 110},
      {id: 2, name:'Google' , price: 200},
      {id: 3, name:'Apple' , price: 250},
      {id: 4, name:'Twitter' , price: 8}
  ]
  },
  getters:{
    founds: state => {
      return state.founds
  },
    order: state =>{
      return state.order
    }
  },
  mutations: {
    buy:(state, order) =>{
        return state.founds = state.founds - order.quantity*order.price
  },
    sell:(state, order) =>{
      return state.founds = state.founds + order.quantity*order.price
    },
    load:(state, resultArray) =>{
      return state.order = resultArray.order,
      state.founds = resultArray.founds,
      state.stocks = resultArray.stocks
    },
  },
  actions: {
    buy:({commit}, order) =>{
      commit('buy', order)

  },
    sell:({commit}, order) =>{
    commit('sell', order)

},
  load:({commit}, resultArray) =>{
    commit('load',resultArray)
  }
  },
})
