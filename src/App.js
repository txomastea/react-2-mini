import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor(){
    super();
    this.state = {
      fontColor: 'blue',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: true
    };
    this.updateColor = this.updateColor.bind(this)
    this.updateFamily = this.updateFamily.bind(this)
    this.updateSize = this.updateSize.bind(this)
    this.updateEditStatus = this.updateEditStatus.bind(this)
  }
  // updateColor
updateColor(val) {
  console.log(val)
  this.setState({fontColor: val})
}
  // updateSize

  // updateFamily
  updateFamily(val) {
    console.log(val)
    this.setState({fontFamily: val})
  }


  updateSize(val) {
    this.setState({ fontSize: +(val)})
  }

  // updateEditStatus
  updateEditStatus(val) {
    this.setState({allowEdit: val})
  }

  render() {
    console.log('this.state', this.state)

    const { fontColor, fontSize, fontFamily, allowEdit } = this.state

    return (
      <div>
        <div className="headerBar">
          <EditToggle allowEdit={allowEdit} update={this.updateEditStatus}/>

          <ColorChanger 
          fontColor={fontColor} 
          update={this.updateColor} 
          allowEdit={allowEdit}
          />

          <SizeChanger 
          fontSize={fontSize}
          update={this.updateSize}
          allowEdit={allowEdit}
          />

         <FamilyChanger 
         update={this.updateFamily}
         fontFamily={fontFamily}
         allowEdit={allowEdit}
         />
        </div>
        <div className="textArea">
          
          <TextContainer 
            fontColor={fontColor}
            fontSize={fontSize}
            fontFamily={fontFamily}
          />


        </div>
      </div>
    )
  }
}

export default App;
