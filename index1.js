async function getRandomPokemon() {
  try {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon/' +
        (Math.floor(Math.random() * 151) + 1)
    )

    // Check if response is successful (status 200)
    if (!response.ok) {
      throw new Error('Failed to fetch Pokémon. Status: ' + response.status)
    }

    const images = await response.json()
    return images
  } catch (error) {
    console.error('Error fetching Pokemon:', error)
    throw error
  }
}
async function displayRandomPokemon() {
  try {
    const images = await getRandomPokemon()
    const img = document.querySelector('.random-image')
    const imageUrl =
      images.sprites.other?.dream_world?.front_default ||
      images.sprites.front_default
    if (imageUrl) {
      img.src = imageUrl
    } else {
      console.error('Error: Image URL not found in Pokémon data.')
    }
  } catch (error) {
    console.error('Error displaying Pokemon:', error)
  }
}
window.onload = displayRandomPokemon
