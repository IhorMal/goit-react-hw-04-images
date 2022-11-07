import React, { Component } from 'react'
import css from './Searchbar.module.css'

class Searchbar extends Component {
    state = {
        name: '',
    };

    addNameImg = (e) => {
        e.preventDefault()
        this.props.get(this.state.name)
        e.target.reset()
        
    };

   
    changeImg = (e) => {
        this.setState({ name: e.target.value })
    }

    render() {
        return (
            <header className={css.searchbar}>
                <form className={css.form} onSubmit={this.addNameImg}>
                    <button type="submit" className={css.button}>
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        onChange={this.changeImg}
                        className={css.input}
                        type="text"
                        autoComplete="on"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }

};
export { Searchbar };
