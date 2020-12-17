import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth'
import { Col, Container} from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";


if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyDTWBteXw0tA7hZ0OQCJmzl8q_6lcK18Jc",
      authDomain: "hive-db3b9.firebaseapp.com",
      projectId: "hive-db3b9",
      storageBucket: "hive-db3b9.appspot.com",
      messagingSenderId: "306107300911",
      appId: "1:306107300911:web:42ab214d27d522768bdada",
      measurementId: "G-H9W71X85WS"
    })
  
  }

const auth = firebase.auth();

const signIn = ()=> {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
      }
    return (
        <Container className="col-sm-6 signIn">
      <div className="rounded bg-dark shadow-lg">
        <Col className="col">
          <div className="row justify-content-center text-white rounded-top" style={{backgroundColor:'black'}}>
            <h1 className=""> log in </h1>
          </div>
               
          <Col className="d-flex justify-content-center m-0 p-5">
            <button onClick={signInWithGoogle} className="btn btn-primary ml-2 mb-2 text-center"><FcGoogle/> Sign in with Google</button>
          </Col>

        </Col>

      </div>
    </Container>
    )
}

export default signIn ;