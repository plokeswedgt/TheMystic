let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let too = `*ضع نص:*`

  if (!text) throw too
  let lr = (`https://api.popcat.xyz/biden?text=${encodeURIComponent(text)}`)
  conn.sendFile(m.chat, lr, 'drake.png', `『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』`, m)
}
handler.help = ['drake']
handler.tags = ['maker']
handler.command = ['بايدن','meme']

export default handler
