import { IFRAME, RSS, CUSTOM } from "./enum";

export const clearItems = () => {
    localStorage.clear(IFRAME);
    localStorage.clear(RSS);
    localStorage.clear(CUSTOM);
}

export const addItem = (type, item) => {
    const stringItems = localStorage.getItem(type);
    let items = JSON.parse(stringItems);
    if (items && Array.isArray(items)) {
        items.push(item);
    } else {
        items = [];
    }

    localStorage.setItem(type, JSON.stringify(items));
    return;
}

 export const getItems = (type) => {
    const stringItems = localStorage.getItem(type);
    if (stringItems) {
        const items = JSON.parse(stringItems);
        if (items && Array.isArray(items) && items.length) {
            return items;
        }    
    }

    if (type === IFRAME) {
        addItem(type, 'https://player.twitch.tv/?channel=warcraft&muted=true');
    }

    if (type === RSS) {
        addItem(type, 'https://cors-anywhere.herokuapp.com/http://rss.home.uol.com.br/index.xml');
    }

    if (type === CUSTOM) {
        addItem(type, '<h2 class="title">CUSTOM FROM LOCAL STORAGE</h2>')
    }

    return getItems(type);
}
