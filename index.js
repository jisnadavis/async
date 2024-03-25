const game = async () => {
  try {
    const respuesta = await fetch('https://thronesapi.com/api/v2/Characters')
    const characters = await respuesta.json()
    console.log(characters)
    const select = document.querySelector('#character-list')
    select.innerHTML = ''
    for (const character of characters) {
      const option = document.createElement('option')
      option.textContent = `${character.firstName} ${character.lastName}`
      option.value = `${character.firstName} ${character.lastName}`
      select.appendChild(option)
    }
    select.addEventListener('change', (e) => {
      const image = document.querySelector('.character-image')
      const selectedCharacter = characters.find(
        (character) => character.fullName === e.target.value
      )
      if (selectedCharacter && selectedCharacter.imageUrl) {
        image.src = selectedCharacter.imageUrl
      } else {
        image.src = '' // or some default image
      }
      document.body.appendChild(image)
    })
  } catch (error) {
    console.log('Hubo un error al obtener los personajes:', error)
  }
}

game()
