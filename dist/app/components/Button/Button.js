export var Attribute;
(function (Attribute) {
    Attribute["count"] = "count";
})(Attribute || (Attribute = {}));
class MyButtonLike extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            count: null,
        };
        return Object.keys(attrs);
    }
    onButtonClicked() {
        this.count++;
        this.render();
    }
    connectedCallback() {
        this.render();
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.button = this.ownerDocument.createElement('button');
        this.button.textContent = 'Dar like';
        this.button.addEventListener("click", this.onButtonClicked);
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <section>
                ${this.count || 0}
            </section>
            `;
            this.shadowRoot.appendChild(this.button);
        }
    }
}
customElements.define("my-button", MyButtonLike);
export default MyButtonLike;
