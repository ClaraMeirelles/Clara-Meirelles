import { SearchUserSection } from './styles.js'

export default function SearchUser(props) {

    const handleOnKeyDown = (e) => {
        if (e.key === 'Enter'){
            props.onClickSearch()
        }
    }
    return (
        <SearchUserSection>
            <h3>Buscar Usuário</h3>
            <div>
                <input value={props.usernameValue}
                onChange={props.onChangeUsername}
                placeholder={'Digite o login do usuário para buscar'} 
                onKeyDown={handleOnKeyDown}/>
                <button onClick={props.onClickSearch}>Buscar</button>
            </div>
        </SearchUserSection>
    )
}