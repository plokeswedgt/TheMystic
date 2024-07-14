import yts from 'yt-search';
import fs from 'fs';

const handler = async (m, {conn, text}) => {
  if (!text) throw '*هات عنوان المقطع او اسم القناة على اليوتوب 🤔*';
  const results = await yts(text);
  const tes = results.all;
  const teks = results.all.map((v) => {
    switch (v.type) {
      case 'video': return `
° *_${v.title}_*
↳ 🗳️ *الرابط :_* ${v.url}
↳ 🕒 *مدة المقطع :_* ${v.timestamp}
↳ 📥 *تاريخ المقطع :_* ${v.ago}
↳ 👁 *عدد المشاهدات :_* ${v.views}`;
    }
  }).filter((v) => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m);
};
handler.help = ['ytsearch *<texto>*'];
handler.tags = ['search'];
handler.command = ['يوتوب_بحت', 'yts'];
export default handler;
