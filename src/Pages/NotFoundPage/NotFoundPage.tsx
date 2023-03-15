import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled className="not-found">
      <svg
        data-testid="page-not-found"
        width="210"
        height="198"
        viewBox="0 0 210 198"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_18_233"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="210"
          height="198"
        >
          <rect width="210" height="198" fill="white" />
        </mask>
        <g mask="url(#mask0_18_233)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M209.955 98.9776C209.955 153.641 165.816 197.955 111.368 197.955C56.9204 197.955 12.7815 153.641 12.7815 98.9776C12.7815 44.3138 56.9204 0 111.368 0C165.816 0 209.955 44.3138 209.955 98.9776C209.955 153.641 209.955 98.9776 209.955 98.9776Z"
            fill="#F5F7FF"
          />
          <path
            d="M38.3442 45.2264C38.2101 44.8226 38.4335 44.3739 38.8357 44.2842L47.2375 42.5344C47.6844 42.4446 48.0866 42.8036 48.0866 43.2522L46.7459 63.3977C46.7012 64.1605 45.6734 64.2951 45.4052 63.6221L38.3442 45.2264Z"
            fill="#D9E0FF"
          />
          <path
            d="M54.3881 37.5087C54.4328 37.06 54.835 36.7908 55.282 36.9254L63.5497 39.2136C63.9966 39.3482 64.1753 39.8418 63.9519 40.2456L53.539 57.5644C53.1815 58.1926 52.1983 57.8785 52.2877 57.1157L54.3881 37.5087Z"
            fill="#D9E0FF"
          />
          <path
            d="M64.5327 50.4307C64.7562 50.0718 65.2477 49.982 65.5606 50.2513L69.4486 53.4817C69.8062 53.7958 69.7615 54.3342 69.404 54.6034L59.6615 61.4232C59.0358 61.8719 58.2761 61.154 58.6783 60.481L64.5327 50.4307Z"
            fill="#D9E0FF"
          />
          <path
            d="M89.023 100.189L9.60827 123.52L1.38525 95.1637C0.6702 92.696 2.0556 90.1386 4.51357 89.4207L72.1301 69.5444C76.1969 68.3779 80.4425 70.711 81.6491 74.7939L89.023 100.189Z"
            fill="url(#paint0_linear_18_233)"
          />
          <path
            d="M1.34081 95.1641L2.10055 97.8113C1.3855 95.3436 2.7709 92.7861 5.22887 92.0682L72.8901 72.2368C73.0688 72.192 73.2029 72.1471 73.337 72.1022C76.2419 71.4292 78.3423 73.2688 78.968 75.557L81.56 74.7943C80.3534 70.7113 76.1078 68.3782 72.041 69.5896L4.46914 89.4211C4.51383 89.4211 4.51383 89.4211 4.46914 89.4211C2.01117 90.1389 0.625766 92.6964 1.34081 95.1641Z"
            fill="#3242A7"
          />
          <path
            d="M86.2524 110.329C86.7887 112.213 85.7161 114.187 83.8391 114.77L14.0328 135.275C12.1558 135.813 10.1894 134.736 9.60842 132.852L1.29601 104.271C0.759724 102.387 1.83229 100.413 3.70929 99.8295L73.5156 79.3251C75.3926 78.7867 77.4037 79.8635 77.94 81.748L86.2524 110.329Z"
            fill="url(#paint1_linear_18_233)"
          />
          <path
            d="M15.284 160.446C15.9991 162.914 18.5464 164.305 21.0044 163.587L93.3581 142.364C97.4249 141.153 99.7488 136.891 98.5422 132.852L81.6492 74.8389L79.0572 75.6016C79.7275 77.845 78.9678 80.537 76.1523 81.569C76.0182 81.6139 75.8395 81.6587 75.7054 81.7036L3.30701 102.881C0.893728 103.599 -0.536363 106.156 0.178683 108.624L15.284 160.446Z"
            fill="#3242A7"
          />
          <path
            d="M94.1179 144.967L21.7642 166.234C19.3062 166.952 16.7589 165.561 16.0438 163.093L0.938468 111.271C0.223422 108.803 1.60882 106.246 4.06679 105.528L76.4205 84.3058C80.4873 83.0944 82.8112 78.832 81.6046 74.7939L99.302 135.455C100.509 139.538 98.14 143.8 94.1179 144.967Z"
            fill="url(#paint2_linear_18_233)"
          />
          <path
            d="M24.0881 139.179L10.2788 143.217C8.49117 143.756 6.61417 142.724 6.07789 140.929L2.59204 128.904L19.6638 123.879C23.82 122.668 28.2443 125.091 29.4509 129.308C30.6576 133.526 28.289 137.923 24.0881 139.179Z"
            fill="#3242A7"
          />
          <path
            d="M1.47477 125.091L2.90486 130.026L6.16726 129.084L3.75398 120.873C1.96636 121.411 0.938484 123.296 1.47477 125.091Z"
            fill="#3242A7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.3826 130.499C26.8208 133.088 25.0846 135.541 22.5047 135.978C19.9248 136.414 17.4782 134.669 17.04 132.079C16.6019 129.49 18.3381 127.037 20.9179 126.6C23.4978 126.164 25.9444 127.909 26.3826 130.499C26.8208 133.088 26.3826 130.499 26.3826 130.499Z"
            fill="white"
          />
          <path
            d="M184.214 72.1467C184.214 72.1018 184.214 72.1018 184.214 72.057C184.214 71.9672 184.214 71.8775 184.214 71.7429C184.035 64.6987 178.27 61.1542 178.27 61.1542L176.795 62.7694L133.892 48.9502C128.842 47.335 123.435 50.1168 121.826 55.1868L88.3975 159.818L84.6882 163.856C84.8223 169.509 89.2913 173.323 89.336 173.368C90.4086 174.489 91.7493 175.387 93.3582 175.88L136.976 189.924C142.026 191.539 147.433 188.757 149.042 183.687L183.722 75.108C184.035 74.4349 184.169 73.6722 184.214 72.8646C184.214 72.6402 184.214 72.4159 184.214 72.1467Z"
            fill="#5D9FE7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M154 47C154 51.4183 150.418 55 146 55C141.582 55 138 51.4183 138 47C138 42.5817 141.582 39 146 39C150.418 39 154 42.5817 154 47C154 51.4183 154 47 154 47Z"
            fill="url(#paint3_linear_18_233)"
          />
          <path
            d="M91.6692 172.389C86.6192 170.774 83.8484 165.345 85.4572 160.275L120.137 51.6956C121.746 46.6256 127.153 43.8438 132.203 45.459L175.821 59.5025C180.871 61.1178 183.642 66.5467 182.033 71.6167L147.353 180.196C145.745 185.266 140.337 188.048 135.287 186.433L91.6692 172.389Z"
            fill="url(#paint4_linear_18_233)"
          />
          <path
            d="M168.661 60.9301L168.08 62.6799C167.544 64.2952 165.846 65.1925 164.192 64.699L138.361 56.3985C136.752 55.8601 135.858 54.1551 136.35 52.495L136.931 50.7452L131.255 48.9056C127.591 47.7391 123.658 49.7581 122.451 53.4372L88.0845 160.984C86.9225 164.664 88.9336 168.612 92.5982 169.823L135.635 183.687C139.3 184.854 143.232 182.835 144.439 179.156L178.806 71.6086C180.057 67.9294 178.001 63.9811 174.337 62.7697L168.661 60.9301Z"
            fill="white"
          />
          <path
            d="M162.092 124.148L95.4586 138.147L91.7046 149.857L157.578 138.237L162.092 124.148Z"
            fill="#EDEFFF"
          />
          <path
            d="M102.475 116.162L168.125 105.169L177.823 74.8389L113.066 83.0496L102.475 116.162Z"
            fill="#EDEFFF"
          />
          <path
            d="M148.193 56.802C147.88 56.7122 147.702 56.3533 147.791 56.0392C147.88 55.7251 148.238 55.5457 148.551 55.6354L156.193 58.1031C156.506 58.1928 156.684 58.5518 156.595 58.8659C156.506 59.1799 156.148 59.3594 155.835 59.2697L148.193 56.802Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M160.796 59.8983C160.796 60.4186 160.376 60.8405 159.857 60.8405C159.339 60.8405 158.919 60.4186 158.919 59.8983C158.919 59.3779 159.339 58.9561 159.857 58.9561C160.376 58.9561 160.796 59.3779 160.796 59.8983C160.796 60.4186 160.796 59.8983 160.796 59.8983Z"
            fill="white"
          />
          <mask
            id="mask1_18_233"
            maskUnits="userSpaceOnUse"
            x="54"
            y="91"
            width="99"
            height="76"
          >
            <rect x="54" y="91" width="99" height="76" fill="white" />
          </mask>
          <g mask="url(#mask1_18_233)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M86.0158 122.942L83.2479 121.177L81.218 121.317L78.8191 98.1499L76.0512 96.3857L76.2819 98.4285L70.7921 98.9856L56.7679 127.399L57.2292 129.952L54.8765 130.602L57.6444 132.366L73.4217 130.741L72.2222 137.612L74.9902 139.377L82.9711 138.541L82.0484 129.813L86.6616 129.395L86.0158 122.942ZM71.9916 109.942L73.4678 124.195L64.5643 125.124L71.5764 110.917L71.9916 109.942Z"
              fill="#F59187"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M83.2479 121.141L83.8938 127.594L79.3267 128.058L80.2493 136.786L72.2684 137.622L71.3458 128.894L54.8765 130.612L54 125.598L68.0242 97.2312L76.0974 96.3955L78.6808 121.605L83.2479 121.141ZM70.6999 122.441L69.2237 108.141L68.8085 109.116L61.7964 123.369L70.6999 122.441Z"
              fill="#FFA9A0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M152.954 129.813L150.878 127.027L149.956 128.467L145.573 126.517L119.416 144.112L118.355 147.037L115.587 146.109L117.663 148.894L132.794 155.626L127.166 160.872L129.242 163.658L136.577 166.908L140.129 158.876L144.327 160.733L146.957 154.79L144.881 152.005L143.128 152.144L152.954 129.813ZM141.19 136.591L135.424 149.73L127.258 146.109L140.36 137.241L141.19 136.591Z"
              fill="#F59187"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M144.881 152.061L142.251 158.003L138.053 156.146L134.501 164.178L127.166 160.928L130.718 152.896L115.587 146.165L117.294 141.383L143.451 123.787L150.878 127.083L140.683 150.204L144.881 152.061ZM133.348 146.907L139.114 133.769L138.284 134.419L125.182 143.286L133.348 146.907Z"
              fill="#FFA9A0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M121.999 102.282L120.108 98.0108L119.739 98.8929C118.078 97.1751 115.771 95.9681 112.911 95.3181C108.621 94.3431 105.022 94.9931 102.07 97.3609C99.1175 99.6822 97.0415 103.628 95.796 109.153L94.1352 116.349C93.4432 119.599 93.2587 122.524 93.5816 125.031L92.7512 124.567L94.6888 128.977C94.7349 129.117 94.8272 129.256 94.8733 129.395C96.4879 132.784 99.4404 134.966 103.731 135.941C108.067 136.963 111.712 136.266 114.618 133.852C117.524 131.484 119.6 127.538 120.846 122.06L122.507 114.771C123.614 109.85 123.475 105.718 122.091 102.468C122.045 102.421 122.045 102.328 121.999 102.282ZM109.082 128.234L103.685 129.07C102.577 128.467 101.839 127.538 101.47 126.284C100.963 124.52 101.055 122.013 101.793 118.763L104.008 109.107C104.746 106.089 105.714 103.953 106.914 102.746C108.113 101.539 109.636 101.121 111.481 101.539C113.372 101.957 114.618 103.025 115.125 104.743C115.633 106.228 115.633 108.271 115.172 110.825L109.082 128.234Z"
              fill="#F59187"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M112.957 130.101C110.051 132.469 106.406 133.165 102.07 132.19C97.7797 131.215 94.8272 129.033 93.2126 125.644C91.598 122.255 91.3673 117.937 92.5206 112.598L94.1353 105.263C95.3808 99.738 97.5029 95.7918 100.409 93.4705C103.362 91.1491 106.96 90.4527 111.25 91.4277C115.541 92.4027 118.493 94.5847 120.108 97.9738C121.722 101.317 121.953 105.681 120.8 111.02L119.185 118.309C117.94 123.787 115.864 127.733 112.957 130.101ZM113.465 101.038C112.911 99.3202 111.712 98.2524 109.82 97.8345C107.975 97.4167 106.453 97.7881 105.253 99.0416C104.054 100.249 103.085 102.384 102.347 105.402L100.132 115.012C99.3943 118.262 99.3021 120.769 99.8095 122.533C100.317 124.298 101.563 125.412 103.454 125.876C105.345 126.34 106.914 125.876 108.113 124.576C109.313 123.276 110.282 121.048 111.02 117.984L113.188 108.513C113.926 105.216 114.018 102.709 113.465 101.038Z"
              fill="#FFA9A0"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M191.364 66.6728C191.364 64.4294 191.766 62.545 192.571 61.0644C193.375 59.5837 194.582 57.9236 196.146 56.1289C197.308 54.7829 198.202 53.6164 198.738 52.719C199.274 51.8217 199.542 50.7897 199.542 49.668C199.542 48.4566 199.095 47.4695 198.202 46.7516C197.308 46.0338 196.101 45.6748 194.537 45.6748C193.152 45.6748 191.811 45.944 190.604 46.5273C189.398 47.1106 187.789 47.9631 185.778 49.1745C184.526 49.8924 183.454 50.2513 182.605 50.2513C181.666 50.2513 180.906 49.8475 180.281 49.0399C179.655 48.2323 179.342 47.2452 179.342 46.1235C179.342 45.3159 179.476 44.6429 179.789 44.1045C180.057 43.5661 180.504 43.0276 181.13 42.5341C183.052 41.0086 185.286 39.7972 187.789 38.9447C190.291 38.0922 192.839 37.6436 195.386 37.6436C198.112 37.6436 200.526 38.1371 202.715 39.0793C204.905 40.0664 206.559 41.3676 207.765 43.0725C208.972 44.7775 209.553 46.6619 209.553 48.7707C209.553 50.3859 209.24 51.8665 208.614 53.2126C207.989 54.5586 207.229 55.7251 206.335 56.7122C205.441 57.6993 204.28 58.9107 202.805 60.3914C201.151 61.9168 199.9 63.218 199.051 64.2499C198.202 65.2819 197.71 66.4485 197.487 67.7047C197.308 68.5572 196.95 69.1854 196.414 69.634C195.878 70.0827 195.207 70.3071 194.403 70.3071C193.464 70.3071 192.705 69.993 192.168 69.32C191.632 68.647 191.364 67.7945 191.364 66.6728ZM188.995 79.46C188.995 77.8448 189.532 76.4988 190.56 75.4219C191.632 74.3451 192.928 73.8067 194.582 73.8067C196.146 73.8067 197.487 74.3451 198.514 75.4219C199.587 76.4988 200.079 77.8448 200.079 79.46C200.079 81.0752 199.542 82.4213 198.514 83.4981C197.442 84.5749 196.146 85.1133 194.582 85.1133C192.928 85.1133 191.587 84.5749 190.56 83.4981C189.487 82.4213 188.995 81.0752 188.995 79.46Z"
            fill="url(#paint5_linear_18_233)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_18_233"
            x1="-12.8719"
            y1="69.2803"
            x2="-12.8272"
            y2="140.946"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4C61E1" />
            <stop offset="1" stopColor="#3B4DB9" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_18_233"
            x1="37.7788"
            y1="91.3026"
            x2="-2.22373"
            y2="190.049"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6BD984" />
            <stop offset="1" stopColor="#6BCB80" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_18_233"
            x1="-15.0874"
            y1="74.855"
            x2="-14.9742"
            y2="195.84"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4C61E1" />
            <stop offset="1" stopColor="#3B4DB9" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_18_233"
            x1="138"
            y1="39"
            x2="138"
            y2="55"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D9E0FF" />
            <stop offset="1" stopColor="#D9E0FF" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_18_233"
            x1="85"
            y1="45"
            x2="85"
            y2="186.892"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#89C1FF" />
            <stop offset="1" stopColor="#65ADFD" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_18_233"
            x1="179.354"
            y1="25.827"
            x2="150.615"
            y2="62.5359"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FB5072" />
            <stop offset="1" stopColor="#F55978" />
          </linearGradient>
        </defs>
      </svg>
      <div className="not-found__text text">
        <h2 className="text__title">Oh NO!</h2>
        <span className="text__message">
          May be bigfoot has broken this page. Come back to the homepage.
        </span>
      </div>
      <NavLink to={"/"}>
        <Button text={"Back to home page"} isDisabled={false} />
      </NavLink>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
