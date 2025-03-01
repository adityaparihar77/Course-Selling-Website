import axios from "axios";
import React, { useState } from "react";

function Payment() {
  const [Pay, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const { name, email, phoneNumber } = Pay;

  const handleInputChange = (e) => {
    setForm({ ...Pay, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post("http://localhost:3001/forn/", Pay);

      if (response.status === 200) {
        alert('Payment Done!');
      } else {
        alert('Error processing payment');
      }
    } catch (error) {
      console.error(error);
      alert('Error processing payment');
    }
  };

  return (
    <div style={{ backgroundColor: ' #e6ffff', height: '120vh' }}>
      <div className="form-container" style={{ height: '100vh' }}>
        <div className="abhishekImg">
          <img src="./images/abhishek.jpg" alt="" />
          <span> Abhishek Dahiwal</span>
        </div>

        <div className="left_box">
          <div>
            <span style={{ fontWeight: 'bold' }}>
              The Complete Guide To Starting Up:<br /> Hindi
            </span>{' '}
            <br />
            <hr />
            <span>
              {' '}
              What you'll get inside the course?
              <br />
              <li>8 Modules</li>
              <li>Module Notes</li>
              <li>Practical Assignments</li>
              <li>Certificate of Completion</li>
              <hr />
              Fill in your info and proceed to make the payment.
              <br />
              ✅ You will receive an email with the course details within 5
              minutes along with a WhatsApp confirmation.
              <br />
              ✅ 14-Day money-back guarantee!
              <br />
              ✅ 44,127+ have taken this course.
              <hr />
              Contact Us:
              <br />
              abku@07.com
              <br />
              +917000951267
              <br />
            </span>
          </div>
        </div>
        <div className="right_box">
          <div className="text_FormContact">
            <form action="POST" method="post" className="formContact">
              <div className="form-group1">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleInputChange}
                  value={name}
                  required
                />
              </div>
              <div className="form-group1">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleInputChange}
                  value={email}
                  required
                />
              </div>
              <div className="form-group1">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={handleInputChange}
                  value={phoneNumber}
                  required
                />
              </div>

              <div className="form-group1">
                <label htmlFor="price">
                  Pay for Unlimited Lifetime <br /> Access to the Course
                </label>
                <input
                  style={{ fontWeight: 'bold' }}
                  type="text"
                  id="price"
                  name="price"
                  required
                  value="₹ 999.00"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <img
        style={{ width: '200px', marginLeft: '72%' }}
        src="./images/upi.png"
        alt=""
      />

      <div className="Payment_Pay">
        <button onClick={handlePayment} style={{ marginTop: '2%' }}>
          Pay ₹ 999.00
        </button>
      </div>
    </div>
  );
}

export default Payment;
