import React from 'react'
import SignInForm from './SignInForm'

const SignIn = () => {
	return (
		<>
			<div className="mb-8" style={{backgroundColor:'white',padding:'30px',width:'500px',borderRadius:'20px',boxShadow:'0px 1px 7px black'}}>
				<h3 className="mb-1">Welcome back!</h3>
				<p>Please enter your credentials to sign in!</p>
				<br></br>
				<br></br>

			<SignInForm disableSubmit={false} />

			</div>
		</>
	)
}

export default SignIn