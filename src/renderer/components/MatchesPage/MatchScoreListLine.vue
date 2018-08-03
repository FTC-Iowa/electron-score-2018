<template>
    <md-list-item v-if='id' @click="onClick()" :class="activeClasses">
        <md-checkbox v-model='match.saved' disabled/>
        <div class="md-list-item-text">
            <span>{{match.name}}</span>
            <span v-if='match.saved'>{{matchWinnerColor}} {{match.scores.red.total}}-{{match.scores.blue.total}}</span>
        </div>
        <md-button class="md-icon-button md-list-action md-dense">
            <md-icon>{{match.visible ? 'visibility' : 'visibility_off'}}</md-icon>
        </md-button>
    </md-list-item>
</template>

<script>
export default {
    name: 'MatchScoreListLine',
    props: ['id','active'],
    data: () => ({
        // match: {
        //         id: 1,
        //         number: 1,
        //         name: 'Q-1',
        //         saved: true,
        //         visible: true,
        //         teams: {
        //             red: [
        //                 {
        //                     number:1111
        //                 },{
        //                     number:2222,
        //                     surogate: true
        //                 }
        //             ],
        //             blue: [
        //                 {
        //                     number:5555
        //                 },{
        //                     number:8888
        //                 }
        //             ],
        //         },
        //         scores: {
        //             red: {
        //                 total: 75,
        //                 auto: 10,
        //                 endgame: 0,
        //                 penalties: 15,
        //                 teleop: 50
        //             },
        //             blue: {
        //                 total: 80,
        //                 auto: 20,
        //                 endgame: 20,
        //                 penalites: 20,
        //                 teleop: 20
        //             }
        //         }
        //     }
    }),
    computed: {
        matchWinnerColor() {
            if (this.match.scores.red.total > this.match.scores.blue.total) {
                return 'Red';
            } else if (this.match.scores.blue.total > this.match.scores.red.total) {
                return 'Blue';
            } else {
                return 'Tie';
            }
        },
        match() {
            return this.$store.getters.get_match(this.id);
        },
        activeClasses() {
            return {
                active: this.active
            }
        }
    },
    methods: {
        onClick() {
            this.$console.log('Match ' + this.match.name + ' selected')
            this.$emit('SelectMatch', this.match.id)
        }
    }
}
</script>

<style scoped>
.active {
    background-color: #ccc;
}
</style>
