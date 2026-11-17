/* =========================================================
   Ramala Asesores — interactions
   ========================================================= */
(function () {
  "use strict";

  const STORAGE_KEY = "ramala-lang";
  const PHONE = "+34935308763";
  const EMAIL = "info@ramalaasesores.es";

  /* -------------------------------------------------------
     Translation dictionary (English). Spanish lives in the HTML
     so the page is fully readable without JavaScript.
     ------------------------------------------------------- */
  const EN = {
    "a11y.skip": "Skip to content",
    "a11y.nav": "Main navigation",
    "a11y.menu": "Open menu",
    "a11y.top": "Back to top",

    "brand.sub": "Immigration lawyer",
    "nav.services": "Services",
    "nav.process": "How we work",
    "nav.firm": "The firm",
    "nav.reviews": "Reviews",
    "nav.faq": "FAQs",
    "nav.contact": "Contact",
    "cta.book": "Book a consultation",

    "hero.eyebrow": "Immigration lawyers · Sant Andreu, Barcelona",
    "hero.title": "Your future in Spain, <em>on solid ground</em>.",
    "hero.lede": "We are an immigration law firm in Barcelona. We guide you through your NIE, residence, work permit and Spanish nationality, with close personal attention and a carefully built file.",
    "hero.cta1": "Request a consultation",
    "hero.point1": "Direct contact with Umer",
    "hero.point2": "Clear fees, agreed in writing",
    "hero.point3": "Support until the decision",
    "hero.reviewSource": "Google review",
    "hero.hoursShort": "Mon–Thu · 9:30–19:30",

    "strip.residence": "Residence & regularisation",
    "strip.work": "Work permits",
    "strip.nationality": "Spanish nationality",
    "strip.family": "Family reunification",
    "strip.appeals": "Appeals & corrections",

    "services.eyebrow": "Services",
    "services.title": "Your whole immigration journey,<br>under one roof.",
    "services.lede": "From the first application to the final decision: we review your situation, prepare the paperwork and defend your file.",
    "services.link": "Ask about this service",
    "svc1.title": "NIE & TIE",
    "svc1.text": "Application, renewal, duplicates and certificates. Also for students and family members.",
    "svc2.title": "Residence & regularisation",
    "svc2.text": "Initial residence and renewals, social, family and work-based regularisation, and changes to your permit.",
    "svc3.title": "Work permits",
    "svc3.text": "Initial authorisations, self-employment registration, changes and renewals without losing your status.",
    "svc4.title": "Spanish nationality",
    "svc4.text": "Nationality by residence or option, preparation for the CCSE and DELE exams, and a full file review.",
    "svc5.title": "Family reunification",
    "svc5.text": "Bring your spouse, children or parents: visas, applications and renewals with complete support.",
    "svc6.title": "Appeals & corrections",
    "svc6.text": "Refusals, requests for documents, administrative appeals and court proceedings. Don't miss the deadline.",

    "process.eyebrow": "How we work",
    "process.title": "A clear process, no surprises.",
    "process.lede": "You always know where your file stands. And if something gets complicated, we tell you before it becomes a problem.",
    "step1.title": "Initial consultation",
    "step1.text": "We listen to your case and review the basic documents to find the most viable route.",
    "step2.title": "Proposal & quote",
    "step2.text": "You receive the scope of work, our fees and the estimated timeline in writing.",
    "step3.title": "Preparation & filing",
    "step3.text": "We build the file, book appointments, check every document and file on time.",
    "step4.title": "Follow-up & decision",
    "step4.text": "We keep you updated at every stage and, if there is a refusal, assess the best appeal.",

    "about.eyebrow": "The firm",
    "about.title": "Umer, your immigration lawyer in Barcelona.",
    "about.p1": "Ramala Asesores was founded in Sant Andreu with a simple idea: nobody should have to face the authorities alone. Umer leads the firm and personally handles every file, from the first consultation to the final decision.",
    "about.p2": "We work with documentary rigour, realistic timelines and explanations you can understand. No impossible promises: we tell you what can be achieved, what it costs and how long it takes.",
    "about.f1": "Specialists in immigration law",
    "about.f2": "Service in Spanish and English",
    "about.f3": "NIE, residence, work and nationality",
    "about.f4": "Appointments at our Sant Andreu office",
    "about.cardRole": "Immigration · Barcelona",
    "about.badge": "Sant Andreu",
    "about.quote": "“Every file is a family, a job or a life project. That deserves real attention.”",
    "about.cta": "Talk to our team",

    "value1.title": "Personal service",
    "value1.text": "You always speak to the person handling your file, not a call centre.",
    "value2.title": "Transparent fees",
    "value2.text": "A written quote before we start. No hidden charges.",
    "value3.title": "Documentary rigour",
    "value3.text": "We check every document twice: one mistake can cost months.",
    "value4.title": "Genuine support",
    "value4.text": "Appointments, filing, follow-up and appeals. From start to finish.",

    "reviews.eyebrow": "Reviews",
    "reviews.title": "What people say<br>after working with us.",
    "reviews.lede": "Reviews published by clients on Google. Every case is different, but our attention and follow-up never change.",
    "review1.text": "“I am very grateful to Umer for all his work. Finally, a professional who listens and understands exactly what you need.”",
    "review1.tag": "NIE & residence",
    "review2.text": "“Excellent work. He helped me and my family obtain our official documents. Highly recommended.”",
    "review2.tag": "Family documents",
    "review3.text": "“Very professional and deeply knowledgeable about immigration. Thanks to their work I now have my nationality.”",
    "review3.tag": "Spanish nationality",
    "reviews.link": "Read reviews on Google",

    "faq.eyebrow": "FAQs",
    "faq.title": "Before you start,<br>the questions we hear most.",
    "faq.lede": "If your question isn't here, call or write to us. We reply during office hours.",
    "faq1.q": "Does the first consultation cost anything?",
    "faq1.a": "The first assessment is used to orient your case. Before any procedure begins you will receive a written quote covering the scope of work and our fees. If we don't go ahead, there are no surprises.",
    "faq2.q": "How long will my case take?",
    "faq2.a": "It depends on the type of file and the workload of the administration. At the consultation we give you an indicative timeline and review it with you if anything changes.",
    "faq3.q": "What documents do I need to start?",
    "faq3.a": "Your full passport, documents showing your current situation and any decision or request you have received. At the appointment we give you a personalised checklist.",
    "faq4.q": "Can I hire you from outside Spain?",
    "faq4.a": "Yes. Many procedures can be prepared remotely and filed when you arrive. We study your case and coordinate the steps with you.",
    "faq5.q": "What happens if my application is refused?",
    "faq5.a": "We analyse the decision, the deadlines and the appeal options. Acting in time is essential: contact us as soon as you receive the notification.",
    "faq6.q": "Which languages do you speak?",
    "faq6.a": "We work in Spanish and English. If you need another language, tell us when you book and we will find a way to help.",

    "contact.eyebrow": "Contact",
    "contact.title": "Tell us about your case.",
    "contact.lede": "We reply during office hours. Or drop by the office: we are in Sant Andreu, Barcelona.",
    "contact.addrLabel": "Address",
    "contact.directions": "Get directions",
    "contact.phoneLabel": "Phone",
    "contact.phoneNote": "Calls during office hours",
    "contact.emailLabel": "Email",
    "contact.emailNote": "Reply within 24–48 business hours",
    "contact.hoursLabel": "Opening hours",
    "contact.apptNote": "Appointments recommended",
    "day.monThu": "Monday to Thursday",
    "day.fri": "Friday",
    "day.satSun": "Saturday and Sunday",
    "day.closed": "Closed",

    "form.title": "Request a consultation",
    "form.sub": "Tell us briefly what you need and we will get back to you.",
    "form.name": "Full name *",
    "form.namePh": "Your full name",
    "form.phone": "Phone *",
    "form.phonePh": "+34 600 000 000",
    "form.email": "Email *",
    "form.emailPh": "you@example.com",
    "form.topic": "Service of interest",
    "form.opt1": "NIE / TIE",
    "form.opt2": "Residence or regularisation",
    "form.opt3": "Work permit",
    "form.opt4": "Spanish nationality",
    "form.opt5": "Family reunification",
    "form.opt6": "Appeal or correction",
    "form.opt7": "Other",
    "form.message": "Tell us about your case",
    "form.messagePh": "Current situation, country of origin, key dates…",
    "form.consent": "I have read and accept the <a href=\"privacidad.html\">privacy policy</a>.",
    "form.submit": "Send enquiry",
    "form.note": "Sending will open your email app with the details of your enquiry. You can also write directly to info@ramalaasesores.es.",
    "form.success": "Thank you. Your enquiry is ready in your email app. If it doesn't open, please write to info@ramalaasesores.es.",

    "footer.blurb": "Immigration law firm in Sant Andreu, Barcelona. NIE, residence, work permits, nationality and family reunification.",
    "footer.langs": "We speak",
    "footer.navTitle": "Navigation",
    "footer.servicesTitle": "Services",
    "footer.contactTitle": "Contact",
    "footer.cta": "Book a consultation",
    "footer.rights": "All rights reserved.",
    "footer.legal": "Legal notice",
    "footer.privacy": "Privacy",
    "footer.disclaimer": "The information on this website is general in nature and does not replace individual legal advice. Timelines and outcomes depend on each case and on the competent authority."
  };

  const META = {
    es: {
      title: "Ramala Asesores | Abogados de extranjería en Barcelona",
      description: "Despacho de abogados de extranjería en Sant Andreu, Barcelona. NIE, residencia, permisos de trabajo, nacionalidad española y reagrupación familiar. Atención directa con Umer."
    },
    en: {
      title: "Ramala Asesores | Immigration lawyers in Barcelona",
      description: "Immigration law firm in Sant Andreu, Barcelona. NIE, residence, work permits, Spanish nationality and family reunification. Direct contact with Umer."
    }
  };

  const UI = {
    es: {
      open: "Abierto ahora",
      closed: "Cerrado ahora",
      errName: "Escribe tu nombre.",
      errPhone: "Escribe un teléfono válido.",
      errEmail: "Escribe un correo válido.",
      errConsent: "Acepta la política de privacidad para continuar.",
      mailSubject: "Consulta web · ",
      mailTopic: "Trámite: ",
      mailName: "Nombre: ",
      mailPhone: "Teléfono: ",
      mailEmail: "Correo: ",
      mailMessage: "Mensaje: "
    },
    en: {
      open: "Open now",
      closed: "Closed now",
      errName: "Please enter your name.",
      errPhone: "Please enter a valid phone number.",
      errEmail: "Please enter a valid email address.",
      errConsent: "Please accept the privacy policy to continue.",
      mailSubject: "Website enquiry · ",
      mailTopic: "Service: ",
      mailName: "Name: ",
      mailPhone: "Phone: ",
      mailEmail: "Email: ",
      mailMessage: "Message: "
    }
  };

  let lang = "es";

  /* -------------------------------------------------------
     Language
     ------------------------------------------------------- */
  const originals = new Map();
  const originalAttrs = [];

  function cacheOriginals() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      originals.set(el, el.innerHTML);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      originalAttrs.push({ el: el, attr: "placeholder", value: el.getAttribute("placeholder"), key: el.dataset.i18nPlaceholder });
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      originalAttrs.push({ el: el, attr: "aria-label", value: el.getAttribute("aria-label"), key: el.dataset.i18nAria });
    });
  }

  function applyLang(next, persist) {
    lang = next === "en" ? "en" : "es";

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.dataset.i18n;
      if (lang === "en") {
        if (Object.prototype.hasOwnProperty.call(EN, key)) el.innerHTML = EN[key];
      } else {
        const original = originals.get(el);
        if (original !== undefined) el.innerHTML = original;
      }
    });

    originalAttrs.forEach(function (item) {
      if (lang === "en" && Object.prototype.hasOwnProperty.call(EN, item.key)) {
        item.el.setAttribute(item.attr, EN[item.key]);
      } else {
        item.el.setAttribute(item.attr, item.value);
      }
    });

    document.title = META[lang].title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", META[lang].description);

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    document.querySelectorAll(".field-error").forEach(function (el) { el.textContent = ""; });
    document.querySelectorAll(".field.has-error").forEach(function (el) { el.classList.remove("has-error"); });

    updateStatus();

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    }
  }

  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.dataset.lang, true);
    });
  });

  /* -------------------------------------------------------
     Opening hours (Europe/Madrid)
     ------------------------------------------------------- */
  function madridNow() {
    try {
      const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Madrid",
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }).formatToParts(new Date());
      const map = {};
      parts.forEach(function (p) { map[p.type] = p.value; });
      let hour = parseInt(map.hour, 10);
      if (hour === 24) hour = 0;
      return { day: map.weekday, minutes: hour * 60 + parseInt(map.minute, 10) };
    } catch (e) {
      const d = new Date();
      return { day: "Mon", minutes: d.getHours() * 60 + d.getMinutes() };
    }
  }

  function isOpenNow() {
    const now = madridNow();
    const t = now.minutes;
    if (now.day === "Mon" || now.day === "Tue" || now.day === "Wed" || now.day === "Thu") {
      return (t >= 570 && t < 870) || (t >= 990 && t < 1170);
    }
    if (now.day === "Fri") return t >= 570 && t < 870;
    return false;
  }

  function updateStatus() {
    const open = isOpenNow();
    const text = open ? UI[lang].open : UI[lang].closed;

    const pill = document.querySelector(".open-pill");
    const pillText = document.getElementById("openStatusText");
    const heroText = document.getElementById("heroStatusText");
    const heroDot = document.getElementById("heroStatusDot");

    if (pill) pill.classList.toggle("is-closed", !open);
    if (pillText) pillText.textContent = text;
    if (heroText) heroText.textContent = text;
    if (heroDot) heroDot.classList.toggle("is-closed", !open);
  }

  /* -------------------------------------------------------
     Header, drawer, scroll
     ------------------------------------------------------- */
  const header = document.getElementById("siteHeader");
  const nav = document.getElementById("nav");
  const navToggle = document.querySelector(".nav-toggle");
  const backdrop = document.querySelector(".nav-backdrop");
  const toTop = document.querySelector(".to-top");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setDrawer(open) {
    if (!nav || !navToggle) return;
    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open
      ? (lang === "en" ? "Close menu" : "Cerrar menú")
      : (lang === "en" ? "Open menu" : "Abrir menú"));
    document.body.classList.toggle("no-scroll", open);

    if (backdrop) {
      if (open) {
        backdrop.hidden = false;
        requestAnimationFrame(function () { backdrop.classList.add("is-visible"); });
      } else {
        backdrop.classList.remove("is-visible");
        window.setTimeout(function () { backdrop.hidden = true; }, reduceMotion ? 0 : 300);
      }
    }

    if (open) {
      const first = nav.querySelector("a");
      if (first) first.focus({ preventScroll: true });
    } else {
      navToggle.focus({ preventScroll: true });
    }
  }

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      setDrawer(!nav.classList.contains("is-open"));
    });
  }
  if (backdrop) {
    backdrop.addEventListener("click", function () { setDrawer(false); });
  }
  if (nav) {
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (nav.classList.contains("is-open")) setDrawer(false);
      });
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav && nav.classList.contains("is-open")) setDrawer(false);
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 980 && nav && nav.classList.contains("is-open")) setDrawer(false);
  });

  let ticking = false;
  function onScroll() {
    const y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("is-scrolled", y > 8);
    if (toTop) toTop.classList.toggle("is-visible", y > 640);
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onScroll);
    }
  }, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* -------------------------------------------------------
     Active nav link
     ------------------------------------------------------- */
  const sectionIds = ["servicios", "proceso", "despacho", "opiniones", "faq", "contacto"];
  const navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-list a[href^="#"]'));
  const sections = sectionIds
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  function setActiveLink() {
    if (!sections.length) return;
    const probe = 140;
    const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
    let current = "";

    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= probe) current = section.id;
    });
    if (scrolledToBottom) current = "contacto";

    navLinks.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + current);
    });
  }
  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();

  /* -------------------------------------------------------
     Reveal on scroll
     ------------------------------------------------------- */
  const revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  document.querySelectorAll(".service-grid, .values-grid, .review-grid, .steps").forEach(function (group) {
    Array.prototype.forEach.call(group.children, function (child, i) {
      if (child.classList.contains("reveal")) {
        child.style.setProperty("--delay", Math.min(i * 70, 350) + "ms");
      }
    });
  });

  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* -------------------------------------------------------
     FAQ: one open at a time
     ------------------------------------------------------- */
  const faqs = Array.prototype.slice.call(document.querySelectorAll(".faq"));
  faqs.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        faqs.forEach(function (other) {
          if (other !== item && other.open) other.open = false;
        });
      }
    });
  });

  /* -------------------------------------------------------
     Contact form
     ------------------------------------------------------- */
  const form = document.getElementById("contactForm");
  const successEl = document.getElementById("formSuccess");

  function fieldWrap(input) {
    return input.closest(".field");
  }

  function setError(input, message) {
    const wrap = fieldWrap(input);
    if (!wrap) return;
    const slot = wrap.querySelector('[data-error-for="' + input.id + '"]');
    if (slot) slot.textContent = message || "";
    wrap.classList.toggle("has-error", Boolean(message));
    input.setAttribute("aria-invalid", message ? "true" : "false");
  }

  if (form) {
    const nameInput = form.querySelector("#name");
    const phoneInput = form.querySelector("#phone");
    const emailInput = form.querySelector("#email");
    const consentInput = form.querySelector("#consent");
    const topicInput = form.querySelector("#topic");
    const messageInput = form.querySelector("#message");

    [nameInput, phoneInput, emailInput, consentInput].forEach(function (input) {
      if (!input) return;
      input.addEventListener("input", function () { setError(input, ""); });
      input.addEventListener("change", function () { setError(input, ""); });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (successEl) successEl.hidden = true;

      const t = UI[lang];
      let firstInvalid = null;

      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        setError(nameInput, t.errName);
        firstInvalid = firstInvalid || nameInput;
      }
      const digits = phoneInput.value.replace(/[^\d]/g, "");
      if (digits.length < 9) {
        setError(phoneInput, t.errPhone);
        firstInvalid = firstInvalid || phoneInput;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailInput.value.trim())) {
        setError(emailInput, t.errEmail);
        firstInvalid = firstInvalid || emailInput;
      }
      if (!consentInput.checked) {
        setError(consentInput, t.errConsent);
        firstInvalid = firstInvalid || consentInput;
      }

      if (firstInvalid) {
        firstInvalid.focus({ preventScroll: false });
        firstInvalid.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
        return;
      }

      const lines = [
        t.mailName + nameInput.value.trim(),
        t.mailPhone + phoneInput.value.trim(),
        t.mailEmail + emailInput.value.trim(),
        t.mailTopic + (topicInput ? topicInput.value : ""),
        "",
        t.mailMessage + (messageInput ? messageInput.value.trim() : "")
      ];

      const subject = t.mailSubject + (topicInput ? topicInput.value : "") + " — " + nameInput.value.trim();
      const href = "mailto:" + EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(lines.join("\n"));

      if (successEl) successEl.hidden = false;
      window.location.href = href;
    });
  }

  /* -------------------------------------------------------
     Footer year
     ------------------------------------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* -------------------------------------------------------
     Init
     ------------------------------------------------------- */
  cacheOriginals();

  let initial = "es";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") initial = stored;
  } catch (e) { /* ignore */ }

  applyLang(initial, false);
  setInterval(updateStatus, 60000);
})();
