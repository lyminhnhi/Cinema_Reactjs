import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './style.scss'
import {danhsachYoutube} from '../../../Constant/index'

export class ModalMovies extends Component {

  constructor(props) {
    super()
    this.myIframe = React.createRef();
  }

  

  render() {
    return (
      <div className="modal fade" id="modaltrailer" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button stop-video" className="close" data-dismiss="modal" aria-label="Close" onClick={this.onClick}>
                <i className="fa fa-times" />
              </button>
            </div>
            <div className="modal-body">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/5YYpBeWOxo8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ref={this.myIframe} allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default (ModalMovies)
