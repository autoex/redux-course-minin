import React, {Component} from 'react';
import {connect} from "react-redux";
import {addPost} from "../redux/posts-reducer";
import Alert from "../assets/Alert";
import {alertHide, alertShow} from "../redux/app-reducer";

class FormPosts extends Component {
    state = {
        title: ''
    };

    submitHandler = e => {
        e.preventDefault();

        const {title} = this.state;
        if (!title.trim()) {

            this.props.alertShow()
            this.setState({
                title: ''
            });
            return};
        const newPost ={
            title, id:Date.now().toString()
        };

        //console.log(newPost);
        this.setState({
            title: ''
        });
        console.log(title);

        this.props.addPost(newPost);
        this.props.alertHide()

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
                {this.props.alertVisible && <Alert message={'Enter few words'}/>}

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input onChange={this.inputChangeHandler} placeholder='Type here..' type="text"
                           className="form-control" id="title" name='title' value={this.state.title}/>
                </div>
                <button className='btn btn-success' type='submit'>Send</button>
            </form>
        );
    }
}

const mapStateToProps =(state)=> ({
    alertVisible: state.app.alertVisible
})

export default connect(mapStateToProps, {addPost, alertShow, alertHide})(FormPosts);