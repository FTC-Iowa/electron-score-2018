<template>
    <div>
        <!-- <md-toolbar class="md-transparent" md-elevation="0">
            <span class="md-tittle">Navigation</span>
        </md-toolbar>
        <p>some text...</p> -->

        <md-list>
            <router-link tag="md-list-item" to="/" @click.native="hideSidebar">
                <md-icon>home</md-icon>
                <span class="md-list-item-text">Home</span>
            </router-link>

            <router-link tag="md-list-item" to="/score" @click.native="hideSidebar">
                <span class="md-list-item-text">Scoring</span>
            </router-link>
        </md-list>
    </div>
</template>

<script>
export default {
    name: 'navigation-drawer',
    methods: {
        hideSidebar() {
            this.$emit('close-sidebar')
        }
    }

}
</script>

<style>

</style>
