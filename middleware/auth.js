export default function ({store, redirect, route}) {
  const userIsLoggedIn = !!store.state.auth.authData
  const urlRequiresAuth = /^\/main(\/|$)/.test(route.fullPath)
  const urlRequiresNonAuth = /^\/(login|register)(\/|$)/.test(route.fullPath)

  if (!userIsLoggedIn && urlRequiresAuth) {
    return redirect('/login')
  }
  if (userIsLoggedIn && urlRequiresNonAuth) {
    return redirect('/main')
  }
  return Promise.resolve()
}

// export default ({ store, route, redirect }) => {
//   // Check if user is connected first
//   if (!!store.state.auth.authData) return redirect('/session/login')

//   // Get authorizations for matched routes (with children routes too)
//   const authorizationLevels = route.meta.map((meta) => {
//     if (meta.auth && typeof meta.auth.authority !== 'undefined')
//       return meta.auth.authority
//     return 0
//   })
//   // Get highest authorization level
//   const highestAuthority = Math.max.apply(null, authorizationLevels)

//   if (store.getters['user/user'].details.general.authority < highestAuthority) {
//     return error({
//       statusCode: 401,
//       message: 'Du måste vara admin för att besöka denna sidan.'
//     })
//   }
// }