import React from 'react';
import './style.css';
import clx from 'classnames';


const Page = ({
  children,
  className = '',
  ...props
}) => {
  const classNames = clx({
    'page-container': true,
    [className]: className,
    // fullSize
  });
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );

};
Page.propTypes = {

}
export default Page