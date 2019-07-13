import { RSS, IFRAME, CUSTOM, APP_CONFIG } from "./enum";

const defaultConfig = {
    [RSS]: [{
        value: 'https://cors-anywhere.herokuapp.com/http://rss.home.uol.com.br/index.xml',
    }],
    [IFRAME]: [{
        value: 'https://player.twitch.tv/?channel=warcraft&muted=true'
    }],
    [CUSTOM]: [{
        value: '<h2 class="title">CUSTOM FROM LOCAL STORAGE</h2>',
    }]
};

export const clearItems = () => {
    localStorage.clear(APP_CONFIG);
}

export const addItem = (type, value) => {
    const configuration = getConfig();
    configuration[type].push({
        value,
    });
    localStorage.setItem(APP_CONFIG, JSON.stringify(configuration));
    return;
}

 export const getConfig = () => {
    const stringConfig = localStorage.getItem(APP_CONFIG);
    let configuration;

    try {
        configuration = JSON.parse(stringConfig);
    } catch (err) {
        console.log(err);
        console.log('Error on loading configuration, loading default config');
    }

    if (!configuration) {
        configuration = defaultConfig;
    }

    return configuration;
}
