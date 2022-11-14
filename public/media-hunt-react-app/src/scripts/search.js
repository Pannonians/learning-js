import React, { Component } from "react";
import "./search.css";

class SearchBox extends Component {
  handleChange(event) {
    event.target.select();
  }

  render() {
    return (
      <div className="col-xs-12 search-container nopadding">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-lg-5"></div>
          <div className="col-xs-12 col-sm-6 col-lg-7">
            <form className="searchbox">
              <input
                className="searchbox__input typeahead form-control"
                type="text"
                placeholder="Search Title..."
                id="q"
              />
              <input type="submit" onClick={this.props.onClick} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export { SearchBox };
