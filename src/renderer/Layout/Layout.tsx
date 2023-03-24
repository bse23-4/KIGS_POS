/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import Header from './components/Header';
import SideBar from './components/SideBar';

function Layout(props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <div className="hide-print flex flex-row h-screen antialiased text-blue-gray-800">
      <SideBar />
      <div className="flex-grow flex">{props.children}</div>
    </div>
  );
}

export default Layout;
