const handler = async (m, {conn, isROwner, text}) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js';
    // conn.readMessages([m.key])
    await m.reply('**[📌] إعادة تشغيل الروبوت...* *—◉ يرجى الانتظار لحظة لاستخدام الروبوت مرة أخرى، قد يستغرق الأمر بضع دقائق.**');
    process.send('reset');
};
handler.help = ['restart'];
handler.tags = ['owner'];
handler.command = ['restart', 'reiniciar'];
handler.rowner = true;
export default handler;
