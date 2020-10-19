import React, { Component } from 'react';

import axios from 'axios';
import ReactMarkdown from 'react-markdown';

class MarkdownViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: null,
      //github_URL: this.props.firmware.github_URL
      github_URL: "https://bryantson.github.io/reactjs-tutorials/react-markdown-viewer/docs/walkthrough.md"
    }

    console.log('hrere', this.state.github_URL, this.props.firmware)
  }

  componentDidMount() {
    axios.get(this.state.github_URL)
    .then(response => {
       console.log("Success in fetching the file from " + this.state.github_URL);
       this.setState({ content: response.data });
    })
    .catch(error => {
       console.log("Error in fetching the file from " + this.state.github_URL);
    });
  }

  render() {
    const { content } = this.state;
    return (
      <div>
    	    <ReactMarkdown source={content}/>
      </div>
    )};
}

export default MarkdownViewer;
