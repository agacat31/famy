<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                prepend-icon="person"
                name="email"
                label="Email"
                v-model="credentials.email"
                :rules="rules.email"
                required
                autofocus
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
                v-model="credentials.password"
                :rules="rules.password"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              flat
              :disabled="!valid"
              @click.native="submit()"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    layout: 'fullscreen',
    data: () => ({
      credentials: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          v => !!v || 'Email is required',
          v => (v.length >= 4) || 'Email must have at least 4 letters.'
        ],
        password: [
          v => !!v || 'Password is required'
        ]
      },
      valid: false
    }),
    methods: {
      ...mapActions({
        login: 'auth/login',
        getUser: 'auth/fetch',
        setUser: 'profile/setProfile',
      }),
      goTo (path) {
        this.$router.push({ name: path })
      },
      submit () {
        if (this.$refs.form.validate()) {
            this.login(this.credentials)
              .then(result => {
                this.getUser()
                .then(response => {
                  this.setUser(response.data.user)
                  this.$router.push('/main')
                })
              })
              .catch(error => {
                this.loading = false
                if (error.response && error.response.data) {
                  this.alert = {type: 'error', message: error.response.data.message || error.reponse.status}
                }
              })
        }
      },
      // login () {
      //   if (this.$refs.form.validate()) {
      //     login(this.credentials)
      //       .then((response) => {
      //         this.$session.start()
      //         this.$session.set('jwt', response.data.token)
      //         store.dispatch('setAuth', true)
      //         store.dispatch('setToken', response.data.token)

      //         var profile = {
      //           name: 'Aga Atmaja',
      //           photo: 'https://hrmlabsv2.s3.ap-southeast-1.amazonaws.com/internal/images/employees/5ae289d216472f28851b6eb2.png?8905',
      //           phone: '081213551169',
      //           email: 'aga@gmail.com',
      //           company: 'agacat',
      //           position: 'Developer'
      //         }
      //         store.dispatch('setProfile', profile)
      //         this.goTo('home')
      //       })
      //       .catch((error) => {
      //         console.log(error)
      //       })
      //   }
      // }
    }
  }
</script>