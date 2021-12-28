class CustomHeader extends HTMLSpanElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" }) || this; // 不用影子也可以

    const back = this.createElement(shadow);
    this.addStyle(shadow);
    this.bindEvent(back);
  }

  createElement(shadow) {
    const title = this.getAttribute("title");
    const titleEl = document.createElement("div");
    titleEl.classList.add("header");
    titleEl.appendChild(document.createTextNode(title));
    const back = document.createElement("i");
    back.innerHTML = "<";
    back.classList.add("icon-back");
    titleEl.appendChild(back);
    shadow.appendChild(titleEl);
    return back;
  }

  addStyle(shadow) {
    const style = document.createElement("style");
    style.textContent = `
      .header {
        position: relative;
        display: block;
        height: 40px;
        width: 100%;
        color: #fff;
        background-color: #f80;
        text-align: center;
        line-height: 40px;
        border: 0;
        font-size: 16px;
      }

      .icon-back {
        position: absolute;
        left: 10px;
        top: 0;
        font-size: 20px;
      }
    `;

    shadow.appendChild(style);
  }

  bindEvent(back) {
    const fn = this.getAttribute("@click");
    back.addEventListener("click", () => {
      document.dispatchEvent(
        new CustomEvent(fn, {
          detail: {
            value: `${fn}+22`,
          },
        })
      );
    });
  }
}

customElements.define("custom-header", CustomHeader, { extends: "span" });
