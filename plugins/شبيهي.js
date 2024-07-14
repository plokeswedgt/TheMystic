let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*⎔┉═〘لعبة😎الشبيه〙⌯═⎔*
┆
┆😆🫂 اكثر واحد يشبهك هنا
هو:─⊱ ${toM(a)} 
┆
*⎔┉═〘𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇〙⌯═⎔*`, null, {
  
mentions: [a]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['شبيهي']
handler.group = true
export default handler
