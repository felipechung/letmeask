import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIcon from '../assets/images/google-icon.svg'

export function Home () {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas  da sua audiência em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="Letmeask" />
                </div>
                <button>
                    <img src={googleIcon} alt="Logo do google" />
                    Crie sua sala com o google
                </button>
                <div>ou entre em uma sala</div>
                <form action="">
                    <input type="text"
                            placeholder="Digite o código da sala"
                    />
                    <button type="submit">Entrar na sala</button>
                </form>
            </main>
        </div>
    )
}