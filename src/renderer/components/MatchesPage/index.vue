<template>
    <div>
      <md-tabs>
        <md-tab id="tab-list" md-label="Match List">
          <md-empty-state
            md-label="Generate Match List"
            md-description="Do not generate match list until all of the teams have checked in and passed inspections.">
            <md-button class="md-primary md-raised" @click="generateMatchList">GENERATE</md-button>
          </md-empty-state>
        </md-tab>
        <md-tab id="tab-scores" md-label="Match Scores" :md-disabled="!matchesGenerated">
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-20">
              <match-score-list @SelectMatch="SwitchMatch($event)" :activeMatchId="activeMatchId"/>
            </div>
            <div class="md-layout-item">
              <md-toolbar class="md-dense">
                <md-button class="md-icon-button" @click="activeMatchId--">
                  <md-icon>chevron_left</md-icon>
                </md-button>
                <h3 class="md-title" style="flex:1;margin:0;text-align:center;">{{activeMatch ? activeMatch.name : ""}}</h3>
                <md-button class="md-icon-button" @click="activeMatchId++">
                  <md-icon>chevron_right</md-icon>
                </md-button>
              </md-toolbar>
              <div class="md-layout">
                <match-score-card class="md-layout-item" teamcolor="red" :matchid="activeMatchId"/>
                <match-score-card class="md-layout-item" teamcolor="blue" :matchid="activeMatchId"/>
              </div>
              <md-toolbar class="md-dense">
                <!-- <md-button class="md-icon-button">
                  <md-icon>chevron_left</md-icon>
                </md-button> -->
                <!-- <div style="flex:1;margin:0;text-align:center;">Q-1</div> -->
                <!-- <md-button class="md-icon-button">
                  <md-icon>chevron_right</md-icon>
                </md-button> -->
                <div class="md-toolbar-section-end">
                  <md-button class="md-raised md-primary" @click="saveMatch()">Save</md-button>
                  <md-button class="md-raised md-accent">Clear</md-button>
                </div>
              </md-toolbar>

              
            </div>
          </div>
        </md-tab>
        <md-tab id="tab-rankings" md-label="Team Rankings">

        </md-tab>
        <md-tab id="tab-aliances" md-label="Aliance Selection" :md-disabled="!matchesGenerated">

        </md-tab>
      </md-tabs>
    </div>
</template>

<script>
import MatchScoreList from './MatchScoreList'
import MatchScoreCard from './MatchScoreCard'
require('gun/lib/open.js')

export default {
  name: 'MatchesPage',
  components: {
    MatchScoreList,
    MatchScoreCard
  },
  data: () => ({
    matchesGenerated: true,
    activeMatchId: 1
  }),
  computed: {
    activeMatch() {
      return this.$store.getters.get_match(this.activeMatchId)
    }
  },
  methods: {
    generateMatchList () {
      this.$console.log("Generating match list...");

      var teams = [1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999, 1234, 5678, 9012];
      var numTeams = teams.length;
      var j = 0;


      var matches = this.$gun.get('matches')
      matches.open((match) => {
        this.$console.log("gun: match changed: " + JSON.stringify(match))
        console.log(match)
      })
      console.log(matches)

      for ( var i = 1; i < 1 + (numTeams * 5) / 4; i++) {
        var id = 'match_q_' + i;
        var match = { number: i, id: id, name: 'Q-' + (i), red: {team0: {}, team1: {}}, blue: {team0: {}, team1: {}}};
        match.red.team0.number = teams[(j++)%numTeams];
        match.red.team1.number = teams[(j++)%numTeams];
        match.blue.team0.number = teams[(j++)%numTeams];
        match.blue.team1.number = teams[(j++)%numTeams];
        this.$console.log('Match: ', JSON.stringify(match));

        matches.get(id).put(match)


        // this.$store.commit('create_match', match)

        // var newMatch = matches.get("match"+i);
        // this.$console.log('1')
        // newMatch.put(match);
        // this.$console.log('2')
        // matches.set(newMatch)
        // this.$console.log('3')
      }



      this.matchesGenerated = true;
    },
    SwitchMatch(id) {
      this.$console.log("Switch active match to $" + id + ' in parent')
      this.activeMatchId = id;
    },
    saveMatch() {
      this.$console.log("Save match " + this.activeMatchId)
      var saved = {
        saved: true,
        red: this.activeMatch.red.score.total,
        blue: this.activeMatch.blue.score.total
      }

      this.$gun.get('matches').get(this.activeMatchId).put({saved: saved})

    }
  },
  commands: {
    generateMatchList() {
      return {
        guide: 'Generate the match list',
        command () {
          this.generateMatchList();
          return 'done'
        }
      }
    }
  }
}
</script>

<style>

</style>
