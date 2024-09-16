import  styles from"./Signup.module.css";
// import axios from "axios";
import { useState,useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";
function SignupPage(){
    const [validDetails,setValiddetails]=useState(false);
    const [dialogOpen,setDialogopen]=useState(false);
    const [userData,setUserdata]=useState({username:"",usermail:"",branch:"cse",year:"1",password:""});
    const [otp,setOtp]=useState();
    const [sysOTP,setSysOTP]=useState();
    let navigate=useNavigate();
    //accesing dom using useRef hook
    const unameInput=useRef(null);
    const usermailInput=useRef(null);
    const pwdInput=useRef(null);
    const confirmInput=useRef(null);
    const branchInput=useRef(null);
    const yearInput=useRef(null);
    const registerBtn=useRef(null);
    const mailCheck=useRef(null);
    const pwdMatch=useRef(null);
    const dialogMsg=useRef(null);
    //addding event listener to register button
    const register=()=>{
        const uname=unameInput.current.value;
        const usermail=usermailInput.current.value;
        const branch=branchInput.current.value;
        const year=yearInput.current.value;
        const pwd=pwdInput.current.value;
        const confirm=confirmInput.current.value;
        usermail.indexOf("@gvpce.ac.in")==-1?mailCheck.current.textContent="Enter valid mail credentials":mailCheck.current.textContent="";
        pwd!==confirm?pwdMatch.current.textContent="Password is not matching":pwdMatch.current.textContent="";
        if(uname &&  usermail.indexOf("@gvpce.ac.in")!==-1 && pwd===confirm){
            setValiddetails(true);
            let userdetail={};
            userdetail["usermail"]=usermail;
            userdetail["username"]=uname;
            userdetail["password"]=pwd;
            userdetail["year"]=year;
            userdetail["branch"]=branch;
            postData();
        }
        else{
            setValiddetails(false);
        }
    }
    // const postData=async()=>{
    //     try{
    //         const response=await axios.post("https://gvpblind.onrender.com/signup",userData);
    //         console.log(response);
    //         if(response.data==="already user registered"){
    //             mailCheck.current.textContent="already user registered";
    //         }
    //         else{
    //             setSysOTP(response.data);
    //             handleOpen();
    //         }
    //     }
    //     catch(error){
    //         console.error("Error during Signup: ", error);
    //     }

    // }
    // const validateOtp=()=>{
    //     if(otp==sysOTP){
    //         dialogMsg.current.textContent="";
    //         navigate("/login");
    //     }
    //     else{
    //         dialogMsg.current.textContent="enter valid OTP";
    //     }
    // }
      

    return(
        <>
        <div id={styles.container}>
            <br /><br></br>
            <div id={styles["signup-box"]}>
            <h1 id={styles["heading"]}>SignUp</h1>
            <br></br>
                <code>
                    /fill this form up to register/
                </code>
                <div id={styles["uname-box"]}>
                    <p id={styles["uname"]}>Username</p>
                    <input 
                    type="text" 
                    placeholder="Enter a unique Username"
                    id={styles["uname-input"]} 
                    ref={unameInput} 
                    onChange={e=>setUserdata({...userData,username:e.target.value})}
                    />
                </div>
                <div id={styles["email-box"]}>
                    <p id={styles["email"]}>Domain mail-id</p>
                    <input type="email" id={styles["email-input"]} placeholder="Enter your college Domain Mail Id" ref={usermailInput}
                     onChange={e=>setUserdata({...userData,usermail:e.target.value})}/>
                    <p id={styles["mail-check"]} ref={mailCheck}></p>
                </div>
                <div id={styles["acadamic-box"]}>
                    <div id={styles["branch-box"]}>
                        <p id={styles["branch"]}>Branch</p>
                        <select name="" id={styles["branch-input"]} ref={branchInput}
                         onChange={e=>setUserdata({...userData,branch:e.target.value})}>
                            <option value="cse">CSE</option>
                            <option value="ece">ECE</option>
                            <option value="eee">EEE</option>
                            <option value="mech">MECH</option>
                            <option value="civil">CIVIL</option>
                            <option value="chem">CHEMICAL</option>
                        </select>
                    </div>
                    <div id={styles["year-box"]}>
                        <p id={styles["year"]}>Year</p>
                        <select name="" id={styles["year-input"]} ref={yearInput}
                         onChange={e=>setUserdata({...userData,year:e.target.value})}>
                            <option value="1">first year</option>
                            <option value="2">second year</option>
                            <option value="3">third year</option>
                            <option value="4">fourth year</option>
                        </select>
                    </div>
                </div>
                <div id={styles["pwd-box"]}>
                    <p id={styles["pwd"]}>Create Password</p>
                    <input type="password" placeholder="Enter a password" id={styles["pwd-input"]} ref={pwdInput} 
                     onChange={e=>setUserdata({...userData,password:e.target.value})}/>
                </div>
                <div id={styles["confirm-box"]}>
                    <p id={styles["confirm-pwd"]}>Confirm Password</p>
                    <input type="password" placeholder="Re-enter your password" id={styles["confirm-input"]} ref={confirmInput} />
                    <p id={styles["pwd-match"]} ref={pwdMatch}></p>
                </div>
                <div id={styles["btn-box"]}>
                    <button id={styles["register-btn"]} ref={registerBtn} onClick={register}>Register</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default SignupPage