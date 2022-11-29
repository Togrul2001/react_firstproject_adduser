function User(props){
    const {user} = props

    return (
        <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>Delete</td>
      </tr>
    )
}

export default User