import fetch from 'node-fetch';
import uploader from '../lib/uploadImage.js';

var handler = async (m, { conn, text, command, usedPrefix }) => {
  try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || '';
    console.log('MIME Type:', mime); // رسالة تصحيح

    if (/image/g.test(mime) && !/webp/g.test(mime)) {
      let buffer = await q.download();
      console.log('Buffer downloaded'); // رسالة تصحيح

      await m.reply('الرجاء الانتظار...');

      let media = await uploader(buffer);
      console.log('Media URL:', media); // رسالة تصحيح

      // التأكد من إرسال معلمة النص
      if (!text || text.trim() === '') {
        throw new Error('معلمة النص مفقودة! الرجاء إدخال نص مع الأمر.');
      }

      let url = `https://api.bk9.site/ai/bardimg?url=${media}&text=${encodeURIComponent(text)}`;
      console.log('Request URL:', url); // رسالة تصحيح

      let response = await fetch(url);
      console.log('API response status:', response.status); // رسالة تصحيح

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let kurosaki = await response.json();
      console.log('API Full Response:', kurosaki); // رسالة تصحيح كاملة

      if (kurosaki.result) {
        conn.sendMessage(m.chat, { text: kurosaki.result }, { quoted: m });
      } else {
        console.error('API Response does not contain "result" field:', kurosaki); // رسالة تصحيح
        throw new Error('لم يتم العثور على نتيجة في الاستجابة من API.');
      }
    } else {
      throw new Error(`*الرجاء الرد علي صوره*\n\n*مثال*\n${usedPrefix + command} اخبرني بالمعلومات`);
    }
  } catch (e) {
    console.error('Error occurred:', e); // رسالة تصحيح
    m.reply(`حدث خطأ: ${e.message}`);
  }
};

handler.help = ['kurosaki'];
handler.tags = ['kurosaki'];
handler.command = /^(شوف|bardimage)$/i;

export default handler;
