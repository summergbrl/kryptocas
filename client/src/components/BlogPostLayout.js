import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './BlogPostLayout.css';

const BlogPostLayout = ({ title, author, date, image, children, metaDescription }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-post-layout">
            <Helmet>
                <title>{title} | Kryptowissen</title>
                {metaDescription && <meta name="description" content={metaDescription} />}
            </Helmet>

            <div className="blog-post-container">
                <header className="blog-post-header">
                    <h1 className="blog-post-title">{title}</h1>
                    <div className="blog-post-meta">
                        {author && (
                            <div className="blog-post-author">
                                {author.image && <img src={author.image} alt={author.name} className="author-avatar" />}
                                <span>{author.name}</span>
                            </div>
                        )}
                        {date && <span className="blog-post-date">{date}</span>}
                    </div>
                </header>

                {image && (
                    <img src={image} alt={title} className="blog-post-featured-image" />
                )}

                <div className="blog-post-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default BlogPostLayout;
