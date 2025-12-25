export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.#initOpen(buttonId);
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.closeButton = this.modal.querySelector('#modal-close-button');

    this.onClose = () => this.close();
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    this.#initClose(this.shouldCloseOnOverlay);
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    this.closeButton.removeEventListener('click', this.onClose);

    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.onClose);
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
    this.closeButton.addEventListener('click', this.onClose);

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.onClose);
    }
  }
}