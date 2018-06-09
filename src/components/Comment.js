import React from 'react';

export default function({comment}){

        return (
            <section>
                <h4>{comment.user}</h4>
                  {comment.text}
            </section>
        );
}