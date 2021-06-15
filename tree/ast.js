const createBaseAst = (columns, row, level) => {
  const colgroupChildren = columns.map((item) => {
    return {
      type: "col",
      attrs: {
        width: item.width,
      },
    };
  });

  const hasChildren = Array.isArray(row.children) && row.children.length;

  const tdList = columns.map((item, index) => {
    let td = {
      type: "text",
      value: row[item.key],
    };
    if (typeof item.render === "function") {
      // 渲染函数
      td = item.render(row);
    }

    if (index === 0) {
      td = {
        type: "div",
        class: "td-title",
        children: [
          {
            type: "div",
            className: hasChildren && "tree-toggle tree-open",
          },
          {
            type: "text",
            value: row[item.key],
          },
        ],
      };
    }

    return {
      type: "td",
      children: [
        {
          type: "div",
          class: "tree-table-cell",
          className: index === 0 && `level-${level}`,
          children: [td],
        },
      ],
    };
  });

  return {
    type: "div",
    class: "table-node-cell",
    children: [
      {
        type: "span",
        className: level !== 1 && "tree-table-line",
        style: {
          left: `${level * 20 - 10}px`,
        },
      },
      {
        type: "table",
        children: [
          {
            type: "colgroup",
            children: colgroupChildren,
          },
          {
            type: "tbody",
            children: [
              {
                type: "tr",
                children: tdList,
              },
            ],
          },
        ],
      },
      {
        type: "div",
        class: "tree-table-ul",
      },
    ],
  };
};
