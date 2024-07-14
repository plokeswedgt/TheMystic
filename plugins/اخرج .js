let handler = async (m, { conn, args, command }) => {
await m.reply('*انا اسف ان كنت ازعجتكم , مع السلامة 👋🏻 للجميع احبكم🥺❤️*') 
await  conn.groupLeave(m.chat)}
handler.command = /^(out|اخرج|غادر|برا)$/i
handler.group = true
handler.rowner = true
export default handler
