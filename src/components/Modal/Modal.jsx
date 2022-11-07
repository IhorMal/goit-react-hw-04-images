import css from "./Modal.module.css"

import React, { Component } from 'react'

class Modal extends Component {
    render() {
        return (
        <div className={css.background} onClick={this.props.closModal}>
            <div className={css.modal}>
                <img src={this.props.imgModal} width='700px' alt="foto" />
            </div>
         </div>
        )
    }
};
// export const Modal = ({ imgModal }) => {
//     return (
//         <div className={css.background} >
//             <div className={css.modal}>
//                 <img src={imgModal} width='700px' alt="foto" />
//             </div>
//         </div>
//     )
// };

export {Modal}