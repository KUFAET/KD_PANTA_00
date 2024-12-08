

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "alive",
    react: "🌐",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const cap = `
> *ALIVE_KD_PANTA_00*
*╭────────────────╮*
*📌𝗡𝗶𝗰𝗲 𝗧𝗼 𝗠𝗲𝗮𝘁 𝘆𝗼𝘂*
*╰────────────────╯*
⥈⥈⥈*𝚂𝚄𝙿𝙿𝙾𝚃 𝙶𝚁𝙾𝚄𝙿*⥈⥈⥈
*╭────────────────⊶* *https://chat.whatsapp.com/GvR2hfJ42mO9HNwuFJVax6*
*╰────────────────⊶*
*╭────────────────⊶*
*⭕Creator by ᴋᴀᴠɪꜱʜᴋᴀ)*
*⭕ᴋᴅ ᴘᴀɴᴛᴀ ᴀʟɪᴠᴇ*
*╰────────────────⊶*

*╭────────────────⊶*
*🤖: ᴏᴡɴᴇʀ :¢ontact👨‍💻*

*https://wa.me/+94776114551?text=ʜᴇʏ_𝚔𝚊𝚟𝚒𝚜𝚑𝚔𝚊*
*╰────────────────⊶*
*╭────────────────⊶*
> *KD_PANTA_00_YTDL*
*╰────────────────⊶*`

    
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: cap},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})





cmd({
    pattern: "menu",
    react: "🌐",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const cap = `
⫷━❁ ═══ ❃•⇆•❃ ═══ ❁━⫸
> *👿☠️_KD_PANTA_00_☠️👿*
⫷━❁ ═══ ❃•⇆•❃ ═══ ❁━⫸

*╭───────────────❒⁠⁠⁠⁠*
𝗠𝗬 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗚𝗥𝗢𝗨𝗣😍

*https://chat.whatsapp.com/GvR2hfJ42mO9HNwuFJVax6*
*┕───────────────❒*

✅*❂ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅs❂*
*╭──────────●●►*
*┋* _.song_
*┋* _.video_
*┋* _.fb_
*┋* _.tiktok_
*┋* _.tts_
*╰──────────●●►*

✅*❂ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅs❂*
*╭──────────●●►*
*┋* _.alive_
*┋* _.disappear_
*┋* _.senddm_
*┋* _.menu_
*┋* _.owner_
*┋* _.ping2_
*┋* _.ping_
*┋* _.settings_
*┋* _.system_
*┋* _.script_
*╰──────────●●►*

✅*❂ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs❂*
*╭──────────●●►*
*┋* _.kickall_
*┋* _.joinrequests_
*┋* _.allreq_
*┋* _.lockgs_
*┋* _.unlockgs_
*┋* _.leave_
*┋* _.updategname_
*┋* _.updategdesc_
*┋* _.join_
*┋* _.invite_
*┋* _.revoke_
*┋* _.kick_
*┋* _.promote_
*┋* _.demote_
*┋* _.tagall_
*┋* _.hidetag_
*┋* _.taggp_
*┋* _.ginfo_
*┋* _.opentime_
*┋* _.closetime_
*┋* _.tagadmin_
*┋* _.mute_
*┋* _.unmute_
*┋* _.add_
*┋* _.setgoodbye_
*┋* _.setwelcome_
*┋* _.delete_
*╰──────────●●►*

✅*❂ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅs❂*
*╭──────────●●►*
*┋* _.updatecmd_
*┋* _.shutdown_
*┋* _.broadcast_
*┋* _.setpp_
*┋* _.block_
*┋* _.unblock_
*┋* _.clearchats_
*┋* _.jid_
*┋* _.gjid_
*┋* _.restart_
*╰──────────●●►*

✅*❂ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅs❂*
*╭──────────●●►*
*┋* _.sticker_
*╰──────────●●►*

*❒⁠⁠⁠⁠▭▬▭▬▭▬▭▬▭▬▭▬▭❒*⁠⁠⁠⁠

> *POWER_BY KD_PANTA_00*

╰━❁ ═══ ❃•⇆•❃ ═══ ❁━╯`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: cap},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})

    



