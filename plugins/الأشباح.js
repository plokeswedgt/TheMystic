const handler = async (m, {conn, text, participants}) => {
  const member = participants.map((u) => u.id);
  if (!text) {
    var sum = member.length;
  } else {
    var sum = text;
  }
  let total = 0;
  const sider = [];
  for (let i = 0; i < sum; i++) {
    const users = m.isGroup ? participants.find((u) => u.id == member[i]) : {};
    if ((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) {
      if (typeof global.db.data.users[member[i]] !== 'undefined') {
        if (global.db.data.users[member[i]].whitelist == false) {
          total++;
          sider.push(member[i]);
        }
      } else {
        total++;
        sider.push(member[i]);
      }
    }
  }
  if (total == 0) return conn.reply(m.chat, `*هذه المجموعة نشطة وليس فيها اشباح ✅*`, m);
  m.reply(`*[ ⚠ الناس الميتة في الجروب  ⚠ ]*\n\n*الجروب:* ${await conn.getName(m.chat)}\n*الاعضاء:* ${sum}\n\n*[ 👻 قائمة الأشباح 👻 ]*\n${sider.map((v) => '  ❈↲ تفاعل يا حب  ❤️🌿 @' + v.replace(/@.+/, '')).join('\n')}\n\n*ملاحضة: البوت ليس من المؤكد ان يعرف الناس الغير متفاعلين 100% هو فقط يقوم بعمل مراقبة لي نشاط الشخص وكم المدة الي تفاعل فيها في الجروب*`, null, {mentions: sider});
};
handler.command = /^(verfantasmas|الأشباح|sider)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
