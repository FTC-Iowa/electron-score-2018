<template>
    <div class="score-page">
        <md-toolbar class="md-dense">
            <md-button class="md-icon-button" @click="prevMatch()">
                <md-icon>chevron_left</md-icon>
            </md-button>
            <h3 class="md-title" style="flex:1;margin:0;text-align:center;">Q-1</h3>
            <md-button class="md-icon-button" @click="nextMatch()">
                <md-icon>chevron_right</md-icon>
            </md-button>
        </md-toolbar>
        <match-score-card teamcolor="red" matchid="match_q_1"/>
        <md-toolbar class="md-dense color-button-holder">
            <md-button class="color-button red-button">
                Red
            </md-button>
            <md-button class="color-button blue-button">
                Blue
            </md-button>
            <!-- <md-button class="md-icon-button" @click="prevMatch()">
                <md-icon>chevron_left</md-icon>
            </md-button> -->
            <!-- <h3 class="md-title" style="flex:1;margin:0;text-align:center;">Q-1</h3> -->
            <!-- <md-button class="md-icon-button" @click="nextMatch()">
                <md-icon>chevron_right</md-icon>
            </md-button> -->
        </md-toolbar>
        <md-bottom-bar>
            <!-- <md-bottom-bar-item md-label="Red" md-icon="home"/>
            <md-bottom-bar-item md-label="Blue" md-icon="home"/> -->
            <md-bottom-bar-item md-label="Settings" md-icon="settings"/>
            <md-bottom-bar-item md-label="Save" md-icon="save"/>
            <md-bottom-bar-item md-label="Clear" md-icon="clear"/>
        </md-bottom-bar>
    </div>
</template>

<script>
import MatchScoreCard from '@/components/MatchesPage/MatchScoreCard'
export default {
    name: 'score-page',
    components: {
        MatchScoreCard
    },
    methods: {
        prevMatch() {},
        nextMatch() {}
    }
}
</script>

<style>

.score-page {
    padding: 0;
    padding-bottom: 56px;
}

.md-bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;

}

.color-button-holder {
    padding: 0;
}

.color-button {
    width: 50%;
    height: 48px;
    padding: 0;
    margin: 0;
    color: white !important;
    font-size: large !important;
}

.red-button {
    background-color: red;
}

.blue-button {
    background-color: blue;
}

.md-bottom-bar-item {
    width: 33%;
}

</style>
