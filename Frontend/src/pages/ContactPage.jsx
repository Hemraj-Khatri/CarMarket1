import React, { useState } from 'react'
import { useContactUserMutation } from '../Slices/userApiSlice'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [contactUser, { isLoading }] = useContactUserMutation();

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    let resp = await contactUser({name, email, phone, message}).unwrap();
    toast.success(resp.Message);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    navigate('/sendMessage')

    
  }

  return (
<<<<<<< HEAD
    <div className='my-10 text-center px-30'>
=======
    <div className='md:my-10 text-center md:px-30'>
>>>>>>> 95fd6f6 (condition page completed)

      <h1 className='font-semibold text-4xl py-5 text-center'>ANY QUESTIONS? CONTACT US NOW!</h1>


<<<<<<< HEAD
      <p className='px-40'>Car Market is the  automotive classifieds website in Nepal. If you have any question or issue regarding our website, please contact us here. If you have any enquiry regarding us, please contact us here. If you want to advertise on Car Market Place, please contact us here.</p>
=======
      <p className='md:px-40 px-5 py-5'>Car Market is the  automotive classifieds website in Nepal. If you have any question or issue regarding our website, please contact us here. If you have any enquiry regarding us, please contact us here. If you want to advertise on Car Market Place, please contact us here.</p>
>>>>>>> 95fd6f6 (condition page completed)

      <div>
        <form action="" onSubmit={onSubmitHandler}>
          <div className='py-2'>
            <input type="text" placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)
<<<<<<< HEAD
            } className='bg-slate-100 rounded-sm px-2 py-2 w-[30%] ' />
          </div>
          <div className='py-2'>
            <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)
            } className='bg-slate-100 rounded-sm px-2 py-2 w-[30%] ' />
=======
            } className='bg-slate-100 rounded-sm px-2 py-2 md:w-[30%] w-[80%]' />
          </div>
          <div className='py-2'>
            <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)
            } className='bg-slate-100 rounded-sm px-2 py-2 md:w-[30%] w-[80%]' />
>>>>>>> 95fd6f6 (condition page completed)
          </div>

          <div className='py-2'>
            <input type="number" placeholder='Number' value={phone}  onChange={(e)=> setPhone(e.target.value)
<<<<<<< HEAD
            } className='bg-slate-100 rounded-sm px-2 py-2 w-[30%] ' />
=======
            } className='bg-slate-100 rounded-sm px-2 py-2 md:w-[30%] w-[80%]' />
>>>>>>> 95fd6f6 (condition page completed)
          </div>

          <div className='py-2 mb-2'> 
            <textarea name="textarea" id="taxtarea" value={message} onChange={(e)=> setMessage(e.target.value)
            }
<<<<<<< HEAD
              className='bg-slate-100 rounded-sm px-2 py-2 w-[30%] ' rows={5} placeholder='Write your message'></textarea>

          </div>
          <button className='bg-slate-100 rounded-full px-2 py-3 border border-green-800 w-[30%] hover:bg-green-500 transition-all duration-500  hover:text-white font-semibold text-2xl'>Send</button>
=======
              className='bg-slate-100 rounded-sm px-2 py-2 md:w-[30%] w-[80%]' rows={5} placeholder='Write your message'></textarea>

          </div>
          <button className='bg-slate-100 rounded-full px-2 py-3 border border-green-800 md:w-[30%] w-[80%] hover:bg-green-500 transition-all duration-500  hover:text-white font-semibold text-2xl'>Send</button>
>>>>>>> 95fd6f6 (condition page completed)
        </form>
      </div>
    </div>
  )
}

export default ContactPage