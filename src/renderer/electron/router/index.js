import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/teams',
      name: 'teams-page',
      component: require('@/components/TeamsPage').default
    },
    {
      path: '/inspections',
      name: 'inspections-page',
      component: require('@/components/InspectionsPage').default
    },
    {
      path: '/matches',
      name: 'matches-page',
      component: require('@/components/MatchesPage').default
    },
    {
      path: '/judging',
      name: 'judging-page',
      component: require('@/components/JudgingPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
