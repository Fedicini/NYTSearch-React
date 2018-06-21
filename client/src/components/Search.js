import React from "react";

const Search = props =>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                 Search
              </strong>
            </h3>
          </div>
          {/*Search Panel from Bootstrap*/}
          <div className="panel-body">
            <form>
              <div className="form-group">
                <input onChange={props.handleTopicChange} type="text" className="form-control" id="topic" aria-describedby="emailHelp" placeholder="Topic"/>
              </div>
              <div className="form-group">
                <input onChange={props.handleStartYearChange} type="text" className="form-control" id="start-year" placeholder="Start Year"/>
              </div>
              <div className="form-group">
                <input onChange={props.handleEndYearChange} type="text" className="form-control" id="end-year" placeholder="End Year"/>
              </div>
              <button onClick={props.handleFormSubmit} type="submit" className="btn btn-secondary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <br/><br/>

    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                Results
              </strong>
            </h3>
          </div>
          <div className="panel-body">
            {props.renderArticles()}
          </div>
        </div>
      </div>
    </div>
    <br/><br/>
  </div>


export default Search;
