let handler = async (m, { conn, command, text }) => {
let intelligence = `*نسبة ذكائك 😌*
*نسبة ذكاء ${text} 😃هي* *${Math.floor(Math.random() * 100)}%* *من 100%*
*ربنا معاك 😂🤍*
`.trim()
m.reply(intelligence, null, { mentions: conn.parseMention(intelligence) })}
handler.help = ['intelligence']
handler.tags = ['fun']
handler.command = /^(ذكاء)$/i
export default handler
