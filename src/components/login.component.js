import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  function handleSubmitForm(e) {
    e.preventDefault();
    let username = e.currentTarget.username.value;
    let password = e.currentTarget.password.value;

    navigate("/home/dashboard");
  }

  return (
    <div>
      <section>
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          style={{ width: "150px" }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">
                          Login 
                        </h4>
                      </div>

                      <form onSubmit={handleSubmitForm}>
                        <div className="form-outline mb-4">
                        <label
                            className="form-label"
                            htmlFor="username"
                          >
                            Username
                          </label>
                          <input
                            type="email"
                            id="username"
                            className="form-control"
                            placeholder="Enter your Username"
                          />
                          
                        </div>

                        <div className="form-outline mb-4">
                          
                        <label
                            className="form-label"
                            htmlFor="password"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter your Password"
                          />
                        </div>

                        <div className="d-flex justify-content-evenly align-items-center">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="submit"
                            
                          >
                            Log in
                          </button>
                          <a className="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
