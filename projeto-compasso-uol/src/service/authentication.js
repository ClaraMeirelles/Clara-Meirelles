import firebase from '../config/firebase-config'
import { githubProvider } from '../config/authMethod'

const githubAuthentication = () => {
    return firebase.auth().signInWithPopup(githubProvider)
        .then((res) => {
            console.log("Res",res)
        })
        .catch((err) => {
            return err
        })
}

export default githubAuthentication; 