import React, { Component } from "react";
import api from "../../utils/api.util";
import { Link } from "react-router-dom";

class DetailsClassifieds extends Component {
  state = {
    id: "",
    userID: "",
    category: "",
    subcategory: "",
    likes: "",
    dislikes: "",
    title: "",
    neighborhood: "",
    description: "",
    imgURL: "",
    price: "1",
    measure: "",
    delivery: "",
    // exclusivos serviços testimonial exclusivos projeto
    motive: "",
    investment: "",
    filePDF: "",
    address: "",
    desiredDate: "",
    // confirmedUsers: '',
    comments: [],
    newComment: {
      comment: "",
      userID: "",
      classifiedID: "",
    },
  };

  loadClassified = async () => {
    const id = this.props.match.params.id;
    const classified = await api.getClassifiedsDetails(id);
    this.setState({
      id: classified[0]._id,
      userID: classified[0].userID,
      category: classified[0].category,
      subcategory: classified[0].subcategory,
      likes: classified[0].likes,
      dislikes: classified[0].dislikes,
      title: classified[0].title,
      neighborhood: classified[0].neighborhood,
      description: classified[0].description,
      imgURL: classified[0].imgURL,
      price: classified[0].price,
      measure: classified[0].measure,
      delivery: classified[0].delivery,
      // exclusivos serviços testimonial exclusivos projeto
      motive: classified[0].motive,
      investment: classified[0].investment,
      filePDF: classified[0].filePDF,
      address: classified[0].address,
      desiredDate: classified[0].desiredDate,
      // confirmedUsers: '',
    });
  };

  loadComments = async () => {
    try {
      // const { id } = this.state
      const allComments = await api.getComments(this.props.match.params.id);
      this.setState({ comments: allComments });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.loadClassified();
    this.loadComments();
  };

  handleInput = (event) => {
    this.setState({
      newComment: {
        comment: event.target.value,
        userID: localStorage.getItem("user"),
        classifiedID: this.props.match.params.id,
      },
    });
  };

  addComment = async (event) => {
    event.preventDefault();
    const classified = await api.addComment(this.state.newComment);
    console.log("comentario enviado");
    this.loadComments();
  };

  submitLike = async (event) => {
    event.preventDefault();
    const classified = await api.rankClassified({
      id: this.props.match.params.id,
      likes: localStorage.getItem("user"),
    });
    console.log("curtido");
    this.loadClassified();
  };

  render() {
    return (
      <div>
        <h1>CLASSIFIED details</h1>
        <ul>
          <li>Usuario: {this.state.userID}</li>
          <li>Category: {this.state.category}</li>
          <li>subcategory: {this.state.subcategory}</li>
          <li>
            likes: {this.state.likes}
            dislikes: {this.state.dislikes}
          </li>
          <li>title: {this.state.title}</li>
          <li>neighborhood: {this.state.neighborhood}</li>
          <li>description {this.state.description}</li>
          <li>imgURL {this.state.imgURL}</li>
          <li>
            PRICE {this.state.price}
            measure {this.state.measure}
          </li>
          delivery {this.state.delivery}
          <li>motive {this.state.motive}</li>
          <li>investment {this.state.investment}</li>
          <li>
            filePDF {this.state.filePDF}
            address {this.state.address}
            desiredDate {this.state.desiredDate}
          </li>
        </ul>

      
        {this.state.userID === localStorage.getItem("user") ? (
          <div>
            <Link to="/main">Voltar</Link>
          </div>
        ) : (
          <div>
            {" "}
            <form>
              <textarea
                name="comment"
                value={this.state.newComment.comment}
                onChange={this.handleInput}
              ></textarea>
              <button type="submit" onClick={this.addComment}>
                ENVIAR
              </button>
            </form>
            <button type="submit" onClick={this.submitLike}>
              CURTIR
            </button>
          </div>
        )}

        <ul>
          {this.state.comments.map((comment) => {
            return (
              <li key={comment.id}>
                {comment.comment}- {comment.category}- {comment.likes}
                {/* <form><input name="id" type="hidden" value={this.state.id}/>
              <button type="submit" onClick={this.submitLike}>CURTIR</button>
              </form> */}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default DetailsClassifieds;
