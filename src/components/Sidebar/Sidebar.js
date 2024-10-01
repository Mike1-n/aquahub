import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faBox, faUsers, faCog, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const AquaHubIcon = () => {
  return (
    <svg
      width="120"
      height="45"
      viewBox="0 0 212 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <>
        <path
          d="M10.3182 35H0.0909091L11.6136 0.0909081H24.5682L36.0909 35H25.8636L18.2273 9.70455H17.9545L10.3182 35ZM8.40909 21.2273H27.6364V28.3182H8.40909V21.2273ZM51.5561 44.8182V30.7045H51.4197C51.0561 31.5909 50.5334 32.3864 49.8515 33.0909C49.1811 33.7841 48.3629 34.3352 47.397 34.7443C46.4424 35.142 45.3515 35.3409 44.1243 35.3409C42.2606 35.3409 40.5447 34.8523 38.9765 33.875C37.4197 32.8977 36.1697 31.4148 35.2265 29.4261C34.2947 27.4375 33.8288 24.9318 33.8288 21.9091C33.8288 18.75 34.3174 16.1818 35.2947 14.2045C36.2834 12.2273 37.5561 10.7784 39.1129 9.85795C40.6811 8.9375 42.3288 8.47727 44.0561 8.47727C45.3515 8.47727 46.4879 8.70455 47.4652 9.15909C48.4424 9.60227 49.2606 10.1989 49.9197 10.9489C50.5788 11.6875 51.0788 12.5 51.4197 13.3864H51.6243V8.81818H60.9652V44.8182H51.5561ZM47.6015 28.1136C48.4652 28.1136 49.2038 27.8636 49.8174 27.3636C50.4424 26.8523 50.9197 26.1364 51.2493 25.2159C51.5902 24.2841 51.7606 23.1818 51.7606 21.9091C51.7606 20.6136 51.5902 19.5057 51.2493 18.5852C50.9197 17.6534 50.4424 16.9432 49.8174 16.4545C49.2038 15.9545 48.4652 15.7045 47.6015 15.7045C46.7379 15.7045 45.9993 15.9545 45.3856 16.4545C44.7834 16.9432 44.3174 17.6534 43.9879 18.5852C43.6697 19.5057 43.5106 20.6136 43.5106 21.9091C43.5106 23.2045 43.6697 24.3182 43.9879 25.25C44.3174 26.1705 44.7834 26.8807 45.3856 27.3807C45.9993 27.8693 46.7379 28.1136 47.6015 28.1136ZM79.8224 23.5455V8.81818H89.2315V35H80.2997V30.0227H80.0269C79.4587 31.6932 78.4644 33 77.044 33.9432C75.6235 34.875 73.936 35.3409 71.9815 35.3409C70.1519 35.3409 68.5497 34.9205 67.1747 34.0795C65.811 33.2386 64.7485 32.0795 63.9872 30.6023C63.2372 29.125 62.8565 27.4318 62.8451 25.5227V8.81818H72.2542V23.5455C72.2656 24.8409 72.5951 25.858 73.2428 26.5966C73.9019 27.3352 74.8224 27.7045 76.0042 27.7045C76.7883 27.7045 77.4644 27.5398 78.0326 27.2102C78.6122 26.8693 79.0553 26.392 79.3622 25.7784C79.6803 25.1534 79.8337 24.4091 79.8224 23.5455ZM98.4324 35.4091C96.762 35.4091 95.2847 35.1364 94.0006 34.5909C92.7279 34.0341 91.7279 33.1932 91.0006 32.0682C90.2734 30.9432 89.9097 29.5114 89.9097 27.7727C89.9097 26.3409 90.154 25.1193 90.6427 24.108C91.1313 23.0852 91.8131 22.25 92.6881 21.6023C93.5631 20.9545 94.5802 20.4602 95.7393 20.1193C96.9097 19.7784 98.1711 19.5568 99.5234 19.4545C100.989 19.3409 102.165 19.2045 103.052 19.0455C103.949 18.875 104.597 18.642 104.995 18.3466C105.393 18.0398 105.592 17.6364 105.592 17.1364V17.0682C105.592 16.3864 105.33 15.8636 104.807 15.5C104.285 15.1364 103.614 14.9545 102.796 14.9545C101.898 14.9545 101.165 15.1534 100.597 15.5511C100.04 15.9375 99.7052 16.5341 99.5915 17.3409H90.9324C91.0461 15.75 91.5518 14.2841 92.4495 12.9432C93.3586 11.5909 94.6824 10.5114 96.4211 9.70455C98.1597 8.88636 100.33 8.47727 102.932 8.47727C104.807 8.47727 106.489 8.69886 107.978 9.14205C109.467 9.57386 110.734 10.1818 111.779 10.9659C112.824 11.7386 113.62 12.6477 114.165 13.6932C114.722 14.7273 115.001 15.8523 115.001 17.0682V35H106.205V31.3182H106.001C105.478 32.2955 104.842 33.0852 104.092 33.6875C103.353 34.2898 102.506 34.7273 101.552 35C100.609 35.2727 99.5688 35.4091 98.4324 35.4091ZM101.501 29.4773C102.217 29.4773 102.887 29.3295 103.512 29.0341C104.148 28.7386 104.665 28.3125 105.063 27.7557C105.461 27.1989 105.66 26.5227 105.66 25.7273V23.5455C105.41 23.6477 105.143 23.7443 104.859 23.8352C104.586 23.9261 104.29 24.0114 103.972 24.0909C103.665 24.1705 103.336 24.2443 102.984 24.3125C102.643 24.3807 102.285 24.4432 101.91 24.5C101.182 24.6136 100.586 24.8011 100.12 25.0625C99.6654 25.3125 99.3245 25.625 99.0972 26C98.8813 26.3636 98.7734 26.7727 98.7734 27.2273C98.7734 27.9545 99.029 28.5114 99.5404 28.8977C100.052 29.2841 100.705 29.4773 101.501 29.4773Z"
          fill="black"
        />
        <path
          d="M123.162 35V0.0909081H132.64V13.7273H145.185V0.0909081H154.662V35H145.185V21.3636H132.64V35H123.162ZM173.396 23.5455V8.81818H182.805V35H173.873V30.0227H173.601C173.033 31.6932 172.038 33 170.618 33.9432C169.197 34.875 167.51 35.3409 165.555 35.3409C163.726 35.3409 162.123 34.9205 160.748 34.0795C159.385 33.2386 158.322 32.0795 157.561 30.6023C156.811 29.125 156.43 27.4318 156.419 25.5227V8.81818H165.828V23.5455C165.839 24.8409 166.169 25.858 166.817 26.5966C167.476 27.3352 168.396 27.7045 169.578 27.7045C170.362 27.7045 171.038 27.5398 171.606 27.2102C172.186 26.8693 172.629 26.392 172.936 25.7784C173.254 25.1534 173.408 24.4091 173.396 23.5455ZM184.574 35V0.0909081H193.983V13.3864H194.12C194.461 12.5 194.961 11.6875 195.62 10.9489C196.279 10.1989 197.097 9.60227 198.074 9.15909C199.052 8.70455 200.188 8.47727 201.483 8.47727C203.211 8.47727 204.853 8.9375 206.41 9.85795C207.978 10.7784 209.251 12.2273 210.228 14.2045C211.216 16.1818 211.711 18.75 211.711 21.9091C211.711 24.9318 211.239 27.4375 210.296 29.4261C209.364 31.4148 208.114 32.8977 206.546 33.875C204.989 34.8523 203.279 35.3409 201.415 35.3409C200.188 35.3409 199.091 35.142 198.126 34.7443C197.171 34.3352 196.353 33.7841 195.671 33.0909C195.001 32.3864 194.483 31.5909 194.12 30.7045H193.915V35H184.574ZM193.779 21.9091C193.779 23.1818 193.944 24.2841 194.273 25.2159C194.614 26.1364 195.091 26.8523 195.705 27.3636C196.33 27.8636 197.074 28.1136 197.938 28.1136C198.802 28.1136 199.535 27.8693 200.137 27.3807C200.751 26.8807 201.216 26.1705 201.535 25.25C201.864 24.3182 202.029 23.2045 202.029 21.9091C202.029 20.6136 201.864 19.5057 201.535 18.5852C201.216 17.6534 200.751 16.9432 200.137 16.4545C199.535 15.9545 198.802 15.7045 197.938 15.7045C197.074 15.7045 196.33 15.9545 195.705 16.4545C195.091 16.9432 194.614 17.6534 194.273 18.5852C193.944 19.5057 193.779 20.6136 193.779 21.9091Z"
          fill="url(#paint0_linear_1_2)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_2"
            x1="-1"
            y1="18"
            x2="214"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.765" />
            <stop offset="1" stop-color="#666666" />
          </linearGradient>
        </defs>
      </>
    </svg>
  );
};

const Sidebar = ({ className }) => {
  return (
    <nav className={`sidebar ${className}`}>
      <div className="sidebar-content">
        <div style={{padding: "8px"}}>
          {<AquaHubIcon />}
        </div>
        <h2>Menu</h2>
        <ul>
          <li>
            <a href="/dashboard">
              <FontAwesomeIcon icon={faTachometerAlt} />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/customers">
              <FontAwesomeIcon icon={faUser} />
              <span>Customer</span>
            </a>
          </li>
          <li>
            <a href="/suppliers">
              <FontAwesomeIcon icon={faBox} />
              <span>Supplier</span>
            </a>
          </li>
          <li>
            <a href="/staff">
              <FontAwesomeIcon icon={faUsers} />
              <span>Staff</span>
            </a>
          </li>
          <li>
            <a href="/settings">
              <FontAwesomeIcon icon={faCog} />
              <span>Setting</span>
            </a>
          </li>
          <li>
            <a href="/reports">
              <FontAwesomeIcon icon={faFileAlt} />
              <span>Reports</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
