interface StarProps {
  fillColor?: string;
  width?: string;
}

const Star: React.FC<StarProps> = ({
  fillColor = "#ffffff",
  width = "15px",
}) => {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 348.8 348.8"
      fill="none"
      width={width}
    >
      <defs>
        <style>{`
          .cls-1 {
            stroke: ${fillColor};
            stroke-miterlimit: 10;
            stroke-width: 37px;
          }
          .cls-2 {
            fill: ${fillColor};
          }
        `}</style>
      </defs>
      <path
        className="cls-1"
        d="M188.6,28.8l32.3,99.1,99.1,32.3c13.8,4.5,13.8,24,0,28.4l-99.1,32.3-32.3,99.1c-4.5,13.8-24,13.8-28.4,0l-32.3-99.1-99.1-32.3c-13.8-4.5-13.8-24,0-28.4l99.1-32.3,32.3-99.1c4.5-13.8,24-13.8,28.4,0h0Z"
      />
      <g>
        <rect
          className="cls-2"
          x="276.5"
          y="19.5"
          width="32"
          height="91.1"
          rx="16"
          ry="16"
        />
        <rect
          className="cls-2"
          x="247"
          y="49.1"
          width="91.1"
          height="32"
          rx="16"
          ry="16"
        />
      </g>
      <g>
        <rect
          className="cls-2"
          x="52.7"
          y="246.4"
          width="22.3"
          height="63.6"
          rx="9"
          ry="9"
        />
        <rect
          className="cls-2"
          x="32.1"
          y="267"
          width="63.6"
          height="22.3"
          rx="9"
          ry="9"
        />
      </g>
    </svg>
  );
};

export default Star;
