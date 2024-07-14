import {wallpaper} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗شرح❗] هذا الامر خاص بي تحميل الصور متال  ${usedPrefix + command} أنمي*`;
  const res = await wallpaper(text);
  const img = res[Math.floor(Math.random() * res.length)];
  conn.sendFile(m.chat, img, 'error.jpg', `*『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』 ${text}*`, m);
};
handler.help = ['', '2'].map((v) => 'wallpaper' + v + ' <query>');
handler.tags = ['downloader'];
handler.command = /^(والبيبر?)$/i;
export default handler;
