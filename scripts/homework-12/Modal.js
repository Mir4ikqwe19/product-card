export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.#initOpen(buttonId);
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    this.#initClose(this.shouldCloseOnOverlay)
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    const closeButton = this.modal.querySelector('#modal-close-button')
    closeButton.removeEventListener('click', this.closeMethodLink)

    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.closeMethodLink)
    }
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    this.openMethodLink = this.open.bind(this)
    button.addEventListener('click', this.openMethodLink)
  }

  #initClose(shouldCloseOnOverlay) {
    const closeButton = this.modal.querySelector('#modal-close-button')
    this.closeMethodLink = this.close.bind(this)

    closeButton.addEventListener('click', this.closeMethodLink)

    if (shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.closeMethodLink)
    }
  }
}