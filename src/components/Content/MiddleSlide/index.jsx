import React from 'react'
import { truncate } from 'lodash'

import './index.scss'

const Content = ({ imageURL, location, about }) => (
    <div
        className="slide middle-slide">
        <div
            style={{
                backgroundImage: `url(${imageURL})`
            }}
            className="image" />
        <div className="post-details">
            <div className="post-header">
                <div className="post-location">
                    <i className="icon fas fa-map-marker-alt"></i>
                    { location }
                </div>

                <div className="post-actions">
                    <div className="post-action save">
                        <a href="#">Save</a>
                        <i className="icon fas fa-bookmark"></i>
                    </div>
                    <div className="post-action share">
                        <a href="#">Share</a>
                        <i className="icon fas fa-share"></i>
                    </div>
                </div>
            </div>
            
            <div className="post-footer">
                <div className="post-about">
                    { truncate(about, {
                        length: 120
                    }) }
                    <a className="expand" href="#">more</a>
                </div>
            </div>
        </div>
    </div>
)

export default Content