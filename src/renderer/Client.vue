<template>
    <div id='main-app'>
        <fullscreen ref="fullscreen" @change="fullscreenChange">
            <md-app>
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

                    <md-button class="md-icon-button" @click="showNavigation=!showNavigation">
                        <md-icon>menu</md-icon>
                    </md-button>

                    <router-link class="md-title" ref="title" to="/">Electron Scoring</router-link>
                    <div class="md-toolbar-section-end">
                        <md-button class="md-icon-button" @click="consoleVisible = !consoleVisible">
                            <md-icon>call_to_action</md-icon>
                        </md-button>
                        <md-button class="md-icon-button" @click="toggleFullscreen">
                            <md-icon v-if="fullscreen">fullscreen_exit</md-icon>
                            <md-icon v-else="fullscreen">fullscreen</md-icon>   
                        </md-button>
                    </div>
                </md-app-toolbar>

                <md-app-drawer v-if="showNavigation" :md-active.sync="showNavigation" md-permanent="clipped">
                    <navigation-drawer @close-sidebar="showNavigation = false"/>
                </md-app-drawer>

                <md-app-content>
                    <div>
                        <router-view />
                    </div>
                </md-app-content>
            </md-app>
            <console v-model="consoleVisible" />
            <!-- v-on:console-visible="onConsoleVisibleChange" -->
        </fullscreen>
        <gun-database />
    </div>
</template>

<script>
import fullscreen from 'vue-fullscreen'
import Vue from 'vue' 
Vue.use(fullscreen)

import GunDatabase from '@/components/GunDatabase'
import NavigationDrawer from '@/express/layout/NavigationDrawer'
export default {
    name: 'client-home',
    components: {GunDatabase, NavigationDrawer},
    data: () => ({
        fullscreen: false,
        consoleVisible: true,
        showNavigation: false
    }),
    methods: {
        toggleFullscreen() {
            this.$refs['fullscreen'].toggle()
        },
        fullscreenChange (fullscreen) {
            this.fullscreen = fullscreen
        },
        onConsoleVisibleChange(visible) {
            this.consoleVisible = visible
        }
    }
}
</script>

<style lang="scss">
@import "~material-design-icons/iconfont/material-icons.css";

.md-app {
    height: 100vh;
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

    td{
        width: 25%;
        height: 100%;
    }
}

</style>
