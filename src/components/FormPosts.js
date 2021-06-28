import React, {Component} from 'react';

class FormPosts extends Component {
    state = {
        title: ''
    };
    submitHandler = e => {
        e.preventDefault();

        const {title} = this.state;
        const newPost ={
            title, id:Date.now().toString()
        };
        this.setState({
            title: ''
        });
        console.log(newPost);
    };
    inputChangeHandler = e => {
        this.setState(prev => ({
            ...prev, ...{
                [e.target.name]: e.target.value
            }
        }))
    };

    render() {
        return (
            <form onSubmit={this.submitHandler} className='mb-5'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input onChange={this.inputChangeHandler} placeholder='Type here..' type="text"
                           className="form-control" id="title" name='title' title={this.state.title}/>
                </div>
                <button className='btn btn-success' type='submit'>Send</button>
            </form>
        );
    }
}

export default FormPosts;