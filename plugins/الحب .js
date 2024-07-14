let handler = async (m, { conn, command, text }) => {
let love = `*نسبة الحب 💞🫣*
*نسبة الحب ${text} ليك* هيا*${Math.floor(Math.random() * 100)}%* *من 100%*
*اطلب منه/ا ان ي/تكون صديق/ه لك/ي ؟*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(الحب)$/i
export default handler
