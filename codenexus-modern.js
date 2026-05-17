(function () {
  const fallbackLinks = {
    x: "https://x.com/_CodeNexus",
    instagram: "https://www.instagram.com/_.ritik_25",
    whatsapp: "https://wa.me/+916266324835"
  };

  const footerLinks = Array.from(document.querySelectorAll(".footer a, footer a"));

  function findFooterLink(test, fallback) {
    const match = footerLinks.find((link) => {
      const href = link.getAttribute("href") || "";
      return href !== "#" && test(href.toLowerCase(), link);
    });

    return match ? match.href : fallback;
  }

  function iconClass(name) {
    return `fab fa-${name}`;
  }

  function buildFloatingSocials() {
    if (document.querySelector(".floating-socials")) {
      return;
    }

    const socials = [
      {
        name: "x",
        label: "Follow CodeNexus on X",
        href: findFooterLink((href) => href.includes("x.com") || href.includes("twitter.com"), fallbackLinks.x)
      },
      {
        name: "instagram",
        label: "Follow CodeNexus on Instagram",
        href: findFooterLink((href) => href.includes("instagram.com"), fallbackLinks.instagram)
      },
      {
        name: "whatsapp",
        label: "Chat with CodeNexus on WhatsApp",
        href: findFooterLink((href) => href.includes("wa.me") || href.includes("whatsapp"), fallbackLinks.whatsapp)
      }
    ];

    const wrapper = document.createElement("div");
    wrapper.className = "floating-socials";

    socials.forEach((social) => {
      const link = document.createElement("a");
      link.className = `${social.name}-link`;
      link.href = social.href;
      link.target = "_blank";
      link.rel = "noopener";
      link.setAttribute("aria-label", social.label);
      link.title = social.label;
      link.innerHTML = social.name === "x"
        ? '<span aria-hidden="true">X</span>'
        : `<i class="${iconClass(social.name)}"></i>`;
      wrapper.appendChild(link);
    });

    document.body.appendChild(wrapper);
  }

  function activateCurrentNav() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".menu a").forEach((link) => {
      const linkPage = (link.getAttribute("href") || "").split("/").pop();
      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  }

  function enhanceSavvyNavbar() {
    document.querySelectorAll("header .menu").forEach((menu) => {
      if (menu.classList.contains("cn-savvy-menu")) {
        return;
      }

      const header = menu.closest("header");
      const logo = menu.querySelector(":scope > img");
      const links = Array.from(menu.querySelectorAll(":scope > a"));

      if (!header || !logo || links.length === 0) {
        return;
      }

      header.classList.add("cn-savvy-header");
      menu.classList.add("cn-savvy-menu");

      const brand = document.createElement("a");
      brand.className = "cn-brand-pill";
      brand.href = "index.html";
      brand.setAttribute("aria-label", "CodeNexus Home");
      logo.replaceWith(brand);
      brand.appendChild(logo);

      const brandText = document.createElement("span");
      brandText.className = "cn-brand-text";
      brandText.innerHTML = '<span class="cn-brand-main">CodeNexus</span><span class="cn-brand-sub">Tech Solutions</span>';
      brand.appendChild(brandText);

      const navLinks = document.createElement("div");
      navLinks.className = "cn-nav-links";
      navLinks.id = "navMenu";

      const indicator = document.createElement("span");
      indicator.className = "cn-nav-indicator";
      indicator.id = "navIndicator";
      navLinks.appendChild(indicator);

      links.forEach((link) => {
        link.classList.add("nav-link");
        navLinks.appendChild(link);
      });

      const toggle = document.createElement("button");
      toggle.className = "cn-menu-toggle";
      toggle.id = "menuToggle";
      toggle.type = "button";
      toggle.setAttribute("aria-label", "Toggle navigation menu");
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = "<span></span><span></span><span></span>";

      menu.appendChild(navLinks);
      menu.appendChild(toggle);

      const moveIndicator = (targetLink) => {
        if (!targetLink || window.innerWidth <= 860) {
          indicator.style.opacity = 0;
          return;
        }

        const rect = targetLink.getBoundingClientRect();
        const containerRect = navLinks.getBoundingClientRect();
        indicator.style.width = `${rect.width}px`;
        indicator.style.transform = `translateX(${rect.left - containerRect.left}px)`;
        indicator.style.opacity = 1;
      };

      const currentActive = () => navLinks.querySelector(".nav-link.active") || navLinks.querySelector(".nav-link");

      setTimeout(() => moveIndicator(currentActive()), 120);

      navLinks.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("mouseenter", () => moveIndicator(link));
        link.addEventListener("focus", () => moveIndicator(link));
        link.addEventListener("click", () => {
          navLinks.classList.remove("open");
          toggle.classList.remove("active");
          toggle.setAttribute("aria-expanded", "false");
        });
      });

      navLinks.addEventListener("mouseleave", () => moveIndicator(currentActive()));

      toggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        toggle.classList.toggle("active", isOpen);
        toggle.setAttribute("aria-expanded", String(isOpen));
      });

      window.addEventListener("resize", () => moveIndicator(currentActive()));
    });
  }

  function enhanceScrollAnimations() {
    document.querySelectorAll(".page-hero, .container, .about-grid, .contact-container, .map-section").forEach((element) => {
      element.classList.add("scroll-animate");
    });

    const animated = Array.from(document.querySelectorAll(".scroll-animate"));

    animated.forEach((element, index) => {
      element.classList.add("cn-stagger");
      element.style.setProperty("--cn-delay", `${Math.min(index % 6, 5) * 70}ms`);
    });

    if (!("IntersectionObserver" in window)) {
      animated.forEach((element) => element.classList.add("show"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });

    animated.forEach((element) => observer.observe(element));
  }

  function addCardTilt() {
    const cards = document.querySelectorAll(".service-item, .project-card, .testimonial-item");

    cards.forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 8;
        const rotateX = ((y / rect.height) - 0.5) * -8;
        card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    activateCurrentNav();
    enhanceSavvyNavbar();
    enhanceScrollAnimations();
    addCardTilt();
    buildFloatingSocials();
  });
})();
