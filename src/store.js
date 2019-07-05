import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiDomain: 'https://www.boredapi.com/',
    apiMethod: 'api/activity/',
    currentMiniTestActivity: {},
    isFirstTimeDoMiniTest: true,
    miniTestNum: 10,
    miniTestActivitiesCollection: [],
    findActNum: 8,
    findActActivitiesCollection: [],
    categories: [
      {
        text: '所有類別',
        value: ''  
      },
      {
          text: '教育',
          value: 'education'  
      },
      {
          text: '消遣',
          value: 'recreational'    
      },
      {
          text: '社交',
          value: 'social'    
      },
      {
          text: '手作',
          value: 'diy'    
      },
      {
          text: '慈善',
          value: 'charity'    
      },
      {
          text: '烹飪',
          value: 'cooking'    
      },
      {
          text: '休閒',
          value: 'relaxation'    
      },
      {
          text: '音樂',
          value: 'music'    
      },
      {
          text: '瞎忙',
          value: 'busywork'    
      }
    ]
  },
  mutations: {
    RESET_FIND_ACT_ACTIVITIES_COLLECTION: state => {
      state.findActActivitiesCollection.length = 0
    },
    UPDATE_FIND_ACT_ACTIVITIES_COLLECTION: (state, payload) => {
      state.findActActivitiesCollection = [...state.findActActivitiesCollection, ...payload.activities]
    },
    SORT_FIND_ACT_ACTIVITIES_COLLECTION: (state, payload) => {
      const sortBy = payload.sortBy
      const powerBy = payload.powerBy
      // 閉包inner的attr
      let cb = powerBy === 'up'? attr =>((a, b) => (a[attr] >= b[attr] ? 1: -1)) : attr =>((a, b) => (a[attr] <= b[attr] ? 1: -1))
      state.findActActivitiesCollection.sort(cb(sortBy))
    },
    NOT_FIRST_TIME_DO_MINI_TEST: state => {
      state.isFirstTimeDoMiniTest = false
    },
    UPDATE_CURRENT_MINI_TEST_ACTIVITY: (state, payload) => {
      state.currentMiniTestActivity = {...payload.activity}
    },
    RESET_MINI_TEST_ACTIVITIES_COLLECTION: state => {
      state.miniTestActivitiesCollection.length = 0
    },
    PUSH_MINI_TEST_ACTIVITIES_COLLECTION: (state, payload) => {
      state.miniTestActivitiesCollection.push(payload.activity)
    }
  },
  actions: {
    requestRandomActivity({ commit }) {
      axios.get(this.state.apiDomain + this.state.apiMethod)
        .then(res => {
          let activity = res.data
          commit('UPDATE_CURRENT_MINI_TEST_ACTIVITY', { activity })
        })
    },
    requestFindActActivitiesCollection({ commit }, condition) {
      /*
       ISSUE: 
       尷尬的是bored.api每次都只能請求一筆活動紀錄
       耗費太多時間(3.x秒)在request上破壞使用者體驗

       SOLUTION:
       1.發ISSUE給bored.api製作者請他加開多筆活動的api(速度大幅下降,最佳解)
       2.新增轉圈圈動畫過場(速度不變,僅使客戶感覺至少網頁有在work)
       3.減少request數量(速度微幅下降, 非最佳解)
       */
      let reqList = new Array(this.state.findActNum)
      reqList.fill({
        url: this.state.apiDomain + this.state.apiMethod,
        params: condition
      })
      axios.all(
          reqList.map(req => axios.get(req.url, {
            params: req.params
          }))
        )
        .then(axios.spread((...allRes) => {
            let rawActs = allRes.map(res => res.data)
            // 刪除條件不滿足而回傳的無意義object
            rawActs = rawActs.filter(activity => !activity.error)
            // 刪除重複key的object
            let uniKey = []
            let uniActs = []
            rawActs.forEach(activity => {
              if(uniKey.indexOf(activity.key) <= -1){
                uniKey.push(activity.key)
                uniActs.push(activity)
              }
            })
            commit('UPDATE_FIND_ACT_ACTIVITIES_COLLECTION', { activities: uniActs })
        }))
        .catch(err => alert(err))
    }
  }
})
