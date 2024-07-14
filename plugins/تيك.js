//مقدمه من قناه Zoro Codes ' https://whatsapp.com/channel/0029VaYMyqu4CrfgGRLXfv3c '
import fetch from 'node-fetch';
import fs from 'fs';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `*هات رابط الفيديو يا حب ❤️😉*`;
  m.reply('*⌛جاري تحميل الفيديو..⏳*');

  try {
    let mediaURL = await zoro(text);

    if (!mediaURL) throw 'لم يتم العثور على فيديو للرابط المعطى';

    conn.sendFile(m.chat, mediaURL, '', '*تم التحميل بي نجاح ✅*\n*『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』*', m, false, { mimetype: 'video/mp4' });
  } catch (error) {
    throw `حدث خطأ: ${error.message}`;
  }
};

async function zoro(text) {
  let res = await fetch(`https://api-me-4ef1b6491458.herokuapp.com/api/tiktok?url=${encodeURIComponent(text)}`);
  if (!res.ok) return false;

  const fileName = 'Zoro_tiktok_video.mp4';
  const fileStream = fs.createWriteStream(fileName);
  res.body.pipe(fileStream);

  await new Promise((resolve, reject) => {
    fileStream.on('finish', resolve);
    fileStream.on('error', reject);
  });

  return fileName;
}

handler.help = ['tiktok'];
handler.tags = ['downloader'];
handler.command = /^(tk|تيك)$/i;

export default handler;
