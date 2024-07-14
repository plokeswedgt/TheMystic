import fetch from 'node-fetch';

 async function handler(m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) {
  let response = args.join(' ').split('|');
  if (!args[0]) throw 'يمكنك صناعة شعار تيكتوك مثال :\n\n*.لوغو_تيك* rita|bot';
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  let res = `https://api.lolhuman.xyz/api/photooxy2/tiktok?apikey=Gatadios&text1=${response[0]}&text2=${response[1]}`;
  conn.sendFile(m.chat, res, 'bobiza.jpg', `『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』`, m, false);
}

handler.help = ['ttlogo']
handler.tags = ['logo'];
handler.command = /^(لوغو_تيك)$/i;
export default handler
