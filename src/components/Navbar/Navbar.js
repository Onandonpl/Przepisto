import React from "react";
import styled from "styled-components";
const Navbar = () => {
  return (
    <Container>
      <Logo>
        <svg
          id="Layer_1"
          enable-background="new 0 0 512.042 512.042"
          height="35"
          viewBox="0 0 512.042 512.042"
          width="35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g>
              <path d="m497.399 166.11-113.348-113.348c-7.805-7.805-20.506-7.805-28.311 0l-212.527 212.528c-2.578 2.579-4.305 5.69-5.18 8.984-3.373.891-6.462 2.658-8.988 5.185l-117.333 117.331c-15.617 15.618-15.616 41.03.001 56.647 7.542 7.542 17.601 11.696 28.324 11.696s20.781-4.153 28.323-11.695l117.332-117.333.013-.013 70.855 70.856c9.427 9.426 22.001 14.618 35.408 14.618 13.406 0 25.982-5.192 35.408-14.618l170.024-170.022c19.523-19.524 19.523-51.292-.001-70.816zm-443.181 273.186c-3.765 3.764-8.801 5.837-14.181 5.837-5.381 0-10.417-2.073-14.182-5.838-7.82-7.82-7.82-20.543-.001-28.363l89.057-89.037 28.353 28.353zm103.189-103.19-28.351-28.351 14.157-14.154 27.92 27.919c.134.151.272.299.417.443zm325.85-113.322-170.022 170.022c-5.648 5.649-13.201 8.76-21.266 8.76-4.577 0-8.987-1.004-12.98-2.904l73.24-73.239c3.905-3.905 3.905-10.237 0-14.143-3.906-3.905-10.236-3.905-14.143 0l-74.454 74.454-77.939-77.939-27.916-27.915c-.135-.152-.275-.302-.421-.448l212.553-212.527 106.277 106.277-74.459 74.459c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.953 4.512 2.929 7.071 2.929s5.118-.976 7.071-2.929l73.246-73.246c5.338 11.18 3.389 24.998-5.858 34.246z" />
              <path d="m392.877 118.159c-12.673-12.672-33.29-12.672-45.963 0-6.139 6.138-9.52 14.3-9.52 22.981s3.381 16.843 9.52 22.981c6.336 6.336 14.659 9.504 22.981 9.504s16.646-3.168 22.981-9.504c12.672-12.672 12.672-33.29.001-45.962zm-14.142 31.819c-4.873 4.874-12.805 4.874-17.678 0-2.361-2.361-3.661-5.5-3.661-8.838s1.3-6.478 3.661-8.838c2.437-2.437 5.638-3.656 8.839-3.656s6.402 1.219 8.839 3.656c4.873 4.873 4.873 12.803 0 17.676z" />
              <path d="m369.576 279.808c-3.715 4.086-3.414 10.411.673 14.126 1.916 1.742 4.323 2.601 6.724 2.601 2.719 0 5.429-1.103 7.402-3.273l.005-.005c3.715-4.086 3.411-10.408-.675-14.123-4.088-3.716-10.414-3.413-14.129.674z" />
            </g>
          </g>
        </svg>
        <p>Przepis.to</p>
      </Logo>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-user-plus"
        width="35"
        height="35"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#2c3e50"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 11h6m-3 -3v6" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-menu-2"
        width="35"
        height="35"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#2c3e50"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-login"
        width="35"
        height="35"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#2c3e50"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
        <path d="M20 12h-13l3 -3m0 6l-3 -3" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-logout"
        width="35"
        height="35"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#2c3e50"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
        <path d="M7 12h14l-3 -3m0 6l3 -3" />
      </svg>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  height: 50px;
  max-width: 1920px;
  width: 100%;
  padding: 0 20px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffdf85;
  box-shadow: 0px 7px 33px -20px rgba(0, 0, 0, 0.75);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 10px;
  }
`;
