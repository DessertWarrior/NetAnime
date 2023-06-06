import { useState, useRef, useEffect } from "react";
import { signIn } from "../../Functions/fetchData.js";
function LoginModal(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [alertPopup, setAlertPopup] = useState(false);

  const modalRef = useRef(null);
  const pwdRef = useRef(null);
  const userRef = useRef(null);
  const signInEvent = async () => {
    const pRef = pwdRef.current;
    const uRef = userRef.current;
    const isAuthorized= await signIn({
      username: uRef.value,
      password: pRef.value,
    });
    if (!isAuthorized)
      setAlertPopup(true);
    else {
      setAlertPopup(false);
      props.setAuth(uRef.value)
      const modal = modalRef.current;
    }
  };
  const handleBlur = ()=>{
    setAlertPopup(false);  // If login screen is not onfocus anymore, remove alert
  }
  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="login"
      aria-hidden="true"
      ref = {modalRef}
      onBlur={()=>handleBlur()}
    >
      <div className="modal-dialog ms-0 me-0">
        <div className="modal-content">
          <div className="modal-body p-0">
          {!alertPopup&& !props.auth?null:props.auth?
          (<div className="alert alert-success position-absolute" style={{width:'100%'}} role="alert">
            Login Successfully!
          </div>)
          :
          (
            <><svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
                  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </symbol>
                </svg>
                <div className="alert alert-danger position-absolute d-flex" style={{ width: '100%' }} role="alert">
                    <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Danger:" style={{height:'20px',width:'20px'}}><use xlinkHref="#exclamation-triangle-fill" /></svg>
                    <div>
                      Invalid email or password
                    </div>
                  </div></>)}

            <div className="d-flex">
              <img
                id="loginImage"
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201903%2F04%2F20190304184551_K4cdZ.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1688444474&t=ba7bef7791cd2482927f38eeb11fc484"
              ></img>
              <div id="loginAuth" className="p-5 ms-auto me-auto">
                <h1 className="text-danger title text-center pb-3 pt-4">
                  <strong>NetAnime</strong>
                </h1>
                <p className="text-secondary text-center pt-5">
                  Welcome to NetAnime
                </p>

                <div className="pt-4" id="loginForm">
                  <form id="usernameLogin" className="d-grid pb-3">
                    <label
                      className="loginAuthLabel"
                      aria-labelledby="username"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      className="border-0 border-bottom"
                      type="text"
                      id="username"
                      placeholder="Enter username..."
                      ref={userRef}
                    ></input>
                  </form>

                  <form id="passwordLogin" className="d-grid pb-3">
                    <label
                      className="loginAuthLabel"
                      aria-labelledby="username"
                      htmlFor="username"
                    >
                      Password
                    </label>
                    <input
                      className="border-0 border-bottom"
                      type={showPassword ? "text" : "password"}
                      id="username"
                      placeholder="Enter password..."
                      ref={pwdRef}
                    ></input>
                  </form>

                  <form id="showPasswordLogin">
                    <input
                      type="checkbox"
                      onChange={(event) => {
                        event.target.checked
                          ? setShowPassword(true)
                          : setShowPassword(false);
                      }}
                    ></input>
                    <label className="ps-2 ">Show Password</label>
                  </form>
                </div>
                <div className="d-flex justify-content-center">
                  <div
                    role="button"
                    className="button bg-secondary text-white mt-5 p-2 ps-5 pe-5 fs- rounded-5"
                    id="signInAuthBt"
                    onClick={signInEvent}
                  >
                    Sign In
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginModal;
