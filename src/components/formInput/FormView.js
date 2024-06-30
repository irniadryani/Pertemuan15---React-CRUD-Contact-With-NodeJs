import React from "react";

class FormView extends React.Component {
  render() {
    const { valueName, valueMobile, valueEmail, handleChange, handleSubmit } = this.props; //menangkap variabl dari props

    return (
      //tampilan form input
      <div className="ui container">
        <form className="ui form centered" onSubmit={handleSubmit}>
          <div className="ten wide field">
            <label>Name</label>
            <input
              type="text"
              name="valueName"
              placeholder="Name"
              value={valueName}
              onChange={handleChange}
            />
          </div>
          <div className="ten wide field">
            <label>Mobile</label>
            <input
              type="text"
              name="valueMobile"
              placeholder="Number Phone"
              value={valueMobile}
              onChange={handleChange}
            />
          </div>
          <div className="ten wide field">
            <label>Email</label>
            <input
              type="text"
              name="valueEmail"
              placeholder="Email"
              value={valueEmail}
              onChange={handleChange}
            />
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormView;
