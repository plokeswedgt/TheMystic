
import fg from 'api-dylux'
let handler = async (m, { conn, text, args }) => {
	
  if (!text) throw `✳️Enter the Username of a TikTok user `
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *معلومات الحساب* 
▢ *🔖عنوان الحساب:* ${res.name}
▢ *🔖 إسم الحساب:* ${res.username}
▢ *👥 المتابعين:* ${res.followers}
▢ *🫂 الي يتابع الحساب:* ${res.following}
▢ *📌الوصف:* ${res.desc}

▢ *🔗 الرابط* : https://tiktok.com/${res.username}
└────────────`
  await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
}
handler.help = ['tiktokstalk']
handler.tags = ['downloader']
handler.command = /^t(tstalk|tiktokstalk)$/i

export default handler
