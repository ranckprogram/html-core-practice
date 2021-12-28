// HTMLParagraphElement
class CustomParagraph extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    const message = this.getAttribute("messaeg");
    const count = +this.getAttribute("col");

    console.log(this.getAttributeNames(), message, count); // 批量处理属性，或者根据自定规则，定义属性的处理方式

    for (let i = 0; i < count; i++) {
      const item = document.createElement("div");
      item.appendChild(document.createTextNode(message));
      shadowRoot.appendChild(item);
    }
  }
}

// customElements.define("custom-paragraph", CustomParagraph, { extends: "p" });
customElements.define("custom-paragraph", CustomParagraph);
