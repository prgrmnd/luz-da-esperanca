import { useState } from 'react';

export default function ContactForm() {
  const [message, setMessage] = useState('');
  const submit = (event) => { event.preventDefault(); setMessage('Mensagem enviada! Em breve retornaremos.'); event.currentTarget.reset(); };
  return <form className="contact-form" onSubmit={submit} aria-label="Formulario de contato"><div className="form-row"><div className="field"><label htmlFor="nome">Nome</label><input id="nome" name="nome" required placeholder="Seu nome" /></div><div className="field"><label htmlFor="email">E-mail</label><input id="email" name="email" type="email" required placeholder="seu@email.com" /></div></div><div className="field"><label htmlFor="assunto">Assunto</label><input id="assunto" name="assunto" required placeholder="Assunto da mensagem" /></div><div className="field"><label htmlFor="mensagem">Mensagem</label><textarea id="mensagem" name="mensagem" required placeholder="Escreva sua mensagem..." /></div><button type="submit" className="btn btn-orange btn-submit">Enviar mensagem</button><p className="form-msg" role="status" aria-live="polite">{message}</p></form>;
}
