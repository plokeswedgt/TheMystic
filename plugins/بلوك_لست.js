/* Creado por https://github.com/FG98F */

const handler = async (m, {conn}) => {
  await conn.fetchBlocklist().then(async (data) => {
    let txt = `*≡ قائمة المبلكين من البوت *\n\n*المجموع :* ${data.length}\n\n┌─⊷\n`;
    for (const i of data) {
      txt += `▢ @${i.split('@')[0]}\n`;
    }
    txt += '└───────────';
    return conn.reply(m.chat, txt, m, {mentions: await conn.parseMention(txt)});
  }).catch((err) => {
    console.log(err);
    throw 'لا يوجد مبلكون في البوت ';
  });
};
handler.help = ['blocklist'];
handler.tags = ['main'];
handler.command = ['بلوك_لست'];
handler.rowner = true;
export default handler;
