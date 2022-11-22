import './signin.scss'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import { useStateContext } from '../../utils/StateContext'

const SignIn = ({setOpenModal}) => {
  const {dark} = useStateContext()

  return (
    <div className='signIn' style={dark[4]}  >
      <div className="container" style={dark[0]}>
        <button onClick={()=>setOpenModal(false)} className="closeBtn"><AiOutlineClose/></button>
        <h3>Sign In</h3>
        <form action="">
          <div>
            <label htmlFor="email">Email or Mobile number:</label>
            <input type="email" autoFocus style={dark[2]} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" style={dark[2]} />
          </div>
          <button style={dark[6]}>Sign In</button>
          <p>Don't have an Account? <strong>Register here</strong></p>
        </form>
        <div className='option'><div className="line"/>Or Sign In With<div className="line"/></div>
        <div className='vendor'>
          <div className='googleBtn' style={dark[6]}><FcGoogle/> Google</div>
          <div className='facebookBtn'><BsFacebook/> Facebook</div>
        </div>
      </div>
    </div>
  )
}

export default SignIn