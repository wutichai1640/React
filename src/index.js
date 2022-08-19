// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const myreact = <h1>Hello BorntoDev :)</h1>

// const root = ReactDOM.render(Person, document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';


// const root = ReactDOM.render(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const myfirstelement = <h1>Hello BorntoDev :)</h1>
// const myfirstelement = <h1> PI: {Math.PI}</h1>

// const myfirstelement = (
//   <span>
//     <h1>Hello World</h1>
//   </span>
// );

// const myfirstelement = (
//   <div>
//     <span>
//       <h1>Hello World</h1>
//     </span>
//     <span>
//       <h1>Hello Dad</h1>
//     </span>
//     <span>
//       <h1>Hello Mom</h1>
//     </span>
//   </div>
// );

// ReactDOM.render(myfirstelement, document.getElementById('root'));


// function Hello() {
//   return <h1><i>Hello BorntoDev</i></h1>;
// }

// ReactDOM.render(<Hello />, document.getElementById('root'));


// class Hello extends React.Component {
//   render() {
//     return <h1><i>Hello BorntoDev</i></h1>;
//   }
// }

// ReactDOM.render(<Hello />, document.getElementById('root'));

// function Hello(props) {
//   return <h1>Hello {props.name}</h1>;
// }

// class Hello extends React.Component {
//   render() {
//   return <h1>Hello {this.props.name}</h1>;
//   }
// }

// ReactDOM.render(<Hello name="Pororo" />, document.getElementById('root'));


// function Someone() {
//   const everyone = ['John', 'See', 'Na'];
//   var anyone = everyone[Math.floor(Math.random() *


// function TagData(props) {
//   console.log("tagData ", props)
//   return (
//   <div className="col-md-6" >
//     <p>Your Table</p>
//     <table className='center'  >
//     <tbody>
//     <tr className='test' >
//       <th>id</th>
//       <th>name_thai</th> 
//       <th>name_eng</th>
//     </tr>
//      {props.data.map(( key, index ) => {
//       return (
//           <tr key={index}>
//             <td>{key.id}</td>
//             <td>{key.name_thai}</td>
//             <td>{key.name_eng}</td>
//             <td>
//             {/* <button
//                 type="button"
//                 onClick={() => Hello.getDetail(key.id)}
//               >ดูรายละเอียด</button> */}
//             </td>
//           </tr>
//       )
//     })}
//     </tbody>
//         </table>
//     </div>
//   )
// }

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.name_thai = "asdasdasd"
    this.state = {
      fname: "Nama",
      lname: "Chocolate",
      age: 20,
      response: null,
      data: null,
      id_breed: null,
      id: null,
      tree: null,
      name_thai: "",
      name_eng: "",
      weight: null,
      price: null,
      show_detail: null
    }
    this.dataJ = {}
    this.getApi().then(data => {
      this.dataJ = data[0].name_thai
      console.log(this.dataJ)
    })
  }

  // states = { response: null }

  componentDidMount() {
    this.getApi().then(data => {
      // console.log(data)
      this.setState({ response: data })
    })
  }

  
  getApi = ()=> {
    const myPromise = new Promise((resolve, reject) => {
      fetch('http://localhost:3100/tree')
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data })
        // console.log(this.state.data)
        const dataTable = data.map(( key, index ) => {
          return (
            <tr key={index}>
              <td>{key.id}</td>
              <td>{key.name_thai}</td>
              <td>{key.name_eng}</td>
              <td>
              <div>
                <button type="button" onClick={() => this.getDetail(key.id)}>ดูรายละเอียด</button>
              </div>
              </td>
            </tr>
          );
        })
        resolve(dataTable);
      });
    });
    return myPromise
  }

  CreateDetail = (data) => {
    // console.log(data)
    const dataSet = new Promise((resolve, reject) => {
      resolve((
        <div className='col-md-4'>
          <h6>"id_breed": {data.id_breed}</h6>
          <h6>"id": {data.id}</h6>
          <h6>"tree": {data.tree}</h6>
          <h6>"name_thai": {data.name_thai}</h6>
          <h6>"name_eng": {data.name_eng}</h6>
          <h6>"weight": {data.weight}</h6>
          <h6>"price": {data.price}</h6>
        </div>
      ) )
    });
    return dataSet
  }

  getDetail = (id) => {
    // console.log(id)
    
      fetch("http://localhost:3100/tree/"+id)
      .then(response => response.json())
      .then(data => {
        this.CreateDetail(data).then(dataSet => {
          this.setState({ show_detail: dataSet })
        })
        // // console.log(data)
        // this.setState({ id_breed: data.id_breed })
        // this.setState({ id: data.id })
        // this.setState({ tree: data.tree })
        // this.setState({ name_thai: data.name_thai })
        // this.setState({ name_eng: data.name_eng })
        // this.setState({ weight: data.weight })
        // this.setState({ price: data.price })
        // console.log(data)
    })
  }

  changeName = () => {
    this.setState({
      fname: "Spicy",
      lname: "Lemon"
    })
    
  }

  // render() {
  //   const { response } = this.state
  //   if (response === null) { return null }
  //   return (
  //     <div >
  //       <div className="row">
  //         <div className="col-sm-4 col-sm-push-8">.col-sm-4 .col-sm-push-8</div>
  //         <div className="col-sm-8 col-sm-pull-4">.col-sm-8 .col-sm-pull-4</div>
  //       </div>
  //       <div className="row">
  //       <TagData data={this.state.data}></TagData>
  //       <TagData data={this.state.data}></TagData>
  //       <TagData data={this.state.data}></TagData>
  //       <TagData data={this.state.data}></TagData>
  //       <TagData data={this.state.data}></TagData>
  //       </div>
        

        
        
  //       <p>Hello, my name is {this.state.fname} {this.state.lname} ({this.state.age})</p>
  //       <button
  //         type="button"
  //         onClick={this.changeName}
  //       >Change Name</button>
  //     </div>
  //   );
  // }

  render() {
    const { response } = this.state
    if (response === null) { return null }
    return (
      <div>
        <div className="row">
        {/* กำหนด className="row" เพื่อให้จัดเเบ่งเป็นคอลัมน์ทั้งหมด 12 คอลัมน์ */}
          <div className='col-md-6'>
          {/* กำหนด className='col-md-6' เพื่อเเบ่งคอลัมน์เป็น 6 ช่อง */}
            <div style={{textAlign: "center"}}>  
            {/* กำหนด style={{textAlign: "center"}} เพื่อให้ข้อความอยู่ตรงกลาง */}
              <h2>ตารางข้อมูลต้นไม้</h2>
            </div>
              <div className="col-md-12">
                <table className='center'>
                  <tbody>
                    <tr style={{textAlign: "center"}}>
                      <th className="col-md-1">
                        <h5>id</h5>
                      </th>
                      <th className="col-md-2">
                        <h5>name_thai</h5>
                      </th>
                      <th className="col-md-2">
                        <h5>name_eng</h5>
                      </th>
                      <th className="col-md-1">
                        <h5>detail</h5>
                      </th>
                    </tr>
                    {this.state.response}
                    {/* {this.state.response} การดึงข้อมูลมาทั้งตาราง */}
                  </tbody>
                </table>
              </div>
            </div>
            <div className='col-md-6'>
            <div style={{textAlign: "center"}}>
              <h2>ตารางเเสดงผลข้อมูล</h2>
            </div>
            {this.state.show_detail}     
          </div>
        </div>
      </div>

      
      // <div >
      //   <div className="row">
      //     <div className="col-sm-4 col-sm-push-8">.col-sm-4 .col-sm-push-8</div>
      //     <div className="col-sm-8 col-sm-pull-4">.col-sm-8 .col-sm-pull-4</div>
      //   </div>
      //   <div className="row">
      //   <div className="col-md-6" >
      //     <p>Your Table 1</p>
      //     <table className='center'  >
      //     <tbody>
      //     <tr className='test' >
      //       <th>id</th>
      //       <th>name_thai</th> 
      //       <th>name_eng</th>
      //     </tr>
      //       {this.state.response}
      //     </tbody>
      //     </table>
      //   </div>
      //   <div className="col-md-6">
      //     <p>Your Table 2</p>
      //     <table  className='center'>
      //     <tbody>
      //     <tr className='test' >
      //       <th>id</th>
      //       <th>name_thai</th> 
      //       <th>name_eng</th>
      //     </tr>
      //       {this.state.response}
      //     </tbody>
      //     </table>
      //   </div>


        

      //   </div>
      //   <TagData data={this.state.data}></TagData>

      

        
        
      //   <p>Hello, my name is {this.state.fname} {this.state.lname} ({this.state.age})</p>
      //   <button
      //     type="button"
      //     onClick={this.changeName}
      //   >Change Name</button>
      // </div>
    );
  }
}

ReactDOM.render(<Hello name="Pororo" />, document.getElementById('root'));


// class Person extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     fname: "Nama",
  //     lname: "Chocolate",
  //     age: 20
  //   }
  // }

  // changeName = () => {
  //   this.setState({
  //     fname: "Spicy",
  //     lname: "Lemon"
  //   })
  // }

//   render() {
//     return (
//       <div>
//         <p>Hello, my name is {this.state.fname} {this.state.lname} ({this.state.age})</p>
//         <button
//           type="button"
//           onClick={this.changeName}
//         >Change Name</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(Person, document.getElementById('root'));


