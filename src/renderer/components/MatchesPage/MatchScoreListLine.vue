<template>
    <md-list-item v-if='match' @click="onClick()" :class="activeClasses">
        <!-- {{this.match}} -->
        <md-checkbox v-model='match.saved' disabled :trueValue='match.saved'/>
        <div class="md-list-item-text">
            <span>{{match.name}}</span>
            <span v-if='match.saved'>{{matchWinnerColor}} {{match.saved.red}}-{{match.saved.blue}}</span>
        </div>
        <md-button class="md-icon-button md-list-action md-dense" @click="setVisibility()">
            <md-icon>{{match.visible ? 'visibility' : 'visibility_off'}}</md-icon>
        </md-button>
    </md-list-item>
</template>

<script>
export default {
    name: 'MatchScoreListLine',
    props: ['id','active'],
    data: () => ({
        // match: {}
    }),
    // gunfire: {
    //     match: 'matches/$id'
    // },
    computed: {
        matchWinnerColor() {
            if (this.match.saved.red > this.match.saved.blue) {
                return 'Red';
            } else if (this.match.saved.blue > this.match.saved.red) {
                return 'Blue';
            } else {
                return 'Tie';
            }
        },
        match() {
            console.log('list id=', this.id)
            return this.$store.getters.get_match(this.id);
        },
        activeClasses() {
            return {
                active: this.active
            }
        },
        isSaved() {
            return match && match.saved && match.saved.saved
        }
    },
    methods: {
        onClick() {
            this.$console.log('Match ' + this.match.name + ' selected')
            this.$emit('SelectMatch', this.match.id)
        },
        setVisibility(value) {
            this.$gun.get('matches').get(this.id).put({visible: !this.match.visible})
        }
    }
}
</script>

<style scoped>
.active {
    background-color: #ccc;
}
</style>
