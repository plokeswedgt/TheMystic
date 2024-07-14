import fg from 'api-dylux';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `✳️ ما هي الخلفية التي أبحث عنها؟`
  try {
    let res = await fg.wallpaper(text);
    let re = pickRandom(res);
    await conn.sendMessage(m.chat, { image: { url: re.image[0] }, caption: `✅ تم` }, { quoted: m });
  } catch (error) {
   m.reply(`✳️ خطأ: حاول لاحقًا`)
  }
  
}
handler.help = ['خلفيات']
handler.tags = ['صور']
handler.command = ['خلفيات', 'wallpapers', 'wp']
handler.diamond = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
