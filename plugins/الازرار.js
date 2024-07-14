import pkg from '@whiskeysockets/baileys';
import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;
let handler = async (m, { conn, args, usedPrefix, command }) => {
let img = "https://telegra.ph/file/0074fe292b4a599fcb53a.jpg";
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let user = global.db.data.users[m.sender];
let name = conn.getName(m.sender);
let date = moment().tz('Egypt').locale('ar').format('DD MMMM YYYY')
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: ''
          },
            body: {
              text: `*◆━ ⊱∘┃﹝🌿﹞┃∘⊰ ━◆*\n*₪ ↵ قــآئــمـــة آلَبّـوُتُ [📄]*\n*◆━ ⊱∘┃﹝🌿﹞┃∘⊰ ━◆*\n*₪┆ مرحبا 👏*\n*${name}*\n*₪┆إسم البوت: ريتا🤖*\n*₪┆إسم المطور: اوكيجي👑*\n*₪┆إسم المنصة: هيريكو🧾*\n*◆━ ⊱∘┃﹝🌿﹞┃∘⊰ ━◆*\n*₪ ↵ شرح الاستخدام [⛔]*
*『 قم بي ضغط على زر وخطر القائمة التي تريد فقط🙃 』*\n*◆━ ⊱∘┃﹝🌿﹞┃∘⊰ ━◆*`,
            subtitle: "مميز",
            },
            header: {
        hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: img } }, { upload: conn.waUploadToServer }))
        },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: '﹝آوُآمِــــــــر〘❄️〙 آلَبّـوُتُ﹞',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'ON',
                        rows: [
                          {
                            header: 'قسم الذين🕋',
                            title: 'تشغيل قسم الذين:⏸️',
                            description: '',
                            id: '.2'
                          },
                          {
                            header: 'قسم الجروبات📌',
                            title: 'تشغيل قسم الجروبات:⏸️',
                            description: '',
                            id: '.10'
                          },
                          {
                            header: 'قسم المطور👑',
                            title: 'تشغيل قسم المطور:⏸️',
                            description: '',
                            id: '.3'
                          },
                          {
                            header: 'قسم الالعاب🎮',
                            title: 'تشغيل قسم الالعاب:⏸️',
                            description: '',
                            id: '.4'
                          },
                          {
                            header: 'قسم التحميل📁',
                            title: 'تشغيل قسم التحميل:⏸️',
                            description: '',
                            id: '.5'
                          },
                          {
                            header: 'قسم الذكاء الاصطناعي🤖',
                            title: 'تشغيل قسم الذكاء الاصطناعي:⏸️',
                            description: '',
                            id: '.6'
                          },
                          {
                            header: 'قسم الصور و الإديت🖼️',
                            title: 'تشغيل قسم الصور و الإديت:⏸️',
                            description: '',
                            id: '.7'
                          },
                          {
                            header: 'قسم اخرى🔳',
                            title: 'تشغيل قسم اخرى:⏸️',
                            description: '',
                            id: '.8'
                          },
                          {
                            header: 'قسم التحويل🔃',
                            title: 'تشغيل قسم التحويل:⏸️',
                            description: '',
                            id: '.9'
                     }
                        ]
                      }
                    ]
                  }),
                    messageParamsJson: ''
                },
                  {
                      name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: '﹝مِـعَلَوُمِـآتُ 〘❄️〙 آلَبّـوُتُ﹞',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'ON',
                        rows: [
                          {
                            header: '☯︎↢قـسـم الـمـجـمـ🔮ـوعـات ⦊',
                            title: 'تشغيل قسم ( #المجموعة )',
                            description: '',
                            id: '.استا1'
                          },
                          {
                            header: '☯︎↢قـسـم الاسـ🕋ـلامـي ⦊',
                            title: 'تشغيل قسم ( #الدين )',
                            description: '',
                            id: '.استا2'
                     }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                },
{
              name: "quick_reply",
              buttonParamsJson: '{"display_text":"﹝مِــــــــطوُر〘❄️〙 آلَبّـوُتُ﹞","id":".المطور"}'
            },
     {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"﹝مِـــوُقـع〘❄️〙آلَمِــــــــطوُر﹞","url": "https://atom.bio/plokeswedgt","merchant_url":"الي تبي"}'
                     },
     {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"﹝قَنٌآة〘❄️〙 آلَمِــــــــطوُر﹞","url":"https://youtube.com/@mster_okiji?si=RudWxVqWVI4NWyW6","merchant_url":"رابط قناتك"}'
            }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = /^(اوامر|menu|الاوامر\المهام)$/i

export default handler;

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
    
    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "❲ صباح الفل ❳  ⌝☀️⌞"
      if (time >= 4) {
        res = "❲ صباح الخير ❳  ⌝🌄⌞"
      }
      if (time >= 10) {
        res = "❲ مساء الخير ❳  ⌝☀️⌞"
      }
      if (time >= 15) {
        res = "❲ مساء النور ❳  ⌝🌇⌞"
      }
      if (time >= 18) {
        res = "❲ تصبح على خير ❳  ⌝🌙⌞"
      }
      return res
                    }
