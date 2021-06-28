import Repos from '../repositories/Repos.js'
import { ShowProfile, CardProfile } from './styled.js'

export default function UserResults(props) {
    const handleClick = () => {
        props.onClickRepositories()
    }

    const handleClickStarred = () => {
        props.onClickStarredRepositories()
    }

    return (
        <ShowProfile>
            <CardProfile>
                {props.profile ?
                    <>
                        <img src={props.profile.avatar_url} alt={`avatar de ${props.profile.name}`}/>
                        <p>{props.profile.name}</p>
                        <button onClick={handleClick}>Ver repositórios</button>
                        <button onClick={handleClickStarred}>Ver repositórios <br/>mais visitados</button>
                    </> :
                    props.loading ?
                        <p> carregando... </p> :
                        <p> Perfil não encontrado!</p>}
            </CardProfile>
            {props.repos && <Repos repos={props.repos} />}
        </ShowProfile>
    )
}