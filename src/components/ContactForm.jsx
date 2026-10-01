import { useState } from 'react';
import { isContactFormConfigured, sendContactMessage } from '../services/contactService';

export default function ContactForm() {
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSending(true);
    setMessage('');
    try {
      await sendContactMessage({
        name: formData.get('nome'),
        email: formData.get('email'),
        subject: formData.get('assunto'),
        message: formData.get('mensagem'),
        botcheck: Boolean(formData.get('website')),
      });
      form.reset();
      setMessage('Mensagem enviada! Em breve retornaremos.');
    } catch (error) {
      console.error('Erro ao enviar formulário de contato:', error);
      setMessage(error.message || 'Não foi possível enviar sua mensagem. Tente novamente.');
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={submit} aria-label="Formulario de contato">
      <div className="form-row">
        <div className="field">
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" required maxLength="120" placeholder="Seu nome" />
        </div>
        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" required maxLength="254" placeholder="seu@email.com" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="assunto">Assunto</label>
        <input id="assunto" name="assunto" required maxLength="180" placeholder="Assunto da mensagem" />
      </div>
      <div className="field">
        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" required maxLength="5000" placeholder="Escreva sua mensagem..." />
      </div>
      <div className="contact-form-trap" aria-hidden="true">
        <label htmlFor="website">Não preencha este campo</label>
        <input id="website" name="website" tabIndex="-1" autoComplete="off" />
      </div>
      <button type="submit" className="btn btn-orange btn-submit" disabled={sending || !isContactFormConfigured}>
        {sending ? 'Enviando...' : 'Enviar mensagem'}
      </button>
      <p className="form-msg" role="status" aria-live="polite">
        {message || (!isContactFormConfigured ? 'O formulário de contato ainda não está configurado.' : '')}
      </p>
    </form>
  );
}
