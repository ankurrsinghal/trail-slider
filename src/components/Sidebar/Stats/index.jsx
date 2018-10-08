import React from 'react'
import './index.scss'

const Stats = ({ likesCount, commentsCount, viewsCount }) => (
    <div className="trell-stats">
        <div className="trell-stat-row sharing-links">
            <div className="sharing-icon facebook">
                <a href="#">
                    <i className="fab fa-facebook-f"></i>
                </a>
            </div>
            <div className="sharing-icon twitter">
                <a href="#">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
            <p className="label">Share Trail</p>
        </div>
        <div className="trell-stat-row trell-stat-metric likes">
            <div className="icon">
                <i className="fas fa-heart"></i>
            </div>
            <div className="label">
                Like
            </div>
            <div className="count">
                {likesCount}
            </div>
        </div>
        <div className="trell-stat-row trell-stat-metric comments">
            <div className="icon">
                <i className="far fa-comment"></i>
            </div>
            <div className="label">
                Comments
            </div>
            <div className="count">
                {commentsCount}
            </div>
        </div>
        <div className="trell-stat-row trell-stat-metric views">
            <div className="icon">
                <i className="far fa-eye"></i>
            </div>
            <div className="label">
                Views
            </div>
            <div className="count">
                {viewsCount}
            </div>
        </div>
    </div>
)

export default Stats