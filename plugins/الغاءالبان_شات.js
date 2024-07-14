const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('*لقد تم الغاء البان من هذه المجموعة بي نجاح✅*');
};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^الغاءالبان_شات$/i;
handler.rowner = true;
export default handler;
