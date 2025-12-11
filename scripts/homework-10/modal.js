export class Modal {
  constructor(modal) {
    this.modal = document.getElementById(`${modal}`);
    this.modalBackground = document.getElementById('modal-background');
  }

  openModal() {
    this.modal.classList.add('modal-showed');
    this.modalBackground.classList.add('active');
  }

  closeModal () {
    this.modal.classList.remove('modal-showed');
    this.modalBackground.classList.remove('active');
  }

  isOpen() {
    return console.log(this.modal.classList.contains('modal-showed'))
  }
}