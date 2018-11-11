import * as React from 'react';
import { ModalState, ModalProps } from './types';


export default class Modal extends React.Component<ModalProps, ModalState> {

  static defaultProps = {
    open: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { open, onClose } = this.props;
    // const { open } = this.state;
    return (<>
      {open && <div>
        <button onClick={onClose}>x</button>
        ここに内容
      </div>}
    </>)
  }
}
