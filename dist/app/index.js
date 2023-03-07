import data from "./data.js";
import { Attribute } from "./components/Profile/Profile.js";
import "./components/export.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.profiles = [];
        this.buttons = [];
        this.attachShadow({ mode: "open" });
        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("my-profile");
            profileCard.setAttribute(Attribute.name, user.name);
            profileCard.setAttribute(Attribute.email, user.email);
            profileCard.setAttribute(Attribute.city, user.address.city);
            profileCard.setAttribute(Attribute.company, user.company.name);
            profileCard.addEventListener("click", () => console.log(user.name));
            this.profiles.push(profileCard);
            const button = this.ownerDocument.createElement("my-button");
            this.buttons.push(button);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a, _b;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            for (let index = 0; index < this.profiles.length; index++) {
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(this.profiles[index]);
                (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(this.buttons[index]);
            }
        }
    }
}
customElements.define("app-container", AppContainer);
