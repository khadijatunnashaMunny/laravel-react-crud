
import React, { Component } from 'react';
 import ReactDOM from 'react-dom';


class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dir: [],
            item: {
                name: "",
                number: ""
            },
            isEditing: false,
            temp_id: null
        }
    }



    render (){

        return (
        <div className="container mt-10">
         <form onSubmit={this.state.isEditing ? this.update : this.add} method="POST">
                    <div className="mb-2">
                        <input type="text"
                               name="name"
                               className="form-control"
                               placeholder="Enter Name"
                               value={this.state.item.name}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="mb-2">
                        <input type="text"
                               name="number"
                               className="form-control"
                               placeholder="Enter Phone"
                               value={this.state.item.number}
                               onChange={this.handleChange}/>
                    </div>
                    <input
                        type="submit"
                        className="btn btn-success"
                        value={this.state.isEditing ? "Update" : "Save"}/>
                </form>
            
        </div>
        );

      
    }
}

export default Directory;

// if (document.getElementById('directory')) {
//     ReactDOM.render(<Directory />, document.getElementById('directory'));
// }
