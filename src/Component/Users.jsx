import React from "react";
import  Axios  from "axios";

class Users extends React.Component {
    state = {Users : []}
    getUser = () => {
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((Response) => {
            this.setState({Users : Response.data})
        })
        .catch((Error) => {console.log(Error)})
    
    }
    render () {
        return  <div>
                    <h2>Users Component</h2>
                    <button className="btn btn-success" onClick={this.getUser()}>Get Users</button>
                    <br /><br />
                    <table class="table">
                        <thead class="thead-dark">
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">CITY</th>
                        </thead>
                        <tbody>
                            {this.state.Users.length > 0 ? (
                            this.state.Users.map((user) => (
                                <tr key={user.id}>
                                    <td scope="row">{user.id}</td>
                                    <td scope="row">{user.name}</td>
                                    <td scope="row">{user.email}</td>
                                    <td scope="row">{user.address.city}</td>
                                </tr>
                            ))
                            ) : (
                            <tr>
                                <td colSpan="3">No users available</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>

    }
}

export default Users