
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import Counter from './components/counter';
class App extends Component {
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
        this.handleChange = this.handleChange.bind(this)
        this.add = this.add.bind(this)
        this.fetchAll = this.fetchAll.bind(this)
        this.delete = this.delete.bind(this) 
        this.edit = this.edit.bind(this)
        this.update = this.update.bind(this)


   }


    add(e) {
           e.preventDefault();
           console.log("created item");
           axios.post('api/directory', this.state.item)
               .then(res => {
                   this.setState({
                       item: {
                           name: "",
                           number: ""
                       }
                   })
                   this.fetchAll()

               });
    }

    componentDidMount() {
        this.fetchAll()
    }


    fetchAll() {
        axios.get('api/directory')
            .then(res => {
                this.setState({dir: res.data})
                console.log(this.state.dir)
            })
    }


    
    delete(id) {
        axios.delete('api/directory/delete/'+ id)
            .then(res => {
                this.fetchAll()
            })
    }

    view(item) {
        alert(
            `
            Name = ${item.name}
            phone = ${item.number}
            `
        )
    }

    edit(id) {
        let item = this.state.dir.filter(item => item.id === id)[0]
        if(item){
            this.setState({
                isEditing: true, 
                item: item, 
                temp_id: item.id
            })


        }
    }

    update(e) {
        e.preventDefault();
        axios.put(`api/directory/${this.state.temp_id}`, this.state.item)
            .then(res => {
                this.setState({
                    item: {
                        name: "",
                        number: ""
                    },
                    isEditing: false,
                    temp_id: null
                })
                this.fetchAll()
            })
    }


    handleChange(e) {
           const name = e.target.name
           const value = e.target.value
           let item = this.state.item;
           item[name] = value;
           this.setState({item: item});
          //  console.log(this.state.item);
    }
 

   render (){

       return (
            <div className="container mt-10">
                <form  method="POST" 
                onSubmit={this.state.isEditing ? this.update : this.add}>
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
                   <button  type="submit"
                       className="btn btn-success">
                     {this.state.isEditing ?'update':'save'}
                   </button>     
                </form>
                <div>
                
                <List dir={this.state.dir}
                   delete={this.delete}
                   edit={this.edit}
                   view={this.view}

                 
                />

                </div>
                <div>
                <br></br>
                <h1>Counting....</h1>
                    <Counter/>
                </div>
                
              

            </div>
         

       );
   }
}


export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
