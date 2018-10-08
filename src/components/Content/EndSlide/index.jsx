import React from 'react'

import './index.scss'

const Content = ({ imageURL, likesCount, commentsCount, author }) => (
    <div className="slide end-slide">
        <div
            style={{
                backgroundImage: `url(${imageURL})`
            }}
            className="image" />
        <div className="trail-end">
            <div className="trail-stats">
                <div className="trail-stat trail-likes">
                    <div className="circle">
                        <i className="fas fa-heart"></i>
                    </div>
                    <div className="count">
                        {likesCount} Likes
                    </div>
                </div>
                <div className="trail-stat trail-comments">
                    <div className="circle">
                        <i className="fas fa-comment"></i>
                    </div>
                    <div className="count">
                        {commentsCount} Comments
                    </div>
                </div>
            </div>
            <div className="trail-sharing">
                <p className="label">share trail video to:</p>
                <div className="sharing-actions">
                    <div className="whatsapp sharing-action">
                        Whatsapp
                    </div>
                    <div className="whatsapp sharing-action">
                        Instagram
                    </div>
                    <div className="whatsapp sharing-action">
                        Facebook
                    </div>
                    <div className="whatsapp sharing-action">
                        More
                    </div>
                </div>
            </div>
            <div className="trail-author">
                <p className="label">view more trails by</p>
                <div className="author-details">
                    <div className="author-image">
                        <img src={author.image} alt={author.name}/>
                    </div>
                    <div className="author-name">
                        {author.name}
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Content