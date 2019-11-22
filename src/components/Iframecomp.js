import React, { Component } from 'react';

class Iframecomp extends Component {

    render(){
        return(
           <div>
              <iframe id="iframe1" width="800" height="350" src={this.props.siteurl}></iframe>
           </div>
        )
    }
}

export default Iframecomp
