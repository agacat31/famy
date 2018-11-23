<template>
  <v-layout>
    <v-flex text-xs-center>
      <img src="/v.png" alt="Vuetify.js" class="mb-5">
      <blockquote class="blockquote">
        &#8220;Hi, my name is {{ $route.params.id }}.&#8221;
        &#8220;Hi, my name is {{ user.name }}.&#8221;
        <v-text-field
          v-model="user.name"
          label="username"
        ></v-text-field>
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  meta: {
    requiresAuth: true
  },
  computed: {
    ...mapGetters({
      user: 'profile/profile',
    })
  },
  data() {
    return {
      profile: null
    }
  },
  mounted() {
    console.log(this.user)
  },
  methods: {
    ...mapActions({
      setProfile: 'profile/setProfile',
    })
  },
  watch: {
    'user.name': function(data) {
      this.setProfile(this.user)
    }
  }
}
</script>