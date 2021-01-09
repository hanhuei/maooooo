import axios from '@/utils/axios'
import { joinUrl } from '@/utils/index.js'
import { 
  fetchQr, 
  fetchGoodsByCode, 
  fetchDataByCode, 
  fetchExchangeGoods, 
  fetchMembership, 
  fetchActivityDetail, 
  fetchLuckyCoinValue, 
  fetchLuckyCoinTop,
  fetchLottery,
  fetUserInfo,
  fetUserActityRelation,
  fetchLuckyCardList,
  fetchLuckyCoinList,
  fetchLuckyRecord,
  fetchLuckySendCoin
}from '@/api/index'

const activityEndData = +new Date('2020/12/05 00:00:00')
const nowData = +new Date()
const lotteryTimer = Math.ceil((activityEndData - nowData) / 1000 / 60 / 60 / 24)

const state = {
  arcodeUserRank: undefined,
  cardList: [],
  cardNum: 0,
  userId: null,
  userList: [],
  userNum: 0,
  activityCode: 'arcade',
  lotteryTimer
}

const getters = {
  getToken: state => {
    return state.token
  }
}

const actions = {
  fetchQr({commit}, payload) {
    return fetchQr(payload)
  },
  fetchGoodsByCode({commit}, payload) {
    return fetchGoodsByCode(payload)
  },
  fetchDataByCode({commit, state}, payload) {
    return fetchDataByCode(payload).then(res => {
      const users = res.data.userActivityRelationList.map(item => {
        item.nickName = item.fromUserInfo.nickName
        item.headimgurl = joinUrl(item.fromUserInfo.headimgurl)
        return item
      })
      commit('SET_USERS', users)
    })
  },
  fetchExchangeGoods({commit}, payload) {
    return fetchExchangeGoods(payload)
  },
  fetchMembership({commit}, payload) {
    return fetchMembership(payload)
  },
  fetchActivityDetail({commit}, payload) {
    return fetchActivityDetail(payload)
  },
  fetchLuckyCoinValue({commit}, payload) {
    return fetchLuckyCoinValue(payload).then(res => {
      commit('SET_RANK', res.data.rank)
      return res
    })
  },
  fetchLuckyCoinTop({commit}, payload) {
    return fetchLuckyCoinTop(payload)
  },
  fetchLottery({commit}, payload) {
    return fetchLottery(payload)
  },
  fetUserInfo({commit}, payload) {
    return fetUserInfo(payload)
  },
  fetUserActityRelation({commit}, payload) {
    return fetUserActityRelation(payload)
  },
  fetUserActityRelation({commit}, payload) {
    return fetUserActityRelation(payload)
  },
  fetchLuckyCoinList({commit}, payload) {
    return fetchLuckyCoinList(payload)
  },
  fetchLuckyCardList({commit}, payload) {
    return fetchLuckyCardList(payload).then(res => {      
      commit('SET_CARD', res.data.luckyCardList)
    })
  },
  fetchLuckyRecord({commit}, payload) {    
    return axios.get('/api/admin/prizeRecordList/v1',{
      params: payload
    })
  },
  fetchLuckyMyRecord({commit}, payload) {    
    return axios.get('/api/prizeRecordList/v1/mine',{
      params: payload
    })
  },
  fetchLuckySendCoin({commit}, payload) {
    return fetchLuckySendCoin(payload)
  }
}

const mutations = {
  SET_RANK(state, data) {
    state.arcodeUserRank = data
  },
  SET_CARD(state, data) {    
    state.cardList = data
    state.cardNum = data.length || 0
  },
  SET_USERS(state, data) {
    console.log(data,'sssss');
    
    state.userList = data
    state.userNum = data.length || 0
  },
  SET_USERID(state, data){    
    state.userId = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}