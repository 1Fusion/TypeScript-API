import discord from 'discord.js'
import { token } from './Config'
import express from 'express'
const app = express()
const client = new discord.Client()


client.on('ready', () => {
    console.log('Bot Is Online.')
})

app.get('/api/guilds/get/:id', (req, res) => {
    const guild = client.guilds.cache.get(req.params.id)
    if(!guild) return res.status(404).json({ message: 'Guild Not Found' })

    return res.status(200).json({
        name: guild.name,
        id: guild.id,
        icon: guild.icon,
        memberCount: guild.memberCount
    })
})

client.login(token);
app.listen(3000, () => {
    console.log('API Is Online.')
})