export enum Attribute {
    "name" = "name",
    "email" = "email",
    "city" = "city",
    "company" = "company",
}

class MyProfile extends HTMLElement {
    name?: string;
    email?: string;
    city?: string;
    company?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
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

    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }

            this.render();
        }

    render(){
        if (this.shadowRoot){
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