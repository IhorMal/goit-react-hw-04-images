import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
 
import css from './App.module.css'

const API = 'https://pixabay.com/api/';
const KEY = '30100202-c7ab2410f29d8d653d9b1941b';
const OPTION = "image_type=photo&orientation=horizontal&per_page=12"

export const App = () => {
  const [articles, setArticeles] = useState([]);
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [souModal, setSouModal] = useState(false);
  const [imgModal, setImgModal] = useState('');
  const [loader, setLoader] = useState(false);
  const [erorr, setErorr] = useState(null);

  function getName(value) {
    if (value !== name) {
      setArticeles([])
      setName(value)
      setPage(1)
    }
  };

  function showModal(e) {
     if (e.code === 'Escape') {
      setSouModal(false)
    }
    if (e.target === e.currentTarget) {
      setSouModal(false)
    }
  };
  
  useEffect(() => {
    if (name === '') return;
    setLoader(true)
    async function addApi(name, page) {
    return await axios.get(`${API}?q=${name}&page=${page}&key=${KEY}&${OPTION}`);
    };
    addApi(name, page).then(respons => { 
      if (respons.data.hits.length === 0 ) {
        return Promise.reject(new Error(`There is nothing by that name ${name}`));
      }    
      return respons;
    }).then(repsone => {
      setArticeles(set => ([...set, ...repsone.data.hits]));
      setErorr(null);
      setLoader(false);
    }).catch(erorr => {
      setErorr(erorr)
      setLoader(false);
    })
  }, [page, name])
  
  function searchId(id) {
    const filte = articles.filter(elem => {
      return elem.id === id;
    });
    setImgModal(filte[0].webformatURL)
    setSouModal(true)
  };
   return (
      <div className={css.gallery}>
        <Searchbar get={getName}/>
        {articles.length > 0 && <ImageGallery image={articles} search={searchId} />}
        {loader && <Loader></Loader>}
        {erorr && <p>{erorr.message}</p>}
        {articles.length > 0 && <Button addImgs={setPage} />}
        {souModal && <Modal closModal={showModal} imgModal={imgModal} />}
      </div>
    )
}


// class App extends Component {
//   state = {
//     articles: [],
//     name: '',
//     page: 1,
//     souModal: false,
//     imgModal: '',
//     loader: false,
//     erorr: null,
//   }

//   getName = (value) => {
//     if (value !== this.state.name) {
//       this.setState({ name: value, articles: [], page: 1})
//     }
    
//   };

//   addApi = async (name, page) => {
//     return await axios.get(`${API}?q=${name}&page=${page}&key=${KEY}&${OPTION}`);
//   };

//   showModal = (e) => {
//      if (e.code === 'Escape') {
//       this.setState({ souModal: false })
//     }
//     if (e.target === e.currentTarget) {
//       this.setState({ souModal: false })
//     }
//   };

//   componentWillUnmount() {
//      window.removeEventListener('keydown', this.showModal);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { page, name, } = this.state;
    
//     if (prevState.page !== page || prevState.name !== name) {
//      this.renderGallery()
//     }
//   }

//   renderGallery = () => {
//     const { page, name } = this.state;
//     this.setState({ loader: true })

//     this.addApi(name, page).then(respons => { 
      
//       if (respons.data.hits.length === 0 ) {
//         return Promise.reject(new Error(`There is nothing by that name ${name}`));
//       }    
//       return respons;
      
//     }).then(repsone => {
//       this.setState(prevState => ({
//         articles: [...prevState.articles, ...repsone.data.hits],
//         erorr: null,
//         loader: false
//       }))
    
//     }).catch(erorr => {
//       this.setState({ erorr, loader: false})
//     })
//   };

//   searchId = (id) => {
//     const filte = this.state.articles.filter(elem => {
//       return elem.id === id;
//     });

//     this.setState({
//       imgModal: filte[0].webformatURL,
//       souModal: true,
//     });
//   };

//   addImgs = () => {
//     this.setState({page: this.state.page + 1})
//   }

//   render() {
//     const { articles, imgModal, souModal, loader, erorr} = this.state;
//     return (
//       <div className={css.gallery}>
//         <Searchbar get={this.getName} clearPrevious={this.clearPreviousRequest} />
//         {articles.length > 0 && <ImageGallery image={articles} search={this.searchId} />}
//         {loader && <Loader></Loader>}
//         {erorr && <p>{erorr.message}</p>}
//         {articles.length > 0 && <Button addImgs={this.addImgs} />}
//         {souModal && <Modal closModal={this.showModal} imgModal={imgModal} />}
//       </div>
//     )
//   }
// }

// export { App };