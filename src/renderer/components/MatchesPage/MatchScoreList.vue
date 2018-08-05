<template>
    <md-list>
        <md-list-item>
            <span class="md-list-item-text header">Saved</span>
            <span class="md-list-item-text header">Match</span>
            <span class="header">Visible</span>
        </md-list-item>
        <!-- <match-score-list-line v-for="match in $store.getters.get_match_list" :key="match.id" :id="match.id" @SelectMatch="SwitchMatch($event)" :active="activeMatchId===match.id"/> -->
        <match-score-list-line v-for="match in matchList" :key="match.id" :id="match.id" @SelectMatch="SwitchMatch($event)" :active="activeMatchId===match.id"/>
    </md-list>
</template>

<script>
import MatchScoreListLine from './MatchScoreListLine'

export default {
    name: "MatchScoreList",
    components: {MatchScoreListLine},
    props: ["activeMatchId"],
    data: () => ({
    }),
    methods: {
        SwitchMatch(id) {
            this.$console.log("Switch active match to $" + id)
            this.$emit('SelectMatch', id)
        }
    },
    computed: {
        matchList() {
            var listObj = this.$store.getters.get_match_list
            var rv = [];
            for ( var i in listObj ) {
                rv.push({id: i, number: listObj[i].number})
            }
            rv.sort((a, b) => {
                if ( a.number < b.number ) {
                    return -1;
                } else if (a.number > b.number ) {
                    return 1;
                } else {
                    return 0;
                }
            });
            return rv;
        }
    }

}
</script>

<style scoped>
.header {
    font-weight: bold;
    color: black !important;
}

</style>
