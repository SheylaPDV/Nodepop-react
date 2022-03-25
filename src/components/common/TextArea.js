import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import '../../assets/css/TextArea.css';

/////////////////////////AREA DE TEXTO////////////////////////////////

const Textarea = ({ className, ...props }) => {
  const textAreaRef = useRef(null);
  const rendersRef = useRef(0);

  useEffect(() => {
    // console.log(textAreaRef.current);
    textAreaRef.current.focus();
  }, []);

  useEffect(() => {
    if (rendersRef.current < 5) {
      rendersRef.current = rendersRef.current + 1;
    }
  });

  console.log('render ref', rendersRef.current);

  ////////////////////////////////////////////////////////////////////////

  return (
    <div className={classNames('textarea', className)}>
      <input type="text" />
      <textarea ref={textAreaRef} {...props} className="textarea-input" />
    </div>
  );
};

export default Textarea;
