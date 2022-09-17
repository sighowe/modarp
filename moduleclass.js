class Module {
  #width;
  #height;
  #file;

  constructor(height, width, file){
    this.#height = height;
    this.#width = width;
    this.#file = file;
  }
  getHeight(){
    return this.#height;
  }
  getWidth(){
    return this.#width;
  }
  getFile(){
    return this.#file;
  }
  setFile(newFile){
    this.#file = newFile;
  }

}


module.exports = Module;
