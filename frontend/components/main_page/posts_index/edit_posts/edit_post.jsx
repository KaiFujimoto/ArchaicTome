// import React from 'react';
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
//
// class EditPost extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       body: this.props.post.body,
//     };
//   }
//
//   handleKeypress(e){
//     if (e.charCode == 13) {
//       this.handleSubmit(e);
//     }
//   }
//
//   afterOpenModal() {
//     this.subtitle.style.color = '#f00';
//   }
//
//   closeModal() {
//     this.setState({modalIsOpen: false});
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.updatePost(this.state).then(() => {
//       this.clostModal();
//     });
//   }
//
//   renderErrors() {
//     return(
//       <ul className='create-post-errors'>
//         {this.props.errors.errors.map( (error, idx) => {
//           return (
//               <li key={idx}>
//                 {error}
//               </li>
//           );
//         })}
//       </ul>
//     );
//   }
//
//   render() {
//     return (
//       <div>
//         <Modal
//           isOpen={this.state.modalIsOpen}
//           onAfterOpen={this.afterOpenModal}
//           onRequestClose={this.closeModal}
//           contentLabel="Example Modal"
//           />
//         <h2>Edit Post</h2>
//           <form onSubmit={this.handleSubmit}>
//             <textarea
//               onChange={this.updateBody}
//               onKeyPress={this.handleKeypress}
//               value={this.state.body}
//               ></textarea>
//           </form>
//           {this.props.errors.errors && this.props.errors.errors.length > 0 ? this.renderErrors() : ''}
//       </div>
//     );
//   }
//
// }
//
// export default EditPost;
