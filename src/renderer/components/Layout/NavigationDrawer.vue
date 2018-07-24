<template>
    <div>
        <md-list>
            <router-link tag="md-list-item" to='/'>
                <span class="md-list-item-text">Event Settings</span>
            </router-link>
            <router-link tag="md-list-item" to='/2'>
                <span class="md-list-item-text">Displays</span>
            </router-link>
            <router-link tag="md-list-item" to='/teams'>
                <span class="md-list-item-text">Teams</span>
            </router-link>
            <router-link tag="md-list-item" to='/inspections'>
                <span class="md-list-item-text">Inspections</span>
            </router-link>
            <router-link tag="md-list-item" to='/matches'>
                <span class="md-list-item-text">Matches</span>
            </router-link>
            <router-link tag="md-list-item" to='/judging'>
                <span class="md-list-item-text">Judging</span>
            </router-link>
            <!-- <router-link tag="md-list-item" to='/7'>
                <span class="md-list-item-text">Hello</span>
            </router-link>
            <router-link tag="md-list-item" to='/8'>
                <span class="md-list-item-text">Hello</span> -->
            </router-link>

        </md-list>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .router-link-exact-active {
        background-color: var(--md-theme-default-primary);
        color: white;
        span {
            color: white;
        }
    }
</style>
