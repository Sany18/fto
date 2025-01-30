import './Chart.scss';

export class Chart {
  protected wrapper: HTMLDivElement;
  protected canvas: HTMLCanvasElement;
  protected ctx: CanvasRenderingContext2D;
  protected spinner: HTMLDivElement;
  protected elements: any[] = [];

  constructor() {
    this.createChart();
  }

  createChart() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('Chart__wrapper');

    this.canvas = document.createElement('canvas');
    this.canvas.classList.add('Chart__canvas');
    this.ctx = this.canvas.getContext('2d');

    this.spinner = document.createElement('div');
    this.spinner.classList.add('Chart__spinner');

    this.wrapper.appendChild(this.canvas);
    this.wrapper.appendChild(this.spinner);
    this.createResizeListener();
    this.showSpinner();

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
        element()
      });
    });
  }

  addDOMElement() {
    document.body.appendChild(this.wrapper);
    this.onResize();
    return this;
  }

  showSpinner() {
    this.spinner.style.display = 'block';
    return this;
  }

  hideSpinner() {
    this.spinner.style.display = 'none';
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
