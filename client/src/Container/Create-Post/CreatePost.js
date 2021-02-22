import { connect } from "react-redux";
import { createPost } from "../../actions/posts";
import { bindActionCreators } from "redux";
import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
class CreatePost extends Component {
  constructor() {
    super();
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
    });
    this.state = {
      post: {
        title: "",
        location: "",
        address: "",
        type: "",
        price: "",
        guests: "",
        rooms: "",
        beds: "",
        baths: "",
        bedrooms: "",
        description: "",
        wifi: false,
        kitchen: false,
        heating: false,
        tv: false,
        elevator: false,
        breakfast: false,
        ac: false,
        smokeAlarm: false,
        showMsg: false,
      },
      pictures: [],
      resultOfCreatePost: "",
    };
  }

  componentWillMount() {
    const script = document.createElement("script");
    script.async = true;
    document.body.appendChild(script);
  }
  showMsg() {
    return (
      <p className="text-success pt-2 ">{this.state.resultOfCreatePost}</p>
    );
  }
  render() {
    if (localStorage.getItem("token")) {
      return (
        <div class="container py-5 ">
          <div class="row">
            <form
              className="p-5 col-12"
              enctype="multipart/form-data"
              method="post"
            >
              <h1>Create post</h1>
              <div class="form-group row">
                <div class="col-sm-12">
                  <label for="Title">
                    Property Title
                    <span className="require text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    name="title"
                    value={this.state.post.title}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          title: e.target.value,
                        },
                      });
                    }}
                    onBlur={() => this.validator.showMessageFor("title")}
                  />
                </div>
                <div className="validation col-sm-12 m-2">
                  {this.validator.message(
                    "title",
                    this.state.post.title,
                    "required"
                  )}
                </div>
                <div class="col-sm-6">
                  <label for="Address">
                    Address <span className="require text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder="address"
                    value={this.state.post.address}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          address: e.target.value,
                        },
                      });
                    }}
                    onBlur={() => this.validator.showMessageFor("address")}
                  />
                  <div className="validation  m-2">
                    {this.validator.message(
                      "address",
                      this.state.post.address,
                      "required"
                    )}
                  </div>
                </div>
                <div class="col-sm-6">
                  <label for="Location">
                    Location <span className="require text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    placeholder="location"
                    value={this.state.post.location}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          location: e.target.value,
                        },
                      });
                    }}
                    onBlur={() => this.validator.showMessageFor("location")}
                  />
                  <div className="validation m-2">
                    {this.validator.message(
                      "location",
                      this.state.post.location,
                      "required"
                    )}
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-12">
                  <label for="type">Type Of Rent</label>
                  <select
                    id="type"
                    name="type"
                    className="form-control"
                    defaultValue={this.state.post.type}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          type: e.target.value,
                        },
                      });
                    }}
                    onBlur={() => this.validator.showMessageFor("type")}
                  >
                    <option selected disabled>
                      Choose from list here
                    </option>
                    <option value="Apartment">Apartment</option>
                    <option value="Room">Room</option>
                    <option value="Villa">Villa</option>
                    <option value="Roof">Roof</option>
                    <option value="Boutique">Boutique</option>
                    <option value="Studio">Studio</option>
                    <option value="House">House</option>
                  </select>
                </div>
              </div>
              <div className="validation col-sm-12 m-2">
                {this.validator.message(
                  "type",
                  this.state.post.type,
                  "required"
                )}
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label for="guests">
                    Number of Guests
                    <span className="require text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="guests"
                    placeholder="guests"
                    name="guests"
                    min="1"
                    max="15"
                    value={this.state.post.guests}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          guests: e.target.value,
                        },
                      });
                    }}
                    onBlur={() => this.validator.showMessageFor("guests")}
                  />
                  <div className="validation col-sm-6 m-2">
                    {this.validator.message(
                      "guests",
                      this.state.post.guests,
                      "required"
                    )}
                  </div>
                </div>
                <div class="col-sm-6">
                  <label for="rooms">
                    Number of Rooms
                    <span className="require text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    id="rooms"
                    name="rooms"
                    min="1"
                    max="15"
                    placeholder="rooms"
                    className="form-control"
                    value={this.state.post.rooms}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          rooms: e.target.value,
                        },
                      });
                    }}
                    onBlur={() => this.validator.showMessageFor("rooms")}
                  />
                  <div className="validation col-sm-6 m-2">
                    {this.validator.message(
                      "rooms",
                      this.state.post.rooms,
                      "required"
                    )}
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label for="baths">
                    Number of Baths
                    <span className="require text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    id="baths"
                    name="baths"
                    min="1"
                    max="15"
                    placeholder="baths"
                    className="form-control"
                    value={this.state.post.baths}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          baths: e.target.value,
                        },
                      });
                    }}
                    onBlur={() => this.validator.showMessageFor("baths")}
                  />
                  <div className="validation col-sm-6 m-2">
                    {this.validator.message(
                      "baths",
                      this.state.post.baths,
                      "required"
                    )}
                  </div>
                </div>
                <div class="col-sm-6">
                  <label for="beds">
                    Number of Beds<span className="require text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    id="beds"
                    name="beds"
                    placeholder="beds"
                    min="1"
                    max="15"
                    className="form-control"
                    value={this.state.post.beds}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          beds: e.target.value,
                        },
                      });
                    }}
                    onBlur={() => this.validator.showMessageFor("beds")}
                  />
                  <div className="validation col-sm-6 m-2">
                    {this.validator.message(
                      "beds",
                      this.state.post.beds,
                      "required"
                    )}
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label for="bedrooms">
                    Number of BedRooms
                    <span className="require text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    id="bedrooms"
                    name="bedrooms"
                    min="1"
                    max="15"
                    placeholder="bedrooms"
                    className="form-control"
                    value={this.state.post.bedrooms}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          bedrooms: e.target.value,
                        },
                      });
                    }}
                    onBlur={() => this.validator.showMessageFor("bedrooms")}
                  />
                  <div className="validation col-sm-6 m-2">
                    {this.validator.message(
                      "bedrooms",
                      this.state.post.bedrooms,
                      "required"
                    )}
                  </div>
                </div>
                <div class="col-sm-6">
                  <label for="price">
                    Price<span className="require text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="price"
                    className="form-control"
                    value={this.state.post.price}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          price: e.target.value,
                        },
                      });
                    }}
                    onBlur={() => this.validator.showMessageFor("price")}
                  />
                  <div className="validation col-sm-12 m-2">
                    {this.validator.message(
                      "price",
                      this.state.post.price,
                      "required"
                    )}
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <div className="col-sm-12">
                  <label for="description">
                    Description<span className="require text-danger">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    row="5"
                    placeholder="Write any information about your property to help travllers choose your property..."
                    className="form-control"
                    value={this.state.post.description}
                    onChange={(e) => {
                      this.setState({
                        post: {
                          ...this.state.post,
                          description: e.target.value,
                        },
                      });
                    }}
                    onBlur={() => this.validator.showMessageFor("description")}
                  ></textarea>
                  <div className="validation col-sm-12 m-2">
                    {this.validator.message(
                      "description",
                      this.state.post.description,
                      "required"
                    )}
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-12">
                  <label for="pictures" className="pr-2">
                    Select Your Property Pictures:
                  </label>
                  <input
                    type="file"
                    id="pictures"
                    name="pictures"
                    multiple
                    placeholder="pictures"
                    enctype="multipart/form-data"
                    onChange={(e) => {
                      this.setState({
                        pictures: e.target.files,
                      });
                    }}
                    onBlur={() => this.validator.showMessageFor("pictures")}
                  />
                  <div className="validation col-sm-6 m-2">
                    {this.validator.message(
                      "pictures",
                      this.state.post.pictures,
                      "required"
                    )}
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-12">
                  <label>Interests</label>
                  <br />
                  <div class="checkboxes pr-2">
                    <label for="wifi">
                      <input
                        type="checkbox"
                        id="wifi"
                        value={this.state.post.wifi}
                        onChange={() => {
                          this.setState({
                            post: {
                              ...this.state.post,
                              wifi: true,
                            },
                          });
                        }}
                      />
                      <span className="text-dark m-1">WiFi</span>
                    </label>
                    <label for="kitchen" className="m-2">
                      <input
                        type="checkbox"
                        id="kitchen"
                        value={this.state.post.kitchen}
                        onChange={() => {
                          this.setState({
                            post: {
                              ...this.state.post,
                              kitchen: true,
                            },
                          });
                        }}
                      />
                      <span className="text-dark m-1">kitchen</span>
                    </label>
                    <label for="heating" className="m-2">
                      <input
                        type="checkbox"
                        id="heating"
                        value={this.state.post.heating}
                        onChange={() => {
                          this.setState({
                            post: {
                              ...this.state.post,
                              heating: true,
                            },
                          });
                        }}
                      />
                      <span className="text-dark m-1">Heating</span>
                    </label>
                    <label for="tv">
                      <input
                        type="checkbox"
                        id="tv"
                        value={this.state.post.tv}
                        onChange={() => {
                          this.setState({
                            post: {
                              ...this.state.post,
                              tv: true,
                            },
                          });
                        }}
                      />
                      <span className="text-dark m-1">TV</span>
                    </label>
                    <br />
                    <label for="elevator">
                      <input
                        type="checkbox"
                        id="elevator"
                        value={this.state.post.elevator}
                        onChange={() => {
                          this.setState({
                            post: {
                              ...this.state.post,
                              elevator: true,
                            },
                          });
                        }}
                      />
                      <span className="text-dark m-1">Elevator</span>
                    </label>
                    <label for="breakfast" className="m-2">
                      <input
                        type="checkbox"
                        id="breakfast"
                        value={this.state.post.breakfast}
                        onChange={() => {
                          this.setState({
                            post: {
                              ...this.state.post,
                              breakfast: true,
                            },
                          });
                        }}
                      />
                      <span className="text-dark m-1">Breakfast</span>
                    </label>
                    <label for="ac" className="m-2">
                      <input
                        type="checkbox"
                        id="ac"
                        value={this.state.post.ac}
                        onChange={() => {
                          this.setState({
                            post: {
                              ...this.state.post,
                              ac: true,
                            },
                          });
                        }}
                      />
                      <span className="text-dark m-1">AC</span>
                    </label>
                    <label for="smokeAlarm" className="m-2">
                      <input
                        type="checkbox"
                        id="smokeAlarm"
                        value={this.state.post.smokeAlarm}
                        onChange={() => {
                          this.setState({
                            post: {
                              ...this.state.post,
                              smokeAlarm: true,
                            },
                          });
                        }}
                      />
                      <span className="text-dark m-1">smokeAlarm</span>
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={async (e) => {
                  if (this.validator.allValid()) {
                    e.preventDefault();
                    const formData = new FormData();
                    Object.keys(this.state.post).forEach((key) =>
                      formData.append(key, this.state.post[key])
                    );
                    for (let i = 0; i < this.state.pictures.length; i++) {
                      formData.append("files", this.state.pictures[i]);
                    }
                    await this.props
                      .createPost(
                        window.location.pathname.split("/")[1],
                        formData
                      )
                      .then((res) => {
                        this.setState({ resultOfCreatePost: res.payload });
                      });
                  } else {
                    this.validator.showMessages();
                  }
                }}
              >
                Create Post
              </button>
              {this.showMsg()}
            </form>
          </div>
        </div>
      );
    } else {
      window.location.assign("/signin");
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createPost }, dispatch);
};

export default connect(null, mapDispatchToProps)(CreatePost);
