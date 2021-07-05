import React,{useEffect} from 'react';
import ReactDom from 'react-dom';
import '../Model/Modal.css';
const Modal = (props) => {
    const rootElement = document.getElementById('modal');
    useEffect(()=>{
      console.log('Modal');
      return ()=> {
       rootElement.removeAttribute('class');   
      }
    },);
    
    if(props.cssClass){
    rootElement.classList.add(props.cssClass);
    } 
    console.log('finaly');
    return ReactDom.createPortal(props.children,rootElement);

}
 
export default Modal;