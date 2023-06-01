import "colors";

export default class Log {
  static getTime() {
    const t = new Date();
    const hour = t.getHours();
    const minute = t.getMinutes();
    const second = t.getSeconds();
    const m = hour >= 12 ? "PM" : "AM";

    return `[${hour}:${minute}:${second} ${m}] `.dim;
  }

  static success(message: string) {
    console.log(this.getTime() + "🚀 " + message + " 🚀".green);
  }
  static info(message: string) {
    console.log(this.getTime() + "ℹ️ " + message.bgCyan.white + " ℹ️");
  }
  static warn(message: string) {
    console.log(this.getTime() + "⚠️ " + message.underline.yellow + " ⚠️");
  }
  static danger(message: string) {
    console.log(this.getTime() + "🔴 " + message.red + " 🔴");
  }
}
