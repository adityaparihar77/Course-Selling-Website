import React, { useState } from "react";
import axios from 'axios'
import Footer from '../component/footer';
import { Link, useNavigate } from "react-router-dom";
function Login() {

	const history = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function submit(e) {
		e.preventDefault(); //no small errors

		try {
			await axios.post("http://localhost:3001/", {
				email, password
			})
				.then(res => {
					if (res.data === "exist") {
						history('/landingPage', { state: { id: email } })
					}
					else if (res.data === "notexist") {
						alert('Invalid email or password');
					}
				})
				.catch(e => {
					alert("wrong details")
					console.log(e);

				})
		}
		catch {
			console.log(e);
		}
	}


	return (
		<div style={{ backgroundColor: ' #e6ffff', height: '100vh' }} >

			<div className="form-container" style={{ height: '100vh' }}>

				<div className="left_box">
					<img src="/images/login.png" alt="" />
				</div>
				<div className="right_box">
					<div className="text_FormContact">
						<form action="POST" method="post" className="formContact">
							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input type="email" onChange={(e) => { setEmail(e.target.value) }} id="email" name="email" required />
							</div>
							<div className="form-group">
								<label for="password">Password</label>
								<input id="password" onChange={(e) => { setPassword(e.target.value) }} name="password" required />
							</div>
							<button type="submit" onClick={submit} style={{ marginTop: '10%' }} >Login</button>
							<button style={{marginTop:'10px'}} > <Link to="/signup" >SignUp</Link> </button> 


						</form>

					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Login;