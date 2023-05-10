import React, { Component } from "react";
import "../Styles/p.css";

export default class Profile extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	render() {
		return (
			<div className='profile-container'>
				<div className='container'>
					<div className='profile-info'>
						<div className='profile-avatar'>
							<img src='https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-512.png' />

							{/* <div className="text-avatar"> */}
							{/* <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span> */}
						</div>
						<table>
							<tr>
                                <td>User Name</td>
								<td className='profile-name'>{this.props.currentUser.name}</td>
							</tr>
							<tr>
                                <td>Email</td>
								<td className='profile-email'>{this.props.currentUser.email}</td>
							</tr>

							<tr>
                                <td>Password</td>
								<td className='profile-password'>Password</td>
							</tr>
                           
						</table>
                         {/* <button> Edit</button> */}
					</div>
				</div>
			</div>
		);
	}
}