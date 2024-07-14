// TheMystic-Bot-MD@BrunoSobrino - _antitoxic.js

const toxicRegex = /كسمك|متناك|معرص|خول|معرس|قحبه|ابن الوسخه|منيوك|ابن الكلب|ابن المتناكه|طيز|شرموط|شرموطه/i;

export async function before(m, {isAdmin, isBotAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) {
    return !1;
  }
  const user = global.db.data.users[m.sender];
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[mconn.conn.user.jid] || {};
  const isToxic = toxicRegex.exec(m.text);

  if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
    user.warn += 1;
    if (!(user.warn >= 5)) await m.reply('_*اهلا*_\n\n*[ ℹ️ ] ' + `${user.warn == 1 ? `@${m.sender.split`@`[0]}` : `@${m.sender.split`@`[0]}`}, أرسل الكلمة "${isToxic}" محظور في هذه المجموعة.\n\n▢ *تحذير:* ${user.warn}/5` + '*', false, {mentions: [m.sender]});
  }

  if (user.warn >= 5) {
    user.warn = 0;
    await m.reply(`_*اهلا*_\n\n*[ ℹ️ ] المشارك @${m.sender.split('@')[0]}, تجاوز 5 إنذارات فسيتم طرده من المجموعة.*`, false, {mentions: [m.sender]});
    user.banned = true;
    await mconn.conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    // await this.updateBlockStatus(m.sender, 'block')
  }
  return !1;
}
