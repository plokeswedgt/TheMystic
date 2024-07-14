let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*تكوين اصدقاء جدد😃💕*\n\n*هيا بنا ${toM(a)} لنكن اصدقاء 🫂${toM(b)} هل توافق لتكونو اصدقاء جدد؟*\n\n*ملاحظة: هذا فقط منشن عشوائي لي المرح،😍*`, null, {
mentions: [a, b]
})}
handler.help = ['amistad']
handler.tags = ['main', 'fun']
handler.command = ['صداقه','صداقة']
handler.group = true
export default handler
