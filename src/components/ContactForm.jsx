import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios';

function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (emailData) => {
        axios.post("/sendmail", { emailData }).then( alert("OK"));
    }
    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="p pb-3"><strong>Feel free to contact me </strong></div>
            <div className="row mb-3">
                <div className="col">
                    <div className="input-group"><span className="input-group-addon"><i
                        className="fa fa-user-circle"></i></span>
                        <input className="form-control" type="text" name="name" placeholder="Name"
                            {...register('name', { required: true })} />
                    </div>
                    {errors.name && <p className="text-danger">Name is Required*</p>}
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <div className="input-group"><span className="input-group-addon"><i
                        className="fa fa-file-text"></i></span>
                        <input className="form-control" type="text" name="Subject" placeholder="Subject"
                            {...register('Subject', { required: true })} />
                    </div>
                    {errors.Subject && <p className="text-danger">Subject is Required*</p>}
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <div className="input-group"><span className="input-group-addon"><i
                        className="fa fa-envelope"></i></span>
                        <input className="form-control" type="email" name="_replyto" placeholder="E-mail"
                            {...register('_replyto', { required: true })} />
                    </div>
                    {errors._replyto && <p className="text-danger">Email is Required*</p>}
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <div className="form-group">
                        <textarea className="form-control" name="message" placeholder="Your Message"
                            {...register('message', { required: true })}></textarea>
                    </div>
                    {errors.message && <p className="text-danger">Message is Required*</p>}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary" type="submit">Send</button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm
