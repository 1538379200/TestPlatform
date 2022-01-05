import {createStore} from 'vuex'

export default createStore({
    actions:{

    },
    mutations:{
        pushkeepaliveList:(state,val)=>{
            state.keepaliveList.push(val)
        },
        removekeepaliveList:(state,val)=>{
            for (let i=0;i<state.keepaliveList.length;i++){
                let valIndex = state.keepaliveList.indexOf(val)
                state.keepaliveList.splice(valIndex,1)
            }
        }
    },
    state:{
        keepaliveList:[]
    },
})