import { Repositories, RepositoryCard } from "./styled"
export default function Repos(props) {

    return (
        <Repositories>
            {props.repos &&
                props.repos.map((repository) => {
                    return <RepositoryCard key={repository.id}>
                        <h5>{repository.name}</h5>
                        <a href={repository.owner.html_url + '/' + repository.name} target={'_blank'} rel="noreferrer">
                            <button>Ir para repositório</button>
                        </a>
                    </RepositoryCard>
                })
            }
        </Repositories>
    )
}