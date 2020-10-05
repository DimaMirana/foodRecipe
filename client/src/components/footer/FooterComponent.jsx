import React from 'react';

import Style from './footer.module.scss';

function FooterComponent() {
    return (
      <div className={Style.wrapperFooter}>
        <p className={Style.wrapperContent}>Simple recipe searching and adding application</p>
        <p className={Style.wrapperContent} style = {{marginLeft:'auto'}}>Done with react and node</p>
      </div>
    );
}

export default FooterComponent
