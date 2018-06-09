// import  React from 'react';
//
// export default function Article(props) {
//     const {article} = props;
//     return(
//         <div>
//             <h3>{article.title}</h3>
//             <section>{article.text}</section>
//         </div>
//     )
// }

import React, {Component} from 'react';
import CommentList from './CommenList/index';
import PropTypes from 'prop-types';
import accordion from "../decorators/accordion";

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    };


    render() {
        const {article, isView, click} = this.props;
        return (
            <div>
                <h3>{article.title}</h3>
                <button
                    onClick = {click(article.id)}
                   >
                    { isView ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.props.isView) return null;
        const {article} = this.props;
        // console.log(article.comment);
        return <section>
                    {article.text}
                    <CommentList comments = {article.comments}/>
               </section>;
    }
}

export default Article;