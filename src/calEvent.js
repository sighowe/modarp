class calEvent {
  #content
  #date
  constructor(content, date) {
    this.#content = content;
    this.#date = date;
  }
  getDate() {
    return this.#date;
  }
  getContent() {
    return this.#content;
  }


}
