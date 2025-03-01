import React from "react";
import axios from "axios";
import Header from "../component/header";
import Footer from "../component/footer";
import { useState } from "react";


function EmailSend() {

  const [msg, setMsg] = useState('');
  const [user, setUser] = useState({
    from: "",
    name:"",
    Message: ""
  });
  const {from ,name, Message } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit1 = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/users/", user)
        .then(response => {
          setMsg(response.data.respMesg)
        }).catch((err)=>{
          console.log(err);
        })
    } catch (err) {
      console.log("error", err);
    }

  };


  return (
    <div>
      <Header />
      <div className="image1">
        <img src="/images/web-design.jpg" alt="" />
      </div>

      <div className="form-container" style={{ height: '100vh' }}>

        <h2 style={{ fontWeight: 'bold' }}>Contact Us</h2>
        <div className="text_inputContact">




        </div>




        <div className="text_FormContact">
          <form action="#" method="post" className="formContact">
            <p class="mb-3 mt-2" style={{ color: "green", marginLeft: "57px" }}><b>{msg}</b></p>
            <div className="form-group">
              <label for="name">Name</label>
              <input
                onChange={onInputChange}
                type="text"
                placeholder="What's your name?"
                name="name"
                value={name}
                required
              />
            </div>

            <div className="form-group">
              <label for="from">From</label>
              <input type="email" onChange={onInputChange} id="from" name="from" value={from} required />
            </div>

            {/* <div className="form-group">
				<label for="email">Email</label>
				<input type="email" onChange={onInputChange} id="email" name="email" value={email} required />
			</div> */}

            <div className="form-group">
              <label for="message">Message</label>
              <textarea
                type="text"
                className="form-control form-control-lg"
                placeholder="Description"
                name="Message"
                onChange={onInputChange}
                value={Message}
              />
            </div>
            <button onClick={onSubmit1} style={{ marginTop: '10%' }}>Send Mail</button>
          </form>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default EmailSend;