import React, { useState } from "react";
import { Form, Field } from "react-final-form";

// Inisialisasi nilai awal untuk form
const initialValues = {
  firstname: "",
  lastname: "",
  employeed: false,
  education: "",
  expertise: [],
  tech: "",
  notes: "",
};

export default function FormContainer() {
  // State untuk menyimpan nilai formulir
  const [formValues, setFormValues] = useState(initialValues);
  // State untuk menyimpan hasil formulir yang sudah disubmit
  const [formResult, setFormResult] = useState(null);

  // Fungsi yang dipanggil saat formulir disubmit
  const onSubmit = (values) => {
    // Membuat objek hasil formulir dari nilai yang disubmit
    const result = {
      firstname: values.firstname,
      lastname: values.lastname,
      employeed: !!values.employeed, // Mengubah menjadi boolean dengan !! operator
      education: values.education,
      expertise: values.expertise || [], // Memastikan expertise berupa array
      tech: values.tech,
      notes: values.notes,
    };
    // Menyimpan hasil formulir ke dalam state
    setFormResult(result);
    // alert(JSON.stringify(result, null, 2));
  };

  // Fungsi untuk mereset nilai formulir ke nilai awal
  const resetForm = () => {
    setFormValues(initialValues); // Mengatur kembali nilai formValues ke initialValues
  };

  return (
    <div className="flex justify-center m-10">
      <div className="card bg-base-100 w-96 shadow-xl justify-center my-10">
        <div className="card-body">
          <p className="text-center font-bold text-lg">Employee Form</p>
        </div>
        <div className="p-10">
          {/* Komponen Form menggunakan react-final-form */}
          <Form
            onSubmit={onSubmit} // Fungsi onSubmit saat formulir disubmit
            initialValues={formValues} // Nilai awal formulir
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                {/* Input field untuk Firstname */}
                <div className="flex flex-row gap-5">
                  <label className="font-bold text-l w-full max-w-24">Firstname</label>
                  <Field
                    name="firstname"
                    component="input"
                    placeholder="Firstname"
                    className="input input-bordered w-full max-w-xs max-h-8"
                  />
                </div>
                {/* Input field untuk Lastname */}
                <div className="flex flex-row gap-5 my-5">
                  <label className="font-bold text-l w-full max-w-24">Lastname</label>
                  <Field
                    name="lastname"
                    component="input"
                    placeholder="Lastname"
                    className="input input-bordered w-full max-w-xs max-h-8"
                  />
                </div>
                {/* Checkbox untuk Employeed */}
                <div>
                  <label className="font-bold text-l mr-5 w-full max-w-24">Employeed</label>
                  <Field
                    name="employeed"
                    component="input"
                    type="checkbox"
                    className="custom-control-input ml-5"
                    id="employeed"
                  />
                </div>
                {/* Select box untuk Education */}
                <div className="flex flex-row my-5">
                  <label className="font-bold text-l mr-5 w-full max-w-24">Education</label>
                  <Field
                    name="education"
                    component="select"
                    className="select select-bordered select-sm w-full max-w-xs"
                  >
                    <option value="">Select Education</option>
                    <option value="highschool">High School</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                  </Field>
                </div>
                {/* Checkbox untuk Expertise */}
                <div className=" flex flex-row my-5">
                  <label className="font-bold text-l mr-5 w-full max-w-24">Expertise</label>
                  <div>
                    <div className="custom-control custom-checkbox custom-control-inline">
                      <Field
                        name="expertise"
                        component="input"
                        type="checkbox"
                        value="HTML"
                        className="custom-control-input"
                        id="HTML"
                      />
                      <label
                        className="custom-control-label ml-2"
                        htmlFor="HTML"
                      >
                        HTML
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox custom-control-inline">
                      <Field
                        name="expertise"
                        component="input"
                        type="checkbox"
                        value="CSS"
                        className="custom-control-input"
                        id="CSS"
                      />
                      <label
                        className="custom-control-label ml-2"
                        htmlFor="CSS"
                      >
                        CSS
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox custom-control-inline">
                      <Field
                        name="expertise"
                        component="input"
                        type="checkbox"
                        value="javascript"
                        className="custom-control-input"
                        id="javascript"
                      />
                      <label
                        className="custom-control-label ml-2"
                        htmlFor="javascript"
                      >
                        Javascript
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox custom-control-inline">
                      <Field
                        name="expertise"
                        component="input"
                        type="checkbox"
                        value="nodejs"
                        className="custom-control-input"
                        id="nodejs"
                      />
                      <label
                        className="custom-control-label ml-2"
                        htmlFor="nodejs"
                      >
                        NodeJs
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox custom-control-inline">
                      <Field
                        name="expertise"
                        component="input"
                        type="checkbox"
                        value="reactjs"
                        className="custom-control-input"
                        id="reactjs"
                      />
                      <label
                        className="custom-control-label ml-2"
                        htmlFor="reactjs"
                      >
                        ReactJs
                      </label>
                    </div>
                  </div>
                </div>
                {/* Radio button untuk Preferred Technology */}
                <div className="flex flex-row">
                  <label className="font-bold text-l mr-5 w-full max-w-24">
                    Preferred <br /> Technology
                  </label>
                  <div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <Field
                        name="tech"
                        component="input"
                        type="radio"
                        value="frontend"
                        className="custom-control-input"
                        id="frontend"
                      />
                      <label
                        className="custom-control-label ml-2"
                        htmlFor="frontend"
                      >
                        Frontend
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <Field
                        name="tech"
                        component="input"
                        type="radio"
                        value="backend"
                        className="custom-control-input"
                        id="backend"
                      />
                      <label
                        className="custom-control-label ml-2"
                        htmlFor="backend"
                      >
                        Backend
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <Field
                        name="tech"
                        component="input"
                        type="radio"
                        value="fullstack"
                        className="custom-control-input"
                        id="fullstack"
                      />
                      <label
                        className="custom-control-label ml-2"
                        htmlFor="fullstack"
                      >
                        Full Stack
                      </label>
                    </div>
                  </div>
                </div>
                {/* Textarea untuk Notes */}
                <div className="flex flex-row my-5">
                  <label className="font-bold text-l mr-5 my-5 w-full max-w-24">Notes</label>
                  <Field
                    name="notes"
                    component="textarea"
                    className="textarea textarea-bordered textarea-xs w-full max-w-xs my-2"
                  />
                </div>
                {/* Tombol untuk submit dan reset formulir */}
                <div className="flex my-5 justify-center">
                  <button
                    type="submit"
                    className="btn btn-info mx-5 text-white"
                    disabled={submitting || pristine} // Disable saat sedang submitting atau pristine
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    disabled={submitting || pristine} // Disable saat sedang submitting atau pristine
                    onClick={() => {
                      resetForm(); // Memanggil fungsi resetForm
                      form.reset(); // Mereset nilai form menggunakan form.final-form
                      setFormResult(null); // Mengatur hasil form menjadi null
                    }}
                  >
                    Reset
                  </button>
                </div>
                {/* Menampilkan hasil formulir jika formResult tidak null */}
                {formResult && (
                  <div className="flex w-full flex-col border-opacity-50">
                    <div className="card bg-base-300 rounded-box grid h-64 place-items-center">
                      <pre className="text-xs my-2">
                        {JSON.stringify(formResult, null, 2)}
                      </pre>
                    </div>
                  </div>
                )}
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
}
