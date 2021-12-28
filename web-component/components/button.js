class Button extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.createElement(shadow);
    this.addStyle(shadow);
  }

  createElement(shadow) {
    const button = document.createElement("button");
    button.classList.add("custom-button");
    const content = this.innerHTML;
    console.log(content);
    button.innerHTML = content;
    this.innerHTML = "";
    shadow.appendChild(button);
  }

  addStyle(shadow) {
    const style = document.createElement("style");

    style.textContent = `
      .custom-button {
        display: block;
        height: 40px;
        width: 100%;
        border-radius: 4px;
        color: #fff;
        background-color: #f80;
        text-align: center;
        line-height: 40px;
        border: 0;
        font-size: 16px;
      }
    `;

    shadow.appendChild(style);
  }

  bindEvent() {}
}

customElements.define("custom-button", Button);
