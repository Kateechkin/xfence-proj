<template>
  <div class="content">
    <div class="index">
      <section class="section-slader">
        <div class="slider js-slider">
          <div class="button-none" id="button-none">
            <button
              v-on:click="openSlide(1)"
              class="one"
              v-on:click.prevent="currentIndex = 1"
              v-bind:class="{ whiteactive: currentIndex === 1 }"
            ></button>
            <button
              v-on:click="openSlide(2)"
              class="two"
              v-on:click.prevent="currentIndex = 2"
              v-bind:class="{ whiteactive: currentIndex === 2 }"
            ></button>
            <button
              v-on:click="openSlide(3)"
              class="thee"
              v-on:click.prevent="currentIndex = 3"
              v-bind:class="{ whiteactive: currentIndex === 3 }"
            ></button>
            <button
              v-on:click="openSlide(4)"
              class="four"
              v-on:click.prevent="currentIndex = 4"
              v-bind:class="{ whiteactive: currentIndex === 4 }"
            ></button>
          </div>
          <div class="slider__body">
            <transition-group name="fade" tag="div" class="slader">
              <div
                v-for="i in [currentIndex]"
                :key="i"
                class="slider__slide js-slide"
              >
                <img
                  :src="require(`../../public/img/` + currentImg)"
                  class="js-slide__img"
                />
              </div>
            </transition-group>
          </div>
        </div>
        <div class="button-index">
          <button
            v-on:click="next"
            class="one"
            v-on:click.prevent="activeLink = 1"
            v-bind:class="{ whiteactive: activeLink === 1 }"
          ></button>
          <button
            v-on:click="next"
            class="two"
            v-on:click.prevent="activeLink = 2"
            v-bind:class="{ whiteactive: activeLink === 2 }"
          ></button>
          <button
            v-on:click="next"
            class="thee"
            v-on:click.prevent="activeLink = 3"
            v-bind:class="{ whiteactive: activeLink === 3 }"
          ></button>
          <button
            v-on:click="next"
            class="four"
            v-on:click.prevent="activeLink = 4"
            v-bind:class="{ whiteactive: activeLink === 4 }"
          ></button>
        </div>
        <div class="slider-text">
          <div class="slider-text__h1">
            <h1>Лучшая система Ограждений</h1>
          </div>
          <div class="slider-text__p">
            <p>
              Лучшие наружные ограждения. Отличная альтернатива кованым заборам
              по доступной цене.
            </p>
          </div>
        </div>
      </section>
      <section class="section-contact">
        <div class="section-contact__text">
          <h1>Проконсультируйтесь с нами прямо сейчас!</h1>
        </div>
        <div class="section-contact__foto">
          <img src="../assets/img/poster1.jpg" alt="poster" />
          <a href="tel:+7(383)375-00-28"><button>Позвонить</button></a>
        </div>
      </section>
      <section class="section-production">
        <div class="section-production__title">
          <h1>Мы производим</h1>
        </div>
        <div class="section-production__text">
          <p>
            Мы производим ограждения на любой вкус и любые ваши требования. Наши
            продукты помогут облагородить владения с минимальными усилиями.
          </p>
        </div>
        <Catalog />
      </section>
      <section class="our-work">
        <div class="our-work__title">
          <h1>Наши работы</h1>
        </div>
        <div class="our-work__video">
          <div class="video__video">
            <iframe
              src="https://www.youtube.com/embed/Xo2vQ7ICTWg"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video__info">
            <p>
              Задача организации, в особенности же постоянный количественный
              рост и сфера нашей активности играет важную роль в формировании
              дальнейших направлений развития.
            </p>
          </div>
        </div>
        <div class="our-work__row">
          <div class="our-work__column">
            <img src="../assets/img/gallery-1.jpg" alt="goal1" class="scale" />
          </div>
          <div class="our-work__column">
            <img src="../assets/img/gallery-2.jpg" alt="goal2" />
          </div>
          <div class="our-work__column">
            <img src="../assets/img/gallery-3.jpg" alt="goal3" />
          </div>

          <div class="our-work__column">
            <img src="../assets/img/gallery-4.jpg" alt="goal4" />
          </div>
          <div class="our-work__column">
            <img src="../assets/img/gallery-5.jpg" alt="goal5" />
          </div>
          <div class="our-work__column">
            <img src="../assets/img/gallery-6.jpg" alt="goal6" />
          </div>

          <div class="our-work__column">
            <img src="../assets/img/gallery-7.jpg" alt="goal7" />
          </div>
          <div class="our-work__column">
            <img src="../assets/img/gallery-13.jpg" alt="goal8" />
          </div>
          <div class="our-work__column">
            <img src="../assets/img/gallery-9.jpg" alt="goal9" />
          </div>
        </div>
      </section>
      <section class="advantages">
        <div class="advantages__title">
          <h1>Почему мы?</h1>
        </div>
        <div class="advantages__row">
          <div class="advantages__column">
            <div class="advantages__item figure">
              <div class="figure__f">
                <svg
                  width="210"
                  height="210"
                  class="figure__svg"
                  viewBox="0 0 210 210"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="104.932"
                    y="0.707107"
                    width="147.397"
                    height="147.397"
                    rx="0.5"
                    transform="rotate(45 104.932 0.707107)"
                    stroke="#9C9C9C"
                  />
                </svg>
                <svg
                  width="58"
                  height="58"
                  class="figure__svg-inside"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M0.183592 5.32047L4.05173 12.0893C4.18221 12.318 4.40059 12.4835 4.65598 12.5476L8.26475 13.4498L20.6421 25.8271L22.0097 24.4599L9.43864 11.8892C9.31493 11.7651 9.15979 11.6772 8.98993 11.6346L5.52237 10.7647L2.22904 4.99826L5.05258 2.17473L10.8214 5.47124L11.6917 8.9388C11.7339 9.10905 11.8222 9.26459 11.9459 9.3883L24.517 21.9594L25.8842 20.5917L13.5069 8.21442L12.6047 4.60763C12.5406 4.35185 12.3751 4.13306 12.1464 4.00219L5.37717 0.134449C4.99967 -0.0803594 4.5247 -0.0167125 4.21681 0.289986L0.349074 4.15812C0.0380003 4.46403 -0.0296244 4.93979 0.183592 5.32047Z"
                      fill="#9C9C9C"
                    />
                    <path
                      d="M40.3863 19.0579L19.1127 40.3318L17.7451 38.9642L39.0191 17.6907L40.3863 19.0579Z"
                      fill="#9C9C9C"
                    />
                    <path
                      d="M15.3893 41.0847C15.2142 40.7935 14.9 40.6157 14.5603 40.6157H8.75846C8.41915 40.6157 8.10449 40.7935 7.92986 41.0847L5.02876 45.9195C4.84458 46.2258 4.84458 46.6089 5.02876 46.9156L7.92986 51.7503C8.10449 52.0411 8.41915 52.2193 8.75846 52.2193H14.5603C14.9 52.2193 15.2142 52.0411 15.3893 51.7503L18.29 46.9156C18.4742 46.6089 18.4742 46.2258 18.29 45.9195L15.3893 41.0847ZM14.0133 50.2853H9.30583L6.9851 46.4175L9.30583 42.5494H14.0133L16.334 46.4175L14.0133 50.2853Z"
                      fill="#9C9C9C"
                    />
                    <path
                      d="M46.4709 23.2098C52.8575 23.2313 58.0527 18.0712 58.0741 11.6846C58.0773 10.7124 57.958 9.74416 57.7189 8.80178C57.59 8.28346 57.0653 7.96801 56.547 8.0969C56.3768 8.13946 56.2216 8.22737 56.0975 8.35109L50.0781 14.3665L45.3022 12.7749L43.7094 8.00023L49.7288 1.97964C50.1063 1.60174 50.1059 0.989533 49.728 0.612027C49.6035 0.487518 49.4468 0.399208 49.2754 0.357042C43.0817 -1.21145 36.7898 2.53774 35.2213 8.73098C34.9831 9.67056 34.8641 10.6364 34.8673 11.6058C34.8697 12.3672 34.9481 13.1262 35.1024 13.8717L13.9251 35.0485C13.1796 34.8946 12.4207 34.8162 11.6597 34.8135C5.25084 34.8135 0.0556641 40.0086 0.0556641 46.4175C0.0556641 52.8259 5.25084 58.0211 11.6597 58.0211C18.0681 58.0211 23.2633 52.8259 23.2633 46.4175C23.2609 45.6561 23.1821 44.8971 23.0282 44.1516L28.0981 39.0818L30.3154 41.2991C30.6933 41.6766 31.3051 41.6766 31.683 41.2991L32.1663 40.8154C32.5903 40.3941 33.2757 40.3941 33.6998 40.8154C34.1234 41.2378 34.1242 41.9236 33.7018 42.3473C33.7014 42.3477 33.7006 42.3484 33.6998 42.3492L33.2165 42.8326C32.839 43.2101 32.839 43.8223 33.2165 44.1998L44.7517 55.735C47.7856 58.7968 52.727 58.8191 55.7888 55.7851C58.8502 52.7511 58.8725 47.8093 55.8385 44.7479C55.8222 44.7312 55.8055 44.7145 55.7888 44.6978L44.2536 33.163C43.8761 32.7855 43.2639 32.7855 42.8864 33.163L42.4031 33.6463C41.9786 34.068 41.2936 34.068 40.8692 33.6463C40.4459 33.2239 40.4448 32.5381 40.8672 32.1148C40.868 32.114 40.8688 32.1136 40.8692 32.1128L41.3529 31.6291C41.7304 31.2516 41.7304 30.6394 41.3529 30.2619L39.1356 28.0446L44.2055 22.9747C44.951 23.1287 45.7099 23.2075 46.4709 23.2098ZM50.2702 56.0874C49.5677 56.0862 48.8712 55.9593 48.2136 55.7123L55.7657 48.1598C56.9054 51.1914 55.3719 54.5726 52.3403 55.7123C51.6788 55.9609 50.9775 56.0882 50.2702 56.0874ZM39.3154 30.9553C38.2446 32.2326 38.4124 34.1364 39.6897 35.2069C40.8123 36.1477 42.4484 36.1469 43.5698 35.2041L54.4216 46.0654C54.5393 46.1836 54.6495 46.3081 54.7561 46.4346L46.4884 54.7023C46.3615 54.5961 46.237 54.4859 46.1189 54.3678L35.2587 43.5068C36.3296 42.2295 36.1617 40.3257 34.8844 39.2552C33.7618 38.314 32.1253 38.3152 31.0039 39.2576L29.4569 37.7106L37.768 29.4118L39.3154 30.9553ZM43.2202 21.2296L21.2839 43.1615C21.0432 43.4018 20.9465 43.7507 21.0285 44.0804C22.3551 49.2903 19.207 54.5893 13.9967 55.9156C8.78682 57.2422 3.48782 54.0941 2.16118 48.8838C0.83494 43.6739 3.98307 38.3749 9.19336 37.0483C10.7694 36.6473 12.4207 36.6473 13.9967 37.0483C14.3265 37.129 14.6745 37.0323 14.9156 36.7933L36.8467 14.861C37.087 14.6207 37.1836 14.2718 37.1009 13.9425C35.7834 8.79343 38.8894 3.55132 44.0384 2.23343C45.0114 1.98481 46.0178 1.88934 47.0203 1.95179L41.9194 7.05468C41.6604 7.31324 41.5697 7.69632 41.6855 8.04359L43.6191 13.8458C43.7158 14.1342 43.9425 14.3609 44.2313 14.4568L50.0335 16.3909C50.3804 16.5066 50.7635 16.4163 51.0225 16.1578L56.1234 11.0569C56.1349 11.2414 56.1409 11.424 56.1409 11.6058C56.1679 16.9191 51.8829 21.2483 46.5696 21.2758C45.7481 21.2797 44.9295 21.1787 44.1339 20.975C43.8041 20.8927 43.4552 20.989 43.215 21.2292H43.2202V21.2296Z"
                      fill="#9C9C9C"
                    />
                    <path
                      d="M50.0567 48.6342L48.6891 50.0018L39.0195 40.3322L40.3867 38.9646L50.0567 48.6342Z"
                      fill="#9C9C9C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="58" height="58" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="figure__block">
                <div class="figure__title">
                  <h1>Качество</h1>
                </div>
                <div class="figure__text">
                  <p>Уникальная сборная конструкция.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="advantages__column">
            <div class="advantages__item figure">
              <div class="figure__f">
                <svg
                  width="210"
                  height="210"
                  class="figure__svg"
                  viewBox="0 0 210 210"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="104.932"
                    y="0.707107"
                    width="147.397"
                    height="147.397"
                    rx="0.5"
                    transform="rotate(45 104.932 0.707107)"
                    stroke="#9C9C9C"
                  />
                </svg>
                <svg
                  width="66"
                  height="46"
                  class="figure__svg-inside"
                  viewBox="0 0 66 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.3326 35.0471C13.518 35.0471 12.0469 36.5182 12.0469 38.3328C12.0469 40.1474 13.5179 41.6185 15.3326 41.6185C17.1473 41.6185 18.6183 40.1475 18.6183 38.3328C18.6162 36.519 17.1464 35.049 15.3326 35.0471ZM15.3326 39.428C14.7277 39.428 14.2374 38.9377 14.2374 38.3328C14.2374 37.7279 14.7277 37.2376 15.3326 37.2376C15.9375 37.2376 16.4278 37.7279 16.4278 38.3328C16.4271 38.9375 15.9372 39.4274 15.3326 39.428Z"
                    fill="#9C9C9C"
                  />
                  <path
                    d="M50.3824 35.0471C48.5678 35.0471 47.0967 36.5182 47.0967 38.3328C47.0967 40.1474 48.5678 41.6185 50.3824 41.6185C52.197 41.6185 53.6681 40.1475 53.6681 38.3328C53.6662 36.519 52.1962 35.049 50.3824 35.0471ZM50.3824 39.428C49.7775 39.428 49.2872 38.9377 49.2872 38.3328C49.2872 37.7279 49.7776 37.2376 50.3824 37.2376C50.9873 37.2376 51.4776 37.7279 51.4776 38.3328C51.4771 38.9375 50.987 39.4274 50.3824 39.428Z"
                    fill="#9C9C9C"
                  />
                  <path
                    d="M64.8793 19.4575L57.3346 10.9609C56.7096 10.257 55.8127 9.85519 54.8714 9.85712H44.9047V3.28571C44.9027 1.47189 43.4328 0.00192522 41.619 0H3.2857C1.47189 0.00192522 0.00192532 1.47189 1.06961e-07 3.28571V31.7619C-0.000128241 32.0523 0.115256 32.331 0.320741 32.5364C0.526098 32.7418 0.804741 32.8572 1.09532 32.8572H2.19051V36.1429C2.19244 37.9567 3.66241 39.4267 5.47622 39.4286H7.75413C8.29397 43.1994 11.524 46 15.3333 46C19.1427 46 22.3727 43.1994 22.9125 39.4286H42.8018C43.3417 43.1994 46.5717 46 50.381 46C54.1904 46 57.4204 43.1994 57.9602 39.4286H62.4284C64.2422 39.4267 65.7122 37.9567 65.7141 36.1429V21.6416C65.7133 20.8357 65.4162 20.0585 64.8793 19.4575ZM2.19051 30.6665V3.28571C2.19115 2.68106 2.68106 2.19103 3.2857 2.19051H41.619C42.2236 2.19115 42.7136 2.68106 42.7142 3.28571V30.6665H2.19051ZM7.75413 37.2379H5.47622C4.87157 37.2373 4.38154 36.7474 4.38102 36.1428V32.857H9.97827C8.77514 34.033 7.99337 35.5728 7.75413 37.2379ZM15.3333 43.8094C12.3089 43.8094 9.85711 41.3575 9.85711 38.3331C9.85711 35.3088 12.3089 32.857 15.3333 32.857C18.3577 32.857 20.8095 35.3089 20.8095 38.3333C20.806 41.3561 18.3562 43.8059 15.3333 43.8094ZM26.2856 37.2379H22.9124C22.6732 35.5728 21.8915 34.0328 20.6884 32.857H26.2856V37.2379ZM36.1427 37.2379H28.4761V32.857H36.1427V37.2379ZM42.8017 37.2379H38.3333V32.857H45.0257C43.8226 34.033 43.0409 35.5728 42.8017 37.2379ZM50.3808 43.8094C47.3564 43.8094 44.9045 41.3575 44.9045 38.3331C44.9045 35.3088 47.3562 32.8569 50.3808 32.8569C53.4051 32.8569 55.857 35.3088 55.857 38.3331C55.8534 41.3561 53.4037 43.8059 50.3808 43.8094ZM63.5236 36.1428C63.5229 36.7474 63.033 37.2374 62.4284 37.2379H57.96C57.4138 33.4706 54.1877 30.6733 50.3808 30.6665H44.9045V12.0476H49.2856V22.9999C49.2875 24.8137 50.7575 26.2837 52.5713 26.2856H63.5236V36.1428ZM63.5236 24.0951H52.5713C51.9666 24.0945 51.4766 23.6046 51.4761 22.9999V12.0476H54.8714C55.1858 12.0458 55.4859 12.1791 55.6955 12.4134L63.2429 20.9133C63.4226 21.1135 63.5224 21.3726 63.5237 21.6416V24.0951H63.5236Z"
                    fill="#9C9C9C"
                  />
                </svg>
              </div>
              <div class="figure__block">
                <div class="figure__title">
                  <h1>УДОБСТВО</h1>
                </div>
                <div class="figure__text">
                  <p>Легкость в транспортировке.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="advantages__column">
            <div class="advantages__item figure">
              <div class="figure__f">
                <svg
                  width="210"
                  height="210"
                  class="figure__svg"
                  viewBox="0 0 210 210"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="104.932"
                    y="0.707107"
                    width="147.397"
                    height="147.397"
                    rx="0.5"
                    transform="rotate(45 104.932 0.707107)"
                    stroke="#9C9C9C"
                  />
                </svg>
                <svg
                  width="71"
                  height="71"
                  class="figure__svg-inside"
                  viewBox="0 0 71 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.5 0C15.8939 0 0 15.8939 0 35.5C0 55.1061 15.8939 71 35.5 71C55.1061 71 71 55.1061 71 35.5C70.9778 15.9031 55.0969 0.0221875 35.5 0ZM35.5 68.6333C17.2009 68.6333 2.36667 53.7991 2.36667 35.5C2.36667 17.2009 17.2009 2.36667 35.5 2.36667C53.7991 2.36667 68.6333 17.2009 68.6333 35.5C68.6125 53.7903 53.7903 68.6125 35.5 68.6333Z"
                    fill="#9C9C9C"
                  />
                  <path
                    d="M35.4998 5.9165C19.1614 5.9165 5.9165 19.1614 5.9165 35.4998C5.9165 51.8383 19.1614 65.0832 35.4998 65.0832C51.8383 65.0832 65.0832 51.8383 65.0832 35.4998C65.065 19.169 51.8307 5.9347 35.4998 5.9165ZM35.4998 62.7165C20.4685 62.7165 8.28317 50.5311 8.28317 35.4998C8.28317 20.4685 20.4685 8.28317 35.4998 8.28317C50.5311 8.28317 62.7165 20.4685 62.7165 35.4998C62.6995 50.5242 50.5242 62.6995 35.4998 62.7165Z"
                    fill="#9C9C9C"
                  />
                  <path
                    d="M36.6831 11.8335H34.3164V14.2002H36.6831V11.8335Z"
                    fill="#9C9C9C"
                  />
                  <path
                    d="M36.6831 56.7996H34.3164V59.1662H36.6831V56.7996Z"
                    fill="#9C9C9C"
                  />
                  <path
                    d="M24.6889 14.4127L22.6406 15.5957L23.8236 17.644L25.8719 16.461L24.6889 14.4127Z"
                    fill="#9C9C9C"
                  />
                  <path
                    d="M47.1664 53.3485L45.1182 54.5315L46.3011 56.5798L48.3494 55.3968L47.1664 53.3485Z"
                    fill="#9C9C9C"
                  />
                  <path
                    d="M15.5945 22.6431L14.4111 24.6926L16.4607 25.876L17.644 23.8264L15.5945 22.6431Z"
                    fill="#9C9C9C"
                  />
                  <path
                    d="M54.5329 45.1297L53.3496 47.1792L55.3991 48.3625L56.5825 46.313L54.5329 45.1297Z"
                    fill="#9C9C9C"
                  />
                  <path
                    d="M14.2002 34.3171H11.8335V36.6838H14.2002V34.3171Z"
                    fill="#9C9C9C"
                  />
                  <path
                    d="M59.1665 34.3171H56.7998V36.6838H59.1665V34.3171Z"
                    fill="#9C9C9C"
                  />
                  <path
                    d="M16.4619 45.1277L14.4121 46.3108L15.5952 48.3606L17.645 47.1775L16.4619 45.1277Z"
                    fill="#9C9C9C"
                  />
                  <path
                    d="M55.3991 22.6416L53.3496 23.825L54.5329 25.8745L56.5825 24.6911L55.3991 22.6416Z"
                    fill="#9C9C9C"
                  />
                  <path
                    d="M23.8168 53.3526L22.6338 55.4009L24.6821 56.5839L25.865 54.5356L23.8168 53.3526Z"
                    fill="#9C9C9C"
                  />
                  <path
                    d="M46.307 14.4156L45.124 16.4639L47.1723 17.6468L48.3553 15.5986L46.307 14.4156Z"
                    fill="#9C9C9C"
                  />
                  <path
                    d="M34.317 16.5671V34.8307L23.0576 41.5864L24.2764 43.6146L36.1098 36.5146C36.4658 36.3007 36.6837 35.9158 36.6837 35.5005V16.5671H34.317Z"
                    fill="#9C9C9C"
                  />
                </svg>
              </div>
              <div class="figure__block">
                <div class="figure__title">
                  <h1>ДОЛГОВЕЧНОСТЬ</h1>
                </div>
                <div class="figure__text">
                  <p>
                    Изготовлены из оцинкованой трубы и весь крепеж из
                    нержавеющей стали.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="advantages__column">
            <div class="advantages__item figure">
              <div class="figure__f">
                <svg
                  width="210"
                  height="210"
                  class="figure__svg"
                  viewBox="0 0 210 210"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="104.932"
                    y="0.707107"
                    width="147.397"
                    height="147.397"
                    rx="0.5"
                    transform="rotate(45 104.932 0.707107)"
                    stroke="#9C9C9C"
                  />
                </svg>
                <svg
                  width="73"
                  height="73"
                  class="figure__svg-inside"
                  viewBox="0 0 73 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M72.0136 18.5013C71.9391 18.3524 71.9391 18.2779 71.7902 18.129C71.7158 17.9801 71.5669 17.9057 71.3435 17.8312L54.2941 8.97144L37.0212 0.111678C36.7234 -0.0372259 36.3512 -0.0372259 36.0534 0.111678L18.7061 8.97144L1.58218 17.8312C1.35882 17.9057 1.13546 18.129 1.06101 18.3524C0.986561 18.5013 0.986561 18.5757 0.912109 18.7246V18.7991V54.2381C0.912109 54.6104 1.13546 54.9827 1.50772 55.206L35.9789 72.8511C36.0534 72.9255 36.1278 72.9255 36.2023 72.9255H36.2767C36.3512 72.9255 36.4256 73 36.5745 73C36.7234 73 36.7979 73 36.9468 72.9255C36.9468 72.9255 37.0212 72.9255 37.0212 72.8511C37.0212 72.8511 37.0957 72.8511 37.0957 72.7766L71.4924 55.206C71.8647 54.9827 72.088 54.6104 72.088 54.2381V18.7991C72.088 18.6502 72.088 18.5757 72.0136 18.5013ZM36.5001 2.27078L53.2517 10.9072L68.6633 18.7991L53.7729 26.4676L21.6097 9.93932L36.5001 2.27078ZM35.4577 70.2453L3.07121 53.5681V20.5859L18.7805 28.6267L35.4577 37.1887V70.2453ZM36.5001 35.3274L19.7484 26.691L4.33689 18.7991L19.2273 11.1305L51.3904 27.6588L36.5001 35.3274ZM69.9289 53.6425L37.5424 70.1708V37.1887L54.2196 28.6267L69.9289 20.5859V53.6425Z"
                      fill="#9C9C9C"
                    />
                    <path
                      d="M61.8884 32.2009C61.9628 32.2009 61.8884 32.1264 61.8884 32.052C61.5906 31.233 60.9205 30.7118 60.176 30.414C59.357 30.1162 58.3891 30.1907 57.4957 30.6374L49.306 34.5833C48.4126 35.03 47.6681 35.7746 47.2214 36.5935C46.7747 37.4125 46.7002 38.3804 46.998 39.1993C47.2958 40.0183 47.9659 40.6139 48.7104 40.9117C49.5294 41.2095 50.4973 41.1351 51.3907 40.6884L59.5804 36.7424C60.4738 36.2957 61.2183 35.5512 61.665 34.7322C62.0373 33.9133 62.1862 33.0198 61.8884 32.2009ZM59.7293 34.1366C59.5804 34.4344 59.2826 34.7322 58.9848 34.8811L50.7951 38.8271C50.4228 38.976 50.0505 39.0504 49.7527 38.9015C49.4549 38.8271 49.2316 38.6037 49.0827 38.3059V38.2315C49.0082 37.9337 49.0082 37.5614 49.1571 37.2636C49.306 36.9658 49.6038 36.668 49.9016 36.5191L58.0913 32.5731C58.4636 32.4242 58.8359 32.3498 59.1337 32.4987C59.4315 32.5731 59.6548 32.7965 59.8037 33.1688C59.9526 33.4666 59.8782 33.8388 59.7293 34.1366Z"
                      fill="#9C9C9C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="73" height="73" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="figure__block">
                <div class="figure__title">
                  <h1>КОМПАКТНОСТЬ</h1>
                </div>
                <div class="figure__text">
                  <p>Экономия места для хранения.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Catalog from "@/components/catalog/catalogs.vue";

export default {
  name: "Index",
  components: {
    Catalog,
  },
  data() {
    return {
      title: "Главная",
      // Это точка
      activeLink: 1,
      // Всего слайдов
      sliderAllCount: 4,
      // Номер активного слайда
      sliderActive: 1,
      // Отступ тела со слайдами в контейнере
      sliderOffsetLeft: 0,
      // Шаг одного слайда = его длина
      sliderOffsetStep: 0,
      timer: null,
      currentIndex: 1,
      images: [
        "gallery-6.jpg",
        "gallery-14.jpg",
        "gallery-16.jpg",
        "gallery-11.jpg",
      ],
      // Список изображений
      sliderList: [
        // { id: 0, img: "gallery-11.jpg" },
        { id: 1, images: "gallery-6.jpg" },
        { id: 2, images: "gallery-14.jpg" },
        { id: 3, images: "gallery-16.jpg" },
        { id: 4, images: "gallery-11.jpg" },
      ],
    };
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 7000);
    },

    next: function () {
      if (this.currentIndex >= 4) {
        this.currentIndex = 1;
      } else this.currentIndex += 1;
      // }
    },
    prev: function () {
      this.currentIndex -= 1;
    },
    // Открыть слайд по номеру
    openSlide: function (id) {
      this.currentIndex = id;
      this.activeLink = this.currentIndex;
    },
  },
  computed: {
    currentImg: function () {
      this.activeLink = this.currentIndex;
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
  beforeMount() {
    document.title = this.title;
  },
  beforeUpdate() {
    document.title = this.title;
  },
  mounted() {
    this.startSlide();
  },
};
</script>
