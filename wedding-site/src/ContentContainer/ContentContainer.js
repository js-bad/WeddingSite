import React, { Suspense } from 'react'

export default function ContentContainer(props) {
    const contentComponent = props.content.component;
    const isMobile = props.rootCtrl.isMobile;

    return(
        <section className='body-section'>
            
            <Suspense fallback={<span>Loading...</span>}>
                <div className={`content-container ${isMobile?'content-container-mobile':''}`}>
                    {contentComponent}
                </div>
            </Suspense>
            <div className={`${props.pageName}`}></div>
            <div style={{height:'70px'}}></div>
        </section>
    )
}