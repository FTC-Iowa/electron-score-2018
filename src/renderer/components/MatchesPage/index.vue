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
              <match-score-list/>
            </div>
            <div class="md-layout-item">
              <md-toolbar class="md-dense">
                <md-button class="md-icon-button">
                  <md-icon>chevron_left</md-icon>
                </md-button>
                <h3 class="md-title" style="flex:1;margin:0;text-align:center;">Q-1</h3>
                <md-button class="md-icon-button">
                  <md-icon>chevron_right</md-icon>
                </md-button>
              </md-toolbar>
              <div class="md-layout">
                <match-score-card class="md-layout-item" teamcolor="red"/>
                <match-score-card class="md-layout-item" teamcolor="blue"/>
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
                  <md-button class="md-raised md-primary">Save</md-button>
                  <md-button class="md-raised md-accent">Revert</md-button>
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
export default {
  name: 'MatchesPage',
  components: {
    MatchScoreList,
    MatchScoreCard
  },
  data: () => ({
    matchesGenerated: false
  }),
  methods: {
    generateMatchList () {
      // this.$console.log("Generating match list...");
      this.matchesGenerated = true;
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
