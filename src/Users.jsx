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
                    <pre>{JSON.stringify(this.state.Users)}</pre>
                    <button className="btn btn-success" onClick={this.getUser}>Get Users</button>
                    <br /><br />
                    <table class="table">
                        <thead class="thead-dark">
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">EMAIL</th>
                        </thead>
                        <tbody>
                            {this.state.Users.length > 0 ? (
                            this.state.Users.map((user) => (
                                <tr key={user.id}>
                                    <td scope="row">{user.id}</td>
                                    <td scope="row">{user.name}</td>
                                    <td scope="row">{user.email}</td>
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