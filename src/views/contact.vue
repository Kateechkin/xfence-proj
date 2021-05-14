<template>
  <div class="content">
    <div class="contact">
      <div class="container">
        <div class="contact__title">Контакты</div>
        <div class="contact__row">
          <div class="contact__column">
            <div class="contact__text">
              <svg
                width="26"
                height="37"
                viewBox="0 0 26 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 0C5.83185 0 0 5.76951 0 12.861C0 21.7743 13.0128 37 13.0128 37C13.0128 37 26 21.336 26 12.861C26 5.76951 20.1684 0 13 0ZM16.9224 16.6267C15.8408 17.6965 14.4205 18.2315 13 18.2315C11.5797 18.2315 10.1589 17.6965 9.07786 16.6267C6.915 14.4872 6.915 11.0058 9.07786 8.86609C10.1252 7.82953 11.5183 7.25863 13 7.25863C14.4817 7.25863 15.8746 7.82975 16.9224 8.86609C19.0852 11.0058 19.0852 14.4872 16.9224 16.6267Z"
                  fill="#E1E1E1"
                />
              </svg>

              <p class="contact__text-address">
                г. Новосибирск, ул. Бетонная 6
              </p>
            </div>
            <div class="contact__text">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M24.8335 17.7224C23.1805 17.7224 21.5574 17.4639 20.0193 16.9556C19.2656 16.6985 18.3391 16.9343 17.8791 17.4068L14.8433 19.6985C11.3225 17.8192 9.15377 15.6511 7.30005 12.1568L9.52439 9.20004C10.1023 8.62291 10.3096 7.77987 10.0612 6.98885C9.55076 5.44268 9.29145 3.82036 9.29145 2.16661C9.29152 0.97193 8.31959 0 7.12498 0H2.16654C0.97193 0 0 0.97193 0 2.16654C0 15.8599 11.1402 27 24.8335 27C26.0281 27 27.0001 26.0281 27.0001 24.8335V19.8889C27 18.6943 26.0281 17.7224 24.8335 17.7224Z"
                    fill="#E1E1E1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="27" height="27" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <a href="tel:+7(383)375-00-28">
                <p class="contact__text-phone">8 (383) 375-00-28</p></a
              >
            </div>
            <div class="contact__text">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5391 17.1742L34.0013 24.4204V9.62195L22.5391 17.1742Z"
                  fill="#E1E1E1"
                />
                <path
                  d="M0 9.62195V24.4204L11.4622 17.1742L0 9.62195Z"
                  fill="#E1E1E1"
                />
                <path
                  d="M31.8738 5.3125H2.12375C1.06337 5.3125 0.221875 6.103 0.0625 7.12088L16.9987 18.2793L33.935 7.12088C33.7756 6.103 32.9341 5.3125 31.8738 5.3125Z"
                  fill="#E1E1E1"
                />
                <path
                  d="M20.5916 18.4577L17.5847 20.4382C17.4062 20.5551 17.2044 20.6124 17.0004 20.6124C16.7964 20.6124 16.5945 20.5551 16.416 20.4382L13.4091 18.4556L0.0683594 26.8939C0.231984 27.9033 1.06923 28.6874 2.12536 28.6874H31.8754C32.9315 28.6874 33.7687 27.9033 33.9324 26.8939L20.5916 18.4577Z"
                  fill="#E1E1E1"
                />
              </svg>

              <a href="mailto:xfenceru@gmail.com"
                ><p class="contact__text-email">xfenсeru@gmail.com</p></a
              >
            </div>
          </div>
          <div class="contact__column">
            <Maps />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Maps from "@/components/map2";

export default {
  name: "Contact",
  data() {
    return {
      title: "Контакты",
    };
  },
  components: {
    Maps,
  },
  beforeMount() {
    document.title = this.title;
  },
  beforeUpdate() {
    document.title = this.title;
  },
};
</script>
