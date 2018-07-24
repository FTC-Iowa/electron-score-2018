import consoleComponent from './Console.vue'

export default{
    install (Vue, options) {
        Vue.prototype.$console = {
            commands: [],
            visible: false
        }

        Vue.mixin({
            beforeMount () {
                //register

            }
        })

        Vue.component('console', consoleComponent)
    }
}