/**
 * seoConfig.js
 * Central SEO configuration for every page on fusionnest.com.ng
 * Update title/description here — useSEO hook picks it up automatically.
 */

const BASE_URL = 'https://www.fusionnest.com.ng';

const seoConfig = {
  home: {
    title: 'IVF Clinic Lagos Nigeria',
    description:
      'Fusion Nest Fertility Centre is a leading IVF and fertility clinic in Lagos, Nigeria. We offer affordable IVF, IUI, ICSI, egg donation, sperm donation, and surrogacy. Book a consultation today.',
    canonical: `${BASE_URL}/`,
    ogImage: `${BASE_URL}/assets/og-image.jpg`,
  },

  about: {
    title: 'About Us — Leading Fertility Clinic in Lagos',
    description:
      'Learn about Fusion Nest Fertility Centre — our team of internationally trained fertility specialists, our mission, and our commitment to helping couples achieve parenthood in Lagos, Nigeria.',
    canonical: `${BASE_URL}/about`,
    ogImage: `${BASE_URL}/assets/og-image.jpg`,
  },

  services: {
    title: 'Fertility Services — IVF, IUI, ICSI & More in Lagos',
    description:
      'Fusion Nest offers a full range of fertility services in Lagos: IVF, IUI, ICSI, egg donation, sperm donation, sex selection, and surrogacy. Affordable prices with high success rates.',
    canonical: `${BASE_URL}/services`,
    ogImage: `${BASE_URL}/assets/og-image.jpg`,
  },

  gallery: {
    title: 'Gallery — Fusion Nest Fertility Centre Lagos',
    description:
      'View photos of Fusion Nest Fertility Centre — our state-of-the-art facilities, clinical environment, and happy families we have helped in Lagos, Nigeria.',
    canonical: `${BASE_URL}/gallery`,
    ogImage: `${BASE_URL}/assets/og-image.jpg`,
  },

  blog: {
    title: 'Fertility Blog — Tips, News & Insights',
    description:
      'Read expert articles on IVF, IUI, ICSI, egg donation, male infertility, and fertility health from the specialists at Fusion Nest Fertility Centre, Lagos, Nigeria.',
    canonical: `${BASE_URL}/blog`,
    ogImage: `${BASE_URL}/assets/og-image.jpg`,
  },

  contact: {
    title: 'Contact Us — Fusion Nest Fertility Centre Lagos',
    description:
      'Contact Fusion Nest Fertility Centre in Lagos, Nigeria. Located at No 3 Adebowale Close, Omole Phase 1. Call +234 906 5207 518 or email info@fusionnest.com.ng to book a consultation.',
    canonical: `${BASE_URL}/contact`,
    ogImage: `${BASE_URL}/assets/og-image.jpg`,
  },

  ivf: {
    title: 'IVF Treatment in Lagos Nigeria',
    description:
      'In Vitro Fertilization (IVF) at Fusion Nest Fertility Centre, Lagos. State-of-the-art IVF treatment with over 50% success rate. Affordable IVF packages for couples struggling with infertility.',
    canonical: `${BASE_URL}/services/ivf`,
    ogImage: `${BASE_URL}/assets/og-image.jpg`,
  },

  iui: {
    title: 'IUI Treatment in Lagos Nigeria',
    description:
      'Intrauterine Insemination (IUI) at Fusion Nest Fertility Centre, Lagos. A minimally invasive fertility treatment ideal for mild male factor infertility and irregular ovulation.',
    canonical: `${BASE_URL}/services/iui`,
    ogImage: `${BASE_URL}/assets/og-image.jpg`,
  },

  icsi: {
    title: 'ICSI Treatment in Lagos Nigeria',
    description:
      'Intracytoplasmic Sperm Injection (ICSI) at Fusion Nest Fertility Centre, Lagos. Advanced treatment for severe male factor infertility. Internationally trained specialists.',
    canonical: `${BASE_URL}/services/icsi`,
    ogImage: `${BASE_URL}/assets/og-image.jpg`,
  },

  eggDonation: {
    title: 'Egg Donation in Lagos Nigeria',
    description:
      'Egg donation programme at Fusion Nest Fertility Centre, Lagos. Helping women who cannot use their own eggs to achieve pregnancy with carefully screened, healthy egg donors.',
    canonical: `${BASE_URL}/services/egg-donation`,
    ogImage: `${BASE_URL}/assets/og-image.jpg`,
  },

  spermDonation: {
    title: 'Sperm Donation in Lagos Nigeria',
    description:
      'Sperm donation programme at Fusion Nest Fertility Centre, Lagos. Rigorously screened sperm donors to help couples and single women achieve successful pregnancy.',
    canonical: `${BASE_URL}/services/sperm-donation`,
    ogImage: `${BASE_URL}/assets/og-image.jpg`,
  },

  surrogacy: {
    title: 'Surrogacy Treatment in Lagos Nigeria',
    description:
      'Surrogacy services at Fusion Nest Fertility Centre, Lagos. A compassionate pathway to parenthood for those unable to carry a pregnancy. Cryopreservation of eggs, sperm, and embryos available.',
    canonical: `${BASE_URL}/services/surrogacy`,
    ogImage: `${BASE_URL}/assets/og-image.jpg`,
  },

  sexSelection: {
    title: 'Sex Selection in Lagos Nigeria',
    description:
      'Sex selection services at Fusion Nest Fertility Centre, Lagos. Helping couples choose the sex of their baby using advanced reproductive technology. Safe and ethical procedures.',
    canonical: `${BASE_URL}/services/sex-selection`,
    ogImage: `${BASE_URL}/assets/og-image.jpg`,
  },

  testimonials: {
    title: 'Patient Testimonials — Fusion Nest Fertility Centre',
    description:
      'Read real patient testimonials from couples who achieved pregnancy at Fusion Nest Fertility Centre, Lagos. Over a thousand successful fertility cases with 50%+ success rate.',
    canonical: `${BASE_URL}/testimonials`,
    ogImage: `${BASE_URL}/assets/og-image.jpg`,
  },
};

export default seoConfig;
