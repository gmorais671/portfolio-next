import assert from "node:assert/strict";

// Read-only HTTP smoke checks. The only POSTs omit required fields, so no email is sent.
const origin = process.env.PORTFOLIO_CHECK_URL || "http://127.0.0.1:3001";
const slugs = ["barbershop-platform", "ola-cliente", "sanorte", "thermal-printing", "field-research", "vm-tabacos", "stepcare", "reservoir-controller"];
const internalLinks = new Set();
const root = await fetch(origin, { redirect: "manual" });
assert.equal(root.status, 307, "Root must redirect to the Portuguese portfolio");
assert.equal(new URL(root.headers.get("location"), origin).pathname, "/pt");

for (const locale of ["pt", "en"]) {
  for (const route of [`/${locale}`, ...slugs.map((slug) => `/${locale}/projects/${slug}`)]) {
    const response = await fetch(origin + route);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.match(html, new RegExp(`<html[^>]*lang="${locale === "pt" ? "pt-BR" : "en"}"`), route);
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `One main heading: ${route}`);
    assert.match(html, /rel="canonical"/, route);
    assert.match(html, /hrefLang="pt-BR"/i, route);
    assert.match(html, /hrefLang="en"/i, route);
    assert.doesNotMatch(html, /barberdesk/i, `Retired brand: ${route}`);
    for (const match of html.matchAll(/href="(\/(?!\/)[^"]*)"/g)) {
      const path = match[1].replaceAll("&amp;", "&").split("#")[0];
      if (path && !path.startsWith("/_next/")) internalLinks.add(path);
    }
    if (route === `/${locale}`) {
      assert.doesNotMatch(html, /class="architecture/, "Architecture belongs on case-study pages");
      assert.match(html, /gabriel-profile-primary/, "Use the new portrait");
      assert.equal((html.match(/class="project-feature/g) || []).length, 3, "Exactly three featured projects");
      assert.ok(/class="[^"]*\bproof-strip\b/.test(html), "Compact production evidence");
      assert.ok(/id="supporting-project-rail"/.test(html), "Manual supporting-project rail");
      assert.equal((html.match(/class="supporting-project-card"/g) || []).length, 5, "Five supporting projects");
      assert.doesNotMatch(html, /booking-window/, "No fabricated booking UI");
      assert.match(html, /barbershop-camisa-10/, "Real branded landing visual");
    }
    if (route.endsWith("/projects/barbershop-platform")) {
      assert.match(html, /public-experience-title/, "Public experience section");
      assert.match(html, /https:\/\/barbearia-camisa-10.gabrielmoraisdev.com.br\//, "Live implementation link");
      assert.match(html, /class="product-flow"/, "Product flow");
      assert.match(html, /class="architecture"/, "Technical architecture remains in case study");
    }
  }
  const invalid = await fetch(origin + "/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ locale }) });
  assert.equal(invalid.status, 400);
  const result = await invalid.json();
  assert.match(result.error, locale === "en" ? /Please fill in/ : /Preencha/);
}
for (const path of internalLinks) {
  assert.equal((await fetch(origin + path)).status, 200, `Internal link: ${path}`);
}
for (const path of ["/fr", "/en/projects/unknown-project"]) {
  assert.equal((await fetch(origin + path)).status, 404, path);
}
for (const path of ["/profile/gabriel-profile-primary.jpg", "/projects/ola-cliente.png", "/projects/sanorte.png", "/projects/barbershop-camisa-10.jpg"]) {
  assert.equal((await fetch(origin + path)).status, 200, path);
}
console.log(`Passed: 18 localized pages, ${internalLinks.size} internal destinations, root redirect, 404s, image assets and localized contact validation.`);
