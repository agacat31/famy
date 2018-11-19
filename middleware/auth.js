export default function ({store, redirect, route}) {
    const userIsLoggedIn = !!store.state.auth.user
    const urlRequiresAuth = /^\/main(\/|$)/.test(route.fullPath)
    const urlRequiresNonAuth = /^\/(\/|$)/.test(route.fullPath)

    if (!userIsLoggedIn && urlRequiresAuth) {
      return redirect('/login')
    }
    if (userIsLoggedIn && urlRequiresNonAuth) {
      return redirect('/main')
    }
    return Promise.resolve()
  }