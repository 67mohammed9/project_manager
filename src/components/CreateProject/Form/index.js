import React,{useState} from 'react';
import {TextareaAutosize} from "@material-ui/core"
import {useDispatch} from 'react-redux'
import { addProject } from '../../../redux/actions'

export const Form = ({ closeModal}) => {

  const [projectTitle, setProjectTitle] = useState('');
  const [projectAbout, setProjectAbout] = useState('');
  const dispatch = useDispatch();
  
 
  const onChangeTitle = (event) =>{
      setProjectTitle(event.target.value)
  };

  const onChangeAbout=(event)=>{
    setProjectAbout(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault(event);
    if (projectTitle.trim() ===''|| projectAbout.trim()==='') return;
    dispatch(addProject(projectTitle,projectAbout))
    setProjectTitle('');
    setProjectAbout('');
    console.log(projectTitle);
    console.log(projectAbout);
    closeModal();
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Create a Project</h2>
      </div>
      <div className="form-group">
        <label htmlFor="Title">Title</label>
        <input className="form-control" onChange={onChangeTitle}id="name" placeholder="title" />
      </div>
      <div className="form-group">
        <label htmlFor="email">About</label>
        <TextareaAutosize className="form-control" onChange={onChangeAbout} aria-label="minimum height" rowsMin={6} cols={20} placeholder="about" id="about" />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" onClick={onSubmit} type="submit" >
          Create Project
        </button>
      </div>
    </form>
  );
};
export default Form;
