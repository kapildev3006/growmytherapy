export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface ApproachItem {
  title: string;
  method: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  location: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const siteContent = {
  practitioner: {
    name: "Dr. Maya Reynolds",
    credentials: "PsyD",
    title: "Licensed Clinical Psychologist",
    license: "PSY 32849 (Fictional Demo)",
    location: "Santa Monica, California",
    address: {
      street: "123th Street 45 W",
      city: "Santa Monica",
      state: "CA",
      zip: "90401",
      full: "123th Street 45 W, Santa Monica, CA 90401",
    },
    contact: {
      email: "hello@drmayareynolds.com",
      phone: "(310) 555-0192",
      hours: "Mon – Thu: 9:00 AM – 6:00 PM | Fri: Telehealth Only",
    },
    images: {
      headshot: "/images/maya-reynolds.jpg",
      headshotAlt: "Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist in Santa Monica",
      office1: "/images/office-1.jpg",
      office1Alt: "Sunlit, serene therapy office in Santa Monica with comfortable seating",
      office2: "/images/office-2.jpg",
      office2Alt: "Calm consultation corner with warm neutral tones and natural light",
    },
  },

  navigation: [
    { label: "Services", targetId: "services" },
    { label: "Approach", targetId: "approach" },
    { label: "About", targetId: "about" },
    { label: "The Space", targetId: "space" },
    { label: "Testimonials", targetId: "testimonials" },
    { label: "FAQ", targetId: "faq" },
  ],

  hero: {
    badge: "Licensed Clinical Psychologist · Santa Monica, CA",
    heading: "Anxiety & Trauma Therapist in Santa Monica, Helping You Feel Calm Again",
    subheading:
      "If you feel 'fine' on the outside but exhausted, on edge, or stuck in overthinking on the inside, you're not alone. I offer warm, evidence-based therapy — CBT, EMDR, and mindfulness — to help you feel grounded again.",
    primaryCta: {
      label: "Schedule a Free Consult",
      targetId: "contact",
    },
    secondaryCta: {
      label: "Explore My Approach",
      targetId: "approach",
    },
    consultationNote: "Free 15-minute phone consultation · In-person or secure CA telehealth",
  },

  trustStrip: [
    { label: "PsyD, Licensed Clinical Psychologist", icon: "Award" },
    { label: "In-Person in Santa Monica", icon: "MapPin" },
    { label: "CA Telehealth Available", icon: "Video" },
    { label: "CBT · EMDR · Mindfulness", icon: "Sparkles" },
  ],

  services: [
    {
      id: "anxiety",
      title: "Anxiety & Panic Therapy in Santa Monica",
      shortTitle: "Anxiety & Panic",
      description:
        "For high-achievers who feel 'functional' on the outside but anxious underneath, this work helps quiet constant worry and physical tension.",
      tags: ["Panic Attacks", "High-Functioning Anxiety", "Somatic Relief", "CBT"],
      icon: "ShieldAlert",
    },
    {
      id: "trauma",
      title: "Trauma-Informed Therapy in Santa Monica",
      shortTitle: "Trauma & EMDR",
      description:
        "Using EMDR and a carefully paced approach, trauma-informed therapy helps you feel safe and regulated, whether the trauma is recent or long-standing.",
      tags: ["EMDR Therapy", "PTSD & Complex Trauma", "Paced Safety", "Nervous System Reset"],
      icon: "HeartHandshake",
    },
    {
      id: "burnout",
      title: "Burnout & Perfectionism Therapy in Santa Monica",
      shortTitle: "Burnout & Perfectionism",
      description:
        "For entrepreneurs, creatives, and professionals running on empty, this therapy offers space to slow down and reconnect with yourself.",
      tags: ["Overworking", "Imposter Syndrome", "Boundary Work", "Restoration"],
      icon: "BatteryCharging",
    },
  ] as ServiceItem[],

  approach: {
    badge: "Clinical Framework",
    heading: "Evidence-Based, Paced for Your Safety",
    subheading:
      "Therapy shouldn't feel like an interrogation or a set of dry worksheets. We weave together proven psychological modalities tailored to your rhythm.",
    items: [
      {
        title: "Cognitive Behavioral Therapy (CBT)",
        method: "Cognitive Re-patterning",
        description:
          "Identify and gently untangle repetitive thought loops, catastrophic predictions, and the harsh inner critic that drives perfectionism.",
        icon: "Brain",
      },
      {
        title: "EMDR Therapy",
        method: "Reprocessing & Desensitization",
        description:
          "A structured, gentle method to help your brain and nervous system reprocess painful memories so they no longer trigger distress today.",
        icon: "Waves",
      },
      {
        title: "Mindfulness & Somatic Regulation",
        method: "Body-Based Calming",
        description:
          "Soothe your nervous system's fight-or-flight response with breathing techniques and body-awareness exercises you can use in daily life.",
        icon: "Leaf",
      },
      {
        title: "Collaborative & Human-Centered",
        method: "Warm Partnership",
        description:
          "No cold clinical detachment. You are the expert on your lived experience, and I walk alongside you with curiosity, warmth, and respect.",
        icon: "Users",
      },
    ] as ApproachItem[],
  },

  about: {
    badge: "About Dr. Reynolds",
    heading: "A calm, grounded partner in your healing",
    paragraphs: [
      "I'm a licensed clinical psychologist based in Santa Monica, California, offering warm, collaborative therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware — but internally feel exhausted, stuck in overthinking, or emotionally on edge.",
      "My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling 'functional' on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they're always bracing for something to go wrong.",
      "I take a warm, collaborative, and grounded approach to therapy, integrating CBT, EMDR, mindfulness-based practices, and body-oriented techniques. Trauma work — both single-incident and longer-standing patterns — is paced carefully, with an emphasis on safety and helping clients feel more regulated in daily life, not just in session.",
      "I also support clients dealing with professional burnout and perfectionism — often entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. I offer both in-person therapy from my Santa Monica office and secure telehealth for clients located across California.",
    ],
    highlights: [
      "Doctor of Psychology (PsyD) in Clinical Psychology",
      "EMDR Trained Clinician",
      "Member, American Psychological Association (APA)",
      "Member, California Psychological Association (CPA)",
    ],
  },

  officeSpace: {
    badge: "The Healing Space",
    heading: "Designed for safety, calm, and stillness",
    description:
      "Located in downtown Santa Monica, the office was intentionally designed with soft natural light, warm organic materials, and gentle acoustics to create an immediate feeling of ease from the moment you step through the door.",
    addressNotice: "In-Person Sessions: 123th Street 45 W, Santa Monica, CA 90401",
    features: [
      "Private, sound-insulated consultation suite",
      "Abundant natural California light and air purification",
      "Convenient Santa Monica parking & accessible access",
      "Steps from the ocean breeze",
    ],
  },

  testimonials: [
    {
      quote:
        "Working with Dr. Reynolds gave me the tools to finally quiet the panic spirals that ruled my workdays. For the first time in years, I feel genuinely calm and safe in my own body.",
      author: "Senior Product Director",
      location: "Santa Monica, CA",
    },
    {
      quote:
        "The EMDR sessions completely transformed how I carry old stress. Maya's approach is warm, patient, and deeply grounded. I never felt rushed or judged.",
      author: "Architect & Creative",
      location: "Venice / Los Angeles, CA",
    },
    {
      quote:
        "I spent over a decade running on adrenaline and perfectionism. Therapy with Maya helped me slow down without losing my drive, and finally sleep through the night.",
      author: "Physician & Researcher",
      location: "Telehealth Client, CA",
    },
  ] as TestimonialItem[],

  faq: [
    {
      id: "insurance",
      question: "Do you accept insurance?",
      answer:
        "I am an out-of-network provider. Many clients receive partial or full reimbursement from their PPO insurance plans through out-of-network mental health benefits. I provide a monthly superbill (itemized receipt) that you can easily submit to your insurance company for reimbursement. I recommend contacting your insurer to verify out-of-network coverage for outpatient psychotherapy (CPT code 90834).",
    },
    {
      id: "formats",
      question: "Do you offer in-person sessions or telehealth?",
      answer:
        "I offer both options. In-person therapy takes place in my Santa Monica office located at 123th Street 45 W, Santa Monica, CA 90401. For clients residing anywhere within the state of California, I offer secure, HIPAA-compliant telehealth via high-definition video.",
    },
    {
      id: "first-session",
      question: "What can I expect during our first session?",
      answer:
        "Our initial intake session is an unhurried, collaborative conversation. We will discuss what brings you to therapy, what you've been carrying, and what you hope to achieve. You set the pace — there is never any expectation to share traumatic memories before you feel completely ready and secure.",
    },
    {
      id: "confidentiality",
      question: "How is my privacy and confidentiality protected?",
      answer:
        "Your privacy is held to the highest ethical and legal standards. All communications, clinical records, and video platforms strictly adhere to California state licensing laws and HIPAA regulations. Details regarding confidentiality exceptions (such as imminent safety concerns) are reviewed thoroughly prior to our first meeting.",
    },
    {
      id: "consultation",
      question: "How does the free consultation call work?",
      answer:
        "Before scheduling an initial session, we will have a brief 15-minute phone consultation. This allows us to discuss what you are looking for, address any questions regarding logistics or approach, and ensure my practice is the best therapeutic fit for your needs.",
    },
  ] as FaqItem[],

  ctaBanner: {
    heading: "Ready to feel more grounded in your everyday life?",
    subheading:
      "Taking the first step toward therapy can feel vulnerable. Let's start with a warm, no-pressure 15-minute phone consultation to explore how we can work together.",
    primaryCta: "Schedule a Free Consult",
    contactEmail: "hello@drmayareynolds.com",
    contactPhone: "(310) 555-0192",
  },

  footer: {
    disclaimer:
      "This is a fictional demo website created for a design and engineering portfolio exercise. No medical advice, diagnosis, or treatment is provided.",
    copyright: `© ${new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.`,
    emergencyNote:
      "If you are experiencing a mental health emergency or crisis, please call or text 988 (Suicide & Crisis Lifeline) or go to the nearest emergency room.",
  },
};
