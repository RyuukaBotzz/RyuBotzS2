/*
 * Selamat di Gunakan🗿☕
 * instagram me? : @RyuukaBotz 
 * Jangan Lupa Kasih Creator nya om🗿☕
 * Note Dari Saya Jika Reupload Izin Ke Creator Dlu Atau Tidak Kasih Credit + Link Video nya... 
*/
const
{
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()

//Setting
const setting = JSON.parse(fs.readFileSync('./setting.json'))

//LIB
const { fetchJosn, kyun, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { uploadImages } = require('./lib/uploadimage')
const { pinterest } = require('./lib/pinterest') 
const Exif = require('./lib/exif');
const exif = new Exif();

//DataBase
const _welcom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const _user = JSON.parse(fs.readFileSync('./database/user.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))

//Setting Owner
ownernumber = setting.OwnerNumber
ownernumber2 = setting.OwnerNumber2
botname = setting.BotName
ownername = setting.OwnerName
ownername2 = setting.OwnerName2

//Apikey
ryukey = setting.RyuKey
alphakey = setting.AlphaKey

//Auto Bio & Dll
autobio = true
public = true
let blocked = []
let public_mode = setting. public_mode

//fotonya
const fakeimage = fs.readFileSync ('./media/Ryuu.jpg')

//Sticker CMD
const addCmd = (id, command) => {
const obj = { id: id, chats: command }
scommand.push(obj)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
let position = null
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return position
}
}

const getCmd = (id) => {
let position = null
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return scommand[position].chats
}
}

//Module Export
module.exports = Ryuu = async (Ryuu, mek, _welkom) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
const type = Object.keys(mek.message)[0]
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'
const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const arg = budy.slice(command.length + 2, budy.length)
const c = args.join(' ')
const isCmd = body.startsWith(prefix)
const q = args.join(' ')
const Verived = "0@s.whatsapp.net"
const txt = mek.message.conversation
const botNumber = Ryuu.user.jid
const ownerNumber = [`${ownernumber}@s.whatsapp.net`, `${ownernumber2}@s.whatsapp.net`]
const isGroup = from.endsWith('@g.us')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
let sender = isGroup ? mek.participant : mek.key.remoteJid
let senderr = mek.key.fromMe ? Ryuu.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
const groupMetadata = isGroup ? await Ryuu.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const senderNumber = sender.split("@")[0]
const hour_now = moment().format('HH:mm:ss')
const conts = mek.key.fromMe ? Ryuu.user.jid : Ryuu.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? Ryuu.user.name : conts.notify || conts.vname || conts.name || '-'
const processsTime = (timestamp, now) => {
return moment.duration(now - moment(timestamp * 1000)).asSeconds()}

const isAntiLink = isGroup ? antilink.includes(from) : false
const isWelkom = isGroup ? _welkom.includes(from) : false 
const isOwner = ownerNumber.includes(sender)
const isMybot = isOwner || mek.key.fromMe
const itsMe = mek.key.fromMe ? true : false
let bio_nya = await Ryuu.getStatus(sender)
try {
bio_user = `${bio_nya.status}`
} catch {
bio_user = '-'
}

//Mess Dll
mess = {
wait: 'Tunggu Sedang Di Proses',
eror: 'Terjadi Kesalahan',
success: 'Success️',
error: {
stick: 'Khusus Sticker',
Iv: 'Link Invalid!'
},
only: {
group: 'Fitur Hanya Bisa Di Gunakan Di Group',
owner: 'Khusus Owner Ngab',
admin: 'Khusus Admin Ngab',
Badmin: 'Bot Harus Jadi Admin Kalo Mau Menggunakan Fiturnya', 
}
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
const reply = (teks) => {
Ryuu.sendMessage(from, teks, text, {quoted:ftrol})
}
const sendMess = (hehe, teks) => {
Ryuu.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? Ryuu.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Ryuu.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
}
const costum = (pesan, tipe, target, target2) => {
Ryuu.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
function jsonformat(string) {
return JSON.stringify(string, null, 2)
}
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
Ryuu.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
Ryuu.sendMessage(from, hasil, type, options).catch(e => {
Ryuu.sendMessage(from, { url : link }, type, options).catch(e => {
reply('Something Error')
console.log(e)
})
})
})
})
}
//Send Media Url
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
Ryuu.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}  
//Auto Bio Ketika Online
if (autobio){
if (autobio === false) return
let settingstatus = 0;
if (new Date() * 1 - settingstatus > 1000) {
let _uptime = process.uptime() * 1000;
let uptimer = clockString(_uptime);
await Ryuu.setStatus(`${botname} | ⏲️ Runtime : ${uptimer}`).catch((_) => _);
settingstatus = new Date() * 1;
}}
//Ucapan & Dll
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
var datw = new Date();
var tahun = datw.getFullYear();
var bulan = datw.getMonth();
var taanggal = datw.getDate();
var hari = datw.getDay();
var jamss = datw.getHours();
var menit = datw.getMinutes();
var detik = datw.getSeconds();
switch(hari) {
case 0: hari = "Minggu"; break;
case 1: hari = "Senin"; break;
case 2: hari = "Selasa"; break;
case 3: hari = "Rabu"; break;
case 4: hari = "Kamis"; break;
case 5: hari = "Jum'at"; break;
case 6: hari = "Sabtu"; break;
}
switch(bulan) {
case 0: bulan = "Januari"; break;
case 1: bulan = "Februari"; break;
case 2: bulan = "Maret"; break;
case 3: bulan = "April"; break;
case 4: bulan = "Mei"; break;
case 5: bulan = "Juni"; break;
case 6: bulan = "Juli"; break;
case 7: bulan = "Agustus"; break;
case 8: bulan = "September"; break;
case 9: bulan = "Oktober"; break;
case 10: bulan = "November"; break;
case 11: bulan = "Desember"; break;
}
switch(jamss){
case 0: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌃'; break;
case 1: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌃'; break;
case 2: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌃'; break;
case 3: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
case 4: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break; 
case 5: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
case 6: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
case 7: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
case 8: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🏞️'; break;
case 9: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🏞️'; break;
case 10: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🏞️'; break;
case 11: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break; 
case 12: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break;
case 13: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break;
case 14: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break;
case 15: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌅'; break;
case 16: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌅'; break;
case 17: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌅'; break;
case 18: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break; 
case 19: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
case 20: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
case 21: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
case 22: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break; 
case 23: jamss = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
}
var tampilUcapan = "" + jamss;
var tampilTanggal = hari + " "+ taanggal + " " + bulan + " " + tahun;
var tampilWaktu = "Jam: " + jamss + ":" + menit + ":" + detik;
var tampilHari = "" + jamss;
//Verify
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}
const cekUser = (sender) => {
let status = false
Object.keys(_user).forEach((i) => {
if (_user[i].id === sender) {
status = true
}
})
return status
}
const isUser = cekUser(sender)
const isRegistered = checkRegisteredUser(sender)
const daftar1 = `Hai ${pushname}\nKamu Belum Terverifikasi Pencet Button Di Bawah Ini Untuk Verifikasi!!`
const daftar2 = '```Klik Tombol Di Bawah Untuk Verify Kak```'
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `🌱 VERIFY 🌱`,},type: 1,},]
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

//Sticker Ngab
const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
Ryuu.sendMessage(to, media, MessageType.sticker,{quoted:mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}

//All Button
const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
Ryuu.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: ftrol
})
}

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
Ryuu.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await Ryuu.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
Ryuu.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: ftrol,
})
}
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return Ryuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await Ryuu.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
Ryuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Ryuu.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Ryuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
Ryuu.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};
//Reply Ngentod
const floc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
liveLocationMessage: {
caption: `Haii ${pushname}`,
jpegThumbnail: fakeimage
}
}
}
const fdoc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `Haii ${pushname}`, 
jpegThumbnail: fakeimage
}
}
}
const ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 123,
status: 1,
surface : 1,
message: `${tampilUcapan} ${pushname}`, //Kasih namalu
orderTitle: `${tampilUcapan} ${pushname}`,
thumbnail: fakeimage, //Gambarnye
sellerJid: '0@s.whatsapp.net' 
}
}
}

//Antilink
if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
sendButMessage(from, ` *GROUP LINK DETECTED*\n\nMaaf Kamu Akan Di Kick Dari Group Ini!`, `Klik Di Bawah Untuk Mematikan`, [
{
buttonId: `${prefixa}antilink disable`,
buttonText: {
displayText: `Disable Antilink🌱`,
},
type: 1,
}]);
Ryuu.groupRemove(from, [sender])
}
}
//Yang Belum Verify
const addRegisterUser = (userid, sender, age, bio) => {
const obj = { id: userid, name: sender, age: age, bio: bio }
_user.push(obj)
fs.writeFileSync('./database/user.json', JSON.stringify(_user))
}
//PublicNya
if (!public){
if (!isOwner && !itsMe) return
}
//Waktunya
function clockString(ms) {
let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
//Time
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')

//Last
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

//CMD NYA
if (isCmd && !isGroup)
console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
if (isCmd && isGroup)
console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
switch (command) {

// Case Nye
case 'menu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

*Info Bot* 📱
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

*Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

*Indonesia Time* 🌄
🕐 _*Wib*_ : ${timeWib}
🕑 _*Wita*_ : ${timeWita}
🕒 _*Wit*_ : ${timeWit}

*To Day* 🌱
${tampilUcapan}
🌥 _*Hari*_ : ${hari}
🌚 _*Bulan*_ : ${bulan}
💐 _*Tahun*_ : ${tahun}

_*Other Menu*_ 💻
✾ ${prefix}infobot
✾ ${prefix}donasi
✾ ${prefix}rules
✾ ${prefix}speed
✾ ${prefix}script
✾ ${prefix}verify
✾ ${prefix}creator

_*Group Menu*_ 🌱
✾ ${prefix}welcome *on/off*
✾ ${prefix}add *628xxx*
✾ ${prefix}kick *@tag*
✾ ${prefix}linkgc
✾ ${prefix}setppgrup *reply image*
✾ ${prefix}setnamegrup *text*
✾ ${prefix}setdesc *text*

_*Owner Menu*_ ☕
✾ ${prefix}mode
✾ ${prefix}public
✾ ${prefix}self
✾ ${prefix}owner
✾ ${prefix}delete
✾ ${prefix}bc *text*
✾ ${prefix}setnamabot
✾ ${prefix}setbiobot

_*Search Menu*_ 🔎
✾ ${prefix}pinterest *search*

_*Cecan Menu*_ 👧
✾ ${prefix}cecanvietnam
✾ ${prefix}cecanmalaysia
✾ ${prefix}cecankorea
✾ ${prefix}cecanindonesia
✾ ${prefix}cecanjapan
✾ ${prefix}cecanthailand
✾ ${prefix}cecanchina

_*Asupan Menu*_ 😍
✾ ${prefix}asupancecan
✾ ${prefix}asupanhijaber
✾ ${prefix}asupansantuy
✾ ${prefix}asupanukhti
✾ ${prefix}asupanbocil
✾ ${prefix}asupanghea
✾ ${prefix}asupanrika

_*Nulis Menu*_ 📝
✾ ${prefix}nulis
✾ ${prefix}nuliskiri
✾ ${prefix}nuliskanan
✾ ${prefix}foliokiri
✾ ${prefix}foliokanan

_*News Menu*_ 🌏
✾ ${prefix}indonesianews
✾ ${prefix}sindonews
✾ ${prefix}kompasnews
✾ ${prefix}cnbcnews
✾ ${prefix}okezonenews
✾ ${prefix}detiknews
✾ ${prefix}dailynews
✾ ${prefix}tribunnews
✾ ${prefix}inews
✾ ${prefix}cnnnews
✾ ${prefix}bbcnews

_*CMD Menu*_ ✉️
✾ ${prefix}addcmd *reply sticker*
✾ ${prefix}delcmd *reply sticker*
✾ ${prefix}listcmd

_*Download Menu*_ 🗃
✾ ${prefix}ytmp3 *url*
✾ ${prefix}ytmp4 *url*

_*Convert Menu*_ 💾
✾ ${prefix}sticker *reply*
✾ ${prefix}attp *text*
✾ ${prefix}ttp *text*
✾ ${prefix}toimg *reply*
✾ ${prefix}tourl *reply*
✾ ${prefix}smeme *reply image & text*
✾ ${prefix}emoji *reply emoji*

_*Anime Menu*_ ⛩️
✾ ${prefix}neko
✾ ${prefix}waifu
✾ ${prefix}shinobu
✾ ${prefix}megumin
✾ ${prefix}bully
✾ ${prefix}cuddle
✾ ${prefix}cry
✾ ${prefix}hug
✾ ${prefix}awoo
✾ ${prefix}kiss
✾ ${prefix}lick
✾ ${prefix}pat
✾ ${prefix}smug
✾ ${prefix}bonk
✾ ${prefix}yeet
✾ ${prefix}blush
✾ ${prefix}smile
✾ ${prefix}wave
✾ ${prefix}highfive
✾ ${prefix}handhold
✾ ${prefix}nom
✾ ${prefix}bite
✾ ${prefix}glomp
✾ ${prefix}slap
✾ ${prefix}kill
✾ ${prefix}happy
✾ ${prefix}wink
✾ ${prefix}poke
✾ ${prefix}dance
✾ ${prefix}cringe`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

//Fitur Owner
case 'owner':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${ownernumber}:${ownernumber}\n`
+ 'END:VCARD'.trim()
Ryuu.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply(`Itu Kak Nomor Owner Ku Jangan Jahil Yaa`)
break
case 'creator':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:RyuukaBotz\n`
+ `ORG: Creator RyuBotzS2 ;\n`
+ `TEL;type=CELL;type=VOICE;waid=6283891921787:6283891921787\n`
+ 'END:VCARD'.trim()
Ryuu.sendMessage(from, {displayName: `CreatorNya Bot ${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
break
case 'mode':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
buttonss = [{buttonId: `${prefix}public`, buttonText: {displayText: 'PUBLIC 🌱'}, type: 1},{buttonId: `${prefix}self`, buttonText: {displayText: 'SELF 🍂'}, type: 1}]
const buMess = {
contentText: "SELF/PUBLIC",
footerText: 'Silahkan Pilih Saah Satu',
buttons: buttonss,
headerType: 1
}
await Ryuu.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: mek})
break
case 'self':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
 if(!public)return reply('*_Fitur Itu Sudah Di Aktifkan🌱_*')
public = false
return reply(`Succes Mode Self 🍂\nDimana Hanya Owner & Bot Yang Bisa Menggunakan Bot`,text)
break
case 'public':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
if (public)return reply('*_Fitur Itu Sudah Di Aktifkan🌱_*')
public = true
return reply(`Succes Mode Public 🌱\nDimana Semua User Bisa Menggunakan Bot`, text)
break
case 'bc': case 'broadcast':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
if (args.length < 1) return reply('teks?')
anu100 = await Ryuu.chats.all()
if (isMedia && !Ryuu.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ryuu).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Ryuu
bc100 = await Ryuu.downloadMediaMessage(encmedia)
for (let _ of anu100) {
Ryuu.sendMessage(_.jid, bc100, image, {quoted: ftrol, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
reply('Suksess broadcast')
} else {
for (let _ of anu100) {
Ryuu.sendMessage(_.jid, 
{"contentText": `*「 broadcast bot 」*\n\n${body.slice(4)}`,
"footerText": `${tampilTanggal}`, 
"buttons": [
{"buttonId": `${prefix}menu`,
"buttonText": {"displayText": "MENU 🌱"
},"type": "RESPONSE"}
], "headerType": 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fakeimage,
}}, MessageType.buttonsMessage )
}
reply('Suksess broadcast')
}
break
case 'delete': case 'del': case 'd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
if (!isQuotedReply) return reply(`Reply pesan dari bot!!`)
Ryuu.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: mek })
break
case 'setnamabot':{
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} RyuuSih`)
Ryuu.updateProfileName(q)
.then((res) => reply('Succes'))
.catch((err) => reply('Error'))
}
break
case 'setbiobot':{
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} RyuuSih`)
Ryuu.setStatus(q)
.then((res) => reply('Succes'))
.catch((err) => reply('Error'))
}
break

// Fitur Informasi bot
case 'infobot':{
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
try {
let totalchat = await Ryuu.chats.all()
let i = []
let giid = []
for (let mem of totalchat){
i.push(mem.jid)
}
for (let id of i){
if (id && id.includes('g.us')){
giid.push(id)
}
}
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Ryuu.user.phone
nupe = ownernumber + '@s.whatsapp.net'
menu = `*BOT STATISTIC* 💻
Botname : ${botname}
Owner : @${nupe.split("@")[0]}
Prefix : Multi
Runtime : ${runtime(process.uptime())}
Speed : ${processsTime(mek.messageTimestamp.low, moment())}s
Status : ${public? `Public Mode`:`Self Mode`}
Group Chat : ${giid.length}
Total Chat : ${totalchat.length}
Total Block : ${blocked.length}

*PHONE STATISTIC*📱
Whatsapp Ver. : ${wa_version}
Ram Usage : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
Mcc : ${mcc}
Mnc : ${mnc}
Versi OS : ${os_version}
Merk HP : ${device_manufacturer}
Versi HP : ${device_model}
Browser : ${Ryuu.browserDescription}`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
} catch (e){
reply(`${e}`)
}
}
break
case 'ping':
case 'speed':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
timestampe = speed();
latensie = speed() - timestampe
reply(`_*Speed Test*_\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
break
case 'sc':
case 'script':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
menu = `*Info Script* 🔎\n📚 Script Made By Ryuuka Botz\n🌱 Version : 1.0.0\n📈 Last Update : 11/2/2022\n📩 Link Sc : https://youtube.com/channel/UCjxavxEQa1Wd9A4J9tOmATA\n♨️ Sumber Script : Ryuuka Botz\n\n🍁 Subscribe For More Update`
teks =`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'rules':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
menu =
`*RULES*📖
1. Tolong Gunakan Delay 5 Detik Untuk Menggukan BOT
2. Gunakan Dengan Bijak.


*SNK*📄
1. Data Whatsapp Anda Akan Kami Simpan Di Server Kami Selama BOT Aktif.
2. Data Anda Akan Di Hapus Ketika BOT OFFLINE
3. Kami Tidak Menyimpan Gambar, Video, File, Audio, Dan Dokumen Yang Anda Kirim
4. Kami Tidak Akan Pernah Meminta Anda Untuk Memberikan Informasi Pribadi
5. Jika Menemukan BUG/ERROR Silahkan Langsung Lapor Ke OWNER BOT!


*ATTENTION*❗
*KONSEKUENSI BILA MELANGGAR RULES*
- Bot Akan Memblokir Nomor Anda.
- Anda Tidak Akan Bisa Mengakses Bot Lagi.
- Mengeksploitasi Terhadap bot.
Sanksi: *PERMANENT BLOCK*`
teks =`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'donasi':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
reply(`*TERIMA KASIH SUDAH MAU DONASI 🤗*\n\n*Q.S Az-Zalzalah Ayat 7 :*\n\nفَمَنْ يَّعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَّرَهٗۚ\n\nArtinya : Maka barangsiapa \nmengerjakan kebaikan seberat\nzarrah, niscaya dia akan melihat \n(balasan)nya,\n\ncontact owner :\nwa.me/${ownernumber} (Owner)`) 
break
case 'verify': case 'daftar':
 if (isUser) return reply('Kamu sudah terdaftar di dalam database')
 const serialUser = createSerial(18)
 veri = sender
 _registered.push(sender)
addRegisterUser(sender, pushname, bio_user, timeWib, serialUser)
fs.writeFileSync('./database/registered.json', JSON.stringify(_user))
teks = `_*Verifikasi Succes*_\n\n*Nama :* ${pushname}\n*Nomor :* @${sender.split('@')[0]}\n*Bio :* ${bio_user}\n*seri :* ${serialUser}\n*Time :* ${timeWib} Wib`
let papako = [{
"buttonId": `${prefix}menu`,
"buttonText": {
"displayText": "MENU 🖼"
},
"type": "RESPONSE"
},{
"buttonId": `${prefix}owner`,
"buttonText": {
"displayText": "OWNER 🌱"
},
"type": "RESPONSE"
}]
sendButLocation(from, teks , `*TerimaKasih Telah Verifikasi Di Bot ${botname}*`, fakeimage, papako, {contextInfo: { mentionedJid: [sender]}})
break

//Fitur Convert
case 'gifstiker': case 's': case 'stickergif': case 'sticker': case 'stiker':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
Ryuu.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
oppaconsole.log('Finish')
Ryuu.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
break
case 'stickerwm': case 'swm': case 'take': case 'takesticker': case 'takestick':{
reply(mess.wait) 
let packname1 = q.split('|')[0] ? q.split('|')[0] : q
let author1 = q.split('|')[1] ? q.split('|')[1] : ''
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Ryuu.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `stickwm_${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(color(`STARTED : ${cmd}`,'yellow'))
})
.on('error', function (err) {
console.log(color(`ERROR : ${err}`,'red'))
fs.unlinkSync(media)
reply(mess.error)
})
.on('end', function () {
console.log(color(`FINISH`,'magenta'))
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error)
Ryuu.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if (( isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Ryuu.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `stickwm_${sender}`)
reply(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(color(`STARTED : ${cmd}`,'yellow'))
})
.on('error', function (err) {
console.log(color(`ERROR : ${err}`,'red'))
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error)
})
.on('end', function () {
console.log((`FINISH`,'magenta'))
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error)
Ryuu.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if (isQuotedSticker) {
let encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media = await Ryuu.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error)
Ryuu.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
} else {
reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
 }
}
 break
case 'toimg':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isQuotedSticker) return reply('reply stickernya')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
buffer = fs.readFileSync(ran)
Ryuu.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
fs.unlinkSync(ran)
})
break
case 'tourl': case 'imagetorul': case 'imgtourl': case 'videotourl': case 'tolink':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
 boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await Ryuu.downloadMediaMessage(boij)
res = await uploadImages(owgi)
reply(res)
} else {
reply('kirim/reply gambar/video')
}
break
case 'ttp':
if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp Ryuuka Botz`)
anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
Ryuu.sendMessage(from, anu1, image, {quoted: mek, caption : `${prefix}sticker`})
break
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
Ryuu.sendMessage(from, buffer, sticker, { quoted: mek })
break
case 'emoji':case 'semoji':
if (!q) return reply(`Example : ${prefix + command} 😂`)
hex2 = args.join(' ') 
emoji.get(`${hex2}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${teks}`)
})
break
case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* lord`)
try {
if (!isQuotedImage) return reply(`Reply Gambar!`)
reply(mess.wait)
var teks2 = args.join(' ')
var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
var media = await Ryuu.downloadMediaMessage(enmedia)
var njay = await uploadImages(media)
var resu = await getBuffer(`https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`)
Ryuu.sendMessage(from, resu, image, {caption:'Nih Kak Tinggal Jadikan Sticker', quoted: mek})
fs.unlinkSync(media)
} catch (e) {
console.log(e)
}
break

//Fitur Anime
case 'neko': case 'waifu': case 'shinobu': case 'megumin': case 'bully': case 'cuddle': case 'cry': case 'hug': case 'awoo': case 'kiss': case 'lick': case 'pat': case 'smug': case 'bonk': case 'yeet': case 'blush': case 'smile': case 'wave': case 'highfive': case 'handhold': case 'nom': case 'bite': case 'glomp': case 'slap': case 'kill': case 'happy': case 'wink': case 'poke': case 'dance': case 'cringe':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/${command}`)
kon = await getBuffer(anu.url)
pll = `Succes By : ${botname}`
sendButImage(from, pll, `Next Untuk Melanjutkan`, kon, [  
{
buttonId: `${prefix}${command}`,
buttonText: {
displayText: `NEXT ⏩`,
},
type: 1,
},
]); 
break

//Fitur Cecan & Asupan
case 'cecanvietnam':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
huft = await fetchJson(`https://api-ryu.herokuapp.com/api/cewe/vietnam?apikey=${ryukey}`)
reply(mess.wait) 
goo = await getBuffer(huft.result.url)
Ryuu.sendMessage(from, goo, image, {quoted: ftrol, caption: 'Succes By : © Ryuuka Botz'})
break
case 'cecanmalaysia':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
huft = await fetchJson(`https://api-ryu.herokuapp.com/api/cewe/malaysia?apikey=${ryukey}`)
reply(mess.wait) 
goo = await getBuffer(huft.result.url)
Ryuu.sendMessage(from, goo, image, {quoted: ftrol, caption: 'Succes By : © Ryuuka Botz'})
break
case 'cecankorea':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
huft = await fetchJson(`https://api-ryu.herokuapp.com/api/cewe/korea?apikey=${ryukey}`)
reply(mess.wait) 
goo = await getBuffer(huft.result.url)
Ryuu.sendMessage(from, goo, image, {quoted: ftrol, caption: 'Succes By : © Ryuuka Botz'})
break
case 'cecanindonesia':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
huft = await fetchJson(`https://api-ryu.herokuapp.com/api/cewe/indonesia?apikey=RyuBotz`)
reply(mess.wait) 
goo = await getBuffer(huft.result.url)
Ryuu.sendMessage(from, goo, image, {quoted: ftrol, caption: 'Succes By : © Ryuuka Botz'})
break
case 'cecanjapan':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
huft = await fetchJson(`https://api-ryu.herokuapp.com/api/cewe/japan?apikey=${ryukey}`)
reply(mess.wait) 
goo = await getBuffer(huft.result.url)
Ryuu.sendMessage(from, goo, image, {quoted: ftrol, caption: 'Succes By : © Ryuuka Botz'})
break
case 'cecanthailand':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
huft = await fetchJson(`https://api-ryu.herokuapp.com/api/cewe/thailand?apikey=${ryukey}`)
reply(mess.wait) 
goo = await getBuffer(huft.result.url)
Ryuu.sendMessage(from, goo, image, {quoted: ftrol, caption: 'Succes By : © Ryuuka Botz'})
break
case 'cecanchina':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
huft = await fetchJson(`https://api-ryu.herokuapp.com/api/cewe/china?apikey=${ryukey}`)
reply(mess.wait) 
goo = await getBuffer(huft.result.url)
Ryuu.sendMessage(from, goo, image, {quoted: ftrol, caption: 'Succes By : © Ryuuka Botz'})
break
case 'asupancecan':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
huft = await fetchJson(`https://api-ryu.herokuapp.com/api/asupan/cecan?apikey=RyuBotz`)
reply(mess.wait) 
goo = await getBuffer(huft.result.url)
Ryuu.sendMessage(from, goo, image, {quoted: ftrol, caption: 'Succes By : © Ryuuka Botz'})
break
case 'asupanhijaber':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
huft = await fetchJson(`https://api-ryu.herokuapp.com/api/asupan/hijaber?apikey=${ryukey}`)
reply(mess.wait) 
goo = await getBuffer(huft.result.url)
Ryuu.sendMessage(from, goo, image, {quoted: ftrol, caption: 'Succes By : © Ryuuka Botz'})
break
case 'asupansantuy':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
ini = await fetchJson(`https://api-ryu.herokuapp.com/api/asupan/santuy?apikey=${ryukey}`)
reply(mess.wait) 
buffer = await getBuffer(ini.result.url)
Ryuu.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Succes By : © Ryuuka Botz'})
break
case 'asupanukhti':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
ini = await fetchJson(`https://api-ryu.herokuapp.com/api/asupan/ukty?apikey=${ryukey}`)
reply(mess.wait) 
buffer = await getBuffer(ini.result.url)
Ryuu.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Succes By : © Ryuuka Botz'})
break
case 'asupanbocil':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
ini = await fetchJson(`https://api-ryu.herokuapp.com/api/asupan/bocil?apikey=${ryukey}`)
reply(mess.wait) 
buffer = await getBuffer(ini.result.url)
Ryuu.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Succes By : © Ryuuka Botz'})
break
case 'asupanghea':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
ini = await fetchJson(`https://api-ryu.herokuapp.com/api/asupan/ghea?apikey=${ryukey}`)
reply(mess.wait) 
buffer = await getBuffer(ini.result.url)
Ryuu.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Succes By : © Ryuuka Botz'})
break
case 'asupanrika':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
ini = await fetchJson(`https://api-ryu.herokuapp.com/api/asupan/rikagusriani?apikey=${ryukey}`)
reply(mess.wait) 
buffer = await getBuffer(ini.result.url)
Ryuu.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Succes By : © Ryuuka Botz'})
break

//Fitur Group
case 'welcome':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return (mess.only.admin) 
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('*welcome sudah aktif !!*')
 _welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`Succes Welcome Telah On🌱`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('*welcome sudah off sebelumnya !!*')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`Succes Welcome Telah Off🍂`)
} else {
reply('*on untuk mengaktifkan, off untuk menonaktifkan*')
}
break
case 'antilink':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin) 
if (!q) return reply(`Pilih enable atau disable`)
if (args[0].toLowerCase() === 'enable'){
if (isAntiLink) return reply(`Udah aktif`)
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Succes Antilink Telah Nyala🌱')
} else if (args[0].toLowerCase() === 'disable'){
let anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Succes Antilink Telah Mati🍂')
} else {
reply(`Pilih enable atau disable`)
}
break
case 'add':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group) 
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Yang mau di add jin ya?')
if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Ryuu.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group) 
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin) 
if (!isBotGroupAdmins) return reply(mess.only.Badmin) 
if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
var kickya = q.split('@')[1] + '@s.whatsapp.net'
await Ryuu.groupRemove(from, [kickya])
reply(`Succses`)
break
case 'linkgc': case 'linkgrup': case 'linkgroup':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin) 
Ryuu.groupInviteCode(from)
.then((res) => reply('https://chat.whatsapp.com/' + res))
break
case 'setppgrup':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Ryuu.downloadMediaMessage(encmedia)
Ryuu.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else if (isQuotedSticker){
if (mek.message.videoMessage) return reply('Error Bro Wkwkwk')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Eror Lord')
buffer = fs.readFileSync(ran)
Ryuu.updateProfilePicture(from, buffer)
fs.unlinkSync(ran)
})
} else {
reply(`Kirim atau tag gambar dengan caption ${prefix + command}`)
}
break
case 'setnamagrup': case 'setnamegrup': case 'setgrupname':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
if (args.length == 0) return reply(`Penggunaan ${prefix + command} Ryuuka Support`)
Ryuu.groupUpdateSubject(from, q)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
break
case 'setdesc': case 'setdesk': case 'setdeskripsi':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
if (args.length == 0)  return reply(`Penggunaan ${prefix + command} Ryuuka Support`)
Ryuu.groupUpdateDescription(from, q)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
break

//Fitur Nulis
case 'nulis':
reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
break
case 'nuliskiri':{
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
reply(mess.wait)
const tulisan = q
const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', [
'./media/nulis/images/buku/sebelumkiri.jpg',
'-font',
'./media/nulis/font/Indie-Flower.ttf',
'-size',
'960x1280',
'-pointsize',
'22',
'-interline-spacing',
'2',
'-annotate',
'+140+153',
fixHeight,
'./media/nulis/images/buku/setelahkiri.jpg'
])
.on('error', () => reply(mess.eror))
.on('exit', () => {
Ryuu.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})

})
}
break
case 'nuliskanan':{
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
reply(mess.wait)
const tulisan = q
const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', [
'./media/nulis/images/buku/sebelumkanan.jpg',
'-font',
'./media/nulis/font/Indie-Flower.ttf',
'-size',
'960x1280',
'-pointsize',
'23',
'-interline-spacing',
'2',
'-annotate',
'+128+129',
fixHeight,
'./media/nulis/images/buku/setelahkanan.jpg'
])
.on('error', () => reply(mess.eror))
.on('exit', () => {
Ryuu.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})

})
}
break
case 'foliokiri':{
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
reply(mess.wait)
const tulisan = q
const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', [
'./media/nulis/images/folio/sebelumkiri.jpg',
'-font',
'./media/nulis/font/Indie-Flower.ttf',
'-size',
'1720x1280',
'-pointsize',
'23',
'-interline-spacing',
'4',
'-annotate',
'+48+185',
fixHeight,
'./media/nulis/images/folio/setelahkiri.jpg'
])
.on('error', () => reply(mess.eror))
.on('exit', () => {
Ryuu.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})

})
}
break
case 'foliokanan':{
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
reply(mess.wait)
const tulisan = q
const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', [
'./media/nulis/images/folio/sebelumkanan.jpg',
'-font',
'./media/nulis/font/Indie-Flower.ttf',
'-size',
'960x1280',
'-pointsize',
'23',
'-interline-spacing',
'3',
'-annotate',
'+89+190',
fixHeight,
'./media/nulis/images/folio/setelahkanan.jpg'
])
.on('error', () => reply(mess.eror))
.on('exit', () => {
Ryuu.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})

})
}
break

//Fitur Downloader
case 'ytmp3':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply("Masukkan url youtube")
url = args.join(' ')
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp3?url=${url}&apikey=NisaaCantik`)
ytmp3 = await getBuffer(anu.result.url)
reply(`_audio sedang diproses, silahkan tunggu beberapa saat lagi_`)
Ryuu.sendMessage(from, ytmp3, audio, {mimetype:"audio/mp4", quoted:mek})
break
case 'ytmp4':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply("Masukkan url youtube")
url = args.join(' ')
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp4?url=${url}&apikey=NisaaCantik`)
ytmp4 = await getBuffer(anu.result.url)
reply(`_video sedang diproses, silahkan tunggu beberapa saat lagi_`)
Ryuu.sendMessage(from, ytmp4, video, {caption:`Done kak`, thumbnail:Buffer.alloc(0), quoted:mek})
break

//Fitur News
case 'bbcnews':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
get_data = await fetchJson(`https://api-alphabot.herokuapp.com/api/news/BBCnews?type=ekonomi&apikey=${alphakey}`)
get_data = get_data.data
ini_tes = "*Result* :\n"
for (var x of get_data) {
ini_tes += `*Berita* : ${x.berita}\n`
ini_tes += `*Berita Di Up* : ${x.berita_diupload}\n`
ini_tes += `*Url* : ${x.berita_url}\n\n\n`
} 
reply(ini_tes)
break
case 'cnnnews':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
get_data = await fetchJson(`https://api-alphabot.herokuapp.com/api/news/CNNnews?type=ekonomi&apikey=${alphakey}`)
get_data = get_data.data
ini_tes = "*Result* :\n"
for (var x of get_data) {
ini_tes += `*Berita* : ${x.berita}\n`
ini_tes += `*Url* : ${x.berita_url}\n`
ini_tes += `*Thumbnail* : ${x.berita_thumb}\n\n\n`
} 
reply(ini_tes)
break
case 'inews':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
get_data = await fetchJson(`https://api-alphabot.herokuapp.com/api/news/Inews?type=ekonomi&apikey=${alphakey}`)
get_data = get_data.data
ini_tes = "*Result* :\n"
for (var x of get_data) {
ini_tes += `*Berita* : ${x.berita}\n`
ini_tes += `*Berita Di Up* : ${x.berita_diupload}\n`
ini_tes += `*Url* : ${x.berita_url}\n`
ini_tes += `*Jenis* : ${x.berita_jenis}\n\n\n`
} 
reply(ini_tes)
break
case 'tribunnews':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
get_data = await fetchJson(`https://api-alphabot.herokuapp.com/api/news/TribunNews?type=sepak%20bola&apikey=${alphakey}`)
get_data = get_data.data
ini_tes = "*Result* :\n"
for (var x of get_data) {
ini_tes += `*Berita* : ${x.berita}\n`
ini_tes += `*Berita Di Up* : ${x.berita_diupload}\n`
ini_tes += `*Url* : ${x.berita_url}\n`
ini_tes += `*Thumbnail* : ${x.berita_thumb}\n`
ini_tes += `*Jenis* : ${x.berita_jenis}\n\n\n`
} 
reply(ini_tes)
break
case 'dailynews':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
get_data = await fetchJson(`https://api-alphabot.herokuapp.com/api/news/DailyNews?type=ekonomi&apikey=${alphakey}`)
get_data = get_data.data
ini_tes = "*Result* :\n"
for (var x of get_data) {
ini_tes += `*Berita* : ${x.berita}\n`
ini_tes += `*Thumbnail* : ${x.berita_thumb}\n`
ini_tes += `*Url* : ${x.berita_url}\n\n\n`
} 
reply(ini_tes)
break
case 'detiknews':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
get_data = await fetchJson(`https://api-alphabot.herokuapp.com/api/news/Detiknews?type=ekonomi&apikey=${alphakey}`)
get_data = get_data.data
ini_tes = "*Result* :\n"
for (var x of get_data) {
ini_tes += `*Berita* : ${x.berita}\n`
ini_tes += `*Thumbnail* : ${x.berita_thumb}\n`
ini_tes += `*Url* : ${x.berita_url}\n\n\n`
} 
reply(ini_tes)
break
case 'okezonenews':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
get_data = await fetchJson(`https://api-alphabot.herokuapp.com/api/news/OkezoneNews?type=ekonomi&apikey=${alphakey}`)
get_data = get_data.data
ini_tes = "*Result* :\n"
for (var x of get_data) {
ini_tes += `*Berita* : ${x.berita}\n`
ini_tes += `*Berita Di Up* : ${x.berita_diupload}\n`
ini_tes += `*Thumbnail* : ${x.berita_thumb}\n`
ini_tes += `*Url* : ${x.berita_url}\n\n\n`
} 
reply(ini_tes)
break
case 'cnbcnews':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
get_data = await fetchJson(`https://api-alphabot.herokuapp.com/api/news/CNBCNews?type=ekonomi&apikey=${alphakey}`)
get_data = get_data.data
ini_tes = "*Result* :\n"
for (var x of get_data) {
ini_tes += `*Berita* : ${x.berita}\n`
ini_tes += `*Berita Di Up* : ${x.berita_diupload}\n`
ini_tes += `*Thumbnail* : ${x.berita_thumb}\n`
ini_tes += `*Url* : ${x.berita_url}\n\n\n`
} 
reply(ini_tes)
break
case 'kompasnews':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
get_data = await fetchJson(`https://api-alphabot.herokuapp.com/api/news/KompasNews?type=sepak%20bola&apikey=${alphakey}`)
get_data = get_data.data
ini_tes = "*Result* :\n"
for (var x of get_data) {
ini_tes += `*Berita* : ${x.berita}\n`
ini_tes += `*Thumbnail* : ${x.berita_thumb}\n`
ini_tes += `*Url* : ${x.berita_url}\n`
ini_tes += `*Berita Di Up* : ${x.berita_diupload}\n`
ini_tes += `*Jenis* : ${x.berita_jenis}\n\n\n`
} 
reply(ini_tes)
break
case 'sindonews':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
get_data = await fetchJson(`https://api-alphabot.herokuapp.com/api/news/SindoNews?type=ekonomi&apikey=${alphakey}`)
get_data = get_data.data
ini_tes = "*Result* :\n"
for (var x of get_data) {
ini_tes += `*Berita* : ${x.berita}\n`
ini_tes += `*Url* : ${x.berita_url}\n`
ini_tes += `*Jenis* : ${x.berita_jenis}\n\n\n`
} 
reply(ini_tes)
break
case 'indonesianews':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
get_data = await fetchJson(`https://api-alphabot.herokuapp.com/api/news/IndozoneNews?type=ekonomi&apikey=${alphakey}`)
get_data = get_data.data
ini_tes = "*Result* :\n"
for (var x of get_data) {
ini_tes += `*Berita* : ${x.berita}\n`
ini_tes += `*Thumbnail* : ${x.berita_thumb}\n`
ini_tes += `*Url* : ${x.berita_url}\n`
ini_tes += `*Berita Di Up* : ${x.berita_diupload}\n`
ini_tes += `*Jenis* : ${x.berita_jenis}\n\n\n`
} 
reply(ini_tes)
break
//Fitur Search
case 'pinterest':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!c) return reply('yg mau di cari apa?')
reply(mess.wait) 
pinterest(`${c}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${c}`)
})
break

//Fitur CMD
case 'addcmd': 
case 'setcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
let teksnyee = `\`\`\`「 LIST CMD STIC 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*❏ ID :* ${i.id}\n*❏ Cmd :* ${i.chats}`
}
reply(teksnyee)
break

//Akhir Jangan Di Hapus Ntar Error
default:
if(budy.includes("@verif", "@verify","daftar")){
if (isUser) return reply('Kamu sudah terdaftar di dalam database')
addRegisterUser(sender, pushname, bio_user)
fs.writeFileSync('./database/user.json', JSON.stringify(_user))
teks = `*Success Verification 🎉*\n\n${a}📛 Nama  : ${pushname}\n#️⃣ Nomor : @${sender.split('@')[0]}\n💌 Bio: ${bio_user}${a}\n\n*Verification Di Database ${botname}*`
footeregis = `Terima Kasih Telah Mendaftar 🤗\n© ${botname} By ${ownername}`
butregis = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU 💌' }, type: 1 }
 ]
sendButLocation(from, teks, footeregis, fakeRyuu, butregis, {contextInfo: { mentionedJid: [sender]
}
})
}

if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}
