<template>
    <div/>
</template>

<script>
require('gun/lib/open.js')

export default {
    name: "GunDatabase",
    data: () => ({
        // matches: null
    }),
    created() {
        console.log("GunDB hook created")
        const matches = this.$gun.get('matches')
        matches.open((matches) => {
            this.$console.log("gun: matchs changed: " + JSON.stringify(matches))
            this.$store.commit('update_matches', matches)
            
        })
        
    }

}
</script>

<style scoped>
div {
    display: none;
}
</style>
