import React from "react";
import FormView from "./FormView"; // Import komponen tampilan FormView untuk ditampilkan

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    // Inisialisasi state untuk menyimpan nilai input form
    this.state = {
      valueName: "",
      valueMobile: "",
      valueEmail: "",
    };

    // Bind this untuk memastikan fungsi handleChange dan handleSubmit merujuk ke instance FormContainer
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Fungsi untuk meng-handle perubahan pada input form
  handleChange(event) {
    const { name, value } = event.target;
    // Memperbarui state sesuai dengan input yang berubah
    this.setState({ [name]: value });
  }

  // Fungsi untuk meng-handle pengiriman form
  handleSubmit(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default
    const { valueName, valueMobile, valueEmail } = this.state;
    // Menampilkan alert dengan nilai input yang diisi
    alert(`Name: ${valueName}\nMobile: ${valueMobile}\nEmail: ${valueEmail}`);
  }

  render() {
    const { valueName, valueMobile, valueEmail } = this.state;

    // Mengirimkan props ke komponen FormView untuk menampilkan form dengan nilai dan fungsi yang sesuai
    return (
      <FormView
        valueName={valueName}
        valueMobile={valueMobile}
        valueEmail={valueEmail}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default FormContainer;
