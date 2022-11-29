import React from "react"
import App from "../App"

const initialForm = {name:'', email:''}

function AddUser(props){
    const [form, setForm] = React.useState(initialForm)
    const {users, submitTest} = props
    const change = (e) => {
        const {value, name} = e.target
        const data = {...form, [name]: value}
        setForm(data)
    }
    return (
    <div className="card">
      
        <h4 className='card-header'>User Form</h4>
        <div className="card-body">
            <form onSubmit={(e) => submitTest(e, form)} action="" autoComplete='off'>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" value={form.name} onChange={change} id="name" className='form-control' />
                </div><br />
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" value={form.email} name="email" onChange={change} id="email" className='form-control' />
                </div><br />
                <button type="submit" className='btn btn-danger'>Add</button>
            </form>
        </div>
    </div>
    )
}


export default AddUser