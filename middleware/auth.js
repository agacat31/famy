export default function ({store, redirect, route}) {
    const userIsLoggedIn = !!store.state.auth.authData
    const urlRequiresAuth = /^\/main(\/|$)/.test(route.fullPath)
    const urlRequiresNonAuth = /^\/login(\/|$)/.test(route.fullPath)

    if (!userIsLoggedIn && urlRequiresAuth) {
      return redirect('/login')
    }
    if (userIsLoggedIn && urlRequiresNonAuth) {
      return redirect('/main')
    }
    return Promise.resolve()
  }