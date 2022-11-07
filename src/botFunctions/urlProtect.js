import patch from 'request';

function protectUrl(guild) {
    const patchUrl = {
        url: `https://discord.com/api/v9/guilds/${guild.id}/vanity-url`,
        body: {
          code: process.env.urlProtect
        },
        json: true,
        method: 'patch',
        headers: {
          "Authorization": `Bot ${process.env.botToken}`
        }
      };
  
    return patch(patchUrl)
}

export default protectUrl;