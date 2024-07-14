import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const Jimp = require('jimp');

let handler = async (messageContext, { conn, usedPrefix, command }) => {
  try {
    let botJid = conn.user.jid;
    let quotedMessage = messageContext.quoted ? messageContext.quoted : messageContext;
    let mimeType = (quotedMessage.msg || quotedMessage).mimetype || '';

    if (/image/.test(mimeType)) {
      let imageBuffer = await quotedMessage.download();
      if (!imageBuffer) {
        throw new Error(`*[❗𝐈𝐍𝐅𝐎❗] لم يتم العثور على الصورة، يرجى الرد على صورة باستخدام الأمر ${usedPrefix + command}*`);
      }

      // Load the image using Jimp
      let image = await Jimp.read(imageBuffer);

      // Resize the image to a square (e.g., 640x640 pixels)
      image.cover(640, 640);

      // Get the buffer of the resized image
      let resizedImageBuffer = await image.getBufferAsync(Jimp.MIME_JPEG);

      // Update the profile picture
      await conn.updateProfilePicture(botJid, resizedImageBuffer);
      conn.reply(messageContext.chat, "*[❗𝐈𝐍𝐅𝐎❗] تم تغيير صورة البوت بنجاح*", messageContext);
    } else {
      throw new Error(`*[❗𝐈𝐍𝐅𝐎❗] لم يتم العثور على الصورة، يرجى الرد على صورة باستخدام الأمر ${usedPrefix + command}*`);
    }
  } catch (error) {
    conn.reply(messageContext.chat, error.message, messageContext);
  }
};

handler.command = /^ضع-صوره|تغير-الصوره/i;
handler.rowner = true;

export default handler;
