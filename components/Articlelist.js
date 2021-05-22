import React from 'react'
import ArticleItem from "./ArticleItem"
import articleStyles from "../styles/Article.module.css"
const Articlelist = ({articles}) => {
    return (
        <div className={articleStyles.grid}>
              {articles.map(article => 
                <ArticleItem article={article} />
                )}
            
        </div>
    )
}

export default Articlelist
