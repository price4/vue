<template>
  <nav class="navbar navbar-expand-lg bg-body-primary">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <RouterLink class="nav-link" :to="{name: 'index'}">Elso</RouterLink>
        <RouterLink class="nav-link" :to="{name: ''}">Masodik</RouterLink>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
import {RouterLink} from "vue-router"
export default{
  components:{
    RouterLink
  }
}
</script>