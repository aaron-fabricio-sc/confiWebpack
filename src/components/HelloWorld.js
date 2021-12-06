export class HelloWorld {
  constructor(name) {
    this.name = name;
  }

  saludo() {
    return `hola desde webpack con ${this.name}`;
  }
}
