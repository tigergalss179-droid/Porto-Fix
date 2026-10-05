// ===== COMPREHENSIVE i18n TRANSLATION DICTIONARY =====
// Complete translations with nested structure for dot notation support

const translations = {
    // ===== INDONESIAN (Bahasa Indonesia) =====
    id: {
        // Navigation
        nav: {
            logo: 'Galih',
            home: 'Home',
            about: 'Tentang Saya',
            skills: 'Keahlian',
            portfolio: 'Portfolio',
            cv: 'CV'
        },
        
        // Home Page
        home: {
            hero: {
                name: 'Muhammad Galih Seto',
                tagline: 'Tertarik pada CyberSec dan Networking',
                description: 'Berfokus mengembangkan kemampuan di bidang network engineering sebagai persiapan menghadapi dunia kerja di industri IT.',
                btn_portfolio: 'Lihat Portfolio',
                btn_cv: 'Download CV'
            },
            card: {
                education: {
                    title: 'Pendidikan',
                    school: 'SMK N 7 Semarang',
                    major: 'Jurusan SIJA'
                },
                focus: {
                    title: 'Fokus',
                    text: 'Cyber Security',
                    sub: '& Networking'
                },
                goals: {
                    title: 'Cita-cita',
                    text: 'Bekerja di Luar Negeri',
                    sub: '& Traveling Dunia'
                },
                hint: 'Click untuk detail'
            }
        },
        
        // About Page
        about: {
            header: {
                title: 'Tentang Saya',
                subtitle: 'Mengenal lebih dekat Muhammad Galih Seto'
            },
            family: {
                title: 'Riwayat Keluarga',
                child: 'Anak ke 2 dari 3 bersaudara',
                father: 'Ayah:',
                father_job: 'Swasta (sekarang Driver Ojol)',
                mother: 'Ibu:',
                mother_job: 'Perawat di RS St. Elisabeth Semarang'
            },
            education: {
                title: 'Riwayat Pendidikan',
                paud: 'PAUD Hidayattullah Tuksongo',
                sd: 'SD N 3 Tuksongo',
                smp: 'SMP N 21 Semarang',
                smk: 'SMK N 7 Semarang',
                smk_major: 'Jurusan SIJA (Sekarang)'
            },
            hobby: {
                title: 'Hobi',
                football: 'Bermain Bola',
                workout: 'Workout',
                music: 'Mendengar Musik',
                cycling: 'Bersepeda',
                gaming: 'Bermain Game'
            },
            interest: {
                title: 'Minat',
                cyber: 'Menguasai keamanan cyber networking',
                network: 'Mengatur/konfigurasi networking',
                coding: 'Paham beberapa bahasa coding (Python)'
            },
            dream: {
                title: 'Cita-cita',
                work: 'Bekerja dan Tinggal di luar negeri',
                travel: 'Traveling ke berbagai belahan dunia'
            },
            strength: {
                title: 'Kelebihan Diri',
                soft_title: 'Soft Skills',
                soft1: 'Mampu beradaptasi dengan cepat',
                soft2: 'Disiplin',
                soft3: 'Konsistensi yang tinggi',
                soft4: 'Tidak mudah tertekan',
                soft5: 'Santai saat menghadapi masalah',
                hard_title: 'Hard Skills',
                hard1: 'Dasar-dasar networking',
                hard2: 'Problem solving teknis',
                hard3: 'Sedikit paham sistem komputer'
            },
            beyond: {
                title: 'Beyond Tech',
                subtitle: 'Kehidupan dan kegiatan di luar teknologi yang membentuk karakter saya',
                gym_title: 'Gym & Workout',
                gym_context: 'Disiplin & Konsistensi',
                gym_desc: 'Melalui latihan rutin di gym, saya belajar pentingnya disiplin dan konsistensi. Setiap sesi workout mengajarkan saya untuk tetap fokus pada tujuan dan tidak mudah menyerah.',
                cycling_title: 'Bersepeda',
                cycling_context: 'Endurance & Lifestyle Sehat',
                cycling_desc: 'Bersepeda mengajarkan saya tentang ketahanan dan pentingnya menjaga gaya hidup sehat. Setiap perjalanan adalah tantangan untuk meningkatkan stamina dan menikmati prosesnya.',
                travel_title: 'Liburan & Traveling',
                travel_context: 'Eksplorasi & Adaptasi',
                travel_desc: 'Traveling membuka wawasan saya tentang berbagai budaya dan cara hidup. Kemampuan beradaptasi dengan lingkungan baru adalah skill yang sangat berharga.',
                note: 'Aktivitas di luar teknologi ini membantu saya menjadi pribadi yang lebih seimbang, disiplin, dan adaptif - kualitas yang juga saya terapkan dalam dunia teknologi dan networking.'
            }
        },
        
        // Skills Page
        skills: {
            header: {
                title: 'Keahlian Saya',
                subtitle: 'Kemampuan teknis yang saya kuasai'
            },
            technical: {
                html_desc: 'Memahami struktur dasar website dan pembuatan layout sederhana menggunakan HTML.',
                css_desc: 'Membuat tampilan website sederhana dengan styling dasar, layout, dan responsive design.',
                js_desc: 'Memahami dasar interaksi website menggunakan JavaScript sederhana.',
                cisco: 'Cisco Packet Tracer',
                cisco_desc: 'Membuat simulasi topologi jaringan, konfigurasi routing dasar, dan pengujian konektivitas jaringan.',
                editing: 'Editing (Canva, dll)',
                editing_desc: 'Mendesain visual, poster, dan melakukan editing konten sederhana menggunakan Canva dan tools editing lainnya.',
                networking: 'Networking',
                networking_desc: 'Memahami dasar jaringan komputer, IP addressing, routing dasar, dan troubleshooting jaringan sederhana.'
            },
            info: {
                learning_title: 'Terus Belajar',
                learning_desc: 'Saya selalu berusaha meningkatkan kemampuan saya melalui praktik dan pembelajaran berkelanjutan',
                focus_title: 'Fokus Pengembangan',
                focus_desc: 'Saat ini fokus mengembangkan keahlian di bidang Cyber Security dan Networking'
            }
        },
        
        // Portfolio Page
        portfolio: {
            header: {
                title: 'Portfolio Saya',
                subtitle: 'Karya dan proyek yang telah saya kerjakan'
            },
            project: {
                mug: {
                    title: 'Desain Mug',
                    cta: 'Klik untuk Lihat Galeri',
                    desc: 'Tugas jurusan ketika membuat desain untuk Mug. Proyek ini menunjukkan kemampuan saya dalam desain grafis dan kreativitas visual.',
                    button: 'Lihat Galeri (2 Foto)'
                },
                website: {
                    title: 'Website Kelompok',
                    cta: 'Lihat Detail',
                    desc: 'Tugas jurusan membuat website secara berkelompok, temanya journal game dan reviewnya. Website ini menampilkan berbagai review dan informasi tentang game.',
                    button: 'Lihat Website'
                },
                shop: {
                    title: 'Online Shop',
                    cta: 'Kunjungi Toko',
                    desc: 'Toko online pribadi yang menjual berbagai produk menarik. Platform ini menunjukkan kemampuan saya dalam mengelola bisnis online dan memberikan layanan kepada pelanggan.',
                    button: 'Kunjungi Toko'
                }
            },
            category: {
                design: 'Design',
                web_dev: 'Web Development',
                ecommerce: 'E-Commerce'
            },
            tag: {
                graphic_design: 'Graphic Design',
                product_design: 'Product Design',
                team_project: 'Team Project',
                ecommerce: 'E-Commerce',
                online_business: 'Online Business',
                customer_service: 'Customer Service'
            },
            cta: {
                title: 'Tertarik Berkolaborasi?',
                subtitle: 'Saya terbuka untuk proyek baru dan kolaborasi menarik',
                button: 'Hubungi Saya'
            },
            gallery: {
                title: 'Desain Mug - Galeri',
                before: 'Desain Sebelum Jadi',
                after: 'Hasil Jadi'
            }
        },
        
        // CV Page
        cv: {
            header: {
                title: 'Curriculum Vitae',
                subtitle: 'Profil profesional dan pengalaman saya'
            },
            contact: {
                title: 'Kontak'
            },
            skills: {
                networking_title: 'Networking',
                networking1: 'Cisco Packet Tracer',
                networking2: 'Routing Dasar',
                networking3: 'Troubleshooting Jaringan',
                networking4: 'Konfigurasi Dasar Jaringan',
                web_title: 'Web Dasar',
                web3: 'JavaScript Dasar'
            },
            tools: {
                title: 'Tools'
            },
            interest: {
                title: 'Minat & Aktivitas',
                cycling: 'Bersepeda',
                tech: 'Teknologi',
                music: 'Musik'
            },
            personal: {
                name: 'Muhammad Galih Seto',
                tagline: 'Pelajar SIJA | Fokus pada Networking & Infrastruktur IT'
            },
            about: {
                title: 'Tentang Saya',
                description: 'Pelajar SMK jurusan SIJA dengan fokus pada bidang jaringan komputer dan infrastruktur IT. Memiliki ketertarikan dalam konfigurasi jaringan, simulasi routing menggunakan Cisco Packet Tracer, serta pengembangan kemampuan teknis melalui praktik langsung dan pembelajaran mandiri. Saat ini juga sedang mempelajari dasar cyber security melalui platform TryHackMe untuk memperluas pemahaman mengenai keamanan jaringan dan sistem.'
            },
            expertise: {
                title: 'Keahlian Utama',
                network_title: 'Networking & Infrastruktur',
                network1: 'Routing dasar (OSPF)',
                network2: 'Konfigurasi jaringan dasar',
                network3: 'IP Addressing',
                network4: 'Troubleshooting jaringan dasar',
                network5: 'Simulasi topologi menggunakan Cisco Packet Tracer',
                security_title: 'Cyber Security Dasar',
                security1: 'Dasar keamanan jaringan',
                security2: 'SQL Injection dasar',
                security3: 'Pengenalan vulnerability testing',
                security4: 'Pembelajaran mandiri melalui TryHackMe',
                web_title: 'Web Development Dasar',
                web3: 'JavaScript dasar',
                web4: 'Pembuatan website personal sederhana',
                editing_title: 'Editing & Desain',
                editing1: 'Editing video menggunakan CapCut',
                editing2: 'Desain visual menggunakan Canva',
                editing3: 'Pembuatan presentasi dan konten sederhana'
            },
            education: {
                title: 'Pendidikan',
                smk: 'SMK Negeri 7 Semarang',
                smk_period: '2024 - Sekarang',
                smk_major: 'SIJA (Sistem Informatika, Jaringan & Aplikasi)',
                smk_desc1: 'Fokus pada pembelajaran jaringan komputer dan infrastruktur IT',
                smk_desc2: 'Aktif melakukan praktik simulasi jaringan menggunakan Cisco Packet Tracer',
                smk_desc3: 'Sedang menempuh pembelajaran mandiri cyber security melalui platform TryHackMe',
                smp: 'SMP Negeri 21 Semarang',
                smp_period: '2021 - 2024'
            },
            projects: {
                title: 'Proyek & Pengalaman',
                network_title: 'Simulasi Dynamic Routing OSPF',
                network_desc1: 'Membuat topologi jaringan menggunakan Cisco Packet Tracer',
                network_desc2: 'Mengkonfigurasi routing OSPF antar router',
                network_desc3: 'Melakukan pengujian konektivitas jaringan',
                website_title: 'Website Personal Branding',
                website_desc1: 'Mendesain dan mengembangkan website personal bertema networking dan teknologi',
                website_desc2: 'Mengembangkan tampilan interaktif dengan konsep modern dan futuristik'
            },
            goals: {
                title: 'Tujuan Karier',
                description: 'Berfokus mengembangkan kemampuan di bidang network engineering dan infrastruktur IT sebagai persiapan untuk berkarier di lingkungan kerja internasional.'
            },
            download: 'Download CV (PDF)'
        },
        
        // Sidebar
        sidebar: {
            title: 'Quick Links',
            phone_title: 'My Phone',
            phone_open: 'Open My Phone',
            contact_title: 'Contact'
        },
        
        // Footer
        footer: {
            copyright: 'Made with ❤️ by Muhammad Galih Seto © 2026',
            subtitle: 'Thanks for visiting! Feel free to reach out 🚀'
        }
    },
    
    // ===== ENGLISH =====
    en: {
        // Navigation
        nav: {
            logo: 'Galih',
            home: 'Home',
            about: 'About Me',
            skills: 'Skills',
            portfolio: 'Portfolio',
            cv: 'CV'
        },
        
        // Home Page
        home: {
            hero: {
                name: 'Muhammad Galih Seto',
                tagline: 'Interested in CyberSecurity and Networking',
                description: 'Focused on developing network engineering skills in preparation for entering the IT industry workforce.',
                btn_portfolio: 'View Portfolio',
                btn_cv: 'Download CV'
            },
            card: {
                education: {
                    title: 'Education',
                    school: 'SMK N 7 Semarang',
                    major: 'IT Networking Major'
                },
                focus: {
                    title: 'Focus',
                    text: 'Cyber Security',
                    sub: '& Networking'
                },
                goals: {
                    title: 'Goals',
                    text: 'Work Abroad',
                    sub: '& Travel the World'
                },
                hint: 'Click for details'
            }
        },
        
        // About Page
        about: {
            header: {
                title: 'About Me',
                subtitle: 'Get to know Muhammad Galih Seto better'
            },
            family: {
                title: 'Family Background',
                child: '2nd child of 3 siblings',
                father: 'Father:',
                father_job: 'Private sector (currently Ride-hailing Driver)',
                mother: 'Mother:',
                mother_job: 'Nurse at St. Elisabeth Hospital Semarang'
            },
            education: {
                title: 'Educational Background',
                paud: 'PAUD Hidayattullah Tuksongo',
                sd: 'SD N 3 Tuksongo Elementary School',
                smp: 'SMP N 21 Semarang Junior High',
                smk: 'SMK N 7 Semarang Vocational High',
                smk_major: 'IT Networking Major (Current)'
            },
            hobby: {
                title: 'Hobbies',
                football: 'Playing Football',
                workout: 'Workout',
                music: 'Listening to Music',
                cycling: 'Cycling',
                gaming: 'Gaming'
            },
            interest: {
                title: 'Interests',
                cyber: 'Mastering cyber network security',
                network: 'Network configuration and management',
                coding: 'Learning programming languages (Python)'
            },
            dream: {
                title: 'Career Goals',
                work: 'Work and live abroad',
                travel: 'Travel around the world'
            },
            strength: {
                title: 'Personal Strengths',
                soft_title: 'Soft Skills',
                soft1: 'Able to adapt quickly',
                soft2: 'Disciplined',
                soft3: 'High consistency',
                soft4: 'Resilient under pressure',
                soft5: 'Calm when facing problems',
                hard_title: 'Hard Skills',
                hard1: 'Networking fundamentals',
                hard2: 'Technical problem solving',
                hard3: 'Basic understanding of computer systems'
            },
            beyond: {
                title: 'Beyond Tech',
                subtitle: 'Life and activities outside technology that shape my character',
                gym_title: 'Gym & Workout',
                gym_context: 'Discipline & Consistency',
                gym_desc: 'Through regular gym training, I learned the importance of discipline and consistency. Each workout session teaches me to stay focused on goals and never give up.',
                cycling_title: 'Cycling',
                cycling_context: 'Endurance & Healthy Lifestyle',
                cycling_desc: 'Cycling teaches me about endurance and the importance of maintaining a healthy lifestyle. Each journey is a challenge to improve stamina and enjoy the process.',
                travel_title: 'Vacation & Traveling',
                travel_context: 'Exploration & Adaptation',
                travel_desc: 'Traveling broadens my perspective on various cultures and ways of life. The ability to adapt to new environments is an invaluable skill.',
                note: 'These activities outside technology help me become a more balanced, disciplined, and adaptive person - qualities that I also apply in the world of technology and networking.'
            }
        },
        
        // Skills Page
        skills: {
            header: {
                title: 'My Skills',
                subtitle: 'Technical capabilities I possess'
            },
            technical: {
                html_desc: 'Understanding basic website structure and simple layout creation using HTML.',
                css_desc: 'Creating simple website displays with basic styling, layout, and responsive design.',
                js_desc: 'Understanding basic website interaction using simple JavaScript.',
                cisco: 'Cisco Packet Tracer',
                cisco_desc: 'Creating network topology simulations, basic routing configuration, and network connectivity testing.',
                editing: 'Editing (Canva, etc.)',
                editing_desc: 'Designing visuals, posters, and performing simple content editing using Canva and other editing tools.',
                networking: 'Networking',
                networking_desc: 'Understanding computer network basics, IP addressing, basic routing, and simple network troubleshooting.'
            },
            info: {
                learning_title: 'Continuous Learning',
                learning_desc: 'I always strive to improve my skills through practice and continuous learning',
                focus_title: 'Development Focus',
                focus_desc: 'Currently focused on developing expertise in Cyber Security and Networking'
            }
        },
        
        // Portfolio Page
        portfolio: {
            header: {
                title: 'My Portfolio',
                subtitle: 'Projects and works I have completed'
            },
            project: {
                mug: {
                    title: 'Mug Design',
                    cta: 'Click to View Gallery',
                    desc: 'School assignment to create a mug design. This project demonstrates my skills in graphic design and visual creativity.',
                    button: 'View Gallery (2 Photos)'
                },
                website: {
                    title: 'Group Website',
                    cta: 'View Details',
                    desc: 'School assignment to create a website in groups, themed around game journal and reviews. This website displays various reviews and information about games.',
                    button: 'View Website'
                },
                shop: {
                    title: 'Online Shop',
                    cta: 'Visit Store',
                    desc: 'Personal online store selling various attractive products. This platform demonstrates my ability to manage online business and provide customer service.',
                    button: 'Visit Store'
                }
            },
            category: {
                design: 'Design',
                web_dev: 'Web Development',
                ecommerce: 'E-Commerce'
            },
            tag: {
                graphic_design: 'Graphic Design',
                product_design: 'Product Design',
                team_project: 'Team Project',
                ecommerce: 'E-Commerce',
                online_business: 'Online Business',
                customer_service: 'Customer Service'
            },
            cta: {
                title: 'Interested in Collaborating?',
                subtitle: 'I\'m open to new projects and interesting collaborations',
                button: 'Contact Me'
            },
            gallery: {
                title: 'Mug Design - Gallery',
                before: 'Design Before Production',
                after: 'Final Result'
            }
        },
        
        // CV Page
        cv: {
            header: {
                title: 'Curriculum Vitae',
                subtitle: 'My professional profile and experience'
            },
            contact: {
                title: 'Contact'
            },
            skills: {
                networking_title: 'Networking',
                networking1: 'Cisco Packet Tracer',
                networking2: 'Basic Routing',
                networking3: 'Network Troubleshooting',
                networking4: 'Basic Network Configuration',
                web_title: 'Web Basics',
                web3: 'Basic JavaScript'
            },
            tools: {
                title: 'Tools'
            },
            interest: {
                title: 'Interests & Activities',
                cycling: 'Cycling',
                tech: 'Technology',
                music: 'Music'
            },
            personal: {
                name: 'Muhammad Galih Seto',
                tagline: 'IT Networking Student | Focus on Networking & IT Infrastructure'
            },
            about: {
                title: 'About Me',
                description: 'Vocational high school student majoring in IT Networking with a focus on computer networking and IT infrastructure. Interested in network configuration, routing simulation using Cisco Packet Tracer, and developing technical skills through hands-on practice and self-learning. Currently also learning basic cyber security through TryHackMe platform to expand understanding of network and system security.'
            },
            expertise: {
                title: 'Key Expertise',
                network_title: 'Networking & Infrastructure',
                network1: 'Basic routing (OSPF)',
                network2: 'Basic network configuration',
                network3: 'IP Addressing',
                network4: 'Basic network troubleshooting',
                network5: 'Topology simulation using Cisco Packet Tracer',
                security_title: 'Basic Cyber Security',
                security1: 'Network security fundamentals',
                security2: 'Basic SQL Injection',
                security3: 'Introduction to vulnerability testing',
                security4: 'Self-learning through TryHackMe',
                web_title: 'Basic Web Development',
                web3: 'Basic JavaScript',
                web4: 'Creating simple personal websites',
                editing_title: 'Editing & Design',
                editing1: 'Video editing using CapCut',
                editing2: 'Visual design using Canva',
                editing3: 'Creating presentations and simple content'
            },
            education: {
                title: 'Education',
                smk: 'SMK Negeri 7 Semarang',
                smk_period: '2024 - Present',
                smk_major: 'SIJA (Information Systems, Networking & Applications)',
                smk_desc1: 'Focus on learning computer networking and IT infrastructure',
                smk_desc2: 'Actively practicing network simulation using Cisco Packet Tracer',
                smk_desc3: 'Currently pursuing self-learning in cyber security through TryHackMe platform',
                smp: 'SMP Negeri 21 Semarang',
                smp_period: '2021 - 2024'
            },
            projects: {
                title: 'Projects & Experience',
                network_title: 'Dynamic Routing OSPF Simulation',
                network_desc1: 'Creating network topology using Cisco Packet Tracer',
                network_desc2: 'Configuring OSPF routing between routers',
                network_desc3: 'Performing network connectivity testing',
                website_title: 'Personal Branding Website',
                website_desc1: 'Designing and developing a personal website themed around networking and technology',
                website_desc2: 'Developing interactive displays with modern and futuristic concepts'
            },
            goals: {
                title: 'Career Goals',
                description: 'Focused on developing capabilities in network engineering and IT infrastructure as preparation for a career in an international work environment.'
            },
            download: 'Download CV (PDF)'
        },
        
        // Sidebar
        sidebar: {
            title: 'Quick Links',
            phone_title: 'My Phone',
            phone_open: 'Open My Phone',
            contact_title: 'Contact'
        },
        
        // Footer
        footer: {
            copyright: 'Made with ❤️ by Muhammad Galih Seto © 2026',
            subtitle: 'Thanks for visiting! Feel free to reach out 🚀'
        }
    }
};

// Export untuk digunakan di script.js
if (typeof window !== 'undefined') {
    window.translations = translations;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
