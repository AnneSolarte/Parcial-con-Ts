import data from "./data.js";
import MyProfile, { Attribute } from "./components/Profile/Profile.js";
import MyButtonLike from "./components/Button/Button.js";
import "./components/export.js"

class AppContainer extends HTMLElement {
    profiles: MyProfile[] = [];
    buttons: MyButtonLike[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement(
                "my-profile"
                ) as MyProfile;
                profileCard.setAttribute(Attribute.name, user.name);
                profileCard.setAttribute(Attribute.email, user.email);
                profileCard.setAttribute(Attribute.city, user.address.city);
                profileCard.setAttribute(Attribute.company, user.company.name);
                profileCard.addEventListener("click", () => console.log(user.name));
                this.profiles.push(profileCard);

                const button = this.ownerDocument.createElement(
                    "my-button"
                ) as MyButtonLike;
                this.buttons.push(button);
            });
        }


        connectedCallback() {
            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;

                for (let index = 0; index < this.profiles.length; index++) {
                    this.shadowRoot?.appendChild(this.profiles[index]);
                    this.shadowRoot?.appendChild(this.buttons[index]);
                }
            }
        }
}
customElements.define("app-container", AppContainer);