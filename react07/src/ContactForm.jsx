import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const {loading,submitContact,successMessage,errorMessage}=useContactForm()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlesubmit=(e)=>{
    e.preventDefault()

  }
  return (
    <div>
      ContactForm
      <form>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder=""
        />

        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter Email"
        />

        <textarea
          name="message"
          id=""
          value={form.message}
          onChange={handleChange}
          placeholder="your message"
        ></textarea>

        <button type="submit" disabled={loading}>
            {}
        </button>
      </form>
    </div>
  );
}
