import  styles from"./Signup.module.css";
// import axios from "axios";
import { useState,useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";
function SignupPage(){
    const [user, setUser] = useState('student');

    const [validDetails,setValiddetails]=useState(false);
    const [userData,setUserdata]=useState({user:"",username:"",usermail:"",branch:"cse", passYear:"",job:"",jobDesc:"",year:"1",password:""});
    const studentBtn = useRef(null);
    const alumniBtn = useRef(null);
    useEffect(() => {
        if (user === 'student') {
          studentBtn.current.style.backgroundColor = 'rgb(46, 115, 143)';
          alumniBtn.current.style.backgroundColor = 'rgb(142, 193, 213)';
        } else {
          studentBtn.current.style.backgroundColor = 'rgb(142, 193, 213)';
          alumniBtn.current.style.backgroundColor = 'rgb(46, 115, 143)';
        }
      }, [user]);
    
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
    useEffect(()=>{
        setUserdata({...userData,user:user});
    },[user]);
    //addding event listener to register button
    const register=()=>{
        const uname=unameInput.current.value;
        const usermail=usermailInput.current.value;
        const pwd=pwdInput.current.value;
        const confirm=confirmInput.current.value;
        pwd!==confirm?pwdMatch.current.textContent="Password is not matching":pwdMatch.current.textContent="";
        if(uname  && pwd===confirm){
            console.log(userData);
            navigate("/");
        }
        else{
            console.log("error in password");
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
   
    const currentYear = new Date().getFullYear();
    const startYear = 1996;
    
    // Generate an array of years from startYear to currentYear
    const years = [];
    for (let i = currentYear; i >= startYear; i--) {
      years.push(i);
    }
  
    const [selectedYear, setSelectedYear] = useState(currentYear);

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
                <div id={styles["userselectbox"]}>
                    <button
                        id={styles["studentBtn"]}
                        ref={studentBtn}
                        onClick={() => setUser('student')}
                    >
                        Student
                    </button>
                    <button
                        id={styles["alumniBtn"]}
                        ref={alumniBtn}
                        onClick={() => setUser('alumni')}
                    >
                        Alumni
                    </button>
                </div>

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
                {user==="student" &&<div id={styles["acadamic-box"]}>
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
                </div>}
                {user==="alumni" && <div id={styles.alumni}>
                  <div id={styles.passYear}>
                    <label htmlFor="passYearInput">passedout year  </label><br/>
                        <select 
                        id={styles.passYearInput} 
                        value={selectedYear} 
                        onChange={e=>setUserdata({...userData,passYear:e.target.value})}
                        >
                        {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                        ))}
                        </select>
                    </div>
                    <div id={styles.jobBox}>
                        <label htmlFor="job">enter your present job</label><br/>
                        <select name="" id={styles.job}
                        onChange={e=>setUserdata({...userData,job:e.target.value})} >
                            <option value="higher studies">higher studies</option>
                            <option value="job">job</option>
                            <option value="business">business</option>
                            <option value="coaching">preparing for some other exams</option>
                        </select>
                    </div>
                    <div id={styles.jobDescBox}> 
                            <input type="text" 
                             id={styles.jobDesc} 
                             placeholder="enter your current role" 
                             onChange={e=>setUserdata({...userData,jobDesc:e.target.value})}/>
                    </div>
                    </div>}
                <div id={styles["pwd-box"]}>
                    <p id={styles["pwd"]}>Create Password</p>
                    <input 
                    type="password" 
                    placeholder="Enter a password" 
                    id={styles["pwd-input"]} 
                    ref={pwdInput} 
                     onChange={e=>setUserdata({...userData,password:e.target.value})}/>
                </div>
                <div id={styles["confirm-box"]}>
                    <p id={styles["confirm-pwd"]}>Confirm Password</p>
                    <input 
                    type="password" 
                    placeholder="Re-enter your password" 
                    id={styles["confirm-input"]}
                     ref={confirmInput} 
                     />
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