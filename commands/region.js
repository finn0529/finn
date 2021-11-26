import culture from '../culture.js'

export default async (event) => {
  try {
    const number = event.message.text
    const replies = []
    event.reply({
      type: 'location',
      title: culture[number].Venue,
      address: culture[number].AddressArea,
      latitude: culture[number].Latitude,
      longitude: culture[number].Longitude
    })
    event.reply(replies)
  } catch (error) {
    console.log(error)
    event.reply('錯誤')
  }
}
