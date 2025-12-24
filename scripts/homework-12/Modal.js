export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.#initOpen(buttonId);
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.closeButton = this.modal.querySelector('#modal-close-button');
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    this.#initClose(this.shouldCloseOnOverlay);
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    this.closeButton.removeEventListener('click', this.closeMethodLink);

    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.closeMethodLink);
    }
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => this.open());
  }

  #initClose() {
    this.closeMethodLink = this.close.bind(this);

    this.closeButton.addEventListener('click', () => this.close());

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.closeMethodLink);
    }
  }
}