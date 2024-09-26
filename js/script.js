const items = document.querySelectorAll('nav ul li');

items.forEach(item => {
    item.addEventListener('click', function() {
        // Xóa lớp active từ tất cả các mục
        items.forEach(i => i.classList.remove('active'));
        // Thêm lớp active vào mục hiện tại
        this.classList.add('active');
    });
});
class NewsItem extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Lấy các thuộc tính từ thẻ
        const imgSrc = this.getAttribute('img-src');
        const title = this.getAttribute('title');
        const timeUpdated = this.getAttribute('time-updated');

        // Tạo phần tử HTML trong Shadow DOM
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'news-item');

        wrapper.innerHTML = `
            <link rel="stylesheet" href="css/style.css">
            <img src="${imgSrc}" alt="News">
            <h3>${title}</h3>
            <p>Updated: ${timeUpdated}</p>
        `;

        shadow.appendChild(wrapper);
    }
}

// Đăng ký Web Component
customElements.define('news-item', NewsItem);

class NewItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        const container = document.createElement('div');
        container.setAttribute('class', 'new-grid');

        const item = document.createElement('div');
        item.setAttribute('class', 'news-it');

        const img = document.createElement('img');
        img.setAttribute('src', this.getAttribute('img-src'));
        img.setAttribute('alt', 'Hình ảnh tin tức');

        const itemDis = document.createElement('div');
        itemDis.setAttribute('class', 'item-dis');

        const title = document.createElement('h3');
        title.textContent = this.getAttribute('title');

        const updated = document.createElement('p');
        updated.textContent = this.getAttribute('updated');

        itemDis.appendChild(title);
        itemDis.appendChild(updated);
        item.appendChild(img);
        item.appendChild(itemDis);
        container.appendChild(item);

        // Thêm phong cách từ tệp CSS
        const styleLink = document.createElement('link');
        styleLink.setAttribute('rel', 'stylesheet');
        styleLink.setAttribute('href', 'css/style.css');

        this.shadowRoot.appendChild(styleLink);
        this.shadowRoot.appendChild(container);
    }
}

customElements.define('new-item', NewItem);

class SideBarItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        const container = document.createElement('div');
        container.setAttribute('class', 'sidebar-grid');

        const item = document.createElement('div');
        item.setAttribute('class', 'sidebar-it');

        const img = document.createElement('img');
        img.setAttribute('src', this.getAttribute('img-src'));
        img.setAttribute('alt', 'Hình ảnh tin tức');

        const itemDis = document.createElement('div');
        itemDis.setAttribute('class', 'item-display');

        const title = document.createElement('h3');
        title.textContent = this.getAttribute('title');

        const updated = document.createElement('p');
        updated.textContent = this.getAttribute('updated');

        itemDis.appendChild(title);
        itemDis.appendChild(updated);
        item.appendChild(img);
        item.appendChild(itemDis);
        container.appendChild(item);

        // Thêm phong cách từ tệp CSS
        const styleLink = document.createElement('link');
        styleLink.setAttribute('rel', 'stylesheet');
        styleLink.setAttribute('href', 'css/style.css');

        this.shadowRoot.appendChild(styleLink);
        this.shadowRoot.appendChild(container);
    }
}

customElements.define('sidebar-item', SideBarItem);