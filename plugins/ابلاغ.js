let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw ` اذا واجهة اي مشكلة في بوت ريتا يمكنك الابلاغ عليه متال  \n\n*.ابلاغ* مرحبا امر عين لا يشتغل هل يمكنك إصلاحه`
  if (text.length < 10) throw `يجب ان تكون الرسالة فيها اكثر من اربع كلمات `
  if (text.length > 1000) throw `الحد الادنى هو 1000 حرف اختر ما تريد قوله !`
  let teks = `*${command.toUpperCase()}!*\n\nfrom : *@${m.sender.split`@`[0]}*\n\nmessage : ${text}\n`
  conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
      contextInfo: {
          mentionedJid: [m.sender]
      }
  })
  m.reply(`يتم الأن ارسال الإبلاغ._\n*شكرا على الإبلاغ سيتم إصلاحه في اقرب وقت مع تحيات المطور 『𝑀𝑅❄️𝐴𝛩𝐾𝐼𝐽𝐼』*`)
}
handler.help = ['report']
handler.tags = ['infobot']
handler.command = /^(ابلاغ)$/i
export default handler
