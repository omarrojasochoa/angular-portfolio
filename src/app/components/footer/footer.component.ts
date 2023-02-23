import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer__social">
      <div class="social social--footer">
        <a
          href="https://codepen.io/omar-rojas-ochoa"
          class="footer__link"
          target="_blank"
          rel="noreferrer"
          ><title>Codepen</title
          ><svg
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Codepen</title>
            <path
              d="M12.528 2.56128L22.528 9.06128V16.0613L12.528 22.5613L2.52798 16.0613V9.06128L12.528 2.56128Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12.528 22.5613V16.0613"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M22.528 9.06128L12.528 16.0613L2.52798 9.06128"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M2.52798 16.0613L12.528 9.06128L22.528 16.0613"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12.528 2.56128V9.06128"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></svg></a
        ><a
          href="https://github.com/omarrojasochoa"
          class="footer__link"
          target="_blank"
          rel="noreferrer"
          ><title>Github</title
          ><svg
            id="social--icon"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Github</title>
            <path
              class="git"
              d="M12 16.4996V13.5971C12.0281 13.2395 11.9798 12.8799 11.8583 12.5424C11.7367 12.2049 11.5447 11.8972 11.295 11.6396C13.65 11.3771 16.125 10.4846 16.125 6.38959C16.1248 5.34246 15.722 4.33549 15 3.57709C15.3419 2.66097 15.3177 1.64835 14.9325 0.749587C14.9325 0.749587 14.0475 0.487087 12 1.85959C10.281 1.3937 8.46899 1.3937 6.75 1.85959C4.7025 0.487087 3.8175 0.749587 3.8175 0.749587C3.43228 1.64835 3.40811 2.66097 3.75 3.57709C3.0226 4.34111 2.61939 5.35718 2.625 6.41209C2.625 10.4771 5.1 11.3696 7.455 11.6621C7.20825 11.9171 7.01795 12.2211 6.89648 12.5545C6.77502 12.8879 6.72511 13.2431 6.75 13.5971V16.4996M6.75 14.2496C3 15.3746 3 12.3746 1.5 11.9996L6.75 14.2496Z"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></svg></a
        ><a
          href="https://www.linkedin.com/in/omar-rojas-ochoa/"
          class="footer__link"
          target="_blank"
          rel="noreferrer"
          ><title>Linkedin</title
          ><svg
            id="social--icon"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Linkedin</title>
            <path
              d="M12 6C13.1935 6 14.3381 6.47411 15.182 7.31802C16.0259 8.16193 16.5 9.30653 16.5 10.5V15.75H13.5V10.5C13.5 10.1022 13.342 9.72064 13.0607 9.43934C12.7794 9.15804 12.3978 9 12 9C11.6022 9 11.2206 9.15804 10.9393 9.43934C10.658 9.72064 10.5 10.1022 10.5 10.5V15.75H7.5V10.5C7.5 9.30653 7.97411 8.16193 8.81802 7.31802C9.66193 6.47411 10.8065 6 12 6V6Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M4.5 6.75H1.5V15.75H4.5V6.75Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3 4.5C3.82843 4.5 4.5 3.82843 4.5 3C4.5 2.17157 3.82843 1.5 3 1.5C2.17157 1.5 1.5 2.17157 1.5 3C1.5 3.82843 2.17157 4.5 3 4.5Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></svg></a
        ><a
          href="https://www.instagram.com/omar.ro30/"
          class="footer__link"
          target="_blank"
          rel="noreferrer"
          ><title>Instagram</title
          ><svg
            id="social--icon"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Instagram</title>
            <path
              d="M12.75 1.5H5.25C3.17893 1.5 1.5 3.17893 1.5 5.25V12.75C1.5 14.8211 3.17893 16.5 5.25 16.5H12.75C14.8211 16.5 16.5 14.8211 16.5 12.75V5.25C16.5 3.17893 14.8211 1.5 12.75 1.5Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 8.52748C12.0926 9.15167 11.9859 9.78914 11.6953 10.3492C11.4047 10.9093 10.9449 11.3635 10.3812 11.6472C9.81757 11.9309 9.17883 12.0297 8.55583 11.9294C7.93284 11.8292 7.35731 11.535 6.91112 11.0889C6.46493 10.6427 6.17079 10.0671 6.07054 9.44414C5.9703 8.82115 6.06904 8.1824 6.35274 7.61876C6.63643 7.05512 7.09063 6.59529 7.65073 6.30466C8.21083 6.01404 8.84831 5.90742 9.47249 5.99998C10.1092 6.0944 10.6986 6.39108 11.1538 6.84621C11.6089 7.30134 11.9056 7.89079 12 8.52748Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M13.125 4.875H13.1333"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></svg></a
        ><a
          href="https://twitter.com/omarrojasochoa"
          class="footer__link"
          target="_blank"
          rel="noreferrer"
          ><title>Twitter</title
          ><svg
            id="social--icon"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Twitter</title>
            <path
              d="M17.25 2.24973C16.5318 2.75634 15.7366 3.14381 14.895 3.39723C14.4433 2.87786 13.843 2.50975 13.1753 2.34267C12.5076 2.1756 11.8046 2.21763 11.1616 2.46307C10.5185 2.70851 9.96633 3.14553 9.57974 3.71502C9.19314 4.2845 8.99077 4.95898 9 5.64723V6.39723C7.68198 6.43141 6.37596 6.13909 5.19826 5.54631C4.02056 4.95354 3.00774 4.07871 2.25 2.99973C2.25 2.99973 -0.75 9.74973 6 12.7497C4.4554 13.7982 2.61537 14.3239 0.75 14.2497C7.5 17.9997 15.75 14.2497 15.75 5.62473C15.7493 5.41582 15.7292 5.20743 15.69 5.00223C16.4555 4.24735 16.9956 3.29426 17.25 2.24973V2.24973Z"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </a>
        <a
          href="https://wa.link/bzw227"
          class="footer__link"
          target="_blank"
          rel="noreferrer"
          ><title>Whatsapp</title>
          <svg
            id="social--icon-wsp"
            fill="none"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>WhatsApp</title>
            <path
              d="M20.5129 3.4866C18.2882 1.24722 15.2597 -0.00837473 12.1032 4.20445e-05C5.54964 4.20445e-05 0.216056 5.33306 0.213776 11.8883C0.210977 13.9746 0.75841 16.0247 1.80085 17.8319L0.114014 23.9932L6.41672 22.34C8.15975 23.2898 10.1131 23.7874 12.0981 23.7874H12.1032C18.6556 23.7874 23.9897 18.4538 23.992 11.8986C24.0022 8.74248 22.7494 5.71347 20.5129 3.4866ZM12.1032 21.7768H12.0992C10.3294 21.7776 8.59195 21.3025 7.06888 20.4012L6.70803 20.1874L2.96836 21.1685L3.96713 17.52L3.73169 17.1461C2.74331 15.5709 2.22039 13.7484 2.22328 11.8889C2.22328 6.44185 6.65615 2.00783 12.1072 2.00783C14.7284 2.00934 17.2417 3.05207 19.0941 4.90662C20.9465 6.76117 21.9863 9.27564 21.9848 11.8969C21.9825 17.3456 17.5496 21.7768 12.1032 21.7768ZM17.5234 14.3755C17.2264 14.2267 15.7659 13.5085 15.4934 13.4064C15.2209 13.3044 15.0231 13.2576 14.8253 13.5552C14.6275 13.8528 14.058 14.5215 13.8847 14.7199C13.7114 14.9182 13.5381 14.9427 13.241 14.794C12.944 14.6452 11.9869 14.3316 10.8519 13.3198C9.96884 12.5319 9.36969 11.5594 9.19867 11.2618C9.02765 10.9642 9.18043 10.8057 9.32922 10.6552C9.46261 10.5224 9.62622 10.3086 9.77444 10.1348C9.92266 9.9609 9.97283 9.83776 10.0714 9.63938C10.1701 9.44099 10.121 9.26769 10.0469 9.1189C9.97283 8.97011 9.37824 7.50788 9.13083 6.9133C8.88969 6.3341 8.64513 6.4122 8.46271 6.40023C8.29169 6.39168 8.09102 6.38997 7.89264 6.38997C7.58822 6.39793 7.30097 6.53267 7.10024 6.76166C6.82831 7.05923 6.061 7.77752 6.061 9.23976C6.061 10.702 7.12532 12.1146 7.27354 12.313C7.42176 12.5114 9.36855 15.5117 12.3472 16.7989C12.9004 17.0375 13.4657 17.2468 14.0409 17.426C14.7523 17.654 15.3999 17.6204 15.9118 17.544C16.4819 17.4585 17.6694 16.8251 17.9173 16.1313C18.1653 15.4376 18.1648 14.8424 18.0884 14.7187C18.012 14.595 17.8204 14.5266 17.5234 14.3778V14.3755Z"
              fill="#758CA3"
            />
            />
          </svg>
        </a>
      </div>
    </div>
    <p class="footer__copyright">Diseñado y Construido por OmarRO.</p>
  `,
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {}
