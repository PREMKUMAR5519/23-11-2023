import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Data(props) {
  return (
    <nav class="navbar navbar-expand-lg"id='navv'>
    <div class="container-fluid">

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/"> <a class={props.one} style={{margin:'10px',paddingRight:'10px'}}aria-current="page" href="#">ALL</a></Link>
           
          </li>
          <li class="nav-item">
            <Link to="/Iphone"><a style={{margin:'10px',paddingRight:'10px'}} class={props.two} href="#">IPHONE</a></Link>
          </li>
          <li class="nav-item">
            <Link to="/Oneplus">
            <a  style={{margin:'10px',paddingRight:'10px'}}class={props.three} href="#">ONEPLUS</a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/Oppo">
            <a  style={{margin:'10px',paddingRight:'10px'}}class={props.four}  href="#">OPPO</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Data