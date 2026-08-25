(function () {
  "use strict";

  var LANGS = { ru: true, en: true, sr: true };
  var html = document.documentElement;

  function pickLang() {
    var q = new URLSearchParams(window.location.search).get("lang");
    if (q) {
      q = q.toLowerCase();
      if (q === "sr-latn" || q === "srp") q = "sr";
      if (LANGS[q]) return q;
    }
    try {
      var stored = window.localStorage.getItem("vk-lang");
      if (stored && LANGS[stored]) return stored;
    } catch (e) {}
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "";
    nav = String(nav).toLowerCase();
    if (nav.indexOf("sr") === 0 || nav.indexOf("hr") === 0 || nav.indexOf("bs") === 0) return "sr";
    if (nav.indexOf("ru") === 0) return "ru";
    if (nav.indexOf("en") === 0) return "en";
    return "ru";
  }

  function persist(lang) {
    try {
      window.localStorage.setItem("vk-lang", lang);
    } catch (e) {}
    var url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url);
  }

  function t(map) {
    if (!map) return "";
    return map[state.lang] || map.ru || "";
  }

  var state = { lang: pickLang() };

  function setMeta() {
    var meta = SITE.meta[state.lang];
    document.title = meta.title;
    var langAttr = state.lang === "sr" ? "sr-Latn" : state.lang;
    html.lang = langAttr;
    html.setAttribute("lang", langAttr);
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", meta.description);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    var ogDesc = document.querySelector('meta[property="og:description"]');
    var ogLoc = document.querySelector('meta[property="og:locale"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);
    if (ogDesc) ogDesc.setAttribute("content", meta.description);
    if (ogLoc) {
      ogLoc.setAttribute(
        "content",
        state.lang === "en" ? "en_US" : state.lang === "sr" ? "sr_Latn_ME" : "ru_RU"
      );
    }
  }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null && text !== "") node.textContent = text;
    return node;
  }

  function nodeById(id) {
    return document.getElementById(id);
  }

  function setText(id, value) {
    var node = nodeById(id);
    if (node) node.textContent = value;
  }

  function chips(list) {
    var wrap = el("ul", "chips");
    (list || []).forEach(function (c) {
      var li = el("li", "chip");
      li.translate = false;
      li.textContent = c;
      wrap.appendChild(li);
    });
    return wrap;
  }

  function setPrimaryCta(node) {
    if (!node) return;
    if (state.lang === "ru") {
      node.textContent = t(SITE.ui.cta);
      node.setAttribute("href", SITE.telegram);
      node.setAttribute("rel", "noopener noreferrer");
      node.setAttribute("target", "_blank");
    } else {
      node.textContent = t(SITE.ui.navContact);
      node.setAttribute("href", "#contact");
      node.removeAttribute("rel");
      node.removeAttribute("target");
    }
  }

  function setLocaleBtn(id, visible, text, href) {
    var node = nodeById(id);
    if (!node) return;
    node.hidden = !visible;
    if (!visible) return;
    if (text != null) node.textContent = text;
    if (href) {
      node.setAttribute("href", href);
      if (href.indexOf("http") === 0) {
        node.setAttribute("rel", "noopener noreferrer");
        node.setAttribute("target", "_blank");
      }
    }
  }

  function render() {
    try {
      renderBody();
    } catch (err) {
      if (typeof console !== "undefined" && console.error) {
        console.error("[vk-card] render failed", err);
      }
    }
  }

  function renderBody() {
    if (typeof SITE === "undefined") {
      throw new Error("SITE is not defined — data.js failed to load");
    }
    var D = SITE;
    var L = state.lang;
    setMeta();

    var portrait = document.querySelector("img.portrait");
    if (portrait && D.photo) portrait.setAttribute("src", D.photo);
    var canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && D.siteUrl) canonical.setAttribute("href", D.siteUrl);
    var ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && D.siteUrl) ogUrl.setAttribute("content", D.siteUrl);

    setText("skip", t(D.ui.skip));
    setText("lang-label", t(D.ui.langLabel));
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      a.textContent = t(D.ui[a.getAttribute("data-nav")]);
    });

    setText("name", t(D.hero.name));
    setText("role", t(D.hero.role));
    setText("entity", t(D.hero.entity));

    setPrimaryCta(nodeById("cta"));
    setLocaleBtn("cta-kwork", L === "ru", t(D.ui.ctaKwork), D.kwork);
    setLocaleBtn("cta-gh", L !== "ru", "GitHub", D.github);

    setPrimaryCta(nodeById("cta2"));
    setLocaleBtn("cta-kwork2", L === "ru", t(D.ui.ctaKwork), D.kwork);
    setLocaleBtn("cta-gh2", L !== "ru", "GitHub", D.github);

    setText("outro-title", t(D.ui.outroTitle));
    setText("outro-line", t(D.ui.outroLine));

    var stats = nodeById("stats");
    if (stats) {
      stats.replaceChildren();
      (D.stats || []).forEach(function (s) {
        var item = el("div", "stat");
        var v = el("span", "stat-v", s.value);
        v.translate = false;
        item.appendChild(v);
        item.appendChild(el("span", "stat-l", t(s.label)));
        stats.appendChild(item);
      });
    }

    setText("h-stack", t(D.ui.navStack));
    setText("h-gigs", t(D.ui.navGigs));
    setText("h-cv", t(D.ui.navCv));
    setText("h-work", t(D.ui.navWork));
    setText("h-contact", t(D.ui.navContact));

    var stack = nodeById("stack-groups");
    if (stack) {
      stack.replaceChildren();
      (D.stackGroups || []).forEach(function (g) {
        var card = el("div", "stack-group");
        card.appendChild(el("h3", "stack-h", t(g.title)));
        card.appendChild(chips(g.chips));
        stack.appendChild(card);
      });
    }

    var gigs = nodeById("gigs-list");
    if (gigs) {
      gigs.replaceChildren();
      (D.gigs || []).forEach(function (g) {
        var card = el("article", "gig");
        var top = el("div", "gig-top");
        var code = el("span", "gig-code", g.code);
        code.translate = false;
        top.appendChild(code);
        top.appendChild(el("h3", "gig-title", t(g.title)));
        card.appendChild(top);
        card.appendChild(el("p", "gig-out", t(g.outcome)));
        card.appendChild(chips(g.stack));
        gigs.appendChild(card);
      });
    }

    var path = nodeById("path-list");
    if (path) {
      path.replaceChildren();
      (D.path || []).forEach(function (p) {
        var row = el("article", "path-row");
        var when = el("time", "path-when", t(p.when));
        when.translate = false;
        row.appendChild(when);
        var body = el("div", "path-body");
        var org = el("p", "path-org", p.org);
        org.translate = false;
        body.appendChild(el("h3", "path-role", t(p.role)));
        body.appendChild(org);
        body.appendChild(el("p", "path-note", t(p.note)));
        row.appendChild(body);
        path.appendChild(row);
      });
    }

    var work = nodeById("work-list");
    if (work) {
      work.replaceChildren();
      (D.projects || []).forEach(function (p) {
        var card = el("article", "work");
        card.appendChild(el("h3", "work-title", t(p.title)));
        card.appendChild(el("p", "work-blurb", t(p.blurb)));
        card.appendChild(chips(p.stack));
        var foot = el("p", "work-foot");
        if (p.url) {
          var a = el("a", "work-link", t(D.ui.open));
          a.href = p.url;
          a.rel = "noopener noreferrer";
          a.target = "_blank";
          foot.appendChild(a);
        } else {
          foot.appendChild(el("span", "work-private", t(D.ui.private)));
        }
        card.appendChild(foot);
        work.appendChild(card);
      });
    }

    setText("contact-intro", t(D.contactIntro));
    var clist = nodeById("contact-list");
    if (clist) {
      clist.replaceChildren();
      (D.contacts[L] || D.contacts.ru || []).forEach(function (c) {
        var li = el("li", "contact-item" + (c.gate ? " is-gate" : ""));
        if (c.href) {
          var a = el("a", "contact-link");
          a.href = c.href;
          if (c.href.indexOf("http") === 0) {
            a.rel = "noopener noreferrer";
            a.target = "_blank";
          }
          a.appendChild(el("span", "contact-label", c.label));
          a.appendChild(el("span", "contact-hint", c.hint));
          li.appendChild(a);
        } else {
          li.appendChild(el("span", "contact-label", c.label));
          li.appendChild(el("span", "contact-hint", c.hint));
        }
        clist.appendChild(li);
      });
    }

    setText("legal", t(D.legal));
    setText("foot-note", t(D.footNote));

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var on = btn.getAttribute("data-lang") === L;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.classList.toggle("is-on", on);
    });
  }

  function setLang(lang) {
    if (!LANGS[lang]) return;
    state.lang = lang;
    persist(lang);
    render();
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang"));
    });
  });

  persist(state.lang);
  render();
})();
