import React, { Component, useState, useEffect } from 'react';

// class Child extends Component {
//   constructor(props) {
//     super(props)
//     console.log('Constructor')
//     this.state = {
//       data: null
//     }
//   }

//   componentDidMount() {
//     console.log('componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(postData => {
//       this.setState({
//       data: postData
//     })})
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('componentDidUpdate')
//     console.log('prevProps: ', prevProps)
//     console.log('current props: ', this.props)
//     if (prevProps.page !== this.props.page) {
//       fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.page}`).then(resp => resp.json()).then(postData => {
//         this.setState({
//           data: postData
//         })
//       })
//     }
//     console.log("prevState: ", prevState)
//     console.log("current state: ", this.state)
//   }

//   componentWillUnmount() {
//     console.log('componentWillUnmount')
//   }

//   render() {
//     console.log('render')
//     return (
//       <div>
//         <h1>Child Component</h1>
//         {
//           this.state.data &&
//           <div>
//             <h3>Title: { this.state.data.title }</h3>
//             <h3>ID: { this.state.data.id }</h3>
//             <h3>User ID: { this.state.data.userId }</h3>
//           </div>
//         }
//       </div>
//     );
//   }
// }

const Child = (props) => {
  console.log(props)
  const [data, setData] = useState(null)
  const [isEven, setIsEven] = useState(false)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.page}`)
    .then(response => response.json())
    .then(postData => {setData(postData)})
    console.log('First useEffect')
  }, [props.page])

  useEffect(() => {
    console.log('Second useEffect')
  }, [])

  console.log('render')
  return (
    <div>
      <h1>Child Component</h1>
      {
        data &&
        <div>
          <h3>Title: { data.title }</h3>
          <h3>ID: { data.id }</h3>
          <h3>User ID: { data.userId }</h3>
        </div>
      }
    </div>
  );
}


export default Child;
