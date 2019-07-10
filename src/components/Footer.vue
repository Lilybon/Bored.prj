<template>
    <v-footer dark class="pa-3">
        <div><router-link class="footer__link" to="/about">About</router-link></div>
        <v-spacer></v-spacer>
        <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
</template>

<script>
export default {
    
}
</script>

<style>
.footer__link {
    color: white;
    text-decoration: none;
}
</style>


