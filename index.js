import 'dotenv/config'
import linebot from 'linebot'
import flex from './commands/flex.js'
// import loaction from './經緯度間距離.js'
import near from './commands/near.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async (event) => {
  if (event.message.type === 'text') {
    flex(event)
  }
  if (event.message.type === 'location') {
    near(event)
    console.log('123')
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
