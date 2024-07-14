import axios from 'axios';
const handler = async (m, {conn, usedPrefix, command}) => {
  const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/Messi.json`)).data;
  const url = await res[Math.floor(res.length * Math.random())];
  conn.sendFile(m.chat, url, 'error.jpg', `*『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』*`, m);
};
// conn.sendButton(m.chat, "*Messi*", author, url, [['⚽ SIGUIENTE ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['messi'];
handler.tags = ['internet'];
handler.command = /^(ميسي)$/i;
export default handler;
