import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { classes } from 'istanbul-lib-coverage';

export default function MouseIcon(props) {
    return (
        <SvgIcon viewBox={"0 0 148.66 33.42"} className={props.classes.root}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M140.623 5.14242L140.624 5.15501C140.646 6.06094 140.67 7.01249 140.187 7.76409C139.822 8.33098 139.284 8.74477 138.682 9.02292L139.795 9.71846L139.747 10.3193L138.581 10.2209L137.011 10.25C137.004 10.2669 136.998 10.284 136.992 10.3013C136.865 10.6641 136.972 11.0472 137.217 11.303C137.442 11.5374 137.811 11.5454 138.165 11.5239C138.513 11.5026 138.889 11.4537 139.132 11.1861C139.288 11.0141 139.374 10.7996 139.394 10.5849C139.582 10.8109 139.767 11.0441 139.95 11.2815C139.508 11.4182 139.126 11.7052 138.823 12.0845C138.458 12.5404 138.118 13.0921 138.208 13.6817C138.295 14.255 138.789 14.6316 139.257 14.9319C139.656 15.1882 140.113 15.235 140.579 15.2045C141.078 15.1719 141.599 15.124 141.96 14.7551C142.067 14.6457 142.162 14.5245 142.244 14.3944C142.354 14.5391 142.466 14.6847 142.579 14.8312L142.592 14.8491L142.595 14.8526L142.885 15.231C143.724 15.4207 144.686 15.6676 144.686 15.6676L146.305 15.6846L146.883 15.8604C147.003 15.8506 147.317 16.1191 147.126 16.5724C146.888 17.1391 145.993 17.6064 145.616 17.7935C145.483 17.8595 145.108 17.8576 144.697 17.8253C145.305 18.856 145.742 19.9082 145.809 20.9669C146.354 20.7785 146.796 20.6326 146.796 20.6326L148.221 19.7138L148.825 19.5456C148.924 19.4671 149.35 19.5382 149.438 20.0755C149.547 20.7471 149.027 21.7044 148.803 22.0982C148.623 22.4133 147.157 23.1205 146.766 23.2307L145.01 23.7621C143.172 26.7076 139.694 28.3862 136.364 27.8529C135.538 28.1918 133.044 28.975 133.044 28.975L131.236 29.9067L130.597 30.0211C130.49 30.0978 130.047 29.9625 129.977 29.3396C129.911 28.7584 130.322 28.2376 130.639 27.8363C130.746 27.7002 130.843 27.5772 130.907 27.471C131.087 27.1686 132.449 26.296 133.02 26.0703C132.083 24.8809 131.661 23.2139 131.434 21.4587L130.585 22.9147L130.057 23.4363C129.993 23.5712 129.536 23.7554 129.208 23.2881C128.798 22.704 128.889 21.4695 128.936 20.9555C128.975 20.5443 130.123 18.9892 130.464 18.6504C130.464 18.6504 130.686 18.0281 131.112 17.495L131.106 17.4038C131.001 15.9149 130.89 14.3277 131.004 12.8796C130.3 13.4013 129.444 13.6116 128.58 13.7625C127.658 13.9236 126.696 14.081 125.842 13.6792C124.978 13.2722 124.354 12.4629 123.937 11.5767C123.532 10.7168 123.489 9.76058 123.55 8.80718L123.551 8.79309C123.616 7.77852 123.685 6.71287 124.299 5.92416C124.943 5.09858 125.93 4.63774 126.939 4.45861C127.942 4.28055 129.03 4.35666 129.886 4.93249C130.432 5.2999 130.689 5.91719 130.95 6.54428C131.076 6.84798 131.203 7.154 131.365 7.43506C131.538 7.73639 131.765 8.01652 131.99 8.29447C132.164 8.50856 132.337 8.72153 132.483 8.94201C132.846 8.58711 133.291 8.29988 133.833 8.09696C134 8.03427 134.165 7.98452 134.328 7.94695C134.297 7.88915 134.266 7.83062 134.235 7.77231C134.099 7.51349 133.962 7.25167 133.796 7.01589C133.618 6.76295 133.395 6.53346 133.173 6.30565C132.719 5.84012 132.272 5.38161 132.239 4.74435C132.189 3.78265 132.888 2.95456 133.549 2.28336C134.152 1.67272 134.952 1.38928 135.767 1.16637C136.573 0.94598 137.414 0.725519 138.204 1.01052C139.003 1.29926 139.621 1.96521 140.061 2.71674C140.488 3.44603 140.602 4.29111 140.623 5.14242ZM135.426 10.8329C135.443 11.0457 135.401 11.2685 135.298 11.4676H134.256L132.693 11.3066C132.672 11.2164 132.663 11.123 132.666 11.0286L134.256 10.8648H135.426V10.8329ZM137.134 13.6166C137.16 13.7206 137.098 13.8262 136.997 13.8524L136.568 13.9637L136.032 14.0743L135.591 14.0457C135.487 14.0389 135.408 13.9467 135.414 13.8396C135.421 13.7325 135.51 13.6512 135.614 13.658L136.006 13.6834L136.485 13.5846L136.905 13.4757C137.006 13.4495 137.109 13.5126 137.134 13.6166ZM137.318 14.4222C137.361 14.5196 137.319 14.635 137.225 14.6797L136.494 15.0254L135.391 15.4036C135.292 15.4374 135.185 15.3824 135.153 15.2806C135.12 15.1788 135.173 15.0688 135.272 15.035L136.356 14.6635L137.067 14.3267C137.162 14.2819 137.274 14.3247 137.318 14.4222ZM137.886 15.4021C137.976 15.3483 138.007 15.2294 137.954 15.1366C137.902 15.0438 137.787 15.0121 137.697 15.0659L137.264 15.324L136.661 15.8717L136.495 16.1647C136.443 16.2575 136.474 16.3764 136.564 16.4303C136.654 16.4842 136.769 16.4527 136.821 16.36L136.956 16.1215L137.485 15.6409L137.886 15.4021Z" fill={props.fill}/>
            <path d="M141.704 11.859C141.762 11.9484 141.879 11.9727 141.966 11.9133L142.334 11.6609L142.775 11.3261L143.051 10.9706C143.116 10.8868 143.102 10.7646 143.021 10.6976C142.94 10.6306 142.821 10.6443 142.756 10.728L142.511 11.0437L142.118 11.3427L141.757 11.5898C141.67 11.6492 141.647 11.7697 141.704 11.859Z" fill={props.fill}/>
            <path d="M142.407 12.643C142.312 12.6851 142.201 12.6392 142.16 12.5405C142.119 12.4418 142.164 12.3277 142.26 12.2857L142.98 11.9693L143.976 11.3927C144.066 11.3402 144.181 11.3734 144.232 11.4669C144.283 11.5604 144.251 11.6788 144.161 11.7314L143.147 12.3183L142.407 12.643Z" fill={props.fill}/>
            <path d="M142.482 13.6326C142.383 13.6652 142.277 13.6087 142.245 13.5065C142.214 13.4043 142.268 13.2951 142.368 13.2625L142.844 13.1062L143.643 13.0144L143.965 13.0853C144.067 13.1077 144.132 13.211 144.11 13.3159C144.088 13.4208 143.988 13.4876 143.886 13.4652L143.624 13.4075L142.923 13.488L142.482 13.6326Z" fill={props.fill}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M80.82 22.114C80.82 23.7838 80.5223 25.0298 79.9269 25.8518C79.3314 26.6738 78.3767 27.0848 77.0628 27.0848C75.7554 27.0848 74.7943 26.6738 74.1794 25.8518C73.571 25.0233 73.2668 23.7774 73.2668 22.114V14.2986C73.2668 11.166 74.5451 9.59966 77.1017 9.59966C78.422 9.59966 79.3702 9.99771 79.9463 10.7938C80.5288 11.5899 80.82 12.7582 80.82 14.2986V22.114ZM75.8881 22.1431C75.8881 23.1463 75.9625 23.8453 76.1114 24.2401C76.2667 24.635 76.5806 24.8324 77.0531 24.8324C77.5256 24.8324 77.8363 24.6317 77.9851 24.2304C78.134 23.8227 78.2084 23.1269 78.2084 22.1431V14.1821C78.2084 13.373 78.1308 12.7841 77.9754 12.4151C77.8266 12.0397 77.5288 11.852 77.0822 11.852C76.6421 11.852 76.3315 12.0397 76.1502 12.4151C75.9755 12.7841 75.8881 13.3698 75.8881 14.1724V22.1431Z" fill={props.fill}/>
            <path d="M0.790527 9.80354V26.8906H3.39242V18.949H5.72247V26.8906H8.32436V9.80354H5.72247V16.716H3.39242V9.80354H0.790527Z" fill={props.fill}/>
            <path d="M12.3787 9.80354V26.8906H18.2232V24.6479H14.9805V19.2111H17.9514V17.017H14.9805V12.0462H18.1067V9.80354H12.3787Z" fill={props.fill}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0154 26.8906L23.4522 9.80354H26.889L29.4812 26.8906H27.0541L26.6463 23.8421H23.8891L23.5202 26.8906H21.0154ZM26.3745 21.7548L25.2289 13.1724H25.1901L24.1415 21.7548H26.3745Z" fill={props.fill}/>
            <path d="M31.301 9.80354L33.9515 26.8906H37.165L39.6018 9.80354H37.1747L36.2427 17.5218L35.6505 22.9586H35.5825L34.8932 17.5218L33.7767 9.80354H31.301Z" fill={props.fill}/>
            <path d="M44.5784 26.8906V20.0655L41.7144 9.80354H44.1998L45.8891 16.1918H45.9279L47.4328 9.80354H49.9084L47.1803 20.0655V26.8906H44.5784Z" fill={props.fill}/>
            <path d="M58.2224 9.80354V26.8906H60.5233V20.5218L60.4263 14.6772L62.8243 26.8129H64.8922L67.1931 14.6772L67.096 20.5218V26.8906H69.4164V9.80354H66.164L63.8825 22.2887L61.4554 9.80354H58.2224Z" fill={props.fill}/>
            <path d="M91.2237 25.978C91.8192 25.2337 92.1169 24.0751 92.1169 22.5023V9.79383H89.515V22.4538C89.515 22.9651 89.4956 23.3858 89.4568 23.7159C89.4244 24.0395 89.3273 24.3113 89.1655 24.5314C89.0037 24.7515 88.7351 24.8615 88.3597 24.8615C87.9843 24.8615 87.7351 24.7838 87.6121 24.6285C87.4956 24.4667 87.3953 24.2887 87.3112 24.0945C87.227 23.9004 87.185 23.3534 87.185 22.4538V9.79383H84.5831V22.5023C84.5831 24.0686 84.8808 25.2239 85.4763 25.9683C86.0782 26.7126 87.0361 27.0848 88.35 27.0848C89.6704 27.0848 90.6283 26.7158 91.2237 25.978Z" fill={props.fill}/>
            <path d="M95.7343 22.0849V20.5606H98.2003V22.279C98.2003 23.2305 98.2812 23.9004 98.443 24.2887C98.6048 24.6706 98.909 24.8615 99.3556 24.8615C99.8022 24.8615 100.097 24.7029 100.239 24.3858C100.388 24.0686 100.462 23.5508 100.462 22.8324C100.462 22.114 100.333 21.4894 100.074 20.9587C99.8151 20.4215 99.4041 19.8616 98.841 19.2791L97.5789 17.9781C96.9899 17.3633 96.5304 16.7257 96.2003 16.0656C95.8767 15.4054 95.7149 14.6416 95.7149 13.7743C95.7149 12.3634 95.9867 11.3148 96.5304 10.6288C97.0741 9.94269 98.0093 9.59966 99.3362 9.59966C100.663 9.59966 101.559 10.0009 102.025 10.8035C102.498 11.5996 102.734 12.7646 102.734 14.2986V15.3568H100.336V14.1335C100.336 13.3051 100.265 12.7129 100.123 12.3569C99.9802 11.9944 99.7051 11.8132 99.2973 11.8132C98.8961 11.8132 98.6048 11.9491 98.4236 12.221C98.2488 12.4928 98.1614 12.9006 98.1614 13.4442C98.1614 13.9879 98.2521 14.4216 98.4333 14.7452C98.6145 15.0688 98.9414 15.483 99.4138 15.9879L100.822 17.5121C101.527 18.2759 102.058 19.0493 102.414 19.8325C102.776 20.6156 102.957 21.47 102.957 22.3955C102.957 23.9942 102.689 25.1754 102.152 25.9391C101.614 26.7029 100.673 27.0848 99.3265 27.0848C97.9867 27.0848 97.0514 26.6608 96.5207 25.8129C95.9964 24.9586 95.7343 23.7159 95.7343 22.0849Z" fill={props.fill}/>
            <path d="M106.361 9.80354V26.8906H112.206V24.6479H108.963V19.2111H111.934V17.017H108.963V12.0462H112.089V9.80354H106.361Z" fill={props.fill}/>
            <ellipse cx="138.907" cy="32.7384" rx="9.16183" ry="1.55946" fill={props.shadowFill}/>
        </SvgIcon>
    )
}