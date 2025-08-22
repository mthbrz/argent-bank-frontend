import "../components/css/input.css"
import Footer from "../components/jsx/footer";
import React from "react";

  export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7a0c7028-3e9e-4885-8122-b11131be56fc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Merci pour votre message !");
      event.target.reset();
    } else {
      console.log("Désolé.e, il y a eu une erreur", data);
      setResult(data.message);
    }
  };

  return (
     <>
    <div>
      <h1 className="text-3xl font-bold underline">Contact</h1>
      <p>Un projet ? Une demande ? Un café ?</p>
      <p>Vous pouvez me laisser un message, je me ferai un plaisir d'y répondre !</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="name" aria-label="Nom">Nom :</label>
        <input type="text" id="name" required aria-label="Nom"/>
        <label htmlFor="email" aria-label="Email">Email :</label>
        <input type="email" id="email" required aria-label="Email"/>
        <label htmlFor="message" aria-label="Message">Message :</label>
        <textarea id="message" required aria-label="Message"></textarea>

        <button type="submit">Envoyer</button>

      </form>
      <span>{result}</span>

         <p>Vous pouvez aussi me contacter ici:</p>
         <ul>
           <li><a href="https://www.linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
           <li><a href="https://github.com/votreprofil" target="_blank" rel="noopener noreferrer">GitHub</a></li>
           <li>Et au 0617780116</li>
         </ul>
    </div>
     <Footer />
 </>
  );
}
