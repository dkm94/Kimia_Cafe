import React from 'react'

class Article extends React.Component{


    render() {

        const {articleId, articleImg, articleTitle, articleContent} = this.props

        return (
             <article id={articleId} className="new-actu trois-cols-space col-text-itt cols-article">

                <img src={`img/${articleImg}`} alt="actualité" />

                <h2> 
                    {articleTitle}
                </h2>

                <div className="article-content">
                    <p className="margin-null"> 
                        {articleContent}
                    </p>
                </div>

            </article>
        )
    }
}

export default (Article)