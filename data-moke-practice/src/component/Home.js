import React from 'react'
import axios from 'axios'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      arr : []
    }
  }
  componentDidMount (){
    this.ajaxfunc()
  }
  ajaxfunc = () => {
    // 域名解析错误  Get net::ERR_NAME_NOT_RESOLVED  先看一下自己的域名地址是否正确
    axios.get ("http://localhost:4000/arr").then((ok) =>{
      console.log (ok);
      this.setState ({
        arr: ok.data
      })
    })
  }
  render(){
    return (
      <div>
        <h1>hello</h1>
        <div>
          {this.state.arr.map((v,i) => {
            return (
              //key必须有 且必须在主盒子中
              <ul key = {i}>
                <li> {v.name} </li>
              </ul>
            )
          })}
        </div>
      </div>
    )
  }
}

export default  Home;