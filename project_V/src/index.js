import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


function App1() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ecd9bf96-7ddd-4621-87dd-c2bf1c695827");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
      <form onSubmit={onSubmit}>
        <input type="text" name="name"/>
        <input type="email" name="email"/>
        <textarea name="message"></textarea>
        <button type="submit">Submit Form</button>
      </form>
  );
}

export default App1;