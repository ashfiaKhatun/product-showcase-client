import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const SignIn = () => {

    const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);

    const submitSignIn = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');


        signInUser(email, password)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Success...",
                    text: "Sign In Successful!!!",

                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(() => toast.error('Invalid email or password'))
        e.target.reset();

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Success...",
                    text: "Sign In Successful!!!",

                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control gap-2 mt-6">
                                <button className="btn btn-sm btn-primary">Sign In</button>
                                <button className="btn btn-sm btn-outline">Google</button>
                            </div>
                            <label className="label">
                                <p className="">No account? <Link className="label-text-alt link link-hover" to='/signup'>Sign Up</Link> </p>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;