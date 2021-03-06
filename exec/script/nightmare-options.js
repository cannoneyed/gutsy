export default {
    show: true,
    switches: {
        'ignore-certificate-errors': true,
    },
    webPreferences: {
        webSecurity: false,
    },
    waitTimeout: 1000 * 60 * 15, // 15 minute timeout to set up gen,
    width: 1000,
    height: 1000,
    openDevTools: {
        mode: 'detach',
    },
}
