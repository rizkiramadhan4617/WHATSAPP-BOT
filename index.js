//THANKS TO
//BASE BY ZOBBIN
//M.RIZKI RAMADHAN
//BAGUS
//RIZ
// LANJUTIN 


const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')

prefix = '/'
blocked = []

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'debug'
	client.on('qr', () => {
	console.log('scan this qr')
	})

	fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
	client.on('connecting', () => {
	console.log('Connecting...')
	})
	client.on('open', () => {
	console.log( 'Connected')
	}) 
	await client.connect({timeoutMs: 30*1000}) 
fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

client.on('CB:Blocklist', json => {
  if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	}
	})

client.on('chat-update', async (msg) => {
	try {
  if (!msg.hasNewMessage) return
  msg = JSON.parse(JSON.stringify(msg)).messages[0]
	if (!msg.message) return
	msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
	if (msg.key && msg.key.remoteJid == 'status@broadcast') return
	if (msg.key.fromMe) return
  global.prefix
	global.blocked
	global.botname
	const content = JSON.stringify(msg.message)
	const from = msg.key.remoteJid
	const type = Object.keys(msg.message)[0]
  const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
  const time = moment.tz('Asia/Jakarta').format('HH:mm DD-MM') + '-2021'
  const tanggal = moment.tz('Asia/Jakarta').format('DD-MM') + '-2021'
  const jams = moment.tz('Asia/Jakarta').format('HH:mm')
  const waktu = moment.tz('Asia/Jakarta').format('HHmmss')
	body = (type === 'conversation' && msg.message.conversation.startsWith(prefix)) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption.startsWith(prefix) ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption.startsWith(prefix) ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text.startsWith(prefix) ? msg.message.extendedTextMessage.text : ''
	bodi = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
  const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
  const args = body.trim().split(/ +/).slice(1)
  const isCmd = body.startsWith(prefix)
  const botNumber = client.user.jid 
  const ownerNumber = ["you number@s.whatsapp.net"]
const isGroup = from.endsWith('@g.us')
	const sender = isGroup ? msg.participant : msg.key.remoteJid
	const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
	const groupName = isGroup ? groupMetadata.subject : ''
	const groupId = isGroup ? groupMetadata.jid : ''
	const groupMembers = isGroup ? groupMetadata.participants : ''
	const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
	const isGroupAdmins = groupAdmins.includes(sender) || false
const isUrl = (url) => {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
	}
	
mess = {
wait: 'Tunggu Sedang Di Proses.......',
success: 'Berhasil ✓',
error: {
stick: 'Gagal, terjadi kesalahan saat mengkonversi',
Iv: 'Link Tidak Valid'
},
only: {
group: 'Perintah ini hanya bisa di gunakan dalam group!',
ownerG: 'Perintah ini hanya bisa di gunakan oleh owner group!',
admin: 'Hanya Admin Yang Bisa Menggunakan Command Ini',
Badmin: 'Bot Harus Admin Untuk Perintah Ini'
}
}

const reply = (teks) => {
	client.sendMessage(from, teks, text, {quoted: msg})
	}
  const mentions = (teks, memberr, id) => {
	(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": memberr}})
	}
const fakeReply = (teks, target, teks2) => {
client.sendMessage(from, teks, text, {quoted: {key: {fromMe: false, participant: `${target}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: teks2}}})
}

	colors = ['red','white','black','blue','yellow','green']
	const isMedia = (type === 'imageMessage' || type === 'videoMessage')
	const isAntiLink = isGroup ? antilenk.includes(from) : false
	const isSimi = simin.includes(from)
	const isTagedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	const isTagedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
	const isTagedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	const isTagedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
	const isTagedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
if (!isGroup && isCmd) console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
	
	if (!isGroup && !isCmd) console.log('\x1b[1;37m>', '[', '\x1b[1;31mRECV\x1b[1;37m', ']', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
	
  if (isCmd && isGroup) console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m',']', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
  
  if (!isCmd && isGroup) console.log('\x1b[1;37m>', '[', '\x1b[1;31mRECV\x1b[1;37m', ']', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
 
switch(command) {
	case prefix+'menu':
	reply(menu())
}
} catch (e) {
            e = String(e)
            if (!e.includes("this.isZero")) {
                const time_error = moment.tz('Asia/Jakarta').format('HH:mm:ss')
                console.log(time_error) 
                console.log(e)
            }
        }
    })
}
starts()