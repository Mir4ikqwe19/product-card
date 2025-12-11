export class Form {
  constructor(form) {
    this.form = document.getElementById(`${form}`);
  }

  getFormValue() {
    const formData = Object.fromEntries(new FormData(this.form));
    console.log(formData);
    return formData;
  }

  isValid() {
    return console.log(this.form.checkValidity());
  }

  resetFormValue() {
    this.form.reset();
  }
}