const baseUrl = 'https://wag-api.herokuapp.com/api/v1/'

export default class PetAdapter  {

  static headers(){
    return {
      'content-type': 'application/json',
      'accept': 'application/json'
    }
  }

  static url(){
    return `${baseUrl}/pets`
  }

  static all(){
    return fetch(`${this.url()}`)
      .then( res => res.json() )
  }

  static allUserPets(){
    return fetch(`${baseUrl}/users/1/user_pets`)
    .then( res => res.json())
  }

  static allShelters(){
    return fetch(`${baseUrl}/shelters`)
    .then( res => res.json())
  }

  // static createPet(){
  //   return fetch(`${this.url()}`, {
  //     method: 'POST',
  //     headers: this.headers(),
  //     body: JSON.stringify({
  //       pet: {
  //         name: pet.name.value,
  //         species: pet.species.value,
  //         age: pet.age.value,
  //         weight: pet.weight.value,
  //         color: pet.color.value,
  //         sex: pet.sex.value,
  //         shelter_id: pet.shelter_id.value
  //
  //       }
  //     })
  //   }).then(response => response.json() )
  //   // .then(window.location.href = "http://localhost:3001/pets")
  // }

  static getFilteredPets(pets){
    let query = JSON.stringify(pets)
    return fetch(`${this.url()}`, {
      method: 'POST',
      headers: this.headers(),
      body: query
    // .then(window.location.href = "http://localhost:3001/foods")
    }).then(res => res.json() )
  }


  static createUserPet(pet_id){
    return fetch(`${baseUrl}/users/1/user_pets`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        user_pet: {
          user_id: 1,
          pet_id: pet_id
        }
      })
    }).then(res => res.json() )
  }

  static destroyUserPet(id){
    return fetch(`${baseUrl}/users/1/user_pets/${id}`, {
      method: 'DELETE'
    }).then(res => res.json() )
  }

}
