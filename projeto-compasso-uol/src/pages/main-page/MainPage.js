import axios from "axios"
import { useState } from "react"
import { useInput } from "../../constants/useInput"
import UserResults from "../../components/user-results/UserResults"
import SearchUser from "../../components/search-user/SearchUser"
import { GlobalStyle } from '../../GlobalStyle'
import { MainPageStyle } from './styles.js'
import { api } from '../../constants/api'

export default function MainPage() {

    const [usernameValue, onChangeUsername, setUsernameValue] = useInput()
    const [profile, setProfile] = useState()
    const [searchProfile, setSearchProfile] = useState(false)
    const [loading, setLoading] = useState(false)
    const [repos, setRepos] = useState([])

    const onClickSearch = () => {

        setLoading(true)
        setSearchProfile(true)
        setProfile(false)

        axios
            .get(`${api.base_url}/users/${usernameValue}`)
            .then((response) => {
                setProfile(response.data)
                setRepos([])
                setUsernameValue('')
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }

    const onClickRepositories = () => {
        axios.get(`${api.base_url}/users/${profile.login}/repos`)
            .then((response) => setRepos(response.data))
            .catch((err) => console.log(err))
    }

    const onClickStarredRepositories =() => {
        axios.get(`${api.base_url}/users/${profile.login}/starred`)
        .then((response) => setRepos(response.data))
        .catch((err) => console.log(err))
    }

    return (
        <MainPageStyle>
            < GlobalStyle />
            <SearchUser usernameValue={usernameValue}
                onChangeUsername={onChangeUsername}
                onClickSearch={onClickSearch}
            />
            {searchProfile &&
                <UserResults profile={profile}
                    onClickRepositories={onClickRepositories}
                    onClickStarredRepositories={onClickStarredRepositories}
                    searchProfile={searchProfile}
                    repos={repos}
                    loading={loading}
                />}
        </MainPageStyle >
    )
}