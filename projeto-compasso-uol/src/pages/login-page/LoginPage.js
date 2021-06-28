import githubAuthentication from "../../service/authentication"
import { githubProvider } from "../../config/authMethod"
import { useHistory } from "react-router-dom"
import { Login } from './styles.js'


export default function LoginPage() {
    const history = useHistory()
    const loginGitHub = async (provider) => {
        await githubAuthentication(provider)
        history.push('/Home')
    }
    return (
        <Login>
            <div>
                <button onClick={() => loginGitHub(githubProvider)}>Entrar pelo GitHub</button>
            </div>
        </Login>
    )
}