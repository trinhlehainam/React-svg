import React from 'react'

type Props = {
    classname: string
};

const MenuButton: React.FC<Props> = ({classname}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="351.999"
      height="120.064"
      version="1.1"
      viewBox="0 0 351.999 120.064"
      xmlSpace="preserve"
      className={classname}
    >
      <g transform="matrix(1.33333 0 0 -1.33333 -450.77 3852.489)">
        <g transform="scale(.1)">
          <g>
            <g transform="scale(1.76697)">
              <path
                fill="none"
                stroke="#ffd58c"
                strokeDasharray="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeOpacity="1"
                strokeWidth="22.638"
                d="M3396.08 15894.7H1924.64v405.3h1471.44z"
              ></path>
            </g>
            <g>
              <g transform="scale(1.77175)">
                <path
                  fill="none"
                  stroke="#ffd58c"
                  strokeDasharray="none"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeOpacity="1"
                  strokeWidth="11.288"
                  d="M2695.68 16257.5l-42.5 42.5-42.5-42.5"
                ></path>
              </g>
              <g transform="scale(1.72286)">
                <path
                  fill="none"
                  stroke="#ffd58c"
                  strokeDasharray="none"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeOpacity="1"
                  strokeWidth="11.609"
                  d="M2772.17 16300l-43.71-43.7-43.7 43.7"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default MenuButton;
