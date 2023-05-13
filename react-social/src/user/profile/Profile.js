import React, { Component } from "react";
import "../Styles/p.css";
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    handleDelete = () => {
        const { currentUser } = this.props;

        // Send a DELETE request to the server to delete the user
        fetch(API_BASE_URL + '/user/' + currentUser.id, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
            }
        })
        .then(response => {
            if (response.ok) {
                // If the user was successfully deleted, redirect to the home page
                window.location.href = '/';
            } else {
                // If there was an error deleting the user, show an error message
                throw new Error('Failed to delete user');
            }
        })
        .catch(error => {
            console.error(error);
            alert('Failed to delete user');
        });
    }

    render() {
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
                                <td className='profile-name'>{this.props.currentUser.name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td className='profile-email'>{this.props.currentUser.email}</td>
                            </tr>
                        </table>
                        <div className='profile-buttons'>
                            <button className='profile-edit-button' onClick={this.props.handleEdit}>Edit</button>
                            <button className='profile-delete-button' onClick={this.handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
