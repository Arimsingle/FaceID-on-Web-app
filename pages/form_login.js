import firebase from "../lib/firebase";
import { useState, useEffect } from "react";
import 'firebase/auth'
import { auth } from "firebase";
import wellcome from "./wellcome";
import Sign_up from "./Sign_up";
import Router from 'next/router'
const Form_login = () => {
    useEffect(() => {
    }, [0])

    const Face_Scan = (e) => {
        e.preventDefault();
        var i = 0;
        const db = firebase.database();
        var scoresRef = firebase.database().ref("users/User");
        console.log(scoresRef)
        scoresRef.orderByValue().limitToLast(3).on("value", function (snapshot) {
            snapshot.forEach(function (data) {
                console.log(data.node_.children_.root_.value.value_);
                console.log(data.node_.children_.root_.left.value.value_);
                console.log(data.node_.children_.root_.right.value.value_);
                setUserLI({
                    emailLI: data.node_.children_.root_.left.value.value_,
                    passwordLI: data.node_.children_.root_.right.value.value_
                })
                alert('สแกนเรียบร้อยเข้าสู่ระบบได้เลย')
                i++;
            });
            if(i==0){
                alert('ไม่พบข้อมูล')
            }

        });

    }
    const Face_Login = (e) => {
        e.preventDefault();
        const { emailLI, passwordLI } = userLI
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
    }
    const writeUserDatas = (e) => {
        e.preventDefault();
        const db = firebase.database();
        var scoresRef = firebase.database().ref("users/User");
        scoresRef.orderByValue().limitToLast(3).on("value", function (snapshot) {
            snapshot.forEach(function (data) {
                console.log(data.node_.children_.root_.value.value_);
                console.log(data.node_.children_.root_.left.value.value_);
                console.log(data.node_.children_.root_.right.value.value_);
            });
        });
    }

    const LOGIN = (e) => {
        e.preventDefault();
        const { emailLI, passwordLI } = userLI
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

    const SIGN_UP = (e) => {
        e.preventDefault();
        const db = firebase.database();
        const { emailSN, passwordSN, IDname, name } = userSN
        const userRef = db.ref("users/User").child(IDname).set({
            name: name,
            email: emailSN,
            password: passwordSN
        })
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
            passwordSN: '',
            IDname: '',
            name: ''

        })
    }

    const [userSN, setUserSN] = useState({
        emailSN: '',
        passwordSN: '',
        IDname: '',
        name: ''
    })
    const [userLI, setUserLI] = useState({
        emailLI: '',
        passwordLI: '',
    })
    return (
        <div>
            <div className="layout-regis">
                <section className="section container">
                    <div className="b">
                        <div className="layout-signup">
                            <div><h1 className="text_head">Register</h1></div>
                            <form>
                                <div className="field">
                                    <label className="label">IDname</label>
                                    <div className="control">
                                        <input className="input-colunm" type='text' value={userSN.IDname} onChange={(e) => setUserSN({ ...userSN, IDname: e.target.value })} />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Name</label>
                                    <div className="control">
                                        <input className="input-colunm" type="text" value={userSN.name} onChange={(e) => setUserSN({ ...userSN, name: e.target.value })} />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input className="input-colunm" type='text' value={userSN.emailSN} onChange={(e) => setUserSN({ ...userSN, emailSN: e.target.value })} />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control">
                                        <input className="input-colunm" type="password" value={userSN.passwordSN} onChange={(e) => setUserSN({ ...userSN, passwordSN: e.target.value })} />
                                    </div>
                                </div>
                                <div className="field is-grouped">
                                    <div className="control-button">
                                        <button className="button is-link" onClick={SIGN_UP}>SIGN UP</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <div>
                    <section className="section container">
                        <div className="columns is-centered">
                            <div className="layout-login">
                                <div><h1 className="text_head">Login</h1></div>
                                <form>
                                    <div className="field">
                                        <label className="label">Email</label>
                                        <div className="control">
                                            <input className="input-colunm" type='text' value={userLI.emailLI} onChange={(e) => setUserLI({ ...userLI, emailLI: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Password</label>
                                        <div className="control">
                                            <input className="input-colunm" type="password" value={userLI.passwordLI} onChange={(e) => setUserLI({ ...userLI, passwordLI: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="field is-grouped">
                                        <div className="control-button">
                                            <button className="button is-link" onClick={LOGIN}>LOGIN</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                    <div>
                    </div>
                </div>
                <div>
                    <section className="section container">
                        <div className="columns is-centered">
                            <div className="layout-login">
                                <div><h1 className="text_head">Face ID</h1></div>
                                <form>
                                    <div>
                                        <button className="button" onClick={Face_Scan}>FACE SCAN</button>
                                    </div>
                                    {/* <div className="control-button">
                                        <button className="button" onClick={Face_Login}>FACE LOGIN</button>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                    </section>
                    <div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .input-colunm{
                    border: solid 1px;
                    border-color: #F1980F;
                    padding: 8px 20px;
                    border-radius: 4px;
                    cursor: pointer;
                    float: right;
                    color:#F1980F;
                }
                .input-colunm:hover{
                    box-shadow: 0px 0px 0px 1px #F1980F;
                }
                .label,.text_head{                    
                    font-family:Arial;
                }
                .button{
                    box-shadow: 0px 0px 0px 1px #F1980F;
	                background-color:#FFFFFF;
	                border-radius:10px;
	                border:1px solid #F1980F;
	                cursor:pointer;
	                font-family:Arial;
	                font-size:19px;
	                padding:12px 37px;
	                text-decoration:none;
	                text-shadow:0px 1px 0px #000000;
                }
                .button:hover{
                    background-color:#F1980F;
                }
                .layout-regis{
                    display:flex;
                    flex-direction:row;
                    justify-content:space-around;
                }
                .control-button{
                    margin-top:45px;
                }
                .layout-signup{
                    background-color:white;
                    display: block;
                    margin: 0 auto;
                    margin-bottom: 0.5cm;
                    box-shadow: 0 0 0.5cm rgba(0,0,0,0.3);
                    padding:20px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    width: 10cm;
                    height: 10cm;
                    border-radius: 15px;
                    display:flex;
                    flex-direction:column;

                }
                .layout-login{
                    background-color:white;
                    display: block;
                    margin: 0 auto;
                    margin-bottom: 0.5cm;
                    box-shadow: 0 0 0.5cm rgba(0,0,0,0.3);
                    padding:20px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    width: 10cm;
                    height: 10cm;
                    border-radius: 15px;
                    display:flex;
                    flex-direction:column;
                }
            `}</style>
        </div>
    )
}
export default Form_login;