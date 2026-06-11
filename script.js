const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");
const slides = Array.from(document.querySelectorAll(".hero-image"));
const inquiryForm = document.querySelector("[data-inquiry-form]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
  });
}

if (header) {
  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

if (slides.length > 1) {
  let current = 0;

  window.setInterval(() => {
    slides[current].classList.remove("is-active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("is-active");
  }, 5200);
}

if (inquiryForm) {
  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(inquiryForm);
    const name = data.get("name") || "";
    const phone = data.get("phone") || "";
    const message = data.get("message") || "";
    const subject = encodeURIComponent("GW 起重機詢問");
    const body = encodeURIComponent(`姓名：${name}\n電話：${phone}\n\n需求內容：\n${message}`);
    window.location.href = `mailto:Fal.li@msa.hinet.net?subject=${subject}&body=${body}`;
  });
}
