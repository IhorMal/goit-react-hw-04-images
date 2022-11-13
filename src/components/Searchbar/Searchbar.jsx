
import css from './Searchbar.module.css'

export const Searchbar = ({get}) => {
 function addNameImg(e){
        e.preventDefault()
        if (e.target.name.value === '') {
            alert('Please enter a name')
            return 
        }
        get(e.target.name.value)
        e.target.reset()  
    };

     return (
            <header className={css.searchbar}>
                <form className={css.form} onSubmit={addNameImg}>
                    <button type="submit" className={css.button}>
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className={css.input}
                        type="text"
                        name='name'
                        autoComplete="on"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
}



// class Searchbar extends Component {
   
//     addNameImg = (e) => {
//         e.preventDefault()
//         console.log(e)
//         if (e.target.name.value === '') {
//             alert('Please enter a name')
//             return 
//         }
//         this.props.get(e.target.name.value)
//         e.target.reset()  
//     };

//     render() {
//         return (
//             <header className={css.searchbar}>
//                 <form className={css.form} onSubmit={this.addNameImg}>
//                     <button type="submit" className={css.button}>
//                         <span className="button-label">Search</span>
//                     </button>

//                     <input
//                         onChange={this.changeImg}
//                         className={css.input}
//                         type="text"
//                         name='name'
//                         autoComplete="on"
//                         autoFocus
//                         placeholder="Search images and photos"
//                     />
//                 </form>
//             </header>
//         )
//     }

// };
// export { Searchbar };
