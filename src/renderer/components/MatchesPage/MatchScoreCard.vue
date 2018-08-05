<template>
    <div>
    <div class="score-card" v-if="match">
        <md-toolbar class="md-dense header" :class="colorClass">
            <h2 class="" style="flex:1;">{{this.teamcolor === 'red' ? 'Red' : 'Blue'}} Score:</h2>
            <h2 class="">{{total}}</h2>
        </md-toolbar>
        <form novalidate >
            <table>
                <tr>
                    <th colspan="4">Autonomous Period</th>
                </tr>
                <tr>
                    <td colspan="3" class="right">Single Jewel Remaining</td>
                    <td><md-field><md-input type="number" v-model="score.auto.jewels" @input="onChange()"/></md-field></td>
                </tr>
                <tr>
                    <td colspan="3" class="right">Glyphs in Cryptobox</td>
                    <td><md-field><md-input type="number" v-model="score.auto.glyphs" @input="onChange()"/></md-field></td>
                </tr>
                <tr>
                    <td colspan="3" class="right">Cryptobox Keys</td>
                    <td><md-field><md-input type="number" v-model="score.auto.keys" @input="onChange()"/></md-field></td>
                </tr>
                <tr>
                    <td colspan="3" class="right">Robots in Safe Zone</td>
                    <td><md-field><md-input type="number" v-model="score.auto.robots" @input="onChange()"/></md-field></td>
                </tr>

                <tr>
                    <th colspan="4">Driver-Controlled Period</th>
                </tr>
                <tr>
                    <td rowspan="2" class="center">Glyphs Scored</td>
                    <td colspan="3" class="center">Completed</td>
                </tr>
                <tr>
                    <td class="center">Rows</td>
                    <td class="center">Columns</td>
                    <td class="center">Ciphers</td>
                </tr>
                <tr>
                    <td><md-field><md-input type="number" v-model="score.teleop.glyphs" @input="onChange()"/></md-field></td>
                    <td><md-field><md-input type="number" v-model="score.teleop.rows" @input="onChange()"/></md-field></td>
                    <td><md-field><md-input type="number" v-model="score.teleop.columns" @input="onChange()"/></md-field></td>
                    <td><md-field><md-input type="number" v-model="score.teleop.ciphers" @input="onChange()"/></md-field></td>
                </tr>

                <tr>
                    <th colspan="4">End Game Period</th>
                </tr>
                <tr>
                    <td colspan="4" class="center">Relics</td>
                </tr>
                <tr>
                    <td class="center">Zone 1</td>
                    <td class="center">Zone 2</td>
                    <td class="center">Zone 3</td>
                    <td class="center">Upright</td>
                </tr>
                <tr>
                    <td><md-field><md-input type="number" v-model="score.endgame.zone1" @input="onChange()"/></md-field></td>
                    <td><md-field><md-input type="number" v-model="score.endgame.zone2" @input="onChange()"/></md-field></td>
                    <td><md-field><md-input type="number" v-model="score.endgame.zone3" @input="onChange()"/></md-field></td>
                    <td><md-field><md-input type="number" v-model="score.endgame.upright" @input="onChange()"/></md-field></td>
                </tr>
                <tr>
                    <td colspan="3" class="right">Robots Balanced</td>
                    <td><md-field><md-input type="number" v-model="score.endgame.balanced" @input="onChange()"/></md-field></td>
                </tr>     
                           
                <tr>
                    <th colspan="4">Penalties</th>
                </tr>    
                <tr>
                    <td class="right"># Minor</td>
                    <td><md-field><md-input type="number" v-model="score.penalites.minor" @input="onChange()"/></md-field></td>
                    <td class="right"># Major</td>
                    <td><md-field><md-input type="number" v-model="score.penalites.major" @input="onChange()"/></md-field></td>
                </tr>
                <tr>
                    <td class="center">Teams</td>
                    <td class="center">No Show</td>
                    <td class="center">Yellow Card</td>
                    <td class="center">Red Card</td>
                </tr>
                <tr v-if="match[teamcolor].team0">
                    <td class="center">{{match[teamcolor].team0.number}}</td>
                    <td class="center"><md-checkbox v-model="score.penalites.team0.noshow" @change="onChange()"/></td>
                    <td class="center"><md-checkbox v-model="score.penalites.team0.yellow" @change="onChange()"/></td>
                    <td class="center"><md-checkbox v-model="score.penalites.team0.red" @change="onChange()"/></td>
                </tr>
                <tr v-if="match[teamcolor].team1">
                    <td class="center">{{match[teamcolor].team1.number}}</td>
                    <td class="center"><md-checkbox v-model="score.penalites.team1.noshow" @change="onChange()"/></td>
                    <td class="center"><md-checkbox v-model="score.penalites.team1.yellow" @change="onChange()"/></td>
                    <td class="center"><md-checkbox v-model="score.penalites.team1.red" @change="onChange()"/></td>
                </tr>
                <tr v-if="match[teamcolor].team2">
                    <td class="center">{{match[teamcolor].team2.number}}</td>
                    <td class="center"><md-checkbox v-model="score.penalites.team2.noshow"/></td>
                    <td class="center"><md-checkbox v-model="score.penalites.team2.yellow"/></td>
                    <td class="center"><md-checkbox v-model="score.penalites.team2.red"/></td>
                </tr>
            </table>
        </form>
    </div>
    </div>
</template>

<script>
export default {
    props: ['teamcolor', 'matchid'],
    data: () => ({
        score: {
            total: 0,
            auto: {
                jewels: 0,
                glyphs: 0,
                keys: 0,
                robots: 0
            },
            teleop: {
                glyphs: 0,
                rows: 0,
                columns: 0,
                ciphers: 0,
            } ,
            endgame: {
                zone1: 0,
                zone2: 0,
                zone3: 0,
                upright: 0,
                balanced: 0
            },
            penalites: {
                minor: 0,
                major: 0,
                team0: {
                    noshow: false,
                    yellow: false,
                    red: false
                },
                team1: {
                    noshow: false,
                    yellow: false,
                    red: false
                },
                team2: {
                    noshow: false,
                    yellow: false,
                    red: false
                }
            }
        }
    }),
    mounted() {
        // var match = this.$store.getters.get_match(this.matchid);
        // if(match && match[this.teamcolor].score) {
        //     this.score = match[this.teamcolor].score
        // }
    },
    watch: {
        matchid: function (newVal, oldVal) {
            console.log(this.match)
            if(this.match && this.match[this.teamcolor].score) {
                this.setScore(this.match[this.teamcolor].score)
            } else {
                this.clearScore()
            }
        },
        match: function (newVal, oldVal) {
            if(newVal[this.teamcolor].score)
                this.setScore(newVal[this.teamcolor].score)
        },
        // total: function (newVal, oldVal) {
        //     if(this.score.total !== newVal) {
        //         //this.saveTotal(newVal)
        //         this.score.total = newVal
        //     }
        // }
    },
    computed: {
        colorClass() {
            return {
                'color-red': this.teamcolor === 'red',
                'color-blue': this.teamcolor === 'blue'
            }
        },
        match() {
            return this.$store.getters.get_match(this.matchid);
        },
        total() {
            var a = this.score.auto;
            var t = this.score.teleop;
            var e = this.score.endgame;
            var p = this.score.penalites;
            var a_tot = a.jewels * 30 + a.glyphs * 15 + a.keys * 30 + a.robots * 10;
            var t_tot = t.glyphs * 2 + t.rows * 10 + t.columns * 20 + t.ciphers * 30;
            var e_tot = e.zone1 * 10 + e.zone2 * 20 + e.zone3 * 40 + e.upright * 15 + e.balanced * 20;
            var p_tot = 0;
            if(this.match) {
                var otherScore = this.match[this.teamcolor === 'red' ? 'blue' : 'red'].score
                if(otherScore) {
                    p_tot = otherScore.penalites.minor * 10 + otherScore.penalites.major * 40;
                }
            }
            return a_tot + t_tot + e_tot + p_tot;
            // return 0;
        }
    },
    methods: {
        setScore(score) {
            this.score = score
        },
        saveScore() {

        },
        clearScore() {
            this.score = {
                total: 0,
                auto: {
                    jewels: 0,
                    glyphs: 0,
                    keys: 0,
                    robots: 0
                },
                teleop: {
                    glyphs: 0,
                    rows: 0,
                    columns: 0,
                    ciphers: 0,
                } ,
                endgame: {
                    zone1: 0,
                    zone2: 0,
                    zone3: 0,
                    upright: 0,
                    balanced: 0
                },
                penalites: {
                    minor: 0,
                    major: 0,
                    team0: {
                        noshow: false,
                        yellow: false,
                        red: false
                    },
                    team1: {
                        noshow: false,
                        yellow: false,
                        red: false
                    },
                    team2: {
                        noshow: false,
                        yellow: false,
                        red: false
                    }
                }
            }
        },
        onChange() {
            this.score.total = this.total;
            var gunMatch = this.$gun.get('matches').get(this.matchid);
            var color = gunMatch.get(this.teamcolor)
            color.get('score').put(this.score)
            // console.log(color.once((data)=>{console.log(data)}))
        },
        saveTotal(total) {
            var gunMatch = this.$gun.get('matches').get(this.matchid);
            var color = gunMatch.get(this.teamcolor)
            color.get('score').put(this.score)
            console.log(color.once((data)=>{console.log(data)}))
        }
    }



}
</script>

<style lang="scss">
.header {
    color: white !important;
    min-height: unset !important;
    h2 {
        margin-top: 5px;
        margin-bottom: 5px;
    }
}

.color-red {
    background-color: red !important;
}
.color-blue {
    background-color: blue !important;
}



.right {
    text-align: right;
}
.center {
    text-align: center;
}

.score-card {
    border-left: solid;
    border-right: solid;

    table {
    width: 100%;
    table-layout: fixed;
    th {
        background-color: #AAA;
    }
    td {
        width: 25%;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 5px;
        .md-field {
            margin: 0;
            padding-top: 0;
            min-height: 30px;
        }
        input {
            width: 100% !important;
            background-color: #eee !important;
        }
    }
}
}
</style>
