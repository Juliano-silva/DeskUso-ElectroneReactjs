import React from "react"
import emailjs from 'emailjs-com'
import style from './Style.module.css'
export default function Email(){
    function EnviarEmail(e){
          e.preventDefault();

          emailjs.sendForm('service_l0hxktd', 'template_uxizrxe', e.target, 'OQ16vIH0bRwM_vEya')
            .then((result) => {
                alert("Messagem enviada com sucesso")
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }
    return(
        <div>
            <form onSubmit={EnviarEmail} className={style.Form}>
                <div>
                    <label>Nome</label>
                    <input type="text" autoFocus required placeholder="Nome" name="name" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" required placeholder="Email" name="email"/>
                </div>
                <div>
                    <label>Message</label>
                    <textarea type="text" required placeholder="message" name="message"/>
                </div>
                <div>
                <button type="submit" className={style.ButtonEmail}>Enviar Message</button>
                </div>
            </form>
        </div>
        )
}
