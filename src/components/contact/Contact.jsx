import "./Contact.css"
import React, {useRef, useState} from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";
import { useContext } from "react";

const Contact = () => {
	const formRef = useRef()
	const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

	const handleSubmit = (e) => {
	e.preventDefault();
	
	emailjs.sendForm(
		'service_3i7naft', 
		'template_rs6z8qb', 
		formRef.current, 
		'user_Ev1uwCGvWd6GWr5rPyymS'
	)
	.then((result) => {
		console.log(result.text);
		setDone(true)
	}, (error) => {
		console.log(error.text);
	});
	}

return (
	<div className = "c">
	<div className="c-bg"></div>
	<div className="c-wrapper">
		<div className="c-left">
		<h1 className="c-title">Let's discuss your project</h1>
		<div className="c-info">
			<div className="c-info-item">
			<img 
				src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39278/preview.png"
				alt="" 
				className="c-icon"
			/>
			+1 248 266 8138
			</div>
			<div className="c-info-item">
			<img 
				src="https://olc-wordpress-assets.s3.amazonaws.com/uploads/2020/05/new-email-icon.png"
				alt="" 	
				className="c-icon"
			/>
			riparun.aj@gmail.com
			</div>
			<div className="c-info-item">
			<img 
				src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
				alt="" 
				className="c-icon"
			/>
			123 Kachow Ave, Woodhaven, Arkansas
			</div>
		</div>
		</div>
		<div className="c-right">
		<p className="c-desc"><b>Lorem ipsum dolor </b>sit amet, consectetur adipisicing elit. Qui quam vitae necessitatibus eum dolor sunt quas recusandae? Eius et doloribus ipsam atque, fuga, iure, non rem at nam illum rerum.</p>
		<form ref = {formRef} onSubmit={handleSubmit}>
			<input type="text" placeholder = "Name" name = "user_name" style = {{backgroundColor: darkMode && "#333", color: darkMode && "white"}}/>
			<input type="text" placeholder = "Subject" name = "user_subject" style = {{backgroundColor: darkMode && "#333", color: darkMode && "white"}}/>
			<input type="text" placeholder = "Email" name = "user_email" style = {{backgroundColor: darkMode && "#333", color: darkMode && "white"}}/>
			<textarea placeholder = "Message" rows="5" name="message" style = {{backgroundColor: darkMode && "#333", color: darkMode && "white"}}></textarea>
			<button>Submit</button>
			{done && "Thank you"}
		</form>
		</div>
	</div>
	</div>
)
}

export default Contact
