const ContactPage = () => {
    return (
        <main className="container row">
            <h1>Zona de contacto</h1>
            <form action="https://formspree.io/f/mjvdjlwa" method="POST" onsubmit="return validateForm()">
                <label for="name">Nombre:</label>
                <p id="name-e" className="d-none" >Por favor, ingrese su nombre.</p>
                <input className="contactinp" type="text" id="name" name="name">
                </input>
                <label for="email">Correo electrónico:</label>
                <p id="email-e" className="d-none" >Por favor, ingrese su correo electrónico.</p>
                <input className="contactinp" type="email" id="email" name="_replyto">
                </input>
                <label for="subjet">Motivo:</label>
                <p id="subject-e" className="d-none" >Por favor, seleccione un motivo.</p>
                <select className="contactSlct" id="subject" name="_subject">
                    <option selected disabled value="default">Seleccione una opcion</option>
                    <option value="consulta">Consultas</option>
                    <option value="reclamos">Reclamos</option>
                    <option value="sugerencia">Sugerencias</option>
                </select>

                <label for="message" >Mensaje:</label>
                <p id="message-e" className="d-none" >Por favor, ingrese su mensaje.</p>
                <textarea id="message" name="message" rows="9"></textarea>
                <input id="btnContact" className="contactinp" type="submit" value="Enviar"></input>
            </form>
        </main>
    );
};

export default ContactPage;