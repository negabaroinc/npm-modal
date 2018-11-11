import { render } from 'react-dom';
import * as React from 'react';
import Modal from '../src/index';

class Test extends React.Component<{}, { open: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  openModal = () => {
    this.setState({
      open: true
    });
  }

  closeModal = () => {
    this.setState({
      open: false
    });
  }

  render() {
    const { open } = this.state;
    return (<>
      <button onClick={this.openModal}>open</button>
      <Modal open={open} onClose={this.closeModal}/>
    </>);
  }
}


render(<Test />, document.querySelector('#app'));
