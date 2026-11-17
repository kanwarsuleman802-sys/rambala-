# Ramala Asesores — website

Static website for **Ramala Asesores**, an immigration law firm in Sant Andreu, Barcelona.

- No build step, no frameworks. Just HTML, CSS and vanilla JavaScript.
- Bilingual: Spanish (default) and English, with the choice remembered in the browser.
- Fully responsive, keyboard accessible, and includes `LegalService` structured data for Google.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Home page: hero, services, process, firm, gallery, reviews, FAQ, contact |
| `styles.css` | All styling, responsive breakpoints, print styles |
| `script.js` | Language switch, opening-hours status, navigation, reveal animations, form validation |
| `aviso-legal.html` | Legal notice (Spanish) |
| `privacidad.html` | Privacy policy (Spanish, RGPD) |
| `assets/` | Logo: emblem for the header/footer, full lockup for the firm card, favicon, Apple touch icon and social-share image |
| `assets/photos/` | Three neighbourhood photographs of Sant Andreu (CC0) |

## How to preview

Open `index.html` directly in a browser, or serve the folder locally:

```powershell
python -m http.server 5173
# then visit http://localhost:5173
```

## Business data used

Verified from the public Google Maps / directory listing:

- **Name:** Ramala Asesores
- **Address:** Carrer de Múrcia, 40, BJ, Sant Andreu, 08027 Barcelona, Spain
- **Phone:** +34 935 308 763
- **Hours:** Mon–Thu 09:30–14:30 and 16:30–19:30 · Fri 09:30–14:30 · weekends closed
- **Owner:** Umer

## Before going live — please confirm/replace

1. **Email address** `info@ramalaasesores.es` is a placeholder (the domain matches the listed website). Replace it in `index.html`, `script.js` (`EMAIL` constant), `aviso-legal.html` and `privacidad.html`.
2. **Social/Google rating** — no numeric rating is displayed because public sources disagree (4.1 vs 4.7). The site says "reseñas en Google" and links to the Google results page. Add an exact rating if you want one.
3. **Legal pages** — fill in the NIF and bar-registration (colegiación) details marked “pendiente de completar”. Have the texts reviewed by the firm.
4. **Languages** — the site says Spanish and English. Add Urdu/Hindi/etc. only if the firm can really handle them.
5. **Testimonials** — three short quotes adapted from public Google reviews (Vahan C., Carmen Zúñiga, Sono Umar). Replace them with the firm's preferred reviews if needed.
6. **Contact form** — it validates fields and then opens the visitor's email app with the enquiry pre-filled. It does not send anything by itself. For real server-side delivery, connect it to Formspree, Netlify Forms, or an SMTP endpoint.
7. **Map** — uses the keyless Google Maps embed for the address. No cookie banner is included because the site sets no tracking cookies (only a language preference in `localStorage`). Add a consent banner if analytics/marketing tools are added later.
8. **Domain** — pages assume `https://ramalaasesores.es/`. Update canonical/Open Graph URLs if the final domain differs.
9. **Photos** — the gallery uses three CC0 photographs of Sant Andreu from Wikimedia Commons (credit below). If you send real photos of the office, Umer or the team, they can replace them and will look more personal.

## Photography credits

The three neighbourhood photos in `assets/photos/` are by **Zarateman**, released under **CC0 1.0** (public domain) on Wikimedia Commons:

- `sant-andreu-02.jpg` — [Barcelona - Distrito de Sant Andreu 02](https://commons.wikimedia.org/wiki/File:Barcelona_-_Distrito_de_Sant_Andreu_02.jpg)
- `sant-andreu-04.jpg` — [Barcelona - Distrito de Sant Andreu 04](https://commons.wikimedia.org/wiki/File:Barcelona_-_Distrito_de_Sant_Andreu_04.jpg)
- `sant-andreu-06.jpg` — [Barcelona - Distrito de Sant Andreu 06](https://commons.wikimedia.org/wiki/File:Barcelona_-_Distrito_de_Sant_Andreu_06.jpg)

They were resized to 1100 px wide and compressed for the web.

## Notes on the design

- Palette: deep navy `#0B1C2C`, warm gold `#C39B5C`, sand `#F2ECE1`, with burgundy `#8E2836` as the logo accent.
- Type: Cormorant Garamond (headings) + Inter (body), loaded from Google Fonts.
- The supplied logo has been extracted, cleaned up and recolored into two variants: burgundy/navy for light backgrounds and gold/sand for dark backgrounds. The emblem is used in the header, footer, legal pages and favicon; the full lockup appears on the firm card.
- The Barcelona skyline in the hero is hand-drawn inline SVG, so there are no stock-photo licensing issues and the page is fast.
- Opening-hours badge is calculated live for the `Europe/Madrid` time zone.
- The ES/EN switch sits top-right in the top bar on desktop and moves into the header on phones.
