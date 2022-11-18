import React from "react";
import styled from "styled-components";

const Ol = styled.ol`
  .links {
    display: flex;
    flex-flow: row nowrap;
    gap: 50px;
  }

  .links .link {
    list-style: none;
    font-size: 15px;
  }

  .link:hover {
    color: hsl(5, 85%, 63%);
    cursor: pointer;
    transition: 0.2s;
  }

  @media screen and (max-width: 820px) {
    .links {
        flex-flow: column nowrap;
        background-color: aliceblue;
        position: fixed;
        transform: ${({ open }) =>
          open ? "translateX(0)" : "translateX(100%)"};
        top: 0;
        right: 0;
        height: 100vh;
        width: 50%;
        padding: 7rem 30px 0 ;
        gap: 40px;
        transition: transform 0.3s ease-in-out;
        z-index: 30;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ol open={open}>
      <ol className="links">
        <li className="link">Home</li>
        <li className="link">New </li>
        <li className="link">Popular </li>
        <li className="link">Trending</li>
        <li className="link">Categories</li>
      </ol>
    </Ol>
  );
};

export default RightNav;
