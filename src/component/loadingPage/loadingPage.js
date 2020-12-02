import React from 'react';
import './loadingPage.scss';
import Nopath from '../../assets/NoPath.png'
// import { Link} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import Tooth from '../../assets/Tooth.I13.2k.png'
import Drift from 'drift-zoom';
import { render } from 'react-dom';
class LoadingPage extends React.Component {
  render() {
    return (
    
      <div>



          {/* <path fill="green" fillOpacity="1" d="M100,350 Q150,450,300,500 Q350,500,400,400 Q450,350,500,350"> */}

        <div className='background'>
            <div className='background__logobox'>
            <svg height="210" width="400">
              <path fill="#fff" d="M 100 300 C 250 500 250 300 350 300 " transform="translate(-100 -290)"/>
            </svg>
              <div className='background__logobox__logoimage'>
                  <div className='background__logobox__Swetha'>Swetha</div>
                  <div className='background__logobox__dentistry'>DENTISTRY</div>       
              </div>     
            </div>
         <div className='background__text__wherescience'>WHERE SCIENCE </div>
          <div className='background__text__meetsart'>MEETS ART </div> 
          <span>
            <img
              className='background__cloudleft'
              src={Nopath}
              align="left"
              alt='cloud'
            />
  
          </span>
          <span>
            <img
              id="sample"
              className='background__teeth'
              src={Tooth}
              align="left"
              alt='teeth'
              data-zoom="https://demos.imgix.net/drift/watch-inside.jpg?w=400&amp;ch=DPR&amp;dpr=1" 
            />
          </span>
          <span>
            <img
              className='background__cloudright '
              src={Nopath}
              align="right"
              alt='cloudright'
            />
          </span>
           <div className='menu'>
              <nav >
                    <ul >
                      <li >
                        <a href="#">EXPERIENCE DENTISTRY</a>
                        
                      </li>
                      <li >
                        <a href="#">OUR EXPERTS</a>
                      </li>
                      <li>
                        <a href="#">BUZZ</a>
                      </li>
                      <li>
                        <a href="#">ABOUT</a>
                      </li>
                      <li>
                        <a href="#">SCHEDULE A VISIT</a>
                      </li>
                    </ul>
              </nav>
             
            </div>
            {/* <img id="sample" src="https://demos.imgix.net/drift/watch-outside.jpg?w=400&amp;ch=DPR&amp;dpr=1" /> */}
        </div>
  
      </div>
  
  
    );
  }
  // componentDidMount() {
  //   const sample = document.querySelector('#sample');
  //   debugger;
  //   new Drift(sample, {
  //     inlinePane: false,
  //     // containInline: true,
  //     zoomFactor: 0.1
  //   });
  // }
  
}

export default LoadingPage;

