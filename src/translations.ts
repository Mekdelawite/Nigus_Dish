export type Language = "en" | "am";

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      bookNow: "Book Now",
    },
    tagline: "Your Satellite Expert at Mekdela Amba",
    hero: {
      badge: "Student Owned & Operated",
      title: "Professional Satellite Installation & Repair",
      subtitle: "Fast • Reliable • Affordable",
      note: '"Available after 4 PM on weekdays and all weekend. Emergency repairs? Call anytime!"',
      bookBtn: "Book Service Now",
      callBtn: "Call Now",
      stats: {
        fast: "Fast Service",
        reliable: "Reliable",
        affordable: "Affordable",
      },
      floating: {
        title: "Expert Installation",
        subtitle: "Same day service available",
      },
    },
    services: {
      badge: "Professional service at student-friendly prices",
      title: "Our Main Services",
      items: [
        {
          title: "Installation",
          description: "Dish installation for all providers (DStv, Zuku, StarTimes, etc.)",
          features: ["New satellite dish setup", "Multi-room connection", "Free signal check"],
          price: "Starting from 500 ETB",
        },
        {
          title: "Repairs",
          description: "Signal problem? I'll fix it fast. Quality equipment used.",
          features: ["Signal problems", "Equipment fixing", "Same-day service"],
          price: "Starting from 300 ETB",
        },
        {
          title: "Maintenance",
          description: "Regular check-ups to ensure your system performs at its best.",
          features: ["Regular check-ups", "System alignment", "Weather damage repair"],
          price: "Free check with any service",
        },
      ],
      custom: {
        title: "Need a custom solution?",
        subtitle: "We handle commercial installations and large-scale projects too.",
        btn: "Get a Free Quote",
      },
    },
    howItWorks: {
      title: "How It Works",
      subtitle: "Getting your satellite fixed is as easy as 1-2-3",
      steps: [
        {
          title: "1. Contact Me",
          description: "Call me directly or book your service online through our simple form.",
        },
        {
          title: "2. Free Quote",
          description: "I'll provide a free consultation and a clear quote for the work needed.",
        },
        {
          title: "3. Professional Service",
          description: "I'll come to your home and provide professional installation or repair.",
        },
      ],
    },
    specialOffers: {
      title: "Special Offers",
      subtitle: "Exclusive deals for our valued customers",
      items: [
        {
          title: "Student Discount",
          description: "Show your student ID and get 15% off any installation or repair service.",
          badge: "Most Popular",
        },
        {
          title: "First-Time Offer",
          description: "New to Nigus Satellite? Get a free signal check with your first booking.",
          badge: "New Customers",
        },
        {
          title: "Emergency Service",
          description: "Available 24/7 for urgent repairs. We'll get you back online in no time.",
          badge: "24/7 Support",
        },
      ],
      emergency: "Emergency Service Available 24/7 - Call Anytime!",
      claimBtn: "Claim Your Offer Now",
    },
    tools: {
      calc: {
        title: "Price Calculator",
        serviceLabel: "Select Service",
        distanceLabel: "Distance from Mekdela Amba (km)",
        estPrice: "Estimated Price:",
        note: "* Final price may vary based on specific requirements.",
        options: {
          installation: "Basic Installation",
          repair: "Signal Repair",
          maintenance: "Regular Maintenance",
        },
      },
      area: {
        title: "Service Area Checker",
        subtitle: "Enter your area to see if we can reach you today.",
        placeholder: "Enter your area (e.g. Bole)",
        btn: "Check",
        yes: "Yes! We serve your area.",
        no: "Sorry, we don't serve that area yet.",
        popular: "Popular Areas:",
      },
    },
    gallery: {
      title: "Our Gallery",
      subtitle: "Seeing is believing - our work in action",
      items: [
        { title: "Dish Alignment", category: "Installation" },
        { title: "Happy Customer", category: "Success" },
        { title: "Professional Tools", category: "Equipment" },
        { title: "Complex Wiring", category: "Work in Progress" },
        { title: "Signal Testing", category: "Maintenance" },
        { title: "Roof Installation", category: "Installation" },
      ],
    },
    testimonials: {
      title: "Customer Reviews",
      subtitle: "What our happy customers say about us",
      items: [
        {
          name: "Abebe Kebede",
          service: "Full Installation",
          comment: "Nigus did an amazing job. He was very professional and the signal is perfect. Highly recommend!",
        },
        {
          name: "Marta Tadesse",
          service: "Signal Repair",
          comment: "I was struggling with my Zuku signal for weeks. Nigus fixed it in 30 minutes. Great student rates too!",
        },
        {
          name: "Samuel Ayele",
          service: "Maintenance",
          comment: "Very polite and knowledgeable. He explained everything clearly. Will definitely call him again.",
        },
      ],
    },
    about: {
      badge: "About Nigus",
      title: "5th-Year Software Engineering Student",
      uni: "at Mekdela Amba University",
      bio: "Hi, I'm Nigus - a 5th-year software engineering student at Mekdela Amba University. I've been installing and repairing satellite dishes for over 3 years. I understand technology and customer service. After classes, I use my skills to help people get perfect TV reception. As a student, I offer affordable rates and flexible timing to fit your schedule.",
      features: [
        { title: "Trained Technician", desc: "3+ years of hands-on experience." },
        { title: "Student Rates", desc: "Affordable prices for everyone." },
        { title: "Flexible Timing", desc: "Available evenings and weekends." },
        { title: "Work Guaranteed", desc: "Quality work with friendly service." },
      ],
      quote: '"My goal is to ensure every household I visit enjoys seamless, high-quality satellite television without the technical headaches."',
    },
    contact: {
      badge: "Get In Touch",
      title: "Ready to fix your",
      highlight: "Satellite Signal?",
      subtitle: "Contact us today for a free consultation or to book a service. We're available 7 days a week.",
      labels: {
        call: "Call or WhatsApp",
        chat: "Click to chat on WhatsApp",
        email: "Email Address",
        area: "Service Area",
        areaDetail: "Mekdela Amba & Surrounding",
        doorstep: "We come to your doorstep",
      },
      form: {
        title: "Simple Booking Form",
        name: "Full Name",
        phone: "Phone Number",
        address: "Address",
        service: "Service Type",
        dateTime: "Preferred Date/Time",
        submit: "Submit Booking",
        note: "Booking takes less than 1 minute. I'll call you back to confirm.",
        options: ["New Installation", "Signal Repair", "Receiver Setup", "Maintenance"],
      },
    },
    footer: {
      hours: "Hours: Mon - Sun: 8:00 AM - 8:00 PM",
      emergency: "Emergency repairs? Call anytime!",
      rights: "All rights reserved.",
      designed: "Designed with ❤️ for Nigus",
    },
  },
  am: {
    nav: {
      home: "መነሻ",
      services: "አገልግሎቶች",
      about: "ስለ እኛ",
      contact: "እውቂያ",
      bookNow: "አሁኑኑ ይዘዙ",
    },
    tagline: "የሳተላይት ባለሙያዎ በመቅደላ አምባ",
    hero: {
      badge: "በተማሪ የሚመራ",
      title: "ፕሮፌሽናል የሳተላይት ዲሽ ገጠማ እና ጥገና",
      subtitle: "ፈጣን • ታማኝ • ተመጣጣኝ",
      note: '"ከሰኞ እስከ አርብ ከቀኑ 10 ሰዓት በኋላ እና ቅዳሜና እሁድ ሙሉ ቀን እንሰራለን። ለአስቸኳይ ጥገና በማንኛውም ጊዜ ይደውሉ!"',
      bookBtn: "አሁኑኑ ይዘዙ",
      callBtn: "አሁኑኑ ይደውሉ",
      stats: {
        fast: "ፈጣን አገልግሎት",
        reliable: "ታማኝ",
        affordable: "ተመጣጣኝ",
      },
      floating: {
        title: "ጥራት ያለው ገጠማ",
        subtitle: "በዕለቱ አገልግሎት እንሰጣለን",
      },
    },
    services: {
      badge: "ፕሮፌሽናል አገልግሎት በተማሪ ተመጣጣኝ ዋጋ",
      title: "ዋና ዋና አገልግሎቶቻችን",
      items: [
        {
          title: "ገጠማ",
          description: "ለሁሉም የዲሽ አይነቶች (DStv, Zuku, StarTimes, ወዘተ) የዲሽ ገጠማ አገልግሎት",
          features: ["አዲስ የሳተላይት ዲሽ ገጠማ", "ለብዙ ክፍሎች ማገናኘት", "ነፃ የሲግናል ፍተሻ"],
          price: "ከ 500 ብር ጀምሮ",
        },
        {
          title: "ጥገና",
          description: "የሲግናል ችግር? በፍጥነት እናስተካክላለን። ጥራት ያላቸው እቃዎችን እንጠቀማለን።",
          features: ["የሲግናል ችግሮች", "የእቃ ጥገና", "በዕለቱ የሚሰጥ አገልግሎት"],
          price: "ከ 300 ብር ጀምሮ",
        },
        {
          title: "ክትትል",
          description: "ዲሽዎ ሁልጊዜ በጥሩ ሁኔታ እንዲሰራ መደበኛ ክትትል እናደርጋለን።",
          features: ["መደበኛ ፍተሻ", "የሲግናል ማስተካከያ", "በአየር ሁኔታ የደረሰ ጉዳት ጥገና"],
          price: "ከማንኛውም አገልግሎት ጋር ነፃ ፍተሻ",
        },
      ],
      custom: {
        title: "ልዩ አገልግሎት ይፈልጋሉ?",
        subtitle: "ለድርጅቶች እና ለትላልቅ ፕሮጀክቶችም አገልግሎት እንሰጣለን።",
        btn: "ነፃ ዋጋ ይጠይቁ",
      },
    },
    howItWorks: {
      title: "እንዴት እንደሚሰራ",
      subtitle: "የዲሽ ጥገና አገልግሎት ማግኘት በጣም ቀላል ነው",
      steps: [
        {
          title: "1. ያግኙኝ",
          description: "በቀጥታ ይደውሉልኝ ወይም በቀላል ቅጽ በመጠቀም ኦንላይን ይዘዙ።",
        },
        {
          title: "2. ነፃ ዋጋ",
          description: "ነፃ ምክክር እና ለስራው የሚያስፈልገውን ግልጽ ዋጋ እሰጥዎታለሁ።",
        },
        {
          title: "3. ፕሮፌሽናል አገልግሎት",
          description: "ወደ ቤትዎ መጥቼ ፕሮፌሽናል የገጠማ ወይም የጥገና አገልግሎት እሰጣለሁ።",
        },
      ],
    },
    specialOffers: {
      title: "ልዩ ቅናሾች",
      subtitle: "ለተከበሩ ደንበኞቻችን የቀረቡ ልዩ ቅናሾች",
      items: [
        {
          title: "የተማሪ ቅናሽ",
          description: "የተማሪ መታወቂያዎን ያሳዩ እና ለማንኛውም አገልግሎት 15% ቅናሽ ያግኙ።",
          badge: "ተመራጭ",
        },
        {
          title: "የመጀመሪያ ደንበኛ",
          description: "ለኒጉስ ሳተላይት አዲስ ደንበኛ ነዎት? በመጀመሪያው ትዕዛዝዎ ነፃ የሲግናል ፍተሻ ያግኙ።",
          badge: "አዲስ ደንበኛ",
        },
        {
          title: "አስቸኳይ አገልግሎት",
          description: "ለአስቸኳይ ጥገና 24/7 ዝግጁ ነን። በፍጥነት አገልግሎት እንሰጣለን።",
          badge: "24/7 ድጋፍ",
        },
      ],
      emergency: "አስቸኳይ አገልግሎት 24/7 ይገኛል - በማንኛውም ጊዜ ይደውሉ!",
      claimBtn: "ቅናሹን አሁኑኑ ያግኙ",
    },
    tools: {
      calc: {
        title: "የዋጋ ማስያ",
        serviceLabel: "አገልግሎት ይምረጡ",
        distanceLabel: "ከመቅደላ አምባ ያለው ርቀት (ኪ.ሜ)",
        estPrice: "የተገመተ ዋጋ:",
        note: "* የመጨረሻው ዋጋ እንደ ስራው ሁኔታ ሊቀየር ይችላል።",
        options: {
          installation: "መደበኛ ገጠማ",
          repair: "የሲግናል ጥገና",
          maintenance: "መደበኛ ክትትል",
        },
      },
      area: {
        title: "የአካባቢ ፍተሻ",
        subtitle: "አገልግሎታችን የእርስዎ አካባቢ እንደሚደርስ ለማወቅ አካባቢዎን ያስገቡ።",
        placeholder: "አካባቢዎን ያስገቡ (ለምሳሌ ቦሌ)",
        btn: "ፈትሽ",
        yes: "አዎ! የእርስዎ አካባቢ አገልግሎት እንሰጣለን።",
        no: "ይቅርታ፣ ገና ወደዛ አካባቢ አገልግሎት መጀመር አልቻልንም።",
        popular: "ታዋቂ አካባቢዎች:",
      },
    },
    gallery: {
      title: "ፎቶዎች",
      subtitle: "ስራዎቻችንን በፎቶ ይመልከቱ",
      items: [
        { title: "የዲሽ ማስተካከያ", category: "ገጠማ" },
        { title: "ደስተኛ ደንበኛ", category: "ስኬት" },
        { title: "ፕሮፌሽናል እቃዎች", category: "መሳሪያዎች" },
        { title: "የሽቦ ዝርጋታ", category: "በስራ ላይ" },
        { title: "የሲግናል ፍተሻ", category: "ክትትል" },
        { title: "የጣራ ላይ ገጠማ", category: "ገጠማ" },
      ],
    },
    testimonials: {
      title: "የደንበኞች አስተያየት",
      subtitle: "ደንበኞቻችን ስለ እኛ ምን ይላሉ",
      items: [
        {
          name: "አበበ ከበደ",
          service: "ሙሉ ገጠማ",
          comment: "ኒጉስ በጣም ጥሩ ስራ ሰርቷል። በጣም ፕሮፌሽናል ነው እና ሲግናሉ በጣም አሪፍ ነው። እመክራችኋለሁ!",
        },
        {
          name: "ማርታ ታደሰ",
          service: "የሲግናል ጥገና",
          comment: "ለሳምንታት በዙኩ ሲግናል ተቸግሬ ነበር። ኒጉስ በ30 ደቂቃ ውስጥ አስተካከለው። የተማሪ ዋጋውም በጣም አሪፍ ነው!",
        },
        {
          name: "ሳሙኤል አየለ",
          service: "ክትትል",
          comment: "በጣም ትህትና ያለው እና እውቀት ያለው ልጅ ነው። ሁሉንም ነገር በግልጽ አስረድቶኛል። በእርግጠኝነት ድጋሚ እጠራዋለሁ።",
        },
      ],
    },
    about: {
      badge: "ስለ ኒጉስ",
      title: "የ5ኛ አመት የሶፍትዌር ኢንጂነሪንግ ተማሪ",
      uni: "በመቅደላ አምባ ዩኒቨርሲቲ",
      bio: "ሰላም፣ እኔ ኒጉስ እባላለሁ - በመቅደላ አምባ ዩኒቨርሲቲ የ5ኛ አመት የሶፍትዌር ኢንጂነሪንግ ተማሪ ነኝ። ከ3 አመት በላይ በዲሽ ገጠማ እና ጥገና ላይ ሰርቻለሁ። ቴክኖሎጂን እና የደንበኛ አገልግሎትን በሚገባ እረዳለሁ። ከትምህርት በኋላ ችሎታዬን ተጠቅሜ ሰዎች ጥራት ያለው የቲቪ አገልግሎት እንዲያገኙ እረዳለሁ። እንደ ተማሪነቴ ተመጣጣኝ ዋጋ እና ለእናንተ የሚመች ሰዓት አቀርባለሁ።",
      features: [
        { title: "ሰልጣኝ ባለሙያ", desc: "ከ3 አመት በላይ የተግባር ልምድ ያለው።" },
        { title: "የተማሪ ዋጋ", desc: "ለሁሉም ሰው የሚሆን ተመጣጣኝ ዋጋ።" },
        { title: "ተለዋዋጭ ሰዓት", desc: "ምሽት እና ቅዳሜና እሁድ ይገኛል።" },
        { title: "ዋስትና ያለው ስራ", desc: "ጥራት ያለው ስራ በትህትና።" },
      ],
      quote: '"አላማዬ እያንዳንዱ የጎበኘሁት ቤት ያለምንም የቴክኒክ ችግር ጥራት ያለው የሳተላይት ቴሌቪዥን እንዲያገኝ ማድረግ ነው።"',
    },
    contact: {
      badge: "ያግኙን",
      title: "የእርስዎን የሳተላይት",
      highlight: "ሲግናል ለማስተካከል ዝግጁ ነዎት?",
      subtitle: "ለነፃ ምክክር ወይም አገልግሎት ለማዘዝ ዛሬውኑ ያግኙን። በሳምንት 7 ቀናት እንሰራለን።",
      labels: {
        call: "ይደውሉ ወይም በዋትስአፕ ያግኙን",
        chat: "በዋትስአፕ ለማውራት እዚህ ይጫኑ",
        email: "የኢሜል አድራሻ",
        area: "የአገልግሎት አካባቢ",
        areaDetail: "መቅደላ አምባ እና አካባቢው",
        doorstep: "እስከ ቤትዎ ድረስ እንመጣለን",
      },
      form: {
        title: "የማዘዣ ቅጽ",
        name: "ሙሉ ስም",
        phone: "ስልክ ቁጥር",
        address: "አድራሻ",
        service: "የአገልግሎት አይነት",
        dateTime: "የሚመርጡት ቀን/ሰዓት",
        submit: "ትዕዛዙን ላክ",
        note: "ትዕዛዝ ለመላክ ከአንድ ደቂቃ ያነሰ ጊዜ ይወስዳል። ለማረጋገጥ እደውልልዎታለሁ።",
        options: ["አዲስ ገጠማ", "የሲግናል ጥገና", "የሪሲቨር ዝግጅት", "ክትትል"],
      },
    },
    footer: {
      hours: "የስራ ሰዓት: ከሰኞ - እሁድ: ከጠዋቱ 2:00 - ከምሽቱ 2:00",
      emergency: "ለአስቸኳይ ጥገና? በማንኛውም ጊዜ ይደውሉ!",
      rights: "መብቱ በህግ የተጠበቀ ነው።",
      designed: "ለኒጉስ በፍቅር የተሰራ",
    },
  },
};
