<template>
    <header>
        <navbar />
    </header>
    <main class="container container-fluid">
        <slot />
    </main>
</template>
<script>
import navbar from "@components/Navbar.vue"
export default{
    components:{
        navbar
    }
}
</script>