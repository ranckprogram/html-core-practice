# web component

### 前端模型

- 构建视图
- 绑定事件
- 获取数据
- 更新视图





### web component 三项技术

- **Custom elements**
- **Shadow DOM**
- **HTML templates**



### 怎么定义一个webcomponent组件



1. 创建类来指定组件的功能
2. 使用 CustomElementRegistry.define() 注册组件
3. 使用 Element.attachShadow() 拓展内部结构
4. 使用 template slot 定义模板
5. 调用



### 生命周期



- connectedCallback
- disconnectedCallback
- adoptedCallback
- attributeChangedCallback



### 实例

```javascript
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

```



```javascript
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

```





### 问题



1. 样式是否冲突？
2. 组合可否复用？
3. 参数和事件？
4. 怎么穿透自定义组件？





### 专业术语

- web component
- custom elements
- shadow dom
- template slot
- CustomElementRegistry
- attachShadow
- connectedCallback
- disconnectedCallback
- adoptedCallback
- attributeChangedCallback

