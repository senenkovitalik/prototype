import React from 'react';
import {
  NavLink
} from 'react-router-dom';
import fetch from 'isomorphic-fetch';

const activeLink = {fontWeight: 'bold', color: 'red'};

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    fetch('/api/categories')
      .then((res) => {
        if (res.status >= 400) {
          console.log("Bad responce");
        }
        return res.json();
      })
      .then((cats) => {
        this.setState({
          categories: cats
        })
      });
  }

  render() {
    return (
      <div>
      {
        this.state.categories.map((cat, index) => {
          return <ul key={index}>
            <li><NavLink to={`/${cat.name}`} activeStyle={activeLink}>{cat.name}</NavLink></li>
            <ul>
              {
                cat.children.map((child, index) => {
                  return <li key={index}>
                    <NavLink to={`/${cat.name}/${child}`}
                             activeStyle={activeLink}
                    >{child}</NavLink></li>
                })
              }
            </ul>
          </ul>
        })
      }
      </div>
    );
  }
}

export default Categories;