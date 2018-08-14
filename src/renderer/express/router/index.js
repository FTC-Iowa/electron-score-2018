import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/score',
            name: 'score-page',
            component: require('@/express/ScorePage').default
        }
    ]
})