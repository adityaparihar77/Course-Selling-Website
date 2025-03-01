import React, { useState } from "react";
import Footer from '../component/footer';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {

	const history = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function submit(e) {
		e.preventDefault(); //no small errors

		try {
			await axios.post("http://localhost:3001/signup", {
				email, password
			})
				.then(res => {
					console.log(res);
					if (res.data === "exist") {
						alert("user already exist")
					}
					else if (res.data === "notexist") {
						history("/landingPage", { state: { id: email } })
					}
				})
				.catch(e => {
					alert("wrong details")
					console.log(e);

				})
		}
		catch(err) {
			console.log(err);
		}
	}

	return (
		<div style={{ backgroundColor: ' #e6ffff', height: '100vh' }} >

			<div className="form-container" style={{ height: '100vh' }}>

				<div className="left_box">
					<img src="/images/courses4.jfif" alt="" />
				</div>
				<div className="right_box">
					<div className="text_FormContact">
						<form action="#" method="post" className="formContact">
							<div className="form-group">
								<label for="email">Email</label>
								<input type="email" id="email" onChange={(e) => { setEmail(e.target.value) }} name="email" required />
							</div>
							<div className="form-group">
								<label for="password">Password</label>
								<input id="password" onChange={(e) => { setPassword(e.target.value) }} name="password" required />
							</div>
							<button type="submit" onClick={submit} style={{ marginTop: '10%' }} >SignUp</button>
							<button style={{marginTop:'10px'}}>	<Link to="/login" >login</Link></button>

						</form>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default SignUp;