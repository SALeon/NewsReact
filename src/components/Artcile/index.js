// import  React from 'react';
//
// export default function Index(props) {
//     const {article} = props;
//     return(
//         <div>
//             <h3>{article.title}</h3>
//             <section>{article.text}</section>
//         </div>
//     )
// }

import React, {Component} from 'react';
import CommentList from '../CommenList/index';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group'

class Index extends Component {
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
                <button onClick={click(article.id)}>
                    {isView ? 'close' : 'open'}
                </button>
                <CSSTransitionGroup
                    transitionName = 'article'
                    transitionAppear
                    transitionEnterTimeout = {300}
                    transitionLeaveTimeout = {500}
                    transitionAppearTimeout = {500}
                    component = 'div'
                >
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )
    }

    getBody() {
        if (!this.props.isView) return null;
        const {article} = this.props;
        // console.log(article.comment);
        return <section>
            {article.text}
            <CommentList comments={article.comments}/>
        </section>;
    }
}

export default Index;