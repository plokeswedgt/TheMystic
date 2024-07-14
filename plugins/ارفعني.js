/* Creditos a https://github.com/unptoadrih15/UPABOT-MD */

const handler = async (m, {conn, isAdmin}) => {
  if (m.fromMe) return;
  if (isAdmin) throw '*[❗] انت ادمن اصلا يا مطوري ❤️**';
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  } catch {
    await m.reply('*[❗] 𝙴𝚁𝚁𝙾𝚁, حدت خطأ*');
  }
};
handler.command = /^ارفعني$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
