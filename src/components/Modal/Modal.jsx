import css from "./Modal.module.css"

import React, { Component } from 'react'


export const Modal = ({closModal, imgModal}) => {

    window.addEventListener('keydown', closModal);
      return (
        <div className={css.background} onClick={closModal}>
            <div className={css.modal}>
                <img src={imgModal} width='700px' alt="foto" />
            </div>
         </div>
        )
}



// class Modal extends Component {

//     componentDidMount() {
//     window.addEventListener('keydown', this.props.closModal);}
//     render() {
//         return (
//         <div className={css.background} onClick={this.props.closModal}>
//             <div className={css.modal}>
//                 <img src={this.props.imgModal} width='700px' alt="foto" />
//             </div>
//          </div>
//         )
//     }
// };

// export {Modal}