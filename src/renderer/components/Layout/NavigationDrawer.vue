<template>
    <div>
        <md-list>
            <router-link tag="md-list-item" to='/'>
                <span class="md-list-item-text">Hello</span>
            </router-link>
            <router-link tag="md-list-item" to='/2'>
                <span class="md-list-item-text">Hello</span>
            </router-link>
            <router-link tag="md-list-item" to='/3'>
                <span class="md-list-item-text">Hello</span>
            </router-link>
            <router-link tag="md-list-item" to='/4'>
                <span class="md-list-item-text">Hello</span>
            </router-link>
            <router-link tag="md-list-item" to='/matches'>
                <span class="md-list-item-text">Matches</span>
            </router-link>
            <router-link tag="md-list-item" to='/6'>
                <span class="md-list-item-text">Hello</span>
            </router-link>
            <router-link tag="md-list-item" to='/7'>
                <span class="md-list-item-text">Hello</span>
            </router-link>
            <router-link tag="md-list-item" to='/8'>
                <span class="md-list-item-text">Hello</span>
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
