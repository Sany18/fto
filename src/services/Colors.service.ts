export class ColorsService {
  static getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  static getThemeColor(name: string) {
    return window.getComputedStyle(document.documentElement).getPropertyValue(`--${name}`);
  }
}
