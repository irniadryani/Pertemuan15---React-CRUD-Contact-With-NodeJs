import React from "react";

//Komponen SearchForm digunakan untuk menampilkan form pencarian dengan input dan tombol pencarian.
class SearchForm extends React.Component {
  render() {
    const { searchTerm, handleInputChange, handleSubmit } = this.props; // Menerima variabel dari props

    return (
      <form onSubmit={handleSubmit}>
        <div className="ui grid">
          <div className="ui row">
            <div className="ui center aligned column">
              <div className="ui action input">
                <input
                  type="text"
                  placeholder="Search Anything..."
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                <button
                  className="ui button"
                  type="submit"
                  onClick={handleSubmit} // Memanggil handleSubmit saat tombol diklik
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchForm;
