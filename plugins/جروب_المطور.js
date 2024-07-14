let handler = async (m, { conn }) => {

m.reply(`*❄️ رابط النقابة الخاصة بي المطور 🌨️*\n
*https://chat.whatsapp.com/JYy2O5p9nPOLVgzbB8yIDP*
*اتمنا ان تنال اعجاب الجميع ❤️🌿*`)
}
handler.help = ['channel']
handler.tags = ['infobot']
handler.command = /^(جروب_المطور)$/i

export default handler;

