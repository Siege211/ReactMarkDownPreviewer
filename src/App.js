import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';
import editorBox from './components/editorBox.js';
import previewBox from './components/previewBox.js';
marked.setOptions({breaks: true,});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown:placeholder,
      markedDisplay: true
    }
    this.updateMarkDown = this.updateMarkDown.bind(this);
  }
  updateMarkDown(event) {
   this.setState({markdown:event.target.value});
  }

  render() {
    
    return (
      <div id='APP'>
        <div className='input'>
          <editorBox>
            <h1><u>This is a Markdown Previewer</u></h1>
            <p>Enter text in the text editor below this paragraph, and it will render as HTML in the lower box. This text editor uses Markdown to render your text as HTML. I've provided examples of how to create several kinds of HTML elements, so take a minute to study those if you are new to Markdown. 
            </p><p>You can learn more about how to use Markdown with <a target='_blank' href='https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf'>this handy guide.</a></p>
            <textarea id='editor'
              value={this.state.markdown}
              onChange={this.updateMarkDown}/>
          </editorBox>
          
        </div> 
        <div className='preview'>
          <h1><u>Preview Your Markdown Here</u></h1>
          <previewBox>
          {/*} {marked(this.state.markdown)}  this display the raw HTML, saving for a later project*/}
            <div id='preview'
              dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
          </previewBox>  
        </div> 
      </div>);
  }
}

const placeholder = 
`
# This is how you make an H1
## Here's an H2

For inline code, use a backtick on either side of the text you are trying to render as code: \`<div></div>\`. Amazing!

A multiline code block is enclosed by 3 backticks on each side of your code:
\`\`\`
function rot13(str) { // LBH QVQ VG!
  return str.split('').map(x=>/[A-Z]/.test(x)?x=x.charCodeAt(0):x=x)
.map(x=>typeof x!=="number"?x=x:x>77?x=String.fromCharCode(x-13):String.fromCharCode(x+13))
.join('');}
// Change the inputs below to test
rot13("SERR PBQR PNZC");
\`\`\`
  
-Two asterisks for **bold**
-Underlines for _italics_
-Underlines inside of two asterisks for **_bold italics!_**
-Use 2 ~'s on each side to make a ~~kebab~~

* Use an asterisk followed by a space to make an unordered list. 
   * just indent your asterisk to indent the bullet points
      * see?

-Use a number followed by a period to make an ordered list.
  1. Item 1
  2. Item 2
  3. and so on and so on.


As usual, use a ">" when quoting someone.
  > When you do that, the quote looks like this.



Here's how you make a link: [GitHub](http://github.com)

And finally, here's how you would embed an image... if you're into that sort of thing:

![squiggly line](https://cloud.githubusercontent.com/assets/711743/25648417/57cd2c0c-2fe9-11e7-8753-b60ea2656faf.png)
`


export default App;
