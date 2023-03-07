export var Attribute;
(function (Attribute) {
    Attribute["name"] = "name";
    Attribute["email"] = "email";
    Attribute["city"] = "city";
    Attribute["company"] = "company";
})(Attribute || (Attribute = {}));
class MyProfile extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            name: null,
            email: null,
            city: null,
            company: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/Profile/Profile.css">
                <div class="cardProfile">
                <h1>${this.name}</h1>
                <p>${this.email}</p>
                <p>${this.city}</p>
                <p>${this.company}</p>
                </div>
                `;
        }
    }
}
customElements.define("my-profile", MyProfile);
export default MyProfile;
