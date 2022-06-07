const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'D2F1E747F5',
}

// Other
global.owner = ['6283800948659']
global.premium = ['6283800948659']
global.ownername = 'Mardy_store.tzy'
global.botname = 'Amell-BOT'
global.packname = '✨ Amell✨'
global.outhor = 'https://instagram.com/mardy_store.tzy?igshid=YmMyMTA2M2Y'
global.limitawal = '10'
global.author = 'mardy'
global.sessionName = 'session'
global.prefa = ['#','!','.']
global.sp = '>'
global.mess = {
    success: 'Done ya ngentod',
    admin: 'Lu bukan admin deck! !',
    botAdmin: 'Jadikan Bot Admin Terlebih Dahulu deck!',
    owner: 'Fitur khusus owner bot deck',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 10
}
global.sc = fs.readFileSync('./media/Sean.jpg')
global.tq = fs.readFileSync('./media/Sean.jpg')
global.menu = fs.readFileSync('./media/Sean.jpg')
global.allmenu = fs.readFileSync('./media/Sean.jpg')
global.thumb = fs.readFileSync('./media/Sean.jpg')
global.visoka = { url: 'https://telegra.ph/file/769d88bb8c8357546a149.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
