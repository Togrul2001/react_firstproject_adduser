import User from "./User"


function Users(props){
    const {users} = props
    return (
        <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
      {
          users.map(user => {
              return <User key={user.id} user={user}/>
          })
      }


  </tbody>
</table>
    )
}

export default Users