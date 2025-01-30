import './Chart.scss';

export class Chart {
  private wrapper: HTMLDivElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private elements: any[] = [];

  constructor() {
    this.createChart();
  }

  createChart() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('Chart__wrapper');

    this.canvas = document.createElement('canvas');
    this.canvas.classList.add('Chart__canvas');
    this.ctx = this.canvas.getContext('2d');

    this.wrapper.appendChild(this.canvas);
    this.createResizeListener();

    return this;
  }

  getCanvas() {
    return this.canvas;
  }

  getWrapper() {
    return this.wrapper;
  }

  destroyChart() {
    this.destroyResizeListener();
    this.wrapper.remove();

    return this;
  }

  // Drawings

  draw(callback: () => void) {
    this.elements.push(callback);

    requestAnimationFrame(() => {
      callback();
    });

    return this;
  }

  render() {
    requestAnimationFrame(() => {
      this.elements.forEach((element) => {
        element();
      });
    });
  }

  addDOMElement() {
    document.body.appendChild(this.wrapper);
    this.onResize();

    return this;
  }

  testDraw() {
    this.draw(() => {
      this.ctx.beginPath();
      this.ctx.arc(100, 75, 50, 0, 2 * Math.PI);
      this.ctx.stroke();
    });
  }

  // Listeners

  onResize() {
    this.canvas.width = this.wrapper.offsetWidth;
    this.canvas.height = this.wrapper.offsetHeight;
    this.render();

    return this;
  }

  private createResizeListener() {
    window.addEventListener('resize', () => this.onResize());
  }

  private destroyResizeListener() {
    window.removeEventListener('resize', () => this.onResize());
  }
}
