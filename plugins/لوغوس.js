let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	let tee = `✳️ قم بي وضع نص \n\n📌 متال  : *${usedPrefix + command}* RITA`
	let too = `✳️ قم بي وضع نص جنب *+* \n\n📌 متال : \n*${usedPrefix + command}* RITA *+* BOT`
	
	
	
	let type = command.toLowerCase();
	
	switch (type) {
	  case 'لوغو1':
		if (!text) throw tee;
		let chut = `https://api.caliph.biz.id/api/kaneki?nama=${encodeURIComponent(text)}&apikey=caliphkey`;
		conn.sendFile(m.chat, chut, 'logo.png', `『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』`, m);
		
		break;
		
	  case 'لوعو2': 
		if (!text) throw too;
		if (!text.includes('+')) throw too;
		let [a, b] = text.split('+');
		let loda = `https://api.caliph.biz.id/api/girlneko?nama=${encodeURIComponent(a.trim())}&nama2=${encodeURIComponent(b.trim())}&apikey=caliphkey`;
		conn.sendFile(m.chat, loda, 'logo.png', `『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』`, m);
		
		
		break;
		
	  case 'لوغو3':
		if (!text) throw tee;
		let cp = `https://api.caliph.biz.id/api/rem?nama=${encodeURIComponent(text.trim())}&apikey=caliphkey`;
		conn.sendFile(m.chat, cp, 'logo.png', `『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』`, m);
		
		break;
		
	  case 'gfx4': 
		if (!text) throw tee;
		let gandu = `https://api.caliph.biz.id/api/textpro/matrix?text=${encodeURIComponent(text)}&apikey=caliphkey`;
		conn.sendFile(m.chat, gandu, 'logo.png', `『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』`, m);
		
		break;
		case 'لوغو4':
    if (!text) throw tee
    const apiUrll = `https://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
    conn.sendFile(m.chat, apiUrll, 'logo.png', '『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』', m);
    
    break;

	case 'لوغو5': 
	if (!text) throw too
	if (!text.includes('+')) throw too  
	let [c, d] = text.split`+`   
	const apiUrl = `https://api.lolhuman.xyz/api/textprome2/lionlogo?apikey=${lolkeysapi}&text1=${encodeURIComponent(c)}&text2=${encodeURIComponent(d)}`
	conn.sendFile(m.chat, apiUrl, 'logo.png', `『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』`, m)
	
	break 
	case 'لوغو6': 
	if (!text) throw too;
	if (!text.includes('+')) throw too;
	let [e, f] = text.split('+');
	let oda = `https://api.lolhuman.xyz/api/photooxy2/battlefield4?apikey=${lolkeysapi}&text1=${encodeURIComponent(e.trim())}&text2=${encodeURIComponent(f.trim())}`;
	conn.sendFile(m.chat, oda, 'logo.png', `『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』`, m);
	
	
	break 
	case 'لوغو7': 
	if (!text) throw tee;
	let rand = `https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, rand, 'logo.png', `『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』`, m);
	
	break;
	case 'لوغو8': 
	if (!text) throw tee;
	let randi = `https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, randi, 'logo.png', `『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』`, m);
	
	break;
	case 'لوغو9': 
	if (!text) throw tee;
	let randu = `https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, randu, 'logo.png', `『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』`, m);

	break;
	case 'لوغو10': 
	if (!text) throw too;
	if (!text.includes('+')) throw too;
	let [g, h] = text.split('+');
	let od = `https://api.lolhuman.xyz/api/ephoto2/codwarzone?apikey=${lolkeysapi}&text1=${encodeURIComponent(g.trim())}&text2=${encodeURIComponent(h.trim())}`;
	conn.sendFile(m.chat, od, 'logo.png', `『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』`, m);
	

	break 
	case 'لوغو11': 
	if (!text) throw tee;
	let rr = `https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, rr, 'logo.png', `『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』`, m);
	break;

	  default:
	} 
  };
  
  handler.help = ['gfx1', 'gfx2', 'gfx3', 'gfx4', 'gfx5', 'gfx6', 'gfx7', 'gfx8', 'gfx9', 'gfx10', 'gfx11', 'gfx12'];
  handler.tags = ['maker'];
  handler.command = /^(لوغو1|لوغو2|لوغو3|gfx4|لوغو4|لوغو5|لوغو6|لوغو7|لوغو8|لوغو9|لوغو10|لوغو11)$/i;
  handler.diamond = false;
  
  export default handler;
