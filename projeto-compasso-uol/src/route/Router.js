import { Route, Switch, BrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/login-page/LoginPage'
import MainPage from '../pages/main-page/MainPage'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <LoginPage />
                </Route>
                <Route exact path={'/Home'}>
                    <MainPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}