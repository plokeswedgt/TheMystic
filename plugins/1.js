.cp test import axios from 'axios';
import { prepareWAMessageMedia, generateWAMessageFromContent } from '@whiskeysockets/baileys';

const handler = async (m, { command, conn, usedPrefix }) => {
  if (command === 's1') {
    const query = 'makan';  // هنا يمكنك تعديل الكلمة المفتاحية حسب الحاجة
    const apiKey = 'beta';  // استخدم مفتاح API الخاص بك
    const res = (await axios.get(`https://api.lolhuman.xyz/api/hadits/search?apikey=${apiKey}&query=${query}`)).data;
    const hadiths = res.result || [];

    // إذا لم يتم العثور على أي حديث
    if (hadiths.length === 0) {
      conn.sendMessage(m.chat, { text: 'لم يتم العثور على أي حديث.' }, { quoted: m });
      return;
    }

    // إعداد الرسالة التفاعلية
    const buttons = [{
      name: 'cta_url',
      buttonParamsJson: JSON.stringify({
          display_text: 'المزيد من الأحاديث',
          url: 'https://whatsapp.com/channel/0029Vag9bvrLSmbRE2I5Oj2h',
          merchant_url: ''
      })
    }];

    const interactiveMessage = {
      body: { text: `حديث عن ${query}:`.trim() },
      footer: { text: `©By Azax`.trim() },
      header: {
        title: `*الحديث الشريف*`,
        subtitle: hadiths[0].content,
        hasMediaAttachment: false,
      },
      nativeFlowMessage: {
        buttons,
        messageParamsJson: ''
      }
    };

    let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage,
        },
      },
    }, { userJid: conn.user.jid, quoted: m });

    conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
  } else {
    conn.sendMessage(m.chat, { text: 'الأمر غير معروف. حاول مرة أخرى.' }, { quoted: m });
  }
};

handler.command = ['s1'];
handler.tags = ['religious'];
export default handler;
