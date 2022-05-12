export class Datatable {
  constructor(columns, rows, search, config) {
    this.columns = columns
    this.rows = rows
    this.search = search
    this.config = config

    this.wrap = this.createElement("datatable-wrap")
    this.body = this.createElement("datatable-body")
    this.header = this.createElement("datatable-header")
  }

  createdColumns() {
    const cols = this.columns
      .map((item) => {
        return this.createCellElem("header-item", item.width, item.name)
      })
      .join("")
    this.header.insertAdjacentHTML("afterbegin", cols)
  }

  createdRows() {
    const rows = this.rows
      .map((item) => {
        const cell = this.columns
          .map((col) =>
            this.createCellElem("body-item", col.width, item[col.prop])
          )
          .join("")

        return `<div class="datatable-cell">${cell}</div>`
      })
      .join("")
    this.body.insertAdjacentHTML("afterbegin", rows)
  }

  createCellElem(className, width, value) {
    return `<div class="${className}" style="width: ${
      width || "300px"
    }">${value}</div>`
  }

  createTable() {
    this.wrap.appendChild(this.header)
    this.wrap.appendChild(this.body)

    this.createdColumns()
    this.createdRows()
  }

  createElement(className) {
    const $el = document.createElement("div")
    $el.classList.add(className)

    return $el
  }

  mount($el) {
    this.createTable()
    $el.append(this.wrap)
  }
}

/**
 * columns = [
 * {
 * name: string
 * prop: string
 * }
 * ]
 *
 * row = [
 * {}
 * ]
 */
