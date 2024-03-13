import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="message-box">
          <iframe
            src="https://forms.gle/rS7YqizrhWPszGG38"
            width={"400"}
            height={"1200"}
            frameborder="0"
          ></iframe>
        </div>

        <div className="address-box">
          <h1>Contact us</h1>
          <div>
            <b>Address:</b> Aiwan-e-Khidmat Near Bahishti Maqbara Mohalla
            Ahmadiyya Qadian.
          </div>
          <div>
            <b>Distt.:</b> Gurdaspur Punjab.
          </div>
          <div>
            <b>Pincode:</b> 143516
          </div>
          <div>
            <b>Phone:</b> 01872222900
          </div>
          <div>
            <b>Email:</b> accedu@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
