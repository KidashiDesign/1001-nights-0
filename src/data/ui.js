/* ══════════════════════════════════════════════════════════════════════════
   Aladin Kitchen — interface and page copy, one block per language
   ──────────────────────────────────────────────────────────────────────────
   English is the default language and lives at the site root. The other three
   sit in their own folders: /fa/ (right-to-left), /ru/, /ka/.
   Every block carries the same keys — tools/build.mjs checks that on build.

   The wordmark stays "Aladin Kitchen" in every language so the sign outside
   and the site read as one; `brandSub` carries the local subtitle from the
   restaurant's own storefront.
   ═════════════════════════════════════════════════════════════════════════ */

const LANGS = [
  { code: 'en', dir: 'ltr', path: '',    label: 'English',  htmlLang: 'en' },
  { code: 'fa', dir: 'rtl', path: 'fa/', label: 'فارسی',    htmlLang: 'fa' },
  { code: 'ru', dir: 'ltr', path: 'ru/', label: 'Русский',  htmlLang: 'ru' },
  { code: 'ka', dir: 'ltr', path: 'ka/', label: 'ქართული',  htmlLang: 'ka' }
];

const ui = {

  /* ══════════════════════════════════════════════════════════ ENGLISH ══ */
  en: {
    brandSub: 'Persian Restaurant',
    langLabel: 'Language',
    skipToContent: 'Skip to content',

    meta: {
      homeTitle: 'Aladin Kitchen — Persian Restaurant in the Old Town of Tbilisi',
      homeDesc: 'Charcoal kebab, slow-cooked khoresht, saffron rice and tea poured from the samovar — Persian cooking on Shavteli Street since 2015.',
      menuTitle: 'Menu — Aladin Kitchen, Persian Restaurant in Tbilisi',
      menuDesc: 'Browse the full Aladin Kitchen menu: starters, charcoal kebab, Persian stews, rice, fish and sweets — every dish shown with its own photo.',
      aboutTitle: 'Our Story — Aladin Kitchen, Persian Restaurant in Tbilisi',
      aboutDesc: 'Three generations, one grill, and a set of rules that never changed: the story of Aladin Kitchen in the old town of Tbilisi, since 2015.',
      eventsTitle: 'Events — Aladin Kitchen, Persian Restaurant in Tbilisi',
      eventsDesc: 'Live music, the Charshanbe Souri fire festival, and the nights our dining room turns into something else entirely — see what’s coming up.',
      coursesTitle: 'The Courses — Aladin Kitchen, Persian Restaurant in Tbilisi',
      coursesDesc: 'Three short reads from the kitchen on how a Persian table unfolds — starters, fire, and a sweet finish — and what to order at each turn.',
      contactTitle: 'Contact & Reservations — Aladin Kitchen, Tbilisi',
      contactDesc: 'Book a table, ask a question, or just say hello — reach Aladin Kitchen by phone, WhatsApp or the form below. Address, hours, and answers to common questions.'
    },

    nav: { menu: 'Menu', restaurant: 'Restaurant', experience: 'Experience', visit: 'Visit', homeLabel: 'Home', about: 'Our Story', events: 'Events', courses: 'Courses', contact: 'Contact',
           reserve: 'Reserve', reserveLong: 'Book a Table', openMenu: 'Open menu', main: 'Main navigation', home: 'Aladin Kitchen — home' },

    hero: {
      kicker: 'Persian kitchen, old town Tbilisi · since 2015',
      tagline: 'One thousand and one flavours.',
      sub: 'Charcoal kebab, khoresht simmered since morning, rice with a golden crust — a few steps off Shavteli Street, at the heart of the old town.',
      ctaMenu: 'Explore the menu', ctaReserve: 'Reserve a table',
      fact1: 'Shavteli St. 5', fact2: 'Open daily 11–23', fact3: 'Halal · family-run'
    },

    marquee: ['Saffron', 'Pomegranate', 'Charcoal', 'Dried lime', 'Tahdig', 'Sumac', 'Rose water', 'Pistachio'],

    story: {
      kicker: '01 — The house',
      titleA: 'A table that', titleB: 'never really closes',
      lead: 'Behind the stone façade on Shavteli Street, the same evening has played out for more than ten years: charcoal glowing since noon, pots simmering since dawn, and somewhere past sunset, someone starts to sing.',
      body: 'Our kitchen travelled here from Isfahan and Shiraz, picking up a few things along the way — Levantine sumac, Gulf spice, Georgian bread from the clay oven. One rule survived the journey: nothing is rushed, and no single spice is allowed to shout.',
      stat1: 'Years in Tbilisi', stat2: 'Dishes on the menu', stat3: 'Hours for one Māhiche',
      link: 'Hours & directions', badgeSince: 'Since', badgeCity: 'Tbilisi'
    },

    signature: {
      kicker: '02 — From the kitchen',
      title: 'Three wishes come true',
      sub: 'First time at Aladin Kitchen? These four signature dishes are the beginning of magic. The genie knew it: the first wish is always about flavour.',
      cta: 'See all {n} dishes'
    },

    quote: { text: 'Patience is bitter, but its fruit is sweet.', source: 'Persian proverb' },

    about: {
      hero: {
        kicker: 'About Aladin Kitchen',
        title: 'A kitchen that runs on its own clock',
        lead: 'Since 2015, Shavteli Street 5 has smelled of charcoal and saffron. Here is where that smell comes from — and who keeps it going.'
      },
      story: {
        kicker: '01 — Where it began',
        titleA: 'From Isfahan', titleB: 'to the old town',
        lead: 'The recipes arrived before we did — a grandmother’s khoresht, a father’s hand on the skewer, a family’s instinct for the exact minute the rice is ready. Aladin Kitchen opened its doors in 2015 with a simple plan: cook the way we always have, and let Tbilisi in.',
        body: 'The city gave something back. Georgian bread found its way from the clay oven to our tables; a trace of Levantine sumac slipped into a Persian stew; the unhurried evenings of the old town taught us not to rush the tea. None of it touched the one belief the kitchen holds onto — that a dish needs time above all else.',
        extra: 'Ten years later, the charcoal still glows from midday and the pots still simmer from dawn. The room still fills the same way it always has — family first, then friends, then whoever follows the smell in from the street.',
        stat1: 'Years in Tbilisi', stat2: 'Dishes on the menu', stat3: 'Hours for one Māhiche',
        badgeSince: 'Since', badgeCity: 'Tbilisi'
      },
      values: {
        kicker: '02 — What we hold to',
        title: 'Three rules that don’t bend',
        sub: 'Everything else in the old town changes with the season. These three don’t.',
        v1title: 'Nothing is rushed',
        v1text: 'The khoresht has simmered since morning. The kebab leaves the charcoal when it’s ready — never when the ticket says so.',
        v2title: 'One spice, one moment',
        v2text: 'Saffron, sumac, dried lime, rose water — each gets its own turn. We’d rather one clear voice than a crowd of them.',
        v3title: 'Every table is family',
        v3text: 'However far you’ve travelled to get here, you sit down the way you would at home — and leave with more than you ordered.'
      },
      team: {
        kicker: '03 — Who’s cooking',
        title: 'Three generations, one kitchen',
        sub: 'This has always been a family kitchen. Here’s who keeps it running.',
        r1title: 'The grill', r1text: 'Lit since noon, turned by hand, never left unwatched.',
        r2title: 'The pots', r2text: 'Khoresht and Ghormeh Sabzi, on a flame low enough to forget about — until the smell brings you back.',
        r3title: 'The floor', r3text: 'Whoever seats you tonight has probably already fed half the street.'
      },
      quote: { text: 'The guest is a gift from God.', source: 'Persian proverb — the rule of this house' },
      cta: {
        kicker: 'See it for yourself',
        title: 'Some things you have to taste',
        text: 'We could describe the saffron all day. Come taste it instead — we’ll have a table waiting.',
        ctaReserve: 'Book a table', ctaMenu: 'See the menu'
      }
    },

    /* Inhaltlich noch gegenzuprüfen: FAQ-Texte sind plausible Platzhalter,
       kein endgültiger, freigegebener Text. */
    contact: {
      hero: {
        kicker: 'Contact & reservations',
        title: 'Let’s find you a table',
        lead: 'Questions about the menu, a reservation, or a private event — write to us below, or call the number on the right. Every message gets read.'
      },
      form: {
        sectionKicker: 'Send us a message', sectionTitle: 'We’d love to hear from you',
        sectionSub: 'A date, a party size, or just a question — tell us what’s on your mind. We usually reply within a day.',
        fields: { name: 'Name', email: 'Email', phone: 'Phone', topic: 'What is this about?', message: 'Message' },
        placeholders: { name: 'Your name', email: 'you@example.com', phone: '+995 …', message: 'How can we help?' },
        options: { choose: 'Please choose', enquiry: 'General enquiry', reservation: 'Reservation', other: 'Other' },
        emailSubject: 'New enquiry from the Aladin Kitchen website',
        submit: 'Send',
        success: 'Message received — thank you. We usually reply within a day; for a same-day table, a phone call is faster.',
        error: 'Something went wrong on our end and the message didn’t go through. Please try again, or call us directly — the number is on the right.'
      },
      faq: {
        kicker: 'Before you write', title: 'Good to know',
        items: [
          { q: 'What are your opening hours?', a: 'We are open every day: 11:00–23:00 Monday to Thursday and on Sunday, 11:00–24:00 on Friday and Saturday.' },
          { q: 'Do you take reservations, and for how many people?', a: 'Yes — through this form, by phone or on WhatsApp. For groups larger than eight, a quick call helps us prepare the right table and menu.' },
          { q: 'Is the kitchen halal, and can you handle allergies or diets?', a: 'Yes, our kitchen is halal. Tell us about allergies or dietary needs in your message or when you book, and the kitchen will work around them.' },
          { q: 'Do you offer delivery or takeaway?', a: 'Takeaway is available — call ahead and we’ll have it ready. For delivery within Tbilisi, ask us on the phone about current partners and areas.' },
          { q: 'Where exactly are you, and is there parking?', a: 'Shavteli St. 5, two minutes from Sioni Cathedral in the old town. Street parking nearby is limited — on busy evenings a taxi or a short walk is easiest.' },
          { q: 'Are children welcome?', a: 'Very much — we are a family restaurant. Ask for a high chair when you book and we will have one ready.' }
        ]
      }
    },

    eventsPage: {
      kicker: 'What’s on', title: 'Events at Aladin Kitchen',
      lead: 'A handful of nights each year, our dining room turns into a concert hall — or a circle around the fire. Here’s what’s coming up.',
      sectionKicker: 'On the calendar', sectionTitle: 'Nights worth planning around'
    },

    coursesPage: {
      kicker: 'Notes from the kitchen', title: 'The Courses',
      lead: 'A Persian table takes its time — it arrives one course at a time. Three short stories on what comes first, what comes off the fire, and what closes the evening.',
      sectionKicker: 'The journal', sectionTitle: 'Three courses, three stories', sub: 'Each story ends where a dish begins — on the menu.',
      cta: 'Read more'
    },

    courses: {
      c1tag: 'Starters', c1title: 'What lands on the table first',
      c1text: 'Before the kebab, before the rice, comes a spread of small plates — kashk-e bademjan straight from the pan, fresh herbs, warm bread from the tonoor. This is where a Persian meal learns to slow down.',
      c1meta: 'Chapter 01 · Mezze & small plates',
      c2tag: 'Fish & Seafood', c2title: 'What the fire is really for',
      c2text: 'Sea bass, octopus, prawns from the Gulf — the charcoal decides nothing on its own; the hand tending it does. A citrus marinade, gentle embers, and one last minute over open flame set our fish apart.',
      c2meta: 'Chapter 02 · Catch & charcoal',
      c3tag: 'Sweets & digestifs',
      c3title: 'How the evening winds down',
      c3text: 'Nothing here rushes to a close. Chilled mastic liqueur, warm semolina halva with lemon zest, one more unhurried half hour at the table — the part of the meal no one orders but everyone remembers.',
      c3meta: 'Chapter 03 · Sweet & samovar'
    },

    gallery: {
      kicker: '03 — At the table', title: 'Magic on every plate',
      c1: 'Shandiz-style lamb chops, marinated for 24 hours — wish number one, tender and perfect.',
      c2: 'Black tea from the samovar, pistachio baklava on the side — wish number two, sweet and eternal.',
      c3: 'Aubergine with fermented whey, mint oil and fried onion — wish number three, balanced and bold.',
      c4: 'The entrance, old town Tbilisi — where the magic begins.',
      c5: 'Prawns, squid, and today’s catch — the sea surrenders its treasures.',
      c6: 'Whole dorado over charcoal, stuffed with fresh herbs — a wish beyond wishes.'
    },

    events: {
      kicker: '04 — Experience', title: 'Three gifts from the lamp',
      sub: 'Nowruz celebrates rebirth, Charshanbe Souri summons fire, and Friday nights hold their own magic — live music and shared tables are where wishes are made. Book ahead; these nights fill fast.',
      e1date: '19 March · Nowruz', e1title: 'A live concert for the new year',
      e1text: 'Three musicians, one evening, the whole house singing along — Persian classics live from 8pm, paired with our Nowruz menu.',
      e2date: 'Last Tuesday of the year', e2title: 'Jashn-e Charshanbe Souri',
      e2text: 'The fire festival before Nowruz — Ajil-e Moshkel-Gosha, live music, and a menu that sends the winter off properly.',
      cta: 'Reserve your spot'
    },

    visit: {
      kicker: '05 — Visit us', title: 'Where wishes lead you',
      sub: 'The lamp always knows the way — two minutes from the Metekhi Bridge, hidden in the old town’s heart. Indoor and outdoor seating where strangers become family.',
      address: 'Address', contact: 'Contact', hours: 'Opening hours',
      whatsapp: 'Also on WhatsApp', map: 'Open in maps',
      street: 'Shavteli St. 5', city: '0105 Tbilisi, Georgia',
      row1: 'Mon – Thu', row2: 'Fri – Sat', row3: 'Sunday',
      ctaReserve: 'Book a table', ctaMenu: 'Menu'
    },

    instagram: {
      kicker: '06 — Follow along', title: 'Fresh from the kitchen',
      sub: 'New dishes, evenings, and behind-the-scenes moments — posted as they happen.',
      cta: 'Follow @aladinkitchen.ge'
    },

    footer: {
      tagline: 'Persian restaurant in the old town of Tbilisi. Halal. Open every day.',
      pages: 'Pages', visit: 'Visit', contact: 'Contact',
      hoursLink: 'Opening hours', directions: 'Directions', reservation: 'Reservation',
      gallery: 'Gallery',
      copyright: '© {y} Aladin Kitchen, Tbilisi',
      credit: 'Designed on the “Classical” styleguide'
    },

    menuPage: {
      kicker: 'Aladin Kitchen · Tbilisi', title: 'Menu',
      lead: '{c} chapters, {n} dishes — all cooked to order. The kebab comes straight off the charcoal, the khoresht has simmered since morning. Every dish shown with its own photo from our kitchen.',
      priceNotice: 'Prices are being added right now — call us and we’ll gladly quote you on the spot.',
      catNav: 'Menu categories', searchLabel: 'Search the menu', searchPlaceholder: 'Search for a dish…',
      filterLabel: 'Filter',
      noResultsTitle: 'No dish matches that.', noResultsSub: 'Try a different spelling — or clear your filters.',
      reset: 'Clear filters',
      zoom: 'Enlarge photo of {name}',
      outroKicker: 'Enjoy your meal', outroTitle: 'Nooshe jan',
      outroText: 'Allergies, intolerances, or a request for the table? Just tell us — the kitchen will work around it.',
      ctaReserve: 'Book a table', ctaVisit: 'Directions & hours'
    },

    lightbox: { close: 'Close' }
  },

  /* ══════════════════════════════════════════════════════════ فارسی ══ */
  fa: {
    brandSub: 'رستوران ایرانی',
    langLabel: 'زبان',
    skipToContent: 'رفتن به محتوای اصلی',

    meta: {
      homeTitle: 'Aladin Kitchen — رستوران ایرانی در بافت قدیم تفلیس',
      homeDesc: 'کباب روی زغال، خورشی که از صبح روی شعله است، چلوی زعفرانی و چای از سماور — آشپزی ایرانی در خیابان شاوتلی، از سال ۲۰۱۵.',
      menuTitle: 'منو — رستوران ایرانی Aladin Kitchen، تفلیس',
      menuDesc: 'منوی کامل Aladin Kitchen را ببینید: پیش‌غذا، کباب زغالی، خورش‌های ایرانی، پلو، ماهی و شیرینی — هر غذا با عکس خودش.',
      aboutTitle: 'داستان ما — رستوران ایرانی Aladin Kitchen، تفلیس',
      aboutDesc: 'سه نسل، یک منقل و چند قاعده که هرگز عوض نشد: داستان Aladin Kitchen در بافت قدیم تفلیس، از سال ۲۰۱۵.',
      eventsTitle: 'رویدادها — رستوران ایرانی Aladin Kitchen، تفلیس',
      eventsDesc: 'موسیقی زنده، جشن آتش چهارشنبه‌سوری، و شب‌هایی که سالن ما را به‌کل چیز دیگری می‌کند — ببینید چه در راه است.',
      coursesTitle: 'مراحل سفره — رستوران ایرانی Aladin Kitchen، تفلیس',
      coursesDesc: 'سه یادداشت کوتاه از آشپزخانه درباره اینکه سفره ایرانی چطور باز می‌شود — پیش‌غذا، آتش و پایانی شیرین — و در هر مرحله چه سفارش دهید.',
      contactTitle: 'تماس و رزرو — Aladin Kitchen، تفلیس',
      contactDesc: 'میز رزرو کنید، سوالی بپرسید یا فقط سلام کنید — با تلفن، واتس‌اپ یا فرم زیر به Aladin Kitchen برسید. نشانی، ساعت کار و پاسخ پرسش‌های پرتکرار.'
    },

    nav: { menu: 'منو', restaurant: 'رستوران', experience: 'تجربه', visit: 'نشانی', homeLabel: 'خانه', about: 'داستان ما', events: 'رویدادها', courses: 'مراحل سفره', contact: 'تماس',
           reserve: 'رزرو', reserveLong: 'رزرو میز', openMenu: 'باز کردن منو', main: 'ناوبری اصلی', home: 'Aladin Kitchen — صفحه اصلی' },

    hero: {
      kicker: 'آشپزی ایرانی، بافت قدیم تفلیس · از ۲۰۱۵',
      tagline: 'هزار و یک طعم.',
      sub: 'کباب روی زغال، خورشی که از صبح روی شعله است، برنجی با ته‌دیگ طلایی — چند قدم آن‌طرف‌تر از خیابان شاوتلی، در دل بافت قدیم.',
      ctaMenu: 'دیدن منو', ctaReserve: 'رزرو میز',
      fact1: 'خیابان شاوتلی ۵', fact2: 'هر روز ۱۱ تا ۲۳', fact3: 'حلال · خانوادگی'
    },

    marquee: ['زعفران', 'انار', 'زغال', 'لیمو عمانی', 'ته‌دیگ', 'سماق', 'گلاب', 'پسته'],

    story: {
      kicker: '۰۱ — این خانه',
      titleA: 'سفره‌ای که', titleB: 'واقعاً تمام نمی‌شود',
      lead: 'پشت نمای سنگی خیابان شاوتلی، بیش از ده سال است همان شب تکرار می‌شود: زغال از ظهر گر می‌گیرد، دیگ‌ها از سپیده‌دم روی شعله‌اند، و جایی بعد از غروب کسی شروع به خواندن می‌کند.',
      body: 'آشپزخانه ما از اصفهان و شیراز به این‌جا رسید و در راه چیزهایی با خود آورد: سماق شام، ادویه خلیج، نان گرجی از تنور. یک قاعده از این سفر جان سالم به‌در برد: هیچ‌چیز عجله ندارد و هیچ ادویه‌ای اجازه فریاد زدن ندارد.',
      stat1: 'سال در تفلیس', stat2: 'غذا در منو', stat3: 'ساعت برای یک ماهیچه',
      link: 'ساعت کار و نشانی', badgeSince: 'از سال', badgeCity: 'تفلیس'
    },

    signature: {
      kicker: '۰۲ — از آشپزخانه',
      title: 'سه آرزو به واقعیت می‌پیوندد',
      sub: 'اولین بار است می‌آیید؟ این چهار غذا آغاز جادو است. جن می‌دانست: اولین آرزو همیشه درباره طعم است.',
      cta: 'دیدن همه {n} غذا'
    },

    quote: { text: 'صبر تلخ است، اما میوه‌اش شیرین است.', source: 'ضرب‌المثل ایرانی' },

    about: {
      hero: {
        kicker: 'درباره Aladin Kitchen',
        title: 'آشپزخانه‌ای که ساعت خودش را دارد',
        lead: 'خیابان شاوتلی ۵ از سال ۲۰۱۵ بوی زغال و زعفران می‌دهد. این‌جا می‌گوییم این بو از کجا می‌آید — و چه کسی زنده نگهش می‌دارد.'
      },
      story: {
        kicker: '۰۱ — از کجا شروع شد',
        titleA: 'از اصفهان', titleB: 'تا بافت قدیم',
        lead: 'دستورها پیش از ما رسیدند: خورش مادربزرگ، دست پدر روی سیخ، حس یک خانواده از این‌که برنج دقیقاً کِی آماده است. Aladin Kitchen در سال ۲۰۱۵ با یک نقشه ساده باز شد: همان‌طور بپزیم که همیشه پخته‌ایم، و بگذاریم تفلیس هم وارد شود.',
        body: 'شهر هم چیزی پس داد. نان گرجی از تنور راهش را به سفره‌مان پیدا کرد؛ رد سماق شام در خورشی ایرانی نشست؛ شب‌های آرام بافت قدیم یادمان داد چای را عجله نکنیم. هیچ‌کدام چیزی را که آشپزخانه به آن باور دارد عوض نکرد — این‌که یک غذا از هر چیز دیگری بیشتر به وقت نیاز دارد.',
        extra: 'ده سال بعد، زغال هنوز از ظهر گر می‌گیرد و دیگ‌ها هنوز از سپیده‌دم می‌جوشند. سالن هنوز همان‌طور پر می‌شود که همیشه بوده: اول خانواده، بعد دوستان، بعد هرکسی که از خیابان بوی غذا را دنبال می‌کند.',
        stat1: 'سال در تفلیس', stat2: 'غذا در منو', stat3: 'ساعت برای یک ماهیچه',
        badgeSince: 'از سال', badgeCity: 'تفلیس'
      },
      values: {
        kicker: '۰۲ — به چه پایبندیم',
        title: 'سه قاعده‌ای که خم نمی‌شود',
        sub: 'در بافت قدیم همه‌چیز با فصل عوض می‌شود. این سه تا نه.',
        v1title: 'هیچ‌چیز با عجله نه',
        v1text: 'خورش از صبح روی شعله ملایم است. کباب فقط وقتی از روی زغال برداشته می‌شود که آماده باشد — نه وقتی سفارش عجله دارد.',
        v2title: 'یک ادویه، یک لحظه',
        v2text: 'زعفران، سماق، لیمو عمانی، گلاب — هرکدام نوبت خودش را دارد. ترجیح می‌دهیم یک صدای واضح باشد تا ازدحامی از صداها.',
        v3title: 'هر سفره یعنی خانواده',
        v3text: 'از هر جا آمده باشید، همین‌جا مثل خانه خودتان می‌نشینید — و بیشتر از آنچه سفارش داده‌اید با خود می‌برید.'
      },
      team: {
        kicker: '۰۳ — چه کسی می‌پزد',
        title: 'سه نسل، یک آشپزخانه',
        sub: 'این‌جا همیشه کار خانواده بوده. این‌ها کسانی‌اند که آن را می‌چرخانند.',
        r1title: 'منقل', r1text: 'از ظهر روشن است، با دست چرخانده می‌شود، هرگز بی‌نگاه نمی‌ماند.',
        r2title: 'دیگ‌ها', r2text: 'خورش و قورمه‌سبزی روی شعله‌ای آن‌قدر آرام که فراموشش می‌کنید — تا بویش یادتان بیاورد.',
        r3title: 'سالن', r3text: 'هرکس امشب شما را می‌نشاند، به احتمال زیاد نیمی از خیابان را هم غذا داده.'
      },
      quote: { text: 'مهمان، هدیه خداست.', source: 'ضرب‌المثل ایرانی — قانون این خانه' },
      cta: {
        kicker: 'خودتان ببینید',
        title: 'بعضی چیزها را باید چشید',
        text: 'می‌توانیم تمام روز از زعفران بگوییم. به‌جایش بیایید بچشیدش — یک میز برایتان آماده نگه می‌داریم.',
        ctaReserve: 'رزرو میز', ctaMenu: 'دیدن منو'
      }
    },

    /* Inhaltlich noch gegenzuprüfen: FAQ-Texte sind plausible Platzhalter,
       kein endgültiger, freigegebener Text. */
    contact: {
      hero: {
        kicker: 'تماس و رزرو',
        title: 'بیایید یک میز برایتان پیدا کنیم',
        lead: 'سوال درباره منو، رزرو میز یا یک جشن خصوصی — پایین برایمان بنویسید یا با شماره سمت راست تماس بگیرید. هر پیامی خوانده می‌شود.'
      },
      form: {
        sectionKicker: 'برایمان پیام بفرستید', sectionTitle: 'دوست داریم از شما بشنویم',
        sectionSub: 'یک تاریخ، تعداد نفرات، یا فقط یک سوال — بگویید چه در ذهن دارید. معمولاً ظرف یک روز پاسخ می‌دهیم.',
        fields: { name: 'نام', email: 'ایمیل', phone: 'تلفن', topic: 'موضوع پیام', message: 'پیام' },
        placeholders: { name: 'نام شما', email: 'you@example.com', phone: '+995 …', message: 'چطور می‌توانیم کمک کنیم؟' },
        options: { choose: 'انتخاب کنید', enquiry: 'سوال عمومی', reservation: 'رزرو میز', other: 'موضوع دیگر' },
        emailSubject: 'پیام جدید از سایت Aladin Kitchen',
        submit: 'ارسال',
        success: 'پیام رسید — سپاسگزاریم. معمولاً ظرف یک روز پاسخ می‌دهیم؛ برای میز همان روز، تماس تلفنی سریع‌تر است.',
        error: 'مشکلی پیش آمد و پیام ارسال نشد. دوباره امتحان کنید یا مستقیم با ما تماس بگیرید — شماره کنار صفحه است.'
      },
      faq: {
        kicker: 'پیش از نوشتن', title: 'خوب است بدانید',
        items: [
          { q: 'ساعت کاری‌تان چیست؟', a: 'هر روز باز هستیم: دوشنبه تا پنجشنبه و یکشنبه از ۱۱ تا ۲۳، جمعه و شنبه از ۱۱ تا ۲۴.' },
          { q: 'میز رزرو می‌کنید؟ برای چند نفر؟', a: 'بله — از همین فرم، تلفن یا واتس‌اپ. برای گروه‌های بیش از هشت نفر، یک تماس کوتاه کمک می‌کند میز و منوی درست را آماده کنیم.' },
          { q: 'آشپزخانه حلال است؟ حساسیت غذایی را در نظر می‌گیرید؟', a: 'بله، آشپزخانه ما حلال است. حساسیت یا رژیم غذایی خود را در پیام یا هنگام رزرو بگویید، آشپزخانه هماهنگ می‌شود.' },
          { q: 'ارسال یا بیرون‌بر دارید؟', a: 'بیرون‌بر داریم — از قبل زنگ بزنید تا آماده باشد. برای ارسال در تفلیس تلفنی درباره مناطق و همکاران فعلی بپرسید.' },
          { q: 'دقیقاً کجا هستید؟ پارکینگ دارید؟', a: 'خیابان شاوتلی ۵، دو دقیقه تا کلیسای سیونی در بافت قدیم. پارکینگ خیابانی محدود است؛ شب‌های شلوغ تاکسی یا پیاده‌روی کوتاه راحت‌تر است.' },
          { q: 'همراه بچه می‌شود آمد؟', a: 'با کمال میل — رستورانی خانوادگی هستیم. هنگام رزرو صندلی کودک بخواهید تا آماده باشد.' }
        ]
      }
    },

    eventsPage: {
      kicker: 'چه خبر است', title: 'رویدادهای Aladin Kitchen',
      lead: 'چند شب در سال، سالن ما به چیز دیگری تبدیل می‌شود — سالن کنسرت، یا حلقه‌ای دور آتش. این‌هاست آنچه در راه است.',
      sectionKicker: 'در تقویم', sectionTitle: 'شب‌هایی که ارزش برنامه‌ریزی دارند'
    },

    coursesPage: {
      kicker: 'یادداشت‌های آشپزخانه', title: 'مراحل سفره',
      lead: 'سفره ایرانی وقت می‌گیرد — مرحله به مرحله باز می‌شود. سه یادداشت کوتاه درباره آنچه اول می‌آید، آنچه از آتش برمی‌خیزد، و آنچه شب را می‌بندد.',
      sectionKicker: 'دفتر یادداشت', sectionTitle: 'سه مرحله، سه قصه', sub: 'هر یادداشت همان‌جا تمام می‌شود که غذا در منو شروع می‌شود.',
      cta: 'ادامه مطلب'
    },

    courses: {
      c1tag: 'پیش‌غذا', c1title: 'آنچه اول به سفره می‌رسد',
      c1text: 'پیش از کباب، پیش از برنج، چند بشقاب کوچک راهشان را باز می‌کنند: کشک بادمجان تازه از تابه، سبزی تازه، نان گرم از تنور. این‌جاست که سفره ایرانی یاد می‌گیرد آرام شود.',
      c1meta: 'فصل ۰۱ · مزه و پیش‌غذا',
      c2tag: 'ماهی و غذای دریایی', c2title: 'آتش واقعاً برای چیست',
      c2text: 'ماهی سیباس، اختاپوس، میگوی خلیج — زغال به‌تنهایی چیزی تصمیم نمی‌گیرد؛ دستی که آن را می‌چرخاند تصمیم می‌گیرد. مزه‌دار کردن با مرکبات، جرقه‌ای ملایم، و یک دقیقه آخر روی آتش باز، ماهی ما را جدا می‌کند.',
      c2meta: 'فصل ۰۲ · صید و زغال',
      c3tag: 'شیرینی و هاضم', c3title: 'اینجا شب چطور فرو می‌نشیند',
      c3text: 'هیچ مرحله‌ای این‌جا با عجله تمام نمی‌شود. مصطکی سرد، حلوای گندم گرم با رنده لیمو، نیم‌ساعت آخر بی‌عجله سر میز — بخشی از غذا که کسی سفارش نمی‌دهد اما همه به یاد می‌آورند.',
      c3meta: 'فصل ۰۳ · شیرینی و سماور'
    },

    gallery: {
      kicker: '۰۳ — سر سفره', title: 'جادو روی هر بشقاب',
      c1: 'راسته گوسفند به سبک شاندیز، ۲۴ ساعت مزه‌دار شده — آرزوی اول، نرم و بی‌نقص.',
      c2: 'چای سیاه از سماور، در کنارش باقلوای پسته — آرزوی دوم، شیرین و ابدی.',
      c3: 'بادمجان با کشک، روغن نعنا و پیاز داغ — آرزوی سوم، متوازن و جسور.',
      c4: 'ورودی، بافت قدیم تفلیس — جایی که جادو شروع می‌شود.',
      c5: 'میگو، ماهی مرکب، و صید امروز — دریا گنجینه‌هایش را تسلیم می‌کند.',
      c6: 'دورادوی کامل روی زغال، پر شده با سبزی تازه — آرزویی فراتر از آرزوها.'
    },

    events: {
      kicker: '۰۴ — تجربه', title: 'سه هدیه از چراغ',
      sub: 'نوروز متولد شدن مجدد را جشن می‌گیرد، چهارشنبه‌سوری آتش را می‌خواند، و شب‌های جمعه جادوی خود را دارند — موسیقی زنده و سفره‌های مشترک جایی‌اند که آرزوها شکل می‌گیرند. زودتر رزرو کنید؛ این شب‌ها زود پر می‌شوند.',
      e1date: '۱۹ مارس · نوروز', e1title: 'کنسرت زنده برای سال نو',
      e1text: 'سه نوازنده، یک شب، تمام سالن همراه‌شان می‌خواند — کلاسیک‌های ایرانی از ساعت ۲۰، همراه با منوی نوروزی.',
      e2date: 'آخرین سه‌شنبه سال', e2title: 'جشن چهارشنبه‌سوری',
      e2text: 'جشن آتش پیش از نوروز — آجیل مشکل‌گشا، موسیقی زنده، و منویی که زمستان را درست بدرقه می‌کند.',
      cta: 'رزرو جا'
    },

    visit: {
      kicker: '۰۵ — به ما سر بزنید', title: 'جایی که آرزوها شما را رهنمایی می‌کند',
      sub: 'چراغ همیشه راه را می‌شناسد — دو دقیقه تا پل متخی، پنهان در دل بافت قدیم. داخل و فضای باز جایی‌اند که غریبه‌ها خانواده می‌شوند.',
      address: 'نشانی', contact: 'تماس', hours: 'ساعت کار',
      whatsapp: 'واتس‌اپ هم داریم', map: 'روی نقشه',
      street: 'خیابان شاوتلی ۵', city: '۰۱۰۵ تفلیس، گرجستان',
      row1: 'دوشنبه – پنجشنبه', row2: 'جمعه – شنبه', row3: 'یکشنبه',
      ctaReserve: 'رزرو میز', ctaMenu: 'منو'
    },

    instagram: {
      kicker: '۰۶ — دنبال‌مان کنید', title: 'تازه از آشپزخانه',
      sub: 'غذاهای تازه، شب‌ها، و لحظه‌های پشت صحنه — همان لحظه‌ای که اتفاق می‌افتد.',
      cta: 'دنبال کردن @aladinkitchen.ge'
    },

    footer: {
      tagline: 'رستوران ایرانی در بافت قدیم تفلیس. حلال. هر روز باز.',
      pages: 'صفحه‌ها', visit: 'نشانی', contact: 'تماس',
      hoursLink: 'ساعت کار', directions: 'مسیر', reservation: 'رزرو',
      gallery: 'گالری',
      copyright: '© {y} Aladin Kitchen، تفلیس',
      credit: 'طراحی بر پایه راهنمای سبک «Classical»'
    },

    menuPage: {
      kicker: 'Aladin Kitchen · تفلیس', title: 'منو',
      lead: '{c} فصل، {n} غذا — همه تازه پخته می‌شود. کباب مستقیم از روی زغال می‌آید، خورش از صبح روی شعله بوده. عکس هر غذا از آشپزخانه خودمان است.',
      priceNotice: 'قیمت‌ها در حال تکمیل است — زنگ بزنید تا همان لحظه قیمت را بگوییم.',
      catNav: 'دسته‌های منو', searchLabel: 'جست‌وجو در منو', searchPlaceholder: 'دنبال چه غذایی هستید…',
      filterLabel: 'فیلتر',
      noResultsTitle: 'غذایی با این مشخصات پیدا نشد.', noResultsSub: 'املای دیگری امتحان کنید — یا فیلترها را پاک کنید.',
      reset: 'پاک کردن فیلترها',
      zoom: 'بزرگ کردن عکس {name}',
      outroKicker: 'نوش جان', outroTitle: 'نوش جان',
      outroText: 'حساسیت غذایی، رژیم خاص یا درخواستی دارید؟ بگویید — آشپزخانه هماهنگ می‌کند.',
      ctaReserve: 'رزرو میز', ctaVisit: 'مسیر و ساعت کار'
    },

    lightbox: { close: 'بستن' }
  },

  /* ══════════════════════════════════════════════════════════ РУССКИЙ ══ */
  ru: {
    brandSub: 'Персидский ресторан',
    langLabel: 'Язык',
    skipToContent: 'Перейти к содержанию',

    meta: {
      homeTitle: 'Aladin Kitchen — персидский ресторан в старом Тбилиси',
      homeDesc: 'Кебаб на углях, хорешт, который томится с утра, шафрановый рис и чай из самовара — персидская кухня на Шавтели, с 2015 года.',
      menuTitle: 'Меню — Aladin Kitchen, персидский ресторан в Тбилиси',
      menuDesc: 'Полное меню Aladin Kitchen: закуски, кебаб на углях, персидские рагу, рис, рыба и сладости — каждое блюдо со своей фотографией.',
      aboutTitle: 'Наша история — Aladin Kitchen, персидский ресторан в Тбилиси',
      aboutDesc: 'Три поколения, один мангал и правила, которые не менялись: история Aladin Kitchen в старом Тбилиси, с 2015 года.',
      eventsTitle: 'События — Aladin Kitchen, персидский ресторан в Тбилиси',
      eventsDesc: 'Живая музыка, праздник огня Чаршанбе Сури и вечера, когда наш зал становится совсем другим местом — смотрите, что впереди.',
      coursesTitle: 'Перемены блюд — Aladin Kitchen, персидский ресторан в Тбилиси',
      coursesDesc: 'Три коротких текста из кухни о том, как раскрывается персидский стол — закуски, огонь и сладкий финал — и что заказать на каждом этапе.',
      contactTitle: 'Контакты и бронирование — Aladin Kitchen, Тбилиси',
      contactDesc: 'Забронируйте стол, задайте вопрос или просто напишите — свяжитесь с Aladin Kitchen по телефону, WhatsApp или через форму ниже. Адрес, часы работы и ответы на частые вопросы.'
    },

    nav: { menu: 'Меню', restaurant: 'Ресторан', experience: 'Атмосфера', visit: 'Как найти', homeLabel: 'Главная', about: 'Наша история', events: 'События', courses: 'Перемены блюд', contact: 'Контакты',
           reserve: 'Бронь', reserveLong: 'Забронировать стол', openMenu: 'Открыть меню', main: 'Основная навигация', home: 'Aladin Kitchen — главная' },

    hero: {
      kicker: 'Персидская кухня, старый Тбилиси · с 2015 года',
      tagline: 'Тысяча и один вкус.',
      sub: 'Кебаб на углях, хорешт, томлёный с утра, рис с золотой корочкой — в двух шагах от улицы Шавтели, в самом сердце старого города.',
      ctaMenu: 'Смотреть меню', ctaReserve: 'Забронировать стол',
      fact1: 'Шавтели 5', fact2: 'Ежедневно 11–23', fact3: 'Халяль · семейное дело'
    },

    marquee: ['Шафран', 'Гранат', 'Угли', 'Сушёный лайм', 'Тахдиг', 'Сумах', 'Розовая вода', 'Фисташка'],

    story: {
      kicker: '01 — Дом',
      titleA: 'Вечер, который', titleB: 'на самом деле не заканчивается',
      lead: 'За старым каменным фасадом на Шавтели уже больше десяти лет повторяется один и тот же вечер: угли разгораются с полудня, казаны кипят с рассвета, а где-то после заката кто-то начинает петь.',
      body: 'Наша кухня добралась сюда из Исфахана и Шираза, прихватив по пути кое-что ещё: сумах Леванта, специи Залива, грузинский хлеб из тонэ. Одно правило пережило этот путь — ничего не спешит, и ни одна специя не имеет права кричать.',
      stat1: 'Лет в Тбилиси', stat2: 'Блюд в меню', stat3: 'Часа на одно махиче',
      link: 'Часы работы и адрес', badgeSince: 'С', badgeCity: 'Тбилиси'
    },

    signature: {
      kicker: '02 — С кухни',
      title: 'Три желания сбываются',
      sub: 'Впервые у нас? Эти четыре блюда — начало волшебства. Джинн знал: первое желание всегда о вкусе.',
      cta: 'Смотреть все {n} блюд'
    },

    quote: { text: 'Терпение горько, но плод его сладок.', source: 'Персидская пословица' },

    about: {
      hero: {
        kicker: 'О ресторане Aladin Kitchen',
        title: 'Кухня, которая живёт по своим часам',
        lead: 'С 2015 года Шавтели 5 пахнет углями и шафраном. Здесь мы рассказываем, откуда этот запах — и кто его поддерживает.'
      },
      story: {
        kicker: '01 — С чего всё началось',
        titleA: 'Из Исфахана', titleB: 'в старый город',
        lead: 'Рецепты приехали раньше нас: хорешт бабушки, рука отца на шампуре, семейное чутьё на тот самый момент, когда рис готов. Aladin Kitchen открылся в 2015 году с простым планом — готовить так, как готовили всегда, и впустить в это Тбилиси.',
        body: 'Город тоже кое-что дал взамен. Грузинский хлеб из тонэ добрался до нашего стола; левантийский сумах нашёл дорогу в персидское рагу; неспешные вечера старого города научили нас не торопить чай. Ничего из этого не поколебало главного убеждения кухни — блюду нужно время больше, чем что-либо ещё.',
        extra: 'Спустя десять лет угли всё так же разгораются в полдень, а казаны кипят с рассвета. Зал наполняется как и всегда: сначала семья, потом друзья, потом все, кто идёт по улице и не может пройти мимо запаха.',
        stat1: 'Лет в Тбилиси', stat2: 'Блюд в меню', stat3: 'Часа на одно махиче',
        badgeSince: 'С', badgeCity: 'Тбилиси'
      },
      values: {
        kicker: '02 — Чему мы верны',
        title: 'Три правила, которые не гнутся',
        sub: 'В старом городе всё меняется от сезона к сезону. Эти три — нет.',
        v1title: 'Никакой спешки',
        v1text: 'Хорешт томится с самого утра. Кебаб снимают с углей только тогда, когда он готов — а не когда торопит заказ.',
        v2title: 'Одна специя — один момент',
        v2text: 'Шафран, сумах, сушёный лайм, розовая вода — у каждой свой черёд. Нам важнее один ясный голос, чем хор.',
        v3title: 'За каждым столом — семья',
        v3text: 'Откуда бы вы ни приехали, здесь вы садитесь как дома — и уходите с бо́льшим, чем заказали.'
      },
      team: {
        kicker: '03 — Кто готовит',
        title: 'Три поколения, одна кухня',
        sub: 'Кухня здесь всегда была семейным делом. Вот кто её держит.',
        r1title: 'Мангал', r1text: 'Разожжён с полудня, переворачивается вручную, никогда не остаётся без присмотра.',
        r2title: 'Казаны', r2text: 'Хорешт и горме сабзи на огне настолько тихом, что о нём забываешь — пока не напомнит запах.',
        r3title: 'Зал', r3text: 'Тот, кто усадит вас сегодня, скорее всего, уже накормил полулицы.'
      },
      quote: { text: 'Гость — это дар от Бога.', source: 'Персидская пословица — правило этого дома' },
      cta: {
        kicker: 'Убедитесь сами',
        title: 'Некоторые вещи нужно пробовать',
        text: 'О шафране можно говорить весь день. Лучше приходите и попробуйте сами — стол для вас уже готов.',
        ctaReserve: 'Забронировать стол', ctaMenu: 'Смотреть меню'
      }
    },

    /* Inhaltlich noch gegenzuprüfen: FAQ-Texte sind plausible Platzhalter,
       kein endgültiger, freigegebener Text. */
    contact: {
      hero: {
        kicker: 'Контакты и бронирование',
        title: 'Найдём для вас стол',
        lead: 'Вопрос о меню, бронь стола или частное торжество — напишите ниже или позвоните по номеру справа. Мы читаем каждое сообщение.'
      },
      form: {
        sectionKicker: 'Напишите нам', sectionTitle: 'Будем рады вашему сообщению',
        sectionSub: 'Дата, число гостей или просто вопрос — расскажите, что у вас на уме. Обычно отвечаем в течение дня.',
        fields: { name: 'Имя', email: 'Email', phone: 'Телефон', topic: 'Тема сообщения', message: 'Сообщение' },
        placeholders: { name: 'Ваше имя', email: 'you@example.com', phone: '+995 …', message: 'Чем можем помочь?' },
        options: { choose: 'Выберите тему', enquiry: 'Общий вопрос', reservation: 'Бронирование', other: 'Другое' },
        emailSubject: 'Новая заявка с сайта Aladin Kitchen',
        submit: 'Отправить',
        success: 'Сообщение получено — спасибо. Обычно отвечаем в течение дня; для брони на сегодня быстрее позвонить.',
        error: 'Что-то пошло не так, и сообщение не отправилось. Попробуйте ещё раз или позвоните нам напрямую — номер справа.'
      },
      faq: {
        kicker: 'Прежде чем написать', title: 'Полезно знать',
        items: [
          { q: 'Какие у вас часы работы?', a: 'Открыты каждый день: с понедельника по четверг и в воскресенье с 11:00 до 23:00, в пятницу и субботу — с 11:00 до 24:00.' },
          { q: 'Бронируете столы? На сколько человек?', a: 'Да — через эту форму, по телефону или в WhatsApp. Для групп больше восьми человек лучше коротко позвонить: так проще подобрать стол и меню.' },
          { q: 'Кухня халяльная? Учитываете аллергии?', a: 'Да, наша кухня халяльная. Напишите об аллергии или диете в сообщении или при бронировании — кухня подстроится.' },
          { q: 'Есть доставка или еда на вынос?', a: 'На вынос — да, позвоните заранее, и всё будет готово к вашему приходу. По доставке в Тбилиси уточните по телефону текущих партнёров и районы.' },
          { q: 'Где вы находитесь и есть ли парковка?', a: 'Улица Шавтели 5, две минуты от собора Сиони в старом городе. Парковка на улице ограничена — в оживлённые вечера проще взять такси или пройтись пешком.' },
          { q: 'Можно с детьми?', a: 'Конечно — мы семейный ресторан. Попросите детский стул при бронировании, и мы его подготовим.' }
        ]
      }
    },

    eventsPage: {
      kicker: 'Что у нас', title: 'События в Aladin Kitchen',
      lead: 'В несколько вечеров в году наш зал становится совсем другим местом — концертным залом или кругом у огня. Вот что уже готовится.',
      sectionKicker: 'В календаре', sectionTitle: 'Вечера, которые стоит запланировать'
    },

    coursesPage: {
      kicker: 'Заметки из кухни', title: 'Перемены блюд',
      lead: 'Персидский стол не спешит — он раскрывается постепенно. Три коротких текста о том, что подают первым, что снимают с огня, и чем заканчивается вечер.',
      sectionKicker: 'Из дневника', sectionTitle: 'Три перемены, три истории', sub: 'Каждый текст заканчивается там, где начинается блюдо — в меню.',
      cta: 'Читать дальше'
    },

    courses: {
      c1tag: 'Закуски', c1title: 'Что приходит на стол первым',
      c1text: 'До кебаба, до риса на стол попадает несколько маленьких тарелок: кашк-е бадемджан прямо со сковороды, свежая зелень, тёплый хлеб из тонэ. Именно здесь персидский стол учится не спешить.',
      c1meta: 'Глава 01 · Мезе и закуски',
      c2tag: 'Рыба и морепродукты', c2title: 'Для чего на самом деле нужен огонь',
      c2text: 'Морской окунь, осьминог, креветки из Залива — угли сами по себе ничего не решают, решает рука, которая ими управляет. Цитрусовый маринад, мягкий жар и последняя минута над открытым огнём отличают нашу рыбу.',
      c2meta: 'Глава 02 · С улова и с углей',
      c3tag: 'Десерт и дижестив', c3title: 'Как здесь затихает вечер',
      c3text: 'Ни одна перемена здесь не спешит закончиться. Холодный мастичный ликёр, тёплая халва из манки с цедрой лимона, ещё полчаса за столом без спешки — часть трапезы, которую никто не заказывает, но все запоминают.',
      c3meta: 'Глава 03 · Сладкое и самовар'
    },

    gallery: {
      kicker: '03 — За столом', title: 'Волшебство на каждой тарелке',
      c1: 'Бараньи котлеты по-шандизски, сутки в маринаде — первое желание, нежное и совершенное.',
      c2: 'Чёрный чай из самовара, рядом — пахлава с фисташкой — второе желание, сладкое и вечное.',
      c3: 'Баклажан с кашком, мятным маслом и жареным луком — третье желание, сбалансированное и смелое.',
      c4: 'Вход в старом городе Тбилиси — там, где начинается волшебство.',
      c5: 'Креветки, кальмар и улов дня — море отдаёт свои сокровища.',
      c6: 'Целая дорадо на углях, фаршированная свежей зеленью — желание, которое превосходит все желания.'
    },

    events: {
      kicker: '04 — Атмосфера', title: 'Три дара из лампы',
      sub: 'Навруз празднует возрождение, Чаршанбе Сури зовёт огонь, а обычная пятница хранит своё волшебство — живая музыка и общий стол там, где загадывают желания. Бронируйте заранее — такие вечера заполняются быстро.',
      e1date: '19 марта · Навруз', e1title: 'Живой концерт на Новый год',
      e1text: 'Три музыканта, один вечер, весь зал подпевает — персидская классика вживую с 20:00, вместе с новрузским меню.',
      e2date: 'Последний вторник года', e2title: 'Джашн-е Чаршанбе Сури',
      e2text: 'Праздник огня перед Наврузом — аджиль-е мошкель-гоша, живая музыка и меню, которое как следует провожает зиму.',
      cta: 'Забронировать место'
    },

    visit: {
      kicker: '05 — Приходите', title: 'Туда, куда ведут желания',
      sub: 'Лампа всегда знает дорогу — две минуты от Метехского моста, спрятано в сердце старого города. Внутри и на воздухе — там, где незнакомцы становятся семьёй.',
      address: 'Адрес', contact: 'Контакты', hours: 'Часы работы',
      whatsapp: 'Также в WhatsApp', map: 'Открыть на карте',
      street: 'ул. Шавтели 5', city: '0105 Тбилиси, Грузия',
      row1: 'Пн – Чт', row2: 'Пт – Сб', row3: 'Воскресенье',
      ctaReserve: 'Забронировать стол', ctaMenu: 'Меню'
    },

    instagram: {
      kicker: '06 — Подписывайтесь', title: 'Свежее прямо с кухни',
      sub: 'Новые блюда, вечера и закулисные моменты — как только это происходит.',
      cta: 'Подписаться @aladinkitchen.ge'
    },

    footer: {
      tagline: 'Персидский ресторан в старом Тбилиси. Халяль. Открыто каждый день.',
      pages: 'Страницы', visit: 'Как найти', contact: 'Контакты',
      hoursLink: 'Часы работы', directions: 'Как добраться', reservation: 'Бронирование',
      gallery: 'Галерея',
      copyright: '© {y} Aladin Kitchen, Тбилиси',
      credit: 'Оформление по стайлгайду «Classical»'
    },

    menuPage: {
      kicker: 'Aladin Kitchen · Тбилиси', title: 'Меню',
      lead: '{c} раздела, {n} блюд — всё готовится под заказ. Кебаб идёт прямо с углей, хорешт томится с самого утра. К каждому блюду — фотография с нашей кухни.',
      priceNotice: 'Цены сейчас добавляются — позвоните, и мы с радостью назовём их сразу.',
      catNav: 'Разделы меню', searchLabel: 'Поиск по меню', searchPlaceholder: 'Что вы ищете…',
      filterLabel: 'Фильтр',
      noResultsTitle: 'Ничего не найдено.', noResultsSub: 'Попробуйте другое написание — или сбросьте фильтры.',
      reset: 'Сбросить фильтры',
      zoom: 'Увеличить фото: {name}',
      outroKicker: 'Приятного аппетита', outroTitle: 'Нуше джан',
      outroText: 'Аллергия, непереносимость или пожелание к столу? Просто скажите — кухня подстроится.',
      ctaReserve: 'Забронировать стол', ctaVisit: 'Как добраться и часы'
    },

    lightbox: { close: 'Закрыть' }
  },

  /* ═════════════════════════════════════════════════════════ ქართული ══ */
  ka: {
    brandSub: 'სპარსული რესტორანი',
    langLabel: 'ენა',
    skipToContent: 'გადასვლა შიგთავსზე',

    meta: {
      homeTitle: 'Aladin Kitchen — სპარსული რესტორანი თბილისის ძველ ქალაქში',
      homeDesc: 'ნახშირზე შემწვარი ქაბაბი, დილიდან ცეცხლზე მდგარი ხორეშთი, ზაფრანიანი ბრინჯი და ჩაი სამოვრიდან — სპარსული სამზარეულო შავთელის ქუჩაზე, 2015 წლიდან.',
      menuTitle: 'მენიუ — Aladin Kitchen, სპარსული რესტორანი თბილისში',
      menuDesc: 'გაეცანით Aladin Kitchen-ის სრულ მენიუს: წასახემსებელი, ნახშირზე შემწვარი ქაბაბი, სპარსული ხორეშთი, ბრინჯის კერძები, თევზი და ტკბილეული — ყოველი კერძი საკუთარი ფოტოთი.',
      aboutTitle: 'ჩვენი ისტორია — Aladin Kitchen, სპარსული რესტორანი თბილისში',
      aboutDesc: 'სამი თაობა, ერთი მაყალი და წესები, რომლებიც არასდროს შეცვლილა: Aladin Kitchen-ის ისტორია თბილისის ძველ ქალაქში, 2015 წლიდან.',
      eventsTitle: 'ღონისძიებები — Aladin Kitchen, სპარსული რესტორანი თბილისში',
      eventsDesc: 'ცოცხალი მუსიკა, ცეცხლის დღესასწაული ჩარშანბე სური და საღამოები, როცა ჩვენი დარბაზი სულ სხვა ადგილად იქცევა — ნახეთ, რა გველოდება.',
      coursesTitle: 'სუფრის ეტაპები — Aladin Kitchen, სპარსული რესტორანი თბილისში',
      coursesDesc: 'სამი მოკლე ჩანაწერი სამზარეულოდან იმაზე, როგორ იშლება სპარსული სუფრა — წასახემსებელი, ცეცხლი და ტკბილი დასასრული — და რა შევუკვეთოთ ყოველ ეტაპზე.',
      contactTitle: 'კონტაქტი და დაჯავშნა — Aladin Kitchen, თბილისი',
      contactDesc: 'დაჯავშნეთ მაგიდა, დასვით შეკითხვა ან უბრალოდ მოგვესალმეთ — დაგვიკავშირდით ტელეფონით, WhatsApp-ით ან ქვემოთა ფორმით. მისამართი, სამუშაო საათები და პასუხები ხშირ კითხვებზე.'
    },

    nav: { menu: 'მენიუ', restaurant: 'რესტორანი', experience: 'ატმოსფერო', visit: 'მისამართი', homeLabel: 'მთავარი', about: 'ჩვენი ისტორია', events: 'ღონისძიებები', courses: 'სუფრის ეტაპები', contact: 'კონტაქტი',
           reserve: 'დაჯავშნა', reserveLong: 'მაგიდის დაჯავშნა', openMenu: 'მენიუს გახსნა', main: 'მთავარი ნავიგაცია', home: 'Aladin Kitchen — მთავარი' },

    hero: {
      kicker: 'სპარსული სამზარეულო, ძველი თბილისი · 2015 წლიდან',
      tagline: 'ათას ერთი გემო.',
      sub: 'ნახშირზე შემწვარი ქაბაბი, დილიდან ცეცხლზე მდგარი ხორეშთი, ბრინჯი ოქროსფერი ქერქით — შავთელის ქუჩიდან ორიოდე ნაბიჯზე, ძველი ქალაქის გულში.',
      ctaMenu: 'მენიუს ნახვა', ctaReserve: 'მაგიდის დაჯავშნა',
      fact1: 'შავთელის ქუჩა 5', fact2: 'ყოველდღე 11–23', fact3: 'ჰალალი · ოჯახური'
    },

    marquee: ['ზაფრანა', 'ბროწეული', 'ნახშირი', 'ხმელი ლაიმი', 'თახდიგი', 'სუმახი', 'ვარდის წყალი', 'ფისტა'],

    story: {
      kicker: '01 — სახლი',
      titleA: 'საღამო, რომელიც', titleB: 'სინამდვილეში არასდროს სრულდება',
      lead: 'შავთელის ქუჩის ძველი ქვის ფასადის მიღმა ათ წელზე მეტია ერთი და იგივე საღამო მეორდება: ნახშირი შუადღიდან იწვის, ქვაბები გამთენიისას იწყებს დუღილს, და მზის ჩასვლის შემდეგ ვიღაც სიმღერას იწყებს.',
      body: 'ჩვენი სამზარეულო ისპაჰანიდან და შირაზიდან მოვიდა და გზად კიდევ რაღაცეები აიღო: ლევანტის სუმახი, ყურის სანელებლები, თონის ქართული პური. ერთი წესი გადარჩა ამ გზას — არაფერს არ ეჩქარება და არცერთ სანელებელს არა აქვს ხმის აწევის უფლება.',
      stat1: 'წელი თბილისში', stat2: 'კერძი მენიუში', stat3: 'საათი ერთი მაჰიჩესთვის',
      link: 'სამუშაო საათები და მისამართი', badgeSince: 'დან', badgeCity: 'თბილისი'
    },

    signature: {
      kicker: '02 — სამზარეულოდან',
      title: 'სამი სურვილი ახდება',
      sub: 'პირველად ხართ ჩვენთან? ეს ოთხი კერძი ჯადოს დასაწყისია. ჯინმა იცოდა: პირველი სურვილი ყოველთვის გემოზეა.',
      cta: 'ყველა {n} კერძის ნახვა'
    },

    quote: { text: 'მოთმინება მწარეა, მაგრამ მისი ნაყოფი ტკბილია.', source: 'სპარსული ანდაზა' },

    about: {
      hero: {
        kicker: 'Aladin Kitchen-ის შესახებ',
        title: 'სამზარეულო, რომელსაც თავისი საათი აქვს',
        lead: 'შავთელის ქუჩა 5-ს 2015 წლიდან ნახშირისა და ზაფრანის სუნი დაჰყვება. აქ გიამბობთ, საიდან მოდის ეს სუნი — და ვინ ინახავს მას.'
      },
      story: {
        kicker: '01 — საიდან დაიწყო',
        titleA: 'ისპაჰანიდან', titleB: 'ძველ ქალაქამდე',
        lead: 'რეცეპტები ჩვენზე ადრე ჩამოვიდა: ბებიის ხორეშთი, მამის ხელი შამფურზე, ოჯახის შეგრძნება, როდის არის ბრინჯი ზუსტად მზად. Aladin Kitchen 2015 წელს გაიხსნა მარტივი გეგმით — ისე მოვამზადოთ, როგორც ყოველთვის ვამზადებდით, და თბილისი შემოვუშვათ.',
        body: 'ქალაქმაც რაღაც დაგვიბრუნა. ქართული პური თონედან ჩვენს მაგიდამდე მივიდა; ლევანტის სუმახმა სპარსულ ხორეშთში გზა გაიკვლია; ძველი ქალაქის ნელი საღამოები გვასწავლიდა, ჩაი არ ავჩქაროთ. ამან ვერაფერი შეარყია სამზარეულოს ერთადერთ რწმენაში — რომ კერძს ყველაფერზე მეტად დრო სჭირდება.',
        extra: 'ათი წლის შემდეგ ნახშირი დღემდე შუადღიდან იწვის და ქვაბები გამთენიისას დუღს. დარბაზი ისევე ივსება, როგორც ყოველთვის — ჯერ ოჯახი, მერე მეგობრები, მერე ყველა, ვინც ქუჩაზე სუნს გაჰყვება.',
        stat1: 'წელი თბილისში', stat2: 'კერძი მენიუში', stat3: 'საათი ერთი მაჰიჩესთვის',
        badgeSince: 'დან', badgeCity: 'თბილისი'
      },
      values: {
        kicker: '02 — რასაც ვერთგულებთ',
        title: 'სამი წესი, რომელიც არ იხრება',
        sub: 'ძველ ქალაქში ყველაფერი სეზონთან ერთად იცვლება. ეს სამი — არა.',
        v1title: 'არაფერი აჩქარებით',
        v1text: 'ხორეშთი დილიდან ნელ ცეცხლზეა. ქაბაბს ნახშირიდან მხოლოდ მაშინ იღებენ, როცა მზადაა — და არა მაშინ, როცა შეკვეთა ჩქარობს.',
        v2title: 'ერთი სანელებელი, ერთი მომენტი',
        v2text: 'ზაფრანა, სუმახი, ხმელი ლაიმი, ვარდის წყალი — თითოეულს თავისი დრო აქვს. გვირჩევნია ერთი გარკვევადი ხმა, ვიდრე ხმაური.',
        v3title: 'ყოველი მაგიდა — ოჯახია',
        v3text: 'საიდანაც არ უნდა ჩამოხვიდეთ, აქ ისე ჯდებით, როგორც სახლში — და მეტს წაიღებთ, ვიდრე შეუკვეთეთ.'
      },
      team: {
        kicker: '03 — ვინ გიმზადებთ',
        title: 'სამი თაობა, ერთი სამზარეულო',
        sub: 'სამზარეულო აქ ყოველთვის ოჯახის საქმე იყო. აი, ვინც მას აბრუნებს.',
        r1title: 'მაყალი', r1text: 'შუადღიდან დანთებული, ხელით ბრუნავს, არასდროს რჩება ყურადღების გარეშე.',
        r2title: 'ქვაბები', r2text: 'ხორეშთი და ღორმე საბზი ისეთ ნელ ცეცხლზეა, რომ ივიწყებ — სანამ სუნი არ შეგახსენებს.',
        r3title: 'დარბაზი', r3text: 'ვინც დღეს დაგსვამთ, დიდი ალბათობით ქუჩის ნახევარიც უკვე აჭამა.'
      },
      quote: { text: 'სტუმარი ღვთის საჩუქარია.', source: 'სპარსული ანდაზა — ამ სახლის წესი' },
      cta: {
        kicker: 'თავად დარწმუნდით',
        title: 'ზოგი რამ უნდა გასინჯო',
        text: 'ზაფრანზე მთელი დღე შეგვიძლია ვისაუბროთ. სჯობს მოხვიდეთ და თავად გასინჯოთ — მაგიდა უკვე თქვენთვის ემზადება.',
        ctaReserve: 'მაგიდის დაჯავშნა', ctaMenu: 'მენიუს ნახვა'
      }
    },

    /* Inhaltlich noch gegenzuprüfen: FAQ-Texte sind plausible Platzhalter,
       kein endgültiger, freigegebener Text. */
    contact: {
      hero: {
        kicker: 'კონტაქტი და დაჯავშნა',
        title: 'მოვძებნოთ თქვენთვის მაგიდა',
        lead: 'შეკითხვა მენიუზე, მაგიდის დაჯავშნა თუ კერძო ღონისძიება — მოგვწერეთ ქვემოთ ან დარეკეთ მარჯვნივ მითითებულ ნომერზე. ყველა შეტყობინებას ვკითხულობთ.'
      },
      form: {
        sectionKicker: 'მოგვწერეთ', sectionTitle: 'სიამოვნებით მოვისმენთ',
        sectionSub: 'თარიღი, სტუმრების რაოდენობა თუ უბრალოდ შეკითხვა — გვითხარით, რა გაინტერესებთ. ჩვეულებრივ ერთი დღის განმავლობაში ვპასუხობთ.',
        fields: { name: 'სახელი', email: 'ელფოსტა', phone: 'ტელეფონი', topic: 'თემა', message: 'შეტყობინება' },
        placeholders: { name: 'თქვენი სახელი', email: 'you@example.com', phone: '+995 …', message: 'რით შეგვიძლია დაგეხმაროთ?' },
        options: { choose: 'აირჩიეთ თემა', enquiry: 'ზოგადი შეკითხვა', reservation: 'დაჯავშნა', other: 'სხვა' },
        emailSubject: 'ახალი მოთხოვნა Aladin Kitchen-ის საიტიდან',
        submit: 'გაგზავნა',
        success: 'შეტყობინება მიღებულია — გმადლობთ. ჩვეულებრივ ერთი დღის განმავლობაში ვპასუხობთ; დღევანდელი დაჯავშნისთვის დარეკვა უფრო სწრაფია.',
        error: 'რაღაც ვერ გამოვიდა და შეტყობინება ვერ გაიგზავნა. სცადეთ ხელახლა ან პირდაპირ დაგვირეკეთ.'
      },
      faq: {
        kicker: 'სანამ მოგვწერთ', title: 'კარგი იქნება, თუ იცით',
        items: [
          { q: 'რა სამუშაო საათები გაქვთ?', a: 'ღიები ვართ ყოველდღე: ორშაბათიდან ხუთშაბათამდე და კვირას 11:00-დან 23:00-მდე, პარასკევ-შაბათს — 11:00-დან 24:00-მდე.' },
          { q: 'ჯავშნავთ მაგიდას? რამდენი კაცისთვის?', a: 'დიახ — ამ ფორმით, ტელეფონით ან WhatsApp-ით. რვაზე მეტი კაცის ჯგუფისთვის სჯობს მოკლედ დაგვირეკოთ — ასე უფრო ადვილია შესაფერისი მაგიდისა და მენიუს მომზადება.' },
          { q: 'სამზარეულო ჰალალია? ალერგიებს ითვალისწინებთ?', a: 'დიახ, ჩვენი სამზარეულო ჰალალია. მოგვწერეთ ალერგიის ან დიეტის შესახებ შეტყობინებაში ან დაჯავშნისას — სამზარეულო მოერგება.' },
          { q: 'გაქვთ მიტანა ან თან წაღება?', a: 'თან წაღება შესაძლებელია — დაგვირეკეთ წინასწარ და მზად გექნებათ. თბილისში მიტანასთან დაკავშირებით ტელეფონით გვკითხეთ მიმდინარე პარტნიორებისა და უბნების შესახებ.' },
          { q: 'ზუსტად სად მდებარეობთ და არის პარკინგი?', a: 'შავთელის ქუჩა 5, ორი წუთი სიონის საკათედრო ტაძრიდან, ძველ ქალაქში. ქუჩის პარკინგი შეზღუდულია — დატვირთულ საღამოებში უფრო მარტივია ტაქსი ან მოკლე გასეირნება.' },
          { q: 'ბავშვებთან ერთად შეიძლება მოსვლა?', a: 'რა თქმა უნდა — ოჯახური რესტორანი ვართ. დაჯავშნისას მოითხოვეთ საბავშვო სკამი და მოგამზადებთ.' }
        ]
      }
    },

    eventsPage: {
      kicker: 'რა ხდება', title: 'ღონისძიებები Aladin Kitchen-ში',
      lead: 'წელიწადში რამდენიმე საღამო ჩვენი დარბაზი სულ სხვა ადგილად იქცევა — საკონცერტო დარბაზად ან ცეცხლის წრედ. აი, რა ემზადება.',
      sectionKicker: 'კალენდარში', sectionTitle: 'საღამოები, რომლებიც დაგეგმვას იმსახურებს'
    },

    coursesPage: {
      kicker: 'ჩანაწერები სამზარეულოდან', title: 'სუფრის ეტაპები',
      lead: 'სპარსული სუფრა დროს არ ზოგავს — ეტაპობრივად იშლება. სამი მოკლე ისტორია იმაზე, რა მოდის პირველი, რა მოდის ცეცხლიდან, და რით სრულდება საღამო.',
      sectionKicker: 'დღიურიდან', sectionTitle: 'სამი ეტაპი, სამი ამბავი', sub: 'ყოველი ჩანაწერი იქ სრულდება, სადაც კერძი მენიუში იწყება.',
      cta: 'გაგრძელების წაკითხვა'
    },

    courses: {
      c1tag: 'წასახემსებელი', c1title: 'რა მოდის სუფრაზე პირველი',
      c1text: 'ქაბაბამდე, ბრინჯამდე სუფრაზე რამდენიმე პატარა თეფში ჩნდება: ქაშქე ბადემჯანი პირდაპირ ტაფიდან, ახალი მწვანილი, თბილი პური თონედან. სწორედ აქ სწავლობს სპარსული სუფრა შენელებას.',
      c1meta: 'თავი 01 · მეზე და წასახემსებელი',
      c2tag: 'თევზი და ზღვის პროდუქტები', c2title: 'რისთვის არის სინამდვილეში ცეცხლი',
      c2text: 'ზღვის ბასი, რვაფეხა, ყურის კრევეტები — ნახშირი მარტო არაფერს წყვეტს, წყვეტს ხელი, რომელიც მას მართავს. ციტრუსული მარინადი, ნაზი ალი და ბოლო წუთი ღია ცეცხლზე გამოარჩევს ჩვენს თევზს.',
      c2meta: 'თავი 02 · დაჭერიდან ნახშირამდე',
      c3tag: 'დესერტი და დიჯესტივი', c3title: 'როგორ ცხრება აქ საღამო',
      c3text: 'არცერთი ეტაპი აქ არ ჩქარობს დასრულებას. ცივი მასტიკის ლიქიორი, თბილი ხორბლის ფქვილის ჰალვა ლიმონის ქერქით, კიდევ ნახევარი საათი მაგიდასთან უსწრაფოდ — სუფრის ის ნაწილი, რომელსაც არავინ უკვეთავს, მაგრამ ყველა ახსოვს.',
      c3meta: 'თავი 03 · ტკბილი და სამოვარი'
    },

    gallery: {
      kicker: '03 — სუფრასთან', title: 'ჯადო ყოველ თეფშზე',
      c1: 'ცხვრის ნეკნები შანდიზულად, 24 საათი მარინადში — პირველი სურვილი, ნაზი და სრულყოფილი.',
      c2: 'შავი ჩაი სამოვრიდან, გვერდით ფახლავა ფისტით — მეორე სურვილი, ტკბილი და მარადიული.',
      c3: 'ბადრიჯანი შრატით, პიტნის ზეთითა და შემწვარი ხახვით — მესამე სურვილი, გაწონასწორებული და თამამი.',
      c4: 'შესასვლელი თბილისის ძველ ქალაქში — სადაც ჯადო იწყება.',
      c5: 'კრევეტები, კალმარი და დღის დაჭერა — ზღვა თავის საგანძურს გვთავაზობს.',
      c6: 'მთლიანი დორადო ნახშირზე, ახალი მწვანილით შიგთავსით — სურვილი, რომელიც სურვილებს სცდება.'
    },

    events: {
      kicker: '04 — ატმოსფერო', title: 'სამი საჩუქარი ლამპიდან',
      sub: 'ნოვრუზი აღორძინებას ზეიმობს, ჩარშანბე სური ცეცხლს იხმობს, ჩვეულებრივ პარასკევსაც კი თავისი ჯადო აქვს — ცოცხალი მუსიკა და საერთო სუფრა, სადაც სურვილები იბადება. ადრე დაჯავშნეთ — ასეთი საღამოები სწრაფად ივსება.',
      e1date: '19 მარტი · ნოვრუზი', e1title: 'ცოცხალი კონცერტი ახალი წლისთვის',
      e1text: 'სამი მუსიკოსი, ერთი საღამო, მთელი დარბაზი აჰყვება სიმღერას — სპარსული კლასიკა ცოცხლად 20:00-დან, ნოვრუზის მენიუსთან ერთად.',
      e2date: 'წლის ბოლო სამშაბათი', e2title: 'ჯაშნ-ე ჩარშანბე სური',
      e2text: 'ცეცხლის დღესასწაული ნოვრუზამდე — აჯილ-ე მოშქელ-გოშა, ცოცხალი მუსიკა და მენიუ, რომელიც ზამთარს სათანადოდ აცილებს.',
      cta: 'ადგილის დაჯავშნა'
    },

    visit: {
      kicker: '05 — გვეწვიეთ', title: 'იქ, სადაც სურვილები მიგიყვანენ',
      sub: 'ლამპას გზა ყოველთვის იცის — ორი წუთი მეტეხის ხიდიდან, დამალული ძველი ქალაქის გულში. შიგნით და გარეთ, სადაც უცნობები ოჯახად იქცევიან.',
      address: 'მისამართი', contact: 'კონტაქტი', hours: 'სამუშაო საათები',
      whatsapp: 'ასევე WhatsApp-ზე', map: 'რუკაზე გახსნა',
      street: 'შავთელის ქუჩა 5', city: '0105 თბილისი, საქართველო',
      row1: 'ორშ – ხუთ', row2: 'პარ – შაბ', row3: 'კვირა',
      ctaReserve: 'მაგიდის დაჯავშნა', ctaMenu: 'მენიუ'
    },

    instagram: {
      kicker: '06 — გამოგვყევით', title: 'ახალი პირდაპირ სამზარეულოდან',
      sub: 'ახალი კერძები, საღამოები და კულისებს მიღმა მომენტები — მაშინვე, როცა ხდება.',
      cta: 'გამოგვყევით @aladinkitchen.ge'
    },

    footer: {
      tagline: 'სპარსული რესტორანი თბილისის ძველ ქალაქში. ჰალალი. ღიაა ყოველდღე.',
      pages: 'გვერდები', visit: 'მისამართი', contact: 'კონტაქტი',
      hoursLink: 'სამუშაო საათები', directions: 'როგორ მოგვაგნოთ', reservation: 'დაჯავშნა',
      gallery: 'გალერეა',
      copyright: '© {y} Aladin Kitchen, თბილისი',
      credit: 'გაფორმება სტაილგაიდ „Classical“-ის მიხედვით'
    },

    menuPage: {
      kicker: 'Aladin Kitchen · თბილისი', title: 'მენიუ',
      lead: '{c} თავი, {n} კერძი — ყველაფერი შეკვეთისთანავე მზადდება. ქაბაბი პირდაპირ ნახშირიდან მოდის, ხორეშთი დილიდან ცეცხლზეა. ყოველ კერძს თან ახლავს ფოტო ჩვენივე სამზარეულოდან.',
      priceNotice: 'ფასები ახლა ემატება — დაგვირეკეთ და დაუყოვნებლივ გეტყვით.',
      catNav: 'მენიუს კატეგორიები', searchLabel: 'ძებნა მენიუში', searchPlaceholder: 'რას ეძებთ…',
      filterLabel: 'ფილტრი',
      noResultsTitle: 'ვერაფერი მოიძებნა.', noResultsSub: 'სცადეთ სხვა დაწერილობა — ან გაასუფთავეთ ფილტრები.',
      reset: 'ფილტრების გასუფთავება',
      zoom: 'გაადიდეთ ფოტო: {name}',
      outroKicker: 'გემრიელად მიირთვით', outroTitle: 'ნუშე ჯან',
      outroText: 'ალერგია, აუტანლობა თუ სურვილი სუფრასთან? უბრალოდ გვითხარით — სამზარეულო მოერგება.',
      ctaReserve: 'მაგიდის დაჯავშნა', ctaVisit: 'მისამართი და საათები'
    },

    lightbox: { close: 'დახურვა' }
  }
};

const contact = {
  phoneHref: '+995555123456',
  /* Lateinische Ziffern in allen Sprachen: eine Nummer zum Wählen und
     Kopieren soll überall gleich aussehen. */
  phoneText: '+995 555 12 34 56',
  email: 'info@aladinkitchen.ge',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Aladin+Kitchen+Shavteli+St+5+Tbilisi',
  mapEmbedUrl: 'https://www.google.com/maps?q=Aladin+Kitchen+Shavteli+St+5+Tbilisi&output=embed',
  instagramUrl: 'https://www.instagram.com/aladinkitchen.ge/',
  hours: { row1: '11:00 – 23:00', row2: '11:00 – 24:00', row3: '11:00 – 23:00' },
  since: '2015',
  yearsInTbilisi: 10,
  hoursForMahiche: 4,

  /* Offener Punkt — noch zu klären, bevor das Kontaktformular live geht:
     Web3Forms (https://web3forms.com) wurde als Formular-Backend-Dienst
     vorgeschlagen (siehe letzte Besprechung) — das Formular postet direkt
     vom <form> aus dorthin, ganz ohne eigenes Backend, und funktioniert
     dadurch auch ohne JavaScript. Der Access-Key wird kostenlos auf
     web3forms.com erzeugt und dort an eine Ziel-Mailadresse gebunden —
     sinnvollerweise `email` oben. Das ist hier nur ein Platzhalter und muss
     durch den echten Schlüssel ersetzt werden.
     Alternativ ließe sich derselbe Formular-Markup auch an Formspree o. Ä.
     posten — dann genügt es, `action` in contact.astro und diesen Schlüssel
     entsprechend anzupassen. */
  web3formsAccessKey: 'REPLACE_WITH_WEB3FORMS_ACCESS_KEY'
};

export { LANGS, ui, contact };
