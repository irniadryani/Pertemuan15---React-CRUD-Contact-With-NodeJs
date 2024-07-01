import React from 'react'; // Import React library untuk membuat komponen React
import { render } from 'react-dom'; // Import fungsi render dari react-dom untuk me-render komponen ke DOM
import Styles from './Styles'; // Import komponen Styles dari file ./Styles.js
import { Form, Field } from 'react-final-form'; // Import Form dan Field dari react-final-form untuk membuat formulir

// Fungsi sleep untuk menunda eksekusi dengan menggunakan Promise
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Fungsi onSubmit yang dijalankan saat formulir disubmit, menggunakan async-await untuk menunggu sleep
const onSubmit = async values => {
  await sleep(300); // Menunda eksekusi selama 300ms
  window.alert(JSON.stringify(values, 0, 2)); // Menampilkan nilai formulir dalam alert dengan format JSON
}

export default function formDisplay() {
  return (
    <div>  <Styles>
    <h1 className='font-bold text-lg my-10'>Employee Form</h1> 
    <Form
      onSubmit={onSubmit} // Menggunakan fungsi onSubmit ketika formulir disubmit
      initialValues={{ stooge: '', employed: false }} // Nilai awal untuk formulir
      render={({ handleSubmit, form, submitting, pristine, values }) => ( // Menggunakan render prop dari react-final-form
        <form onSubmit={handleSubmit}>
          {/* Input untuk First Name */}
          <div>
            <label>First Name</label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          {/* Input untuk Last Name */}
          <div>
            <label>Last Name</label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          {/* Checkbox untuk status Employed */}
          <div>
            <label>Employed</label>
            <Field name="employed" component="input" type="checkbox" />
          </div>
          {/* Select box untuk pendidikan (Education) */}
          <div>
            <label>Education</label>
            <Field name="education" component="select">
              <option /> {/* Opsi kosong */}
              <option value="highschool">High School</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
            </Field>
          </div>
          {/* Checkbox untuk Expertise */}
          <div>
            <label>Expertise</label>
            <div>
              <label>
                <Field
                  name="HTML"
                  component="input"
                  type="checkbox"
                  value="HTML"
                />{' '}
                HTML
              </label>
              <label>
                <Field
                  name="CSS"
                  component="input"
                  type="checkbox"
                  value="CSS"
                />{' '}
                CSS
              </label>
              <label>
                <Field
                  name="javascript"
                  component="input"
                  type="checkbox"
                  value="javascript"
                />{' '}
                Javascript
              </label>
              <label>
                <Field
                  name="nodejs"
                  component="input"
                  type="checkbox"
                  value="nodejs"
                />{' '}
                NodeJs
              </label>
              <label>
                <Field
                  name="reactjs"
                  component="input"
                  type="checkbox"
                  value="reactjs"
                />{' '}
                ReactJs 
              </label>
            </div>
          </div>
          {/* Radio button untuk Preferred Technology */}
          <div>
            <label>Preferred <br /> Technology</label>
            <div>
              <label>
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="frontend"
                />{' '}
                Frontend
              </label>
              <label>
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="backend"
                />{' '}
                Backend
              </label>
              <label>
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="fullstack"
                />{' '}
                Fullstack
              </label>
            </div>
          </div>
          {/* Textarea untuk catatan (Notes) */}
          <div>
            <label>Notes</label>
            <Field name="notes" component="textarea" placeholder="Notes" />
          </div>
          {/* Tombol untuk submit dan reset formulir */}
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset} // Menggunakan form.reset untuk mereset formulir
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre> {/* Menampilkan nilai formulir dalam bentuk JSON */}
        </form>
      )}
    />
  </Styles></div> 
  )
}
