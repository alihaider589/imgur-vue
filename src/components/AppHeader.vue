<template>
    <div  class="ui secondary pointing menu">
  <div>
      <a href="/" class="active item"> Image Storage </a>
    </div>
    <div class="right menu">
      <a href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AppHeader",
  methods: mapActions(["login"]),
};
</script>