<template>
    <div class="score-card">
        <md-toolbar class="md-dense header" :class="colorClass">
            <h2 class="" style="flex:1;">{{this.teamcolor === 'red' ? 'Red' : 'Blue'}} Score:</h2>
            <h2 class="">138</h2>
        </md-toolbar>
        <form novalidate >
            <table>
                <tr>
                    <th colspan="4">Autonomous Period</th>
                </tr>
                <tr>
                    <td colspan="3" class="right">Single Jewel Remaining</td>
                    <td><md-field><md-input type="number" /></md-field></td>
                </tr>
                <tr>
                    <td colspan="3" class="right">Glyphs in Cryptobox</td>
                    <td><md-field><md-input type="number" /></md-field></td>
                </tr>
                <tr>
                    <td colspan="3" class="right">Cryptobox Keys</td>
                    <td><md-field><md-input type="number" /></md-field></td>
                </tr>
                <tr>
                    <td colspan="3" class="right">Robots in Safe Zone</td>
                    <td><md-field><md-input type="number" /></md-field></td>
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
                    <td><md-field><md-input type="number" /></md-field></td>
                    <td><md-field><md-input type="number" /></md-field></td>
                    <td><md-field><md-input type="number" /></md-field></td>
                    <td><md-field><md-input type="number" /></md-field></td>
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
                    <td class="center">Zone 4</td>
                </tr>
                <tr>
                    <td><md-field><md-input type="number" /></md-field></td>
                    <td><md-field><md-input type="number" /></md-field></td>
                    <td><md-field><md-input type="number" /></md-field></td>
                    <td><md-field><md-input type="number" /></md-field></td>
                </tr>
                <tr>
                    <td colspan="3" class="right">Robots Balanced</td>
                    <td><md-field><md-input type="number" /></md-field></td>
                </tr>     
                           
                <tr>
                    <th colspan="4">Penalties</th>
                </tr>    
                <tr>
                    <td class="right"># Minor</td>
                    <td><md-field><md-input type="number" /></md-field></td>
                    <td class="right"># Major</td>
                    <td><md-field><md-input type="number" /></md-field></td>
                </tr>
                <tr>
                    <td class="center">Teams</td>
                    <td class="center">No Show</td>
                    <td class="center">Yellow Card</td>
                    <td class="center">Red Card</td>
                </tr>
                <tr v-for="team in match[teamcolor].teams" :key="team.number">
                    <td class="center">{{team.number}}</td>
                    <td class="center"><md-checkbox /></td>
                    <td class="center"><md-checkbox /></td>
                    <td class="center"><md-checkbox /></td>
                </tr>
            </table>
        </form>
    </div>
</template>

<script>
export default {
    props: ['teamcolor', 'matchid'],

    computed: {
        colorClass() {
            return {
                'color-red': this.teamcolor === 'red',
                'color-blue': this.teamcolor === 'blue'
            }
        },
        match() {
            return this.$store.getters.get_match(this.matchid);
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
