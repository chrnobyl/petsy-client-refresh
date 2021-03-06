const baseUrl = `http://localhost:3000/api/v1`

export default class AuthAdapter {

  static headers(){
    return {
      'content-type': 'application/json',
      'accept': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    }
  }

  static login(loginParams){
    return fetch(`${baseUrl}/auth`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify(loginParams)
    }).then( res => res.json() )
  }

  static currentUser(){
    return fetch(`${baseUrl}/current_user`, {
      headers: this.headers()
    })
  }

}
