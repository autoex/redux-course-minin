import React, {Component} from 'react';

class FormPosts extends Component {
    state = {
        name: 1
    }
    submitHandler = e => e.preventDefault()

    render() {
        return (
            <form onSubmit={this.submitHandler} className='mb-5'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="email" className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <button className='btn btn-success' type='submit'>Send</button>
            </form>
        );
    }
}

export default FormPosts;