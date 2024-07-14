let handler = async (m, { conn }) => {

m.reply(`*❄️ جروب دعم المطور لي الاطلاع على التحديات 🌨️*\n
*https://chat.whatsapp.com/EryQ4DDvrebHkvNpgHrLoz*
*سوف تشرفنا هناك 🌿❤️*`)
}
handler.help = ['channel']
handler.tags = ['infobot']
handler.command = /^(جروب_الدعم)$/i

export default handler;
