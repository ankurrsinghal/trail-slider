import React from 'react'

import './index.scss'

const Content = ({ imageURL, title, postCount, tryoutsCount, viewsCount, author }) => (
    <div className="slide first-slide">
        <div
            style={{
                backgroundImage: `url(${imageURL})`
            }}
            className="image" />
        <div className="trail-details-wrapper">
            <div className="trail-details">
                <h1 className="trail-name">{title}</h1>
                <div className="trail-metrics">
                    <div className="count posts-count">
                        {postCount} Posts
                    </div>
                    <i className="sep fas fa-circle"></i>
                    <div className="count tryouts-count">
                        {tryoutsCount} Tryouts
                    </div>
                    <i className="sep fas fa-circle"></i>
                    <div className="count views-count">
                        {viewsCount} Views
                    </div>
                </div>
                <div className="trail-author">
                    <div className="author-details">
                        <p className="label">Trail By</p>
                        <div className="author-name">
                            {author.name}
                            <a href={author.href} className="author-follow-link">Follow</a>
                        </div>
                    </div>
                    <div className="author-image">
                        <img src={author.image} alt={author.name}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Content