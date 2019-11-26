import React, { useState } from 'react'

import './contact.css';

const Contact = () => {
  const [name, setName] = useState('')
  const [inputText, setInputText] = useState('')
  const [email, setEmail] = useState('')
  const submit = e => {
    e.preventDefault()
    fetch(`http://qzwxsdcvfrty.com//myproject/users/contactus/`, {
      method: 'POST',
      body: JSON.stringify(
        {
          name: name,
          email: email,
          message: inputText
        })
    })
      .then(res => res.json())
      .catch(e => console.log(e))
  }
  return (
    <div className="contact">
      <p>Contact me</p>
      <form className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Your name.."
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="text">Text: </label>
        <textarea
          id="text"
          placeholder="Write something.."
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
        <br />
        <button type="submit"
          onClick={submit}
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact;