import React from 'react'
import ContactBar from '../components/ContactBar'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import * as Icon from 'react-feather'
import emailjs from 'emailjs-com'

export default function contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(process.env.GATSBY_SERVICE_ID, process.env.GATSBY_TEMPLATE_ID, e.target, process.env.GATSBY_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }


    return (
        <div>
            <ContactBar />
            <Menu />

            <div className='wrapper'>
                <h1>Get In Touch</h1>
                
                <p>The quickest way to get a quote is to give us a call. Other enquiries can be directed to our email</p>

                <a className='call button' href='tel:0410307705'><Icon.Phone />Call Now</a>

                <form className="contact-form" onSubmit={sendEmail}>
                    <label for='user_name'>Name</label>
                    <input type='text' name='user_name' id='user_name' aria-label='Full Name' />

                    <label for='user_email'>Email</label>
                    <input type='email' name='user_email' id='user_email' aria-label='Email' />

                    <label for='message'>Message</label>
                    <textarea name='message' id='message' aria-label='Message' />

                    <p>Please Note: All fields are required</p>
                    <input type='submit' value='Send Message' className='button-open' aria-label='Send Message'/>
                </form>



            </div>
            
            <Footer />
        </div>
    )
}
