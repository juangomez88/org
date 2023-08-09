import './Footer.css'

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href=""></a>
            <img src="/img/facebook.png" alt="Facebook" />
            <a href=""></a>
            <img src="/img/twitter.png" alt="twitter" />
            <a href=""></a>
            <img src="/img/instagram.png" alt="" />
        </div>
        <img src="/img/Logo.png" alt="org" />
        <strong>Desarrollado por: Juan Carlos Gómez Jaramillo.</strong>
    </footer>
}

export default Footer