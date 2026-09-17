import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownLeft,
  ArrowUpLeft,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Clock3,
  Instagram,
  MapPin,
  Menu as MenuIcon,
  Minus,
  Navigation,
  Phone,
  Play,
  Plus,
  Sparkles,
  X,
} from "lucide-react";

type Language = "en" | "ar";
type Copy = { en: string; ar: string };

const img = {
  hero: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=2000&q=85",
  truffle: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=85",
  diavola: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1200&q=85",
  pistachio: "https://images.unsplash.com/photo-1593560708920-61dd98c8c8d3?auto=format&fit=crop&w=1200&q=85",
  interior: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1600&q=85",
};

const copy = (en: string, ar: string): Copy => ({ en, ar });
const navItems = [
  ["about", copy("About", "عنّا")],
  ["menu", copy("Menu", "القائمة")],
  ["story", copy("Our story", "قصتنا")],
  ["gallery", copy("Gallery", "المعرض")],
  ["visit", copy("Visit us", "زورونا")],
] as const;

const signaturePizzas = [
  {
    image: img.truffle,
    name: copy("Truffle Burrata", "ترافل بوراتا"),
    desc: copy("Fior di latte, burrata, black truffle, thyme.", "فيور دي لاتيه، بوراتا، ترافل أسود، زعتر."),
    price: "68 ₪",
    number: "01",
  },
  {
    image: img.diavola,
    name: copy("Diavola", "ديافولا"),
    desc: copy("Spicy salami, roasted pepper, smoked mozzarella.", "سلامي حار، فلفل مشوي، موزاريلا مدخنة."),
    price: "52 ₪",
    number: "02",
  },
  {
    image: img.pistachio,
    name: copy("Pistachio Mortadella", "مورتاديلا بالفستق"),
    desc: copy("Pistachio cream, mortadella, basil, stracciatella.", "كريمة فستق، مورتاديلا، ريحان، ستراتشاتيلا."),
    price: "58 ₪",
    number: "03",
  },
];

const menuItems = [
  { category: "Pizza", name: copy("Margherita 2.0", "مارغريتا 2.0"), detail: copy("San Marzano tomato, fior di latte, basil", "طماطم سان مارزانو، فيور دي لاتيه، ريحان"), price: "42" },
  { category: "Pizza", name: copy("Truffle Burrata", "ترافل بوراتا"), detail: copy("Burrata, truffle, thyme, olive oil", "بوراتا، ترافل، زعتر، زيت زيتون"), price: "68" },
  { category: "Specials", name: copy("Weekend tasting", "تجربة نهاية الأسبوع"), detail: copy("Chef's choice of 3 seasonal slices", "اختيار الشيف من 3 شرائح موسمية"), price: "79" },
  { category: "Sides", name: copy("Stracciatella & tomatoes", "ستراتشاتيلا وطماطم"), detail: copy("Heirloom tomatoes, basil oil, sea salt", "طماطم موسمية، زيت ريحان، ملح بحري"), price: "29" },
  { category: "Drinks", name: copy("Citrus spritz", "سبريتز الحمضيات"), detail: copy("Blood orange, rosemary, sparkling water", "برتقال دموي، إكليل الجبل، مياه غازية"), price: "24" },
  { category: "Desserts", name: copy("Tiramisu al caffè", "تيراميسو القهوة"), detail: copy("Mascarpone, espresso, cocoa", "ماسكاربوني، إسبريسو، كاكاو"), price: "28" },
];

const categories = [
  ["All", "الكل"],
  ["Pizza", "البيتزا"],
  ["Specials", "العروض"],
  ["Sides", "المقبلات"],
  ["Drinks", "المشروبات"],
  ["Desserts", "الحلويات"],
] as const;

const testimonials = [
  { quote: copy("The kind of pizza you plan your week around. The crust is extraordinary.", "بيتزا تخطط لأسبوعك من أجلها. العجينة استثنائية."), name: "Lina A.", place: copy("Jenin", "جنين") },
  { quote: copy("Thoughtful, warm, and completely delicious. Pizzeria450 feels like a little escape.", "تجربة دافئة ومدروسة ولذيذة تماماً. أتيليه يشبه ملاذاً صغيراً."), name: "Omar K.", place: copy("Jenin", "جنين") },
  { quote: copy("Every detail feels intentional — from the room to the last drop of olive oil.", "كل تفصيل هنا مقصود — من المكان حتى آخر قطرة زيت زيتون."), name: "Sara M.", place: copy("Jenin", "جنين") },
];

const processSteps: { number: string; label: Copy }[] = [
  { number: "01", label: copy("Fresh dough", "عجين طازج") },
  { number: "02", label: copy("Chosen ingredients", "مكونات مختارة") },
  { number: "03", label: copy("Handcrafted", "تحضير يدوي") },
  { number: "04", label: copy("Fresh from the oven", "طازجة من الفرن") },
];

function t(value: Copy, lang: Language) {
  return value[lang];
}

function Logo({ light = false, lang }: { light?: boolean; lang: Language }) {
  return (
    <a href="#top" className={`group inline-flex items-center gap-3 ${light ? "text-[#f4efe6]" : "text-[#26352b]"}`} aria-label="Pizzeria450 home">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-current/40">
        <span className="absolute h-5 w-5 rounded-full border border-current/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#b85c38]" />
      </span>
      <span className="leading-none text-left">
        <span className="block font-display text-[1.35rem] italic tracking-[0.06em]">Pizzeria450</span>
        <span className="block pl-0.5 font-sans text-[0.52rem] font-semibold uppercase tracking-[0.32em] opacity-70">{lang === "ar" ? "بيتزا معاصرة" : "Pizza culture"}</span>
      </span>
    </a>
  );
}

function Button({ children, href = "#menu", light = false, outline = false }: { children: React.ReactNode; href?: string; light?: boolean; outline?: boolean }) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-4 rounded-full px-6 font-sans text-[0.68rem] font-bold uppercase tracking-[0.2em] transition duration-300 active:scale-[0.97] ${
        outline
          ? light
            ? "border border-[#f4efe6]/40 text-[#f4efe6] hover:border-[#f4efe6] hover:bg-[#f4efe6] hover:text-[#26352b]"
            : "border border-[#26352b]/25 text-[#26352b] hover:border-[#26352b] hover:bg-[#26352b] hover:text-[#f4efe6]"
          : light
            ? "bg-[#f4efe6] text-[#26352b] hover:bg-[#b85c38] hover:text-[#f4efe6]"
            : "bg-[#26352b] text-[#f4efe6] hover:bg-[#b85c38]"
      }`}
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const isArabic = lang === "ar";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic, lang]);

  const visibleMenu = useMemo(
    () => (activeCategory === "All" ? menuItems.slice(0, 4) : menuItems.filter((item) => item.category === activeCategory)),
    [activeCategory],
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="top" className={`min-h-screen overflow-hidden bg-[#f4efe6] text-[#26352b] ${isArabic ? "font-arabic" : ""}`}>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-[#f4efe6]/10 bg-[#26352b]/95 py-3 shadow-2xl backdrop-blur-xl" : "bg-transparent py-5"}`}>
        <div className="container flex items-center justify-between gap-6">
          <Logo light lang={lang} />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="nav-link text-[#f4efe6]/75 hover:text-[#f4efe6]">{t(label, lang)}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <button onClick={() => setLang(isArabic ? "en" : "ar")} className="hidden text-[0.66rem] font-bold tracking-[0.16em] text-[#f4efe6]/80 transition hover:text-[#f4efe6] sm:block" aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}>
              {isArabic ? "EN / العربية" : "العربية / EN"}
            </button>
            <a href="#menu" className="hidden rounded-full bg-[#b85c38] px-5 py-3 text-[0.64rem] font-bold uppercase tracking-[0.18em] text-[#f4efe6] transition hover:bg-[#f4efe6] hover:text-[#26352b] sm:inline-flex">{isArabic ? "اطلب الآن" : "Order now"}</a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-11 w-11 place-items-center rounded-full border border-[#f4efe6]/30 text-[#f4efe6] lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"}>
              {menuOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="absolute inset-x-0 top-full border-t border-[#f4efe6]/10 bg-[#26352b] px-6 pb-7 pt-5 shadow-2xl lg:hidden">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map(([id, label]) => <a onClick={closeMenu} key={id} href={`#${id}`} className="border-b border-[#f4efe6]/10 py-4 font-display text-2xl text-[#f4efe6]">{t(label, lang)}</a>)}
              <button onClick={() => { setLang(isArabic ? "en" : "ar"); closeMenu(); }} className="mt-4 self-start text-xs font-bold uppercase tracking-[0.2em] text-[#d8cdbd]">{isArabic ? "English" : "العربية"}</button>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section className="hero-section relative flex min-h-[790px] items-end overflow-hidden bg-[#171717] pb-16 pt-40 text-[#f4efe6] sm:min-h-[860px] lg:min-h-[93vh] lg:pb-24">
          <img src={img.hero} alt="Burrata pizza fresh from the wood-fired oven" className="absolute inset-0 h-full w-full object-cover object-center opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171717]/95 via-[#171717]/55 to-[#171717]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-transparent to-[#171717]/20" />
          <div className="container relative z-10 w-full">
            <div className="max-w-3xl">
              <div className="mb-8 flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.28em] text-[#d8cdbd] reveal-up"><span className="h-px w-10 bg-[#b85c38]" /> {isArabic ? "بيتزا معاصرة · جنين" : "Contemporary pizza · Jenin"}</div>
              <h1 className="max-w-3xl font-display text-6xl leading-[0.88] tracking-[-0.04em] sm:text-8xl lg:text-[9.5rem] reveal-up delay-1">{isArabic ? "فنّ البيتزا" : "The art of pizza"}<span className="text-[#b85c38]">.</span></h1>
              <p className="mt-8 max-w-md font-display text-2xl leading-tight text-[#f4efe6]/85 sm:text-3xl reveal-up delay-2">{isArabic ? "نُحضّرها بشغف، ونقدّمها بطابعنا الخاص." : "Crafted with passion. Served with character."}</p>
              <div className="mt-10 flex flex-wrap gap-3 reveal-up delay-3"><Button href="#menu" light>{isArabic ? "اطلب الآن" : "Order now"}</Button><Button href="#signatures" light outline>{isArabic ? "استكشف القائمة" : "Explore menu"}</Button></div>
            </div>
            <div className="mt-20 flex items-end justify-between border-t border-[#f4efe6]/25 pt-5 text-[0.62rem] uppercase tracking-[0.22em] text-[#f4efe6]/60 sm:mt-28"><span>{isArabic ? "يومياً من ١٢ ظهراً" : "Open daily from noon"}</span><a href="#about" className="group flex items-center gap-3">{isArabic ? "اكتشف المزيد" : "Discover more"}<ArrowDownLeft className="h-4 w-4 transition-transform group-hover:translate-y-1" /></a></div>
          </div>
        </section>

        <section id="about" className="relative bg-[#f4efe6] py-24 sm:py-32 lg:py-44">
          <div className="container grid gap-14 lg:grid-cols-[0.28fr_1fr_0.6fr] lg:gap-10">
            <div className="eyebrow">01 / {isArabic ? "المكان" : "The house"}</div>
            <div><h2 className="max-w-4xl font-display text-5xl leading-[0.98] tracking-[-0.035em] sm:text-7xl lg:text-[7.3rem]">{isArabic ? <>ليست مجرد <em>بيتزا.</em><br />إنها تجربة.</> : <>Not just <em>pizza.</em><br />An experience.</>}</h2></div>
            <div className={`flex flex-col justify-end ${isArabic ? "text-right" : ""}`}><p className="max-w-sm text-base leading-7 text-[#26352b]/70">{isArabic ? "عجينة تُخمّر ببطء، مكونات نختارها بعناية، ونار تمنح كل قرص شخصيته الخاصة. أتيليه هو احتفاء بسيط بكل ما يجعل البيتزا لحظة تستحق التوقف." : "Slow-fermented dough, ingredients chosen with care, and a fire that gives every pizza its own point of view. Pizzeria450 is a simple celebration of what makes pizza worth slowing down for."}</p><div className="mt-8 flex items-center gap-4 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#b85c38]"><span className="h-px w-12 bg-[#b85c38]" />{isArabic ? "من العجين إلى المائدة" : "From dough to table"}</div></div>
          </div>
          <div className="absolute -bottom-8 left-1/2 hidden -translate-x-1/2 text-[13rem] font-display leading-none text-[#26352b]/[0.025] lg:block">A</div>
        </section>

        <section id="signatures" className="bg-[#26352b] py-24 text-[#f4efe6] sm:py-32 lg:py-40">
          <div className="container">
            <div className="mb-14 flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><div className="eyebrow text-[#d8cdbd]/60">02 / {isArabic ? "الاختيارات" : "The signatures"}</div><h2 className="mt-5 font-display text-6xl leading-none tracking-[-0.04em] sm:text-8xl">{isArabic ? "أطباقنا المميزة" : "Our signatures"}</h2></div><p className="max-w-xs text-sm leading-6 text-[#d8cdbd]/70">{isArabic ? "ثلاثة أطباق تحمل روح أتيليه — مكونات جريئة، توازن هادئ، وقرمشة مثالية." : "Three plates that carry the spirit of Pizzeria450 — bold ingredients, quiet balance, and a perfect char."}</p></div>
            <div className="grid gap-5 md:grid-cols-3">
              {signaturePizzas.map((pizza, index) => <article key={pizza.name.en} className={`signature-card group ${index === 1 ? "md:mt-16" : index === 2 ? "md:mt-5" : ""}`}><div className="relative aspect-[0.84] overflow-hidden bg-[#171717]"><img src={pizza.image} alt={t(pizza.name, lang)} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#171717]/70 via-transparent to-transparent" /><span className="absolute left-5 top-5 font-display text-4xl text-[#f4efe6]/70">{pizza.number}</span><span className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-[#f4efe6]/40 text-[#f4efe6] opacity-0 transition duration-300 group-hover:opacity-100"><ArrowUpRight className="h-4 w-4" /></span></div><div className="flex items-start justify-between gap-5 border-b border-[#f4efe6]/20 py-5"><div><h3 className="font-display text-3xl leading-none">{t(pizza.name, lang)}</h3><p className="mt-3 max-w-[15rem] text-sm leading-5 text-[#d8cdbd]/70">{t(pizza.desc, lang)}</p></div><span className="pt-1 text-xs font-bold tracking-[0.12em] text-[#b85c38]">{pizza.price}</span></div></article>)}
            </div>
            <div className="mt-14 flex justify-end"><Button href="#menu" light outline>{isArabic ? "شاهد القائمة كاملة" : "View full menu"}</Button></div>
          </div>
        </section>

        <section id="menu" className="bg-[#d8cdbd]/35 py-24 sm:py-32">
          <div className="container grid gap-14 lg:grid-cols-[0.34fr_1fr] lg:gap-24">
            <div><div className="eyebrow">03 / {isArabic ? "القائمة" : "A little menu"}</div><h2 className="mt-5 max-w-xs font-display text-6xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">{isArabic ? "اختيارات تُفتح الشهية" : "A menu to linger over"}</h2><p className="mt-7 max-w-xs text-sm leading-6 text-[#26352b]/65">{isArabic ? "قائمة صغيرة، تتغير مع المواسم، وتبقى وفية للمكونات التي نحبها." : "A small, seasonal menu that stays faithful to the ingredients we love."}</p><div className="mt-9"><Button href="#visit">{isArabic ? "عرض القائمة" : "View menu"}</Button></div></div>
            <div><div className="mb-8 flex flex-wrap gap-2 border-b border-[#26352b]/15 pb-5">{categories.map(([en, ar]) => <button key={en} onClick={() => setActiveCategory(en)} className={`rounded-full px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] transition ${activeCategory === en ? "bg-[#26352b] text-[#f4efe6]" : "text-[#26352b]/60 hover:bg-[#26352b]/10"}`}>{isArabic ? ar : en}</button>)}</div><div className="divide-y divide-[#26352b]/15">{visibleMenu.map((item) => <div key={item.name.en} className="group flex items-center justify-between gap-5 py-5"><div><h3 className="font-display text-2xl transition group-hover:text-[#b85c38]">{t(item.name, lang)}</h3><p className="mt-1 text-sm text-[#26352b]/55">{t(item.detail, lang)}</p></div><span className="shrink-0 font-sans text-sm font-semibold">{item.price} <span className="text-[0.6rem] text-[#26352b]/50">ILS</span></span></div>)}</div></div>
          </div>
        </section>

        <section className="bg-[#b85c38] py-5 text-[#f4efe6]"><div className="container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"><div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]"><Sparkles className="h-4 w-4" /> {isArabic ? "عرض نهاية الأسبوع" : "Weekend special"}</div><p className="font-display text-2xl">{isArabic ? "بيتزا موسمية + مشروب بارد بـ ٦٩ شيكل" : "A seasonal pizza + a cold pour for 69 ₪"}</p><a href="#menu" className="group flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.18em]">{isArabic ? "اطلب الآن" : "Order now"}<ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a></div></section>

        <section id="story" className="bg-[#f4efe6] py-24 sm:py-32 lg:py-40"><div className="container grid items-center gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-24"><div className="relative"><div className="absolute -left-5 -top-5 h-24 w-24 border-l border-t border-[#b85c38] sm:-left-8 sm:-top-8" /><img src={img.interior} alt="Pizzeria450 interior with a glowing wood-fired oven" loading="lazy" className="relative aspect-[0.92] w-full object-cover sm:aspect-[1.1]" /><div className="absolute -bottom-7 -right-4 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-[#26352b] text-center text-[#f4efe6] sm:-right-8"><span className="font-display text-3xl italic">2026</span><span className="mt-1 text-[0.5rem] font-bold uppercase tracking-[0.16em]">{isArabic ? "منذ" : "since"}</span></div></div><div className={isArabic ? "text-right" : ""}><div className="eyebrow">04 / {isArabic ? "قصتنا" : "Our story"}</div><h2 className="mt-5 max-w-xl font-display text-6xl leading-[0.92] tracking-[-0.04em] sm:text-8xl">{isArabic ? <>نُحضّرها<br /><em>بشغف.</em></> : <>Made with<br /><em>passion.</em></>}</h2><p className="mt-8 max-w-md text-base leading-7 text-[#26352b]/70">{isArabic ? "بدأت أتيليه من حب بسيط: عجينة جيدة، نار حقيقية، ووقت كافٍ لنفعل الأشياء بالطريقة الصحيحة. اليوم ما زلنا نمدّ كل قرص يدوياً، نختار مكوناتنا بعناية، ونترك الفرن يتحدث." : "Pizzeria450 began with a simple love: good dough, real fire, and enough time to do things properly. Today, every pizza is still stretched by hand, every ingredient chosen with care, and the oven is still allowed to speak."}</p><div className="mt-9 flex items-center gap-4 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#b85c38]"><span className="h-px w-12 bg-[#b85c38]" />{isArabic ? "نار، وقت، ومكونات جيدة" : "Fire, time, good ingredients"}</div></div></div></section>

        <section className="border-y border-[#26352b]/10 bg-[#f4efe6] py-20 sm:py-28"><div className="container"><div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><div className="eyebrow">05 / {isArabic ? "الطريقة" : "The method"}</div><h2 className="mt-4 font-display text-5xl leading-none sm:text-7xl">{isArabic ? "من العجين إلى المائدة" : "From dough to table"}</h2></div><p className="max-w-xs text-sm leading-6 text-[#26352b]/60">{isArabic ? "كل خطوة بسيطة. كل خطوة مهمة." : "Every step is simple. Every step matters."}</p></div><div className="grid gap-8 md:grid-cols-4">{processSteps.map((step, i) => <div key={step.number} className="relative border-t border-[#26352b]/20 pt-5"><span className="font-display text-6xl text-[#b85c38]">{step.number}</span><h3 className="mt-6 max-w-[9rem] font-display text-3xl leading-none">{t(step.label, lang)}</h3>{i < 3 && <Plus className="absolute right-0 top-5 h-4 w-4 text-[#26352b]/40" />}</div>)}</div></div></section>

        <section id="gallery" className="bg-[#171717] py-24 text-[#f4efe6] sm:py-32"><div className="container"><div className="mb-12 flex items-end justify-between"><div><div className="eyebrow text-[#d8cdbd]/60">06 / {isArabic ? "المعرض" : "In the room"}</div><h2 className="mt-5 font-display text-6xl leading-none sm:text-8xl">{isArabic ? "لحظات أتيليه" : "Pizzeria450 moments"}</h2></div><a href="#visit" className="hidden items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#d8cdbd] sm:flex">Instagram <Instagram className="h-4 w-4" /></a></div><div className="gallery-grid"><div className="gallery-tile gallery-tile-tall"><img src={img.interior} alt="Warm Pizzeria450 dining room" loading="lazy" /><span>{isArabic ? "المكان" : "The room"}</span></div><div className="gallery-tile"><img src={img.truffle} alt="Truffle burrata pizza detail" loading="lazy" /><span>{isArabic ? "المكونات" : "The details"}</span></div><div className="gallery-tile"><img src={img.diavola} alt="Diavola pizza detail" loading="lazy" /><span>{isArabic ? "النار" : "The fire"}</span></div><div className="gallery-tile gallery-tile-wide"><img src={img.hero} alt="Pizza at the wood-fired oven" loading="lazy" /><span>{isArabic ? "على المائدة" : "At the table"}</span></div></div></div></section>

        <section className="bg-[#f4efe6] py-24 sm:py-32"><div className="container"><div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><div className="eyebrow">07 / {isArabic ? "آراء ضيوفنا" : "Good words"}</div><h2 className="mt-5 font-display text-6xl leading-none sm:text-8xl">{isArabic ? "ماذا يقول ضيوفنا" : "What our guests say"}</h2></div><div className="text-2xl tracking-[0.18em] text-[#b85c38]">★★★★★</div></div><div className="grid gap-5 md:grid-cols-3">{testimonials.map((item) => <figure key={item.name} className="flex min-h-[260px] flex-col justify-between border border-[#26352b]/15 p-6 sm:p-8"><div className="text-3xl text-[#b85c38]">“</div><blockquote className="mt-4 font-display text-2xl leading-tight">{t(item.quote, lang)}</blockquote><figcaption className="mt-8 flex items-center justify-between border-t border-[#26352b]/15 pt-4 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#26352b]/60"><span>{item.name}</span><span>{t(item.place, lang)}</span></figcaption></figure>)}</div></div></section>

        <section id="visit" className="bg-[#d8cdbd]/45 py-24 sm:py-32"><div className="container grid gap-12 lg:grid-cols-[0.75fr_1fr] lg:gap-24"><div><div className="eyebrow">08 / {isArabic ? "زورونا" : "Visit us"}</div><h2 className="mt-5 max-w-xl font-display text-6xl leading-[0.92] tracking-[-0.04em] sm:text-8xl">{isArabic ? <>تعالَ<br /><em>وتذوقها بنفسك.</em></> : <>Come taste it<br /><em>yourself.</em></>}</h2><div className="mt-10 grid max-w-md gap-6 text-sm sm:grid-cols-2"><div><div className="info-label"><MapPin className="h-3.5 w-3.5" />{isArabic ? "الموقع" : "Location"}</div><p className="mt-3 leading-6">Haifa Street<br />Jenin, Palestine</p></div><div><div className="info-label"><Clock3 className="h-3.5 w-3.5" />{isArabic ? "ساعات العمل" : "Opening hours"}</div><p className="mt-3 leading-6">Every day<br />12:00 — 01:00</p></div><div><div className="info-label"><Phone className="h-3.5 w-3.5" />{isArabic ? "الهاتف" : "Phone"}</div><p className="mt-3 leading-6">Jenin · Haifa Street</p></div><div><div className="info-label"><Instagram className="h-3.5 w-3.5" />Instagram</div><p className="mt-3 leading-6">@pizzeria450</p></div></div><div className="mt-9 flex flex-wrap gap-3"><Button href="#menu">{isArabic ? "اطلب الآن" : "Order now"}</Button><Button href="https://maps.google.com" outline>{isArabic ? "احصل على الاتجاهات" : "Get directions"}</Button></div></div><div className="map-card relative min-h-[380px] overflow-hidden bg-[#26352b] p-7 text-[#f4efe6] sm:min-h-[480px]"><div className="map-lines absolute inset-0 opacity-25" /><div className="relative flex h-full flex-col justify-between"><div className="flex items-start justify-between"><span className="font-display text-3xl italic">Pizzeria450</span><span className="rounded-full border border-[#f4efe6]/30 px-3 py-1 text-[0.57rem] font-bold uppercase tracking-[0.15em]">Jenin</span></div><div className="absolute left-[54%] top-[46%] -translate-x-1/2 -translate-y-1/2"><span className="absolute -inset-5 animate-ping rounded-full bg-[#b85c38]/25" /><span className="relative grid h-12 w-12 place-items-center rounded-full bg-[#b85c38] text-[#f4efe6] shadow-xl"><MapPin className="h-5 w-5" /></span><span className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap text-[0.58rem] font-bold uppercase tracking-[0.15em]">Pizzeria450</span></div><div className="flex items-end justify-between border-t border-[#f4efe6]/20 pt-4 text-[0.6rem] uppercase tracking-[0.16em] text-[#d8cdbd]/70"><span>24°42' N / 46°40' E</span><Navigation className="h-4 w-4" /></div></div></div></div></section>

        <section className="relative min-h-[540px] overflow-hidden bg-[#171717] py-28 text-[#f4efe6] sm:min-h-[640px] sm:py-40"><img src={img.hero} alt="Pizza waiting at Pizzeria450" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-50" /><div className="absolute inset-0 bg-[#171717]/55" /><div className="relative z-10 container text-center"><div className="eyebrow text-[#d8cdbd]/70">{isArabic ? "لحظتك القادمة" : "Your next table"}</div><h2 className="mx-auto mt-6 max-w-5xl font-display text-6xl leading-[0.88] tracking-[-0.05em] sm:text-8xl lg:text-[9rem]">{isArabic ? <>بيتزتك المفضلة<br /><em>بانتظارك.</em></> : <>Your next favorite<br /><em>pizza is waiting.</em></>}</h2><div className="mt-10"><Button href="#menu" light>{isArabic ? "اطلب الآن" : "Order now"}</Button></div></div></section>
      </main>

      <footer className="bg-[#171717] py-12 text-[#f4efe6]"><div className="container"><div className="grid gap-12 border-b border-[#f4efe6]/15 pb-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.7fr_1fr]"><div><Logo light lang={lang} /><p className="mt-6 max-w-xs font-display text-2xl text-[#d8cdbd]/80">{isArabic ? "صُنعت بشغف." : "Crafted with passion."}</p></div><div><div className="footer-label">{isArabic ? "اكتشف" : "Explore"}</div><div className="mt-5 flex flex-col gap-3 text-sm text-[#d8cdbd]/70">{navItems.slice(0, 4).map(([id, label]) => <a key={id} href={`#${id}`} className="transition hover:text-[#f4efe6]">{t(label, lang)}</a>)}</div></div><div><div className="footer-label">{isArabic ? "تواصل" : "Connect"}</div><div className="mt-5 flex flex-col gap-3 text-sm text-[#d8cdbd]/70"><a href="#visit" className="transition hover:text-[#f4efe6]">Jenin · Haifa Street</a><a href="#visit" className="transition hover:text-[#f4efe6]">Visit us</a><a href="https://instagram.com" className="transition hover:text-[#f4efe6]">Instagram</a></div></div><div><div className="footer-label">{isArabic ? "ابقَ على اطلاع" : "Stay in the loop"}</div><p className="mt-5 text-sm leading-6 text-[#d8cdbd]/70">{isArabic ? "عروض موسمية وبيتزا طازجة من مطبخنا في جنين." : "Seasonal specials and fresh pizzas from our kitchen in Jenin."}</p><div className="mt-5 flex border-b border-[#f4efe6]/35 pb-3"><input aria-label="Email address" placeholder={isArabic ? "بريدك الإلكتروني" : "Your email address"} className="min-w-0 flex-1 bg-transparent text-sm text-[#f4efe6] outline-none placeholder:text-[#d8cdbd]/45" /><button aria-label="Subscribe" className="text-[#b85c38] transition hover:text-[#f4efe6]"><ArrowUpLeft className="h-4 w-4" /></button></div></div></div><div className="flex flex-col justify-between gap-5 pt-6 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[#d8cdbd]/45 sm:flex-row"><span>© 2026 Pizzeria450</span><span>{isArabic ? "بيتزا معاصرة · جنين" : "Contemporary pizza · Jenin"}</span><button onClick={() => setLang(isArabic ? "en" : "ar")} className="self-start transition hover:text-[#f4efe6]">{isArabic ? "English" : "العربية"}</button></div></div></footer>
      <a href="#visit" className="fixed bottom-5 right-5 z-40 flex h-12 items-center gap-2 rounded-full bg-[#b85c38] px-4 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#f4efe6] shadow-2xl transition hover:-translate-y-1 hover:bg-[#26352b]" aria-label="Contact Pizzeria450 on WhatsApp"><Phone className="h-4 w-4" /> <span className="hidden sm:inline">Visit us</span></a>
    </div>
  );
}
