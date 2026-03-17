import gncLogo from '../assets/logo-gnc.png'
import barenginLogo from '../assets/barengin-logo.png'

export const defaultLanguage = 'id'

export const availableLanguages = [
  { code: 'id', label: 'Indonesia' },
  { code: 'en', label: 'English' },
]

export const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/company/gnctech', icon: 'Linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/gnctech', icon: 'Twitter' },
  { name: 'GitHub', url: 'https://github.com/gnctech', icon: 'Github' },
  { name: 'Instagram', url: 'https://instagram.com/gnctech', icon: 'Instagram' },
]

const sharedCompanyInfo = {
  name: 'GNC Tech',
  logo: gncLogo,
  email: 'hello@gnctech.com',
  phone: '+62 21 5555 7890',
  address: 'Gedung Innovation Tower Lt. 15, Jakarta Selatan 12920',
  founded: 2018,
}

const sharedTestimonials = [
  {
    id: 1,
    name: 'Andi Prasetyo',
    role: 'CEO',
    company: 'PT Nusantara Digital',
    avatar: 'https://ui-avatars.com/api/?name=Andi+Prasetyo&background=0D8ABC&color=fff&size=128&bold=true',
  },
  {
    id: 2,
    name: 'Siti Rahayu',
    role: 'CTO',
    company: 'Tokoseru',
    avatar: 'https://ui-avatars.com/api/?name=Siti+Rahayu&background=7C3AED&color=fff&size=128&bold=true',
  },
  {
    id: 3,
    name: 'Budi Santoso',
    role: 'Product Manager',
    company: 'Kreasi Anak Bangsa',
    avatar: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=00D4FF&color=fff&size=128&bold=true',
  },
  {
    id: 4,
    name: 'Dewi Kartika',
    role: 'Direktur Operasional',
    company: 'PT Maju Bersama',
    avatar: 'https://ui-avatars.com/api/?name=Dewi+Kartika&background=EC4899&color=fff&size=128&bold=true',
  },
  {
    id: 5,
    name: 'Rizky Firmansyah',
    role: 'Founder',
    company: 'Warung Digital',
    avatar: 'https://ui-avatars.com/api/?name=Rizky+Firmansyah&background=F59E0B&color=fff&size=128&bold=true',
  },
  {
    id: 6,
    name: 'Putri Wulandari',
    role: 'Head of Engineering',
    company: 'Solusi Pintar Indonesia',
    avatar: 'https://ui-avatars.com/api/?name=Putri+Wulandari&background=10B981&color=fff&size=128&bold=true',
  },
]

export const siteContent = {
  id: {
    metadata: {
      title: 'GNC Tech | Solusi Teknologi & Bisnis',
      description:
        'GNC Tech & Business Solutions - Mitra transformasi digital untuk UMKM hingga korporasi. Layanan pengembangan software, web, pemasaran digital, dan strategi bisnis.',
    },
    companyInfo: {
      ...sharedCompanyInfo,
      tagline: 'Empowering Growth through Digital Transformation',
      description:
        'GNC Tech & Business Solutions mengintegrasikan solusi teknologi dan strategi bisnis dalam satu ekosistem layanan untuk membantu bisnis dari UMKM hingga korporasi mempercepat transformasi digital dan pertumbuhan yang terukur.',
    },
    socialLinks,
    heroContent: {
      badge: 'Mewujudkan Transformasi Digital',
      rotatingWords: ['Inovasi', 'Pertumbuhan', 'Keberhasilan', 'Efisiensi'],
      titleLeading: 'Membangun',
      titleTrailing: 'Masa Depan',
      primaryActionLabel: 'Lihat Karya Kami',
      secondaryActionLabel: 'Hubungi Kami',
      statsPreview: [
        { number: '150+', label: 'Proyek' },
        { number: '50+', label: 'Klien' },
        { number: '7+', label: 'Tahun' },
      ],
    },
    aboutContent: {
      sectionDescription:
        'GNC Tech & Business Solutions merupakan penyedia layanan terintegrasi yang memadukan inovasi teknologi dan strategi bisnis untuk membantu organisasi membangun fondasi digital yang rapi, siap tumbuh, dan siap bersaing.',
      positioningHint:
        'Kami hadir sebagai mitra pertumbuhan bagi organisasi yang ingin mentransformasi bisnis secara pragmatis, efektif, dan berkelanjutan.',
    },
    executiveBrief: {
      vision:
        'Menjadi katalisator utama dalam ekosistem digital nasional yang inklusif agar setiap level bisnis memiliki akses ke teknologi mutakhir.',
      mission:
        'Mengakselerasi transformasi digital melalui solusi yang tepat guna, efisien, dan kompetitif dari sisi biaya tanpa mengorbankan kualitas.',
      positioning:
        'Dengan perpaduan kompetensi teknologi, pemasaran digital, dan strategi bisnis, GNC Tech & Business Solutions hadir sebagai mitra pertumbuhan bagi organisasi yang ingin menjalankan transformasi digital secara pragmatis, efektif, dan berkelanjutan.',
    },
    valueDrivers: [
      {
        id: 'scalable',
        title: 'Scalable Solutions',
        description: 'Layanan modular yang dapat berkembang seiring pertumbuhan bisnis.',
      },
      {
        id: 'affordable',
        title: 'Affordable Excellence',
        description: 'Harga kompetitif dengan kualitas implementasi yang tetap terjaga.',
      },
      {
        id: 'data-driven',
        title: 'Data-Driven Approach',
        description: 'Strategi dibangun dari data, pengukuran, dan insight yang relevan.',
      },
    ],
    audienceSegments: [
      {
        id: 'sme',
        title: 'SME/UMKM',
        description: 'Usaha yang ingin beralih dari operasional manual ke sistem digital yang lebih rapi.',
      },
      {
        id: 'startup',
        title: 'Scale-up Startups',
        description: 'Bisnis yang membutuhkan fondasi teknologi kuat dan kanal pertumbuhan.',
      },
      {
        id: 'enterprise',
        title: 'Established Enterprises',
        description: 'Perusahaan besar yang memerlukan optimasi sistem dan strategi digital.',
      },
    ],
    stats: [
      { number: 150, suffix: '+', label: 'Proyek Selesai' },
      { number: 50, suffix: '+', label: 'Klien Puas' },
      { number: 25, suffix: '', label: 'Anggota Tim' },
      { number: 7, suffix: '+', label: 'Tahun Pengalaman' },
    ],
    services: [
      {
        id: 1,
        icon: 'Code2',
        title: 'Custom Software Development',
        description:
          'Aplikasi internal, sistem data, dashboard, dan platform operasional yang disesuaikan dengan kebutuhan bisnis Anda.',
      },
      {
        id: 2,
        icon: 'Globe',
        title: 'Web Development',
        description:
          'Landing page, website profil, dan platform e-commerce responsif untuk memperkuat kehadiran digital Anda.',
      },
      {
        id: 3,
        icon: 'Smartphone',
        title: 'Social Media Management',
        description:
          'Konten, kalender publikasi, dan interaksi yang terkelola untuk membangun reputasi brand yang konsisten.',
      },
      {
        id: 4,
        icon: 'Cloud',
        title: 'Performance Marketing',
        description:
          'Iklan berbayar terukur untuk mendorong lead, konversi, dan pertumbuhan saluran penjualan secara efisien.',
      },
      {
        id: 5,
        icon: 'Shield',
        title: 'SEO & Content Strategy',
        description:
          'Optimasi pencarian dan strategi konten untuk memperkuat visibilitas merek serta akuisisi pelanggan.',
      },
      {
        id: 6,
        icon: 'Brain',
        title: 'Business Advisor',
        description:
          'Konsultasi strategis untuk mengatasi hambatan operasional dan menetapkan prioritas eksekusi.',
      },
      {
        id: 7,
        icon: 'FileText',
        title: 'Business Planner',
        description:
          'Penyusunan business plan, riset pasar, dan proyeksi keuangan demi pertumbuhan yang lebih terstruktur.',
      },
    ],
    projects: [
      {
        id: 1,
        title: 'Barengin',
        category: 'platform',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
        description:
          'Platform sosial yang menghubungkan orang-orang untuk berbagi aktivitas dan pengalaman bersama.',
        tech: ['React', 'React Router', 'Vercel', 'PWA', 'Sentry'],
        website: 'https://barenginaja.com',
      },
      {
        id: 2,
        title: 'Teelite Club',
        category: 'web',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
        description:
          'Website komunitas premium yang menawarkan keanggotaan eksklusif, event, dan peluang networking untuk profesional.',
        tech: ['React', 'React Router', 'Vercel', 'Lucide'],
        website: 'https://teeliteclub.com',
      },
      {
        id: 3,
        title: 'Cilegon Prima Ambara',
        category: 'web',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
        description:
          'Landing page yang menonjolkan profil brand dan layanan Cilegon Prima Ambara dengan desain yang bersih dan fokus pada konversi pengunjung.',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Nginx'],
        website: 'https://primaambara.com/',
      },
      {
        id: 4,
        title: 'Website Iuran Perumnas Blok F',
        category: 'platform',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        description:
          'Portal warga untuk mengelola iuran sampah, jadwal ronda, dan informasi lingkungan Blok F dalam satu dashboard yang terpusat dan terdokumentasi.',
        tech: ['Laravel', 'Inertia.js', 'PHP 8.3', 'Axios', 'Lodash', 'Bunny', 'Bunny Fonts', 'HSTS', 'Vercel'],
        website: 'https://www.perumnasf.com/',
      },
      {
        id: 5,
        title: 'Garapin',
        category: 'platform',
        image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&q=80',
        description:
          'Marketplace freelance Indonesia yang mempertemukan klien dan freelancer melalui sistem escrow, tier profesional, dan alur bidding yang aman serta transparan.',
        tech: ['React', 'Next.js 16.1.6', 'Turbopack', 'Tailwind CSS', 'Radix UI', 'Lucide', 'core-js 3.37.1', 'Midtrans', 'Railway', 'Vercel', 'HSTS', 'Priority Hints'],
        website: 'https://garapin-alpha.vercel.app/',
      },
      {
        id: 6,
        title: 'Dan Banyak Lagi...',
        description:
          'Kami telah menyelesaikan berbagai proyek lainnya di bidang teknologi, bisnis, dan pemasaran digital. Hubungi kami untuk mempelajari lebih lanjut.',
        tech: [],
        isSummaryCard: true,
      },
    ],
    categories: [
      { id: 'all', label: 'Semua Proyek' },
      { id: 'platform', label: 'Platform' },
      { id: 'web', label: 'Website' },
    ],
    testimonials: [
      {
        ...sharedTestimonials[0],
        text: 'GNC Tech benar-benar mengubah cara bisnis kami beroperasi. Sistem yang mereka bangun sangat stabil dan mudah digunakan oleh seluruh tim kami.',
      },
      {
        ...sharedTestimonials[1],
        text: 'Kolaborasi dengan GNC Tech sangat menyenangkan. Mereka responsif, profesional, dan selalu memberikan solusi terbaik untuk setiap tantangan teknis.',
      },
      {
        ...sharedTestimonials[2],
        text: 'Aplikasi mobile yang dikembangkan GNC Tech melampaui ekspektasi kami. Performa luar biasa dan desain yang sangat intuitif.',
      },
      {
        ...sharedTestimonials[3],
        text: 'Kami sudah bekerja sama dengan GNC Tech selama 3 tahun. Konsistensi kualitas dan dukungan purna jual mereka tidak tertandingi.',
      },
      {
        ...sharedTestimonials[4],
        text: 'Dari konsep hingga peluncuran, tim GNC Tech selalu on-track. Platform e-commerce kami sekarang melayani ribuan transaksi setiap hari.',
      },
      {
        ...sharedTestimonials[5],
        text: 'Integrasi API yang dibangun GNC Tech sangat robust. Downtime hampir nol dan dokumentasinya sangat lengkap.',
      },
    ],
    navLinks: [
      { label: 'Beranda', href: '#home' },
      { label: 'Layanan', href: '#services' },
      { label: 'Testimoni', href: '#testimonials' },
      { label: 'Brand', href: '#brands' },
      { label: 'Portofolio', href: '#portfolio' },
      { label: 'Kontak', href: '#contact' },
    ],
    brands: [
      {
        id: 2,
        name: 'Barengin',
        logo: barenginLogo,
        description:
          'Platform sosial yang menghubungkan orang-orang untuk berbagi aktivitas dan pengalaman bersama, memudahkan Anda menemukan teman untuk berbagai kesempatan.',
        website: 'https://barenginaja.com',
        instagram: 'https://instagram.com/barengintix',
      },
    ],
    uiText: {
      navbar: {
        languageButtonLabel: 'Bahasa',
        activeLabel: 'Aktif',
      },
      servicesSection: {
        label: 'Layanan Kami',
        title: 'Solusi yang Mendorong',
        highlight: 'Pertumbuhan Bisnis',
        ctaTitle: 'Butuh Solusi Khusus?',
        ctaButtonLabel: 'Mulai Proyek',
        audiencePrefix: 'Rekomendasi untuk:',
      },
      portfolioSection: {
        label: 'Portofolio Kami',
        title: 'Menampilkan',
        highlight: 'Karya Terbaik Kami',
        description:
          'Jelajahi portofolio kami yang beragam dari proyek-proyek sukses yang telah diselesaikan di berbagai industri dan teknologi.',
        visitLabel: 'Kunjungi',
      },
      aboutSection: {
        label: 'Testimoni',
        title: 'Apa Kata',
        highlight: 'Klien Kami',
        audienceLabel: 'Kami fokus pada:',
      },
      brandsSection: {
        label: 'Brand Kami',
        title: 'Perusahaan di Bawah',
        highlight: 'GNC Tech',
        clickToExpand: 'Klik untuk info lebih lanjut',
        descriptionTitlePrefix: 'Tentang',
        closeAriaLabel: 'Tutup',
        websiteAriaPrefix: 'Kunjungi website',
        instagramAriaPrefix: 'Instagram',
      },
      contactSection: {
        label: 'Hubungi Kami',
        title: 'Mari Bangun Sesuatu',
        highlight: 'yang Luar Biasa Bersama',
        description:
          'Siap memulai proyek berikutnya? Hubungi kami dan mari diskusikan bagaimana kami dapat membantu mewujudkan visi Anda.',
        emailTitle: 'Email Kami',
        phoneTitle: 'Hubungi Kami',
        addressTitle: 'Kunjungi Kami',
        followTitle: 'Ikuti Kami',
        form: {
          nameLabel: 'Nama Anda',
          emailLabel: 'Alamat Email',
          companyLabel: 'Nama Perusahaan',
          messageLabel: 'Pesan Anda',
          submitLabel: 'Kirim Pesan',
          successLabel: 'Pesan terkirim',
          invalidResponse: 'Respon tidak valid dari server.',
          requestFailed: 'Gagal mengirim pesan.',
          genericError: 'Terjadi kesalahan saat mengirim pesan.',
        },
      },
      footerSection: {
        navTitle: 'Navigasi',
        contactTitle: 'Kontak',
        copyrightPrefix: 'Copyright',
        copyrightSuffix: 'Hak cipta dilindungi.',
      },
    },
  },
  en: {
    metadata: {
      title: 'GNC Tech | Technology & Business Solutions',
      description:
        'GNC Tech & Business Solutions helps SMEs to enterprises accelerate digital transformation through software, web, marketing, and business strategy services.',
    },
    companyInfo: {
      ...sharedCompanyInfo,
      tagline: 'Empowering Growth through Digital Transformation',
      description:
        'GNC Tech & Business Solutions integrates technology solutions and business strategy into one service ecosystem to help companies from SMEs to enterprises accelerate digital transformation and measurable growth.',
    },
    socialLinks,
    heroContent: {
      badge: 'Driving Digital Transformation',
      rotatingWords: ['Innovation', 'Growth', 'Success', 'Efficiency'],
      titleLeading: 'Building',
      titleTrailing: 'the Future',
      primaryActionLabel: 'See Our Work',
      secondaryActionLabel: 'Contact Us',
      statsPreview: [
        { number: '150+', label: 'Projects' },
        { number: '50+', label: 'Clients' },
        { number: '7+', label: 'Years' },
      ],
    },
    aboutContent: {
      sectionDescription:
        'GNC Tech & Business Solutions is an integrated service provider that combines technology innovation and business strategy to help organizations build a cleaner digital foundation that is ready to grow and compete.',
      positioningHint:
        'We act as a growth partner for organizations that want to transform their business in a pragmatic, effective, and sustainable way.',
    },
    executiveBrief: {
      vision:
        'To become a leading catalyst in an inclusive national digital ecosystem so every level of business can access modern technology.',
      mission:
        'Accelerating digital transformation through practical, efficient, and cost-competitive solutions without compromising quality.',
      positioning:
        'By combining technology, digital marketing, and business strategy, GNC Tech & Business Solutions becomes a growth partner for organizations pursuing pragmatic, effective, and sustainable digital transformation.',
    },
    valueDrivers: [
      {
        id: 'scalable',
        title: 'Scalable Solutions',
        description: 'Modular services that can grow alongside your business.',
      },
      {
        id: 'affordable',
        title: 'Affordable Excellence',
        description: 'Competitive pricing with implementation quality that stays high.',
      },
      {
        id: 'data-driven',
        title: 'Data-Driven Approach',
        description: 'Strategies built from data, measurement, and relevant insight.',
      },
    ],
    audienceSegments: [
      {
        id: 'sme',
        title: 'SMEs',
        description: 'Businesses moving from manual operations to cleaner digital systems.',
      },
      {
        id: 'startup',
        title: 'Scale-up Startups',
        description: 'Companies that need a strong technical foundation and growth channels.',
      },
      {
        id: 'enterprise',
        title: 'Established Enterprises',
        description: 'Large organizations that need system optimization and digital strategy.',
      },
    ],
    stats: [
      { number: 150, suffix: '+', label: 'Completed Projects' },
      { number: 50, suffix: '+', label: 'Happy Clients' },
      { number: 25, suffix: '', label: 'Team Members' },
      { number: 7, suffix: '+', label: 'Years of Experience' },
    ],
    services: [
      {
        id: 1,
        icon: 'Code2',
        title: 'Custom Software Development',
        description:
          'Internal apps, data systems, dashboards, and operational platforms tailored to your business needs.',
      },
      {
        id: 2,
        icon: 'Globe',
        title: 'Web Development',
        description:
          'Responsive landing pages, company websites, and e-commerce platforms to strengthen your digital presence.',
      },
      {
        id: 3,
        icon: 'Smartphone',
        title: 'Social Media Management',
        description:
          'Managed content, publishing calendars, and interactions to build a consistent brand reputation.',
      },
      {
        id: 4,
        icon: 'Cloud',
        title: 'Performance Marketing',
        description:
          'Measured paid campaigns that drive leads, conversions, and efficient revenue growth.',
      },
      {
        id: 5,
        icon: 'Shield',
        title: 'SEO & Content Strategy',
        description:
          'Search optimization and content strategy to strengthen visibility and customer acquisition.',
      },
      {
        id: 6,
        icon: 'Brain',
        title: 'Business Advisory',
        description:
          'Strategic consulting to remove operational bottlenecks and define execution priorities.',
      },
      {
        id: 7,
        icon: 'FileText',
        title: 'Business Planning',
        description:
          'Business plans, market research, and financial projections for more structured growth.',
      },
    ],
    projects: [
      {
        id: 1,
        title: 'Barengin',
        category: 'platform',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
        description:
          'A social platform that connects people to share activities and experiences together.',
        tech: ['React', 'React Router', 'Vercel', 'PWA', 'Sentry'],
        website: 'https://barenginaja.com',
      },
      {
        id: 2,
        title: 'Teelite Club',
        category: 'web',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
        description:
          'A premium community website offering exclusive memberships, events, and networking opportunities for professionals.',
        tech: ['React', 'React Router', 'Vercel', 'Lucide'],
        website: 'https://teeliteclub.com',
      },
      {
        id: 3,
        title: 'Cilegon Prima Ambara',
        category: 'web',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
        description:
          'A landing page that highlights the Cilegon Prima Ambara brand and services with a clean, conversion-focused design.',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Nginx'],
        website: 'https://primaambara.com/',
      },
      {
        id: 4,
        title: 'Website Iuran Perumnas Blok F',
        category: 'platform',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        description:
          'A resident portal to manage waste fees, security schedules, and neighborhood information in one centralized dashboard.',
        tech: ['Laravel', 'Inertia.js', 'PHP 8.3', 'Axios', 'Lodash', 'Bunny', 'Bunny Fonts', 'HSTS', 'Vercel'],
        website: 'https://www.perumnasf.com/',
      },
      {
        id: 5,
        title: 'Garapin',
        category: 'platform',
        image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&q=80',
        description:
          'An Indonesian freelance marketplace that connects clients and freelancers through escrow, professional tiers, and a transparent bidding flow.',
        tech: ['React', 'Next.js 16.1.6', 'Turbopack', 'Tailwind CSS', 'Radix UI', 'Lucide', 'core-js 3.37.1', 'Midtrans', 'Railway', 'Vercel', 'HSTS', 'Priority Hints'],
        website: 'https://garapin-alpha.vercel.app/',
      },
      {
        id: 6,
        title: 'And Many More...',
        description:
          'We have completed many other projects across technology, business, and digital marketing. Contact us to learn more.',
        tech: [],
        isSummaryCard: true,
      },
    ],
    categories: [
      { id: 'all', label: 'All Projects' },
      { id: 'platform', label: 'Platforms' },
      { id: 'web', label: 'Websites' },
    ],
    testimonials: [
      {
        ...sharedTestimonials[0],
        text: 'GNC Tech completely changed the way our business operates. The system they built is stable and easy for the whole team to use.',
      },
      {
        ...sharedTestimonials[1],
        text: 'Working with GNC Tech has been a smooth experience. They are responsive, professional, and always bring strong technical solutions.',
      },
      {
        ...sharedTestimonials[2],
        text: 'The mobile app delivered by GNC Tech exceeded our expectations. Performance is excellent and the design feels intuitive.',
      },
      {
        ...sharedTestimonials[3],
        text: 'We have worked with GNC Tech for three years. Their consistency in quality and after-sales support stands out.',
      },
      {
        ...sharedTestimonials[4],
        text: 'From concept to launch, the GNC Tech team stayed on track. Our e-commerce platform now handles thousands of transactions every day.',
      },
      {
        ...sharedTestimonials[5],
        text: 'The API integration built by GNC Tech is robust. Downtime is close to zero and the documentation is thorough.',
      },
    ],
    navLinks: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Brands', href: '#brands' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Contact', href: '#contact' },
    ],
    brands: [
      {
        id: 2,
        name: 'Barengin',
        logo: barenginLogo,
        description:
          'A social platform that helps people find companions for activities and shared experiences more easily.',
        website: 'https://barenginaja.com',
        instagram: 'https://instagram.com/barengintix',
      },
    ],
    uiText: {
      navbar: {
        languageButtonLabel: 'Language',
        activeLabel: 'Active',
      },
      servicesSection: {
        label: 'Our Services',
        title: 'Solutions That Drive',
        highlight: 'Business Growth',
        ctaTitle: 'Need a Custom Solution?',
        ctaButtonLabel: 'Start a Project',
        audiencePrefix: 'Recommended for:',
      },
      portfolioSection: {
        label: 'Our Portfolio',
        title: 'Showcasing',
        highlight: 'Our Best Work',
        description:
          'Explore a diverse portfolio of successful projects delivered across industries and technologies.',
        visitLabel: 'Visit',
      },
      aboutSection: {
        label: 'Testimonials',
        title: 'What',
        highlight: 'Our Clients Say',
        audienceLabel: 'We focus on:',
      },
      brandsSection: {
        label: 'Our Brands',
        title: 'Companies Under',
        highlight: 'GNC Tech',
        clickToExpand: 'Click for more details',
        descriptionTitlePrefix: 'About',
        closeAriaLabel: 'Close',
        websiteAriaPrefix: 'Visit website',
        instagramAriaPrefix: 'Instagram',
      },
      contactSection: {
        label: 'Contact Us',
        title: 'Let Us Build Something',
        highlight: 'Remarkable Together',
        description:
          'Ready to start the next project? Reach out and let us discuss how we can help bring your vision to life.',
        emailTitle: 'Email Us',
        phoneTitle: 'Call Us',
        addressTitle: 'Visit Us',
        followTitle: 'Follow Us',
        form: {
          nameLabel: 'Your Name',
          emailLabel: 'Email Address',
          companyLabel: 'Company Name',
          messageLabel: 'Your Message',
          submitLabel: 'Send Message',
          successLabel: 'Message sent',
          invalidResponse: 'Invalid response from the server.',
          requestFailed: 'Failed to send your message.',
          genericError: 'Something went wrong while sending your message.',
        },
      },
      footerSection: {
        navTitle: 'Navigation',
        contactTitle: 'Contact',
        copyrightPrefix: 'Copyright',
        copyrightSuffix: 'All rights reserved.',
      },
    },
  },
}

export const getSiteContent = (language = defaultLanguage) => siteContent[language] || siteContent[defaultLanguage]
