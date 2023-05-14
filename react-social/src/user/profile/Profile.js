import React, { Component } from "react";
import axios from "axios";
import "../Styles/p.css";
// import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import { Link } from "react-router-dom";



export default class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.deletePost = this.deletePost.bind(this);
    }

    async deletePost(id) {
        await axios.delete(`http://localhost:8080/auth/user/${id}`);
       
        alert('User deleted successfully!');
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
    }

    render() {
        const { currentUser } = this.props;
        return (
            <div className='profile-container'>
                <div className='container'>
                    <div className='profile-info'>
                        <div className='profile-avatar'>
                            <img src='https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-512.png' />
                        </div>
                        <table>
                            <tr>
                                <td>User Name</td>
                                <td className='profile-name'>{currentUser.name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td className='profile-email'>{currentUser.email}</td>
                            </tr>
                        </table>
                        <div className='profile-buttons'>
                        <Link
											className=''
											to={`/editUder/${currentUser.id}`}>
											Edit
										</Link>
                            <button className='profile-delete-button' onClick={() => this.deletePost(currentUser.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
