export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Saya memprioritaskan keinginan customer",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/exp2.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Saya cepat merespon dalam komunikasi",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Bahasa yang saya kuasai",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "saya terus berusaha meningkatkan skill",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Saat ini saya sedang membuat website toko baju",
    description: "Project yang sedang saya buat",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Apakah anda tertarik berkolaborasi dengan saya?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "warung makaroni",
    des: "kunjungi untuk melihat project pemesanan warung makaroni ",
    img: "/makaroni.svg",
    iconLists: ["/php.svg", "/mysql.svg", "/javascript.svg"],
    link: "/warungmakaroni.co-id.id/customer/menu.php?meja=2",
  },
];

export const testimonials = [
  {
    quote:
      "Dengan sistem pemesanan QR Code ini, saya bisa memantau penjualan dan keuangan warung makaroni kapan saja, tanpa harus repot turun langsung. Semua lebih transparan dan efisien, fitur manager menu dan promo menu juga sangat membantu dalam mengatur strategi promosi dan memantau feedback customer, begitu juga dengan staff update pesanan menjadi lebih mudah, begitu ada order masuk dari QR Code, langsung bisa di proses membuat pekerjaan menjadi ringan.",
    name: "Fatimah Azzahra",
    title: "Pemilik warung makaroni",
    img: "/fatimah.svg",
  }
];

export const companies = [
  {
    id: 1,
    name: "chatgpt",
    img: "/gpt.svg",
    nameImg: "/gptname.svg",
  },
  {
    id: 2,
    name: "laravel",
    img: "/laravel.png",
    nameImg: "/laravelname.svg",
  },
  {
    id: 3,
    name: "PHP.ID",
    img: "/phpid.svg",
    nameImg: "/phpidname.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Membuat pengembangan website menggunakan Php, React.js, Laravel, MySQL.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Project pengembangan website freelance",
    desc: "Memimpin website yang ingin di buat oleh customer, dari konsep awal sampai penerapan website di lokasi.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "Backend Developer",
    desc: "Membangun bagian belakang website mengelola database, keamanan server dan API.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

// data social media
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/fahrulriadu22", // link GitHub
  },
  {
    id: 2,
    img: "/whatsapp.svg",
    url: "https://wa.me/+6281324001448",   // link WhatsApp
  },
  {
    id: 3,
    img: "/insta.svg",
    url: "https://instagram.com/riaduuuuu", // link Instagram
  },
];
