// Schild Family Archive — small progressive-enhancement script
(function () {
  // Only arm the scroll-reveal CSS once JS is confirmed running,
  // so content is never hidden for no-JS visitors.
  document.documentElement.classList.add("js-reveal");

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll-reveal animation
  var targets = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && targets.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px" }
    );
    targets.forEach(function (t) { io.observe(t); });

    // Safety net: guarantee everything is visible even if a fast/odd
    // scroll pattern causes the observer to miss an element.
    window.setTimeout(function () {
      targets.forEach(function (t) { t.classList.add("in-view"); });
      io.disconnect();
    }, 2500);
  } else {
    targets.forEach(function (t) { t.classList.add("in-view"); });
  }

  // Contact form (Web3Forms + Cloudflare Turnstile)
  var form = document.getElementById("contact-form");
  var status = document.getElementById("contact-status");
  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Honeypot: if this hidden field got filled in, silently drop it.
      if (form.botcheck && form.botcheck.checked) {
        return;
      }

      var submitBtn = form.querySelector(".btn-submit");
      var data = new FormData(form);

      status.textContent = "Sending…";
      status.className = "form-status";
      if (submitBtn) submitBtn.disabled = true;

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
        .then(function (res) { return res.json(); })
        .then(function (json) {
          if (json.success) {
            status.textContent = "Thanks — your message has been sent.";
            status.className = "form-status success";
            form.reset();
            if (window.turnstile) { window.turnstile.reset(); }
          } else {
            status.textContent =
              json.message || "Something went wrong. Please try again.";
            status.className = "form-status error";
          }
        })
        .catch(function () {
          status.textContent =
            "Something went wrong sending your message. Please try again in a moment.";
          status.className = "form-status error";
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }
})();
