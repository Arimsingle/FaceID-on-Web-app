import firebase from "../lib/firebase";
import { useState, useEffect } from "react";
import 'firebase/auth'
import { auth } from "firebase";
import wellcome from "./wellcome";
import Sign_up from "./Sign_up";
import Router from 'next/router'
const Login = () => {
    var x;
    useEffect(() => {
        /* const db = firebase.firestore();
        db.collection("UserF").doc("test")
            .onSnapshot(function (doc) {
                console.log("Current data: ", doc && doc.data().email);
                setUserLI({
                    emailLI: doc.data().email,
                    passwordLI: doc.data().password
                })
            }); */
    }, [0])
    const facescan = (e) => {
        e.preventDefault();
        const db = firebase.database();
        var scoresRef = firebase.database().ref("users/User");
        scoresRef.orderByValue().limitToLast(3).on("value", function (snapshot) {
            snapshot.forEach(function (data) {
                console.log(data.node_.children_.root_.value.value_);
                console.log(data.node_.children_.root_.left.value.value_);
                console.log(data.node_.children_.root_.right.value.value_);
                setUserLI({
                    emailLI: data.node_.children_.root_.left.value.value_,
                    passwordLI: data.node_.children_.root_.right.value.value_
                })
            });
        });
        alert('สแกนเรียบร้อยเข้าสู่ระบบได้เลย')
    }
    const facelogin = (e) => {
        e.preventDefault();
        const { emailLI, passwordLI, message, currentUser } = userLI
        firebase.auth().signInWithEmailAndPassword(emailLI, passwordLI)
            .then(function (firebaseUser) {
                if (firebaseUser) {
                    Router.push('/Sign_up')
                }
            })
            .catch(function (error) {
                console.log(error)
                alert(error)
            });
        setUserLI({
            emailLI: '',
            passwordLI: ''
        })
    }
    const writeUserData = (e) => {
        /*         e.preventDefault();
                const db = firebase.firestore();
                const userRef = db.collection('UserF').doc('test').set({
                    name: 'Arim',
                    email: 'Arim@gmail.com',
                    password: '123456'
                });
                const value = db.collection('UserF').doc('test').get()
                console.log(value)
                db.collection("UserF").doc("test")
                    .onSnapshot(function (doc) {
                        console.log("Current data: ", doc && doc.data().email);
        
                    });
                //console.log(userRef)
        
                         var ref = firebase.database().ref("users/Arim");
                        ref.orderByKey().endAt("Arim").on("child_added", function (snapshot) {
                            console.log(snapshot);
                        });  */
    }
    const writeUserDatas = (e) => {
        e.preventDefault();
        const db = firebase.database();
        //data = {"name": "Mortimer 'Morty' Smith555"}
        /* const userRef = db.ref("users/User").child("Info").set({
            name: 'Arima',
            email: 'Arima@gmail.com',
            password: '123456'
        })
        console.log(db.ref("users/User").set) */


        var scoresRef = firebase.database().ref("users/User");
        scoresRef.orderByValue().limitToLast(3).on("value", function (snapshot) {
            snapshot.forEach(function (data) {
                console.log(data.node_.children_.root_.value.value_);
                console.log(data.node_.children_.root_.left.value.value_);
                console.log(data.node_.children_.root_.right.value.value_);
            });
        });
    }
    const [data, setData] = useState({
        "name": "Mortimer",
    })
    const LOGIN = (e) => {
        e.preventDefault();
        const { emailLI, passwordLI, message, currentUser } = userLI
        firebase.auth().signInWithEmailAndPassword(emailLI, passwordLI)
            .then(function (firebaseUser) {
                if (firebaseUser) {
                    x = firebaseUser
                    console.log(firebaseUser)
                    Router.push('/Sign_up')
                }
            })
            .catch(function (error) {
                console.log(error)
                alert(error)
            });
        setUserLI({
            emailLI: '',
            passwordLI: ''
        })
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        const { emailSN, passwordSN } = userSN
        if (emailSN.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (passwordSN.length < 4) {
            alert('Please enter a password.');
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(emailSN, passwordSN).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error)
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
        setUserSN({
            emailSN: '',
            passwordSN: ''
        })
    }

    const [userSN, setUserSN] = useState({
        emailSN: '',
        passwordSN: '',
    })
    const [userLI, setUserLI] = useState({
        emailLI: '',
        passwordLI: '',
    })
    const [test, setTest] = useState({
        emailt: '',
        passwordt: '',
        namet: ''
    })
    return (
        <div>
            <section className="section container">
                <div className="columns is-centered">
                    <div className="column is-half">
                        <form>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input type='text' value={userSN.emailSN} onChange={(e) => setUserSN({ ...userSN, emailSN: e.target.value })} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input type="password" value={userSN.passwordSN} onChange={(e) => setUserSN({ ...userSN, passwordSN: e.target.value })} />
                                </div>
                            </div>
                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-link" onClick={handleSignUp}>SIGN UP</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <div>
                <section className="section container">
                    <div className="columns is-centered">
                        <div className="column is-half">
                            <form>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input type='text' value={userLI.emailLI} onChange={(e) => setUserLI({ ...userLI, emailLI: e.target.value })} />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control">
                                        <input type="password" onChange={(e) => setUserLI({ ...userLI, passwordLI: e.target.value })} />
                                    </div>
                                </div>
                                <div className="field is-grouped">
                                    <div className="control">
                                        <button className="button is-link" onClick={writeUserDatas}>LOGIN</button>
                                    </div>
                                    {/* <div>
                                    <button className="button is-link" onClick={writeUserData}>DATABASE</button>
                                    </div> */}
                                    <div>
                                        <button className="button is-link" onClick={facescan}>FACE SCAN</button>
                                    </div>
                                    <div>
                                        <button className="button is-link" onClick={facelogin}>FACE LOGIN</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <div>
                </div>
            </div>
        </div>
    )
}
export default Login;
