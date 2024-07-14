import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";
const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalusrReg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
  const totalusr = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"));
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const used = process.memoryUsage();
  const { restrict, antiCall, antiprivado, modejadibot } =
    global.db.data.settings[conn.user.jid] || {};
  const { autoread, gconly, pconly, self } = global.opts || {};
  const old = performance.now();
  const neww = performance.now();
  const rtime = (neww - old).toFixed(7);
  const wm = '『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』';
  const info = `*◆━── ⊱∘┃﹝🌿﹞┃∘⊰ ──━◆*
 *₪ ↵ مـــعــــلومات البوت [👑]*
 ┆👑┆ *المطور:* 𝐴𝛩𝐾𝐼𝐽𝐼🩵❄️
 ┆👑┆ *رقم المطور:* +https://wa.me/212657035661
 ┆👑┆ *لدعم المطور:* https://chat.whatsapp.com/EryQ4DDvrebHkvNpgHrLoz
*◆━── ⊱∘┃﹝🌿﹞┃∘⊰ ──━◆*
 ┆🚀┆ *بينغ:* ${rtime}
 ┆⏳┆ *مدة التشغيل:* ${uptime}
 ┆🎳┆ *بادئة:* ${usedPrefix}
 ┆🚗┆ *طريق:* ${self ? "خاص" : "عام"}
 ┆🧭┆ *مستخدمين ريج.:* ${totalusrReg}
 ┆👥┆ *إجمالي المستخدمين:* ${totalusr}
 ┆☠️┆ *نوع القارب:* ${(conn.user.jid == global.conn.user.jid ? '' : `بوت فرعي ل:\n ▢ +${global.conn.user.jid.split`@`[0]}`) || 'انها ليست روبوت فرعي'}
*◆━── ⊱∘┃﹝🌿﹞┃∘⊰ ──━◆*
 ┆🔐┆ *دردشة خاصة:* ${chats.length - groups.length}
 ┆🔓┆ *مجموعات:* ${groups.length}
 ┆🌏┆ *إجمالي الدردشات:* ${chats.length}
*◆━── ⊱∘┃﹝🌿﹞┃∘⊰ ──━◆*
 ┆🍉┆ *الصحين:* ${autoread ? "نشط" : "غير نشط"}
 ┆🍇┆ *يقيد:* ${restrict ? "نشط" : "غير نشط"}
 ┆🍒┆ *برفايت:* ${pconly ? "نشط" : "غير نشط"}
 ┆🍎┆ *جروبات:* ${gconly ? "نشط" : "غير نشط"}
 ┆🍁┆ *مضاد الخاص:* ${antiprivado ? "نشط" : "غير نشط"}
*◆━── ⊱∘┃﹝🌿﹞┃∘⊰ ──━◆*
 `.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://chat.whatsapp.com/IGjMmSEglvj8s8u8OvRXhP` },
    mimetype: `application/${document}`,
    fileName: `كل ما يخص البوت 🌝✨`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://chat.whatsapp.com/IGjMmSEglvj8s8u8OvRXhP",
        mediaType: 2,
        previewType: "pdf",
        title: "『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』",
        body: "Repositorio - GitHub",
        thumbnail: imagen1,
        sourceUrl: "https://chat.whatsapp.com/IGjMmSEglvj8s8u8OvRXhP",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: m });
};

handler.command = /^(بنج|السرعه|سرعة|سرعه|jadibot)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
