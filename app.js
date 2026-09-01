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
})();
