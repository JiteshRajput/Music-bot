module.exports = {
    app: {
        token: 'MTIyODk1NzY0NzQ5NjAyNDE4NA.GuJ_zD.IpGUjfPiZpbPg9ThVaLdM37CFlgaV5xS1_aE5w',
        playing: 'Ace On Top',
        global: true,
        guild: '',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
