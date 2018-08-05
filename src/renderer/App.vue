<template>
  <div>
    <md-app md-mode="fixed" :class="appClasses">
      <md-app-toolbar id="toolbar" class="md-primary">
        <div class="color-strip md-elevation-5">
          <table cellspacing=0px cellpadding=0px >
            <tr>
              <td style="background-color:#00a651"></td>
              <td style="background-color:#ed1c24"></td>
              <td style="background-color:#f57e25"></td>
              <td style="background-color:#009cd7"></td>
            </tr>
          </table>
        </div>

        <router-link class="md-title" ref="title" to="/">Electron Scoring System</router-link>
      </md-app-toolbar>

      <md-app-drawer md-permanent="clipped">
        <navigation-drawer/>
      </md-app-drawer>

      <md-app-content>
        <div>
          <router-view />
        </div>
      </md-app-content>

    </md-app>
    <console v-on:console-visible="onConsoleVisibleChange"/>

    <gun-database />
  </div>
</template>

<script>
  import NavigationDrawer from './components/Layout/NavigationDrawer'
  import GunDatabase from './components/GunDatabase'

  export default {
    name: 'landing-page',
    components: { NavigationDrawer, GunDatabase },
    data: () => ({
      events: [{index: '0', name: 'test'}],
      consoleVisible: false,
      consoleSettings: {
        placeholder: '>',
        helpCmd: 'help',
        historySize: 256,
        welcome: `Electron Score Console`
      }
    }),
    firestore: () => ({
      // events: db.collection('matches').orderBy('index', 'desc')
    }),
    computed: {
      appClasses () {
        return {
          'console-padding': this.consoleVisible
        }
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      onConsoleVisibleChange(visible) {
        this.consoleVisible = visible
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  // @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic');
  @import "~material-design-icons/iconfont/material-icons.css";
  
  .md-app {
    height: 100vh;
  }

  .md-drawer {
    width: 200px;
    max-width: calc(100vw - 125px);
  }

  .console-padding {
    padding-bottom: 200px;
  }

  .md-app-toolbar {
    padding-top: 10px;
  }

  .color-strip {
    position: absolute;
    width: 100%;
    height: 10px;
    top: 0;
    left: 0;

    table {
      width: 100%;
      height: 100%;
    }

    td {
      width: 25%;
      height: 100%;

    }
  }
</style>
