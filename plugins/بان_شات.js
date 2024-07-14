const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('*لقد تم منع البوت من التفاعل في هذه المجموعة بي نجاح✅*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^بان_شات$/i;
handler.rowner = true;
export default handler;
