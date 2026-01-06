
import type { IconKey } from '@/components/icons';

export const contactDetails = {
  phone: '+90 555 000 00 00',
  address: 'Nişantaşı, Istanbul (Demo Location)',
  workingHours: 'Mon-Sat: 09:00 - 19:00',
  whatsappUrl: 'https://wa.me/905550000000', // Replace with your actual WhatsApp number
};

export type Treatment = {
  slug: string;
  icon: IconKey;
  imagePlaceholder: string;
  title: { en: string; tr: string };
  short: { en: string; tr: string };
  sections: {
    what_it_is: { en: string; tr: string };
    who_it_is_for: { en: string; tr: string };
    how_it_works: { en: string; tr: string };
    aftercare: { en: string; tr: string };
  };
  timeline: {
    title: { en: string; tr: string };
    steps: {
      name: { en: string; tr: string };
      description: { en: string; tr: string };
    }[];
  };
};

export const treatments: Treatment[] = [
  {
    slug: 'dental-implants',
    icon: 'implant',
    imagePlaceholder: 'treatment-implant',
    title: { en: 'Dental Implants', tr: 'İmplant Tedavisi' },
    short: {
      en: 'A permanent solution for missing teeth that looks and feels natural.',
      tr: 'Eksik dişler için doğal görünen ve hissettiren kalıcı bir çözüm.',
    },
    sections: {
      what_it_is: {
        en: 'A dental implant is a titanium post that replaces the root of a missing tooth. It is surgically placed into the jawbone, providing a strong foundation for a fixed or removable replacement tooth.',
        tr: 'Diş implantı, eksik bir dişin kökünün yerini alan bir titanyum vidadır. Cerrahi olarak çene kemiğine yerleştirilir ve sabit veya çıkarılabilir bir protez diş için güçlü bir temel sağlar.',
      },
      who_it_is_for: {
        en: 'Ideal for individuals with one or more missing teeth who have adequate jawbone density and good oral health. It is an alternative to bridges or dentures.',
        tr: 'Yeterli çene kemiği yoğunluğuna ve iyi ağız sağlığına sahip, bir veya daha fazla eksik dişi olan kişiler için idealdir. Köprülere veya takma dişlere bir alternatiftir.',
      },
      how_it_works: {
        en: 'The process involves multiple stages: consultation and planning, implant placement surgery, a healing period for osseointegration, and finally, the attachment of the custom-made crown.',
        tr: 'Süreç birkaç aşamadan oluşur: konsültasyon ve planlama, implant yerleştirme ameliyatı, osseointegrasyon için bir iyileşme süresi ve son olarak, özel yapım kuronun takılması.',
      },
      aftercare: {
        en: 'Proper oral hygiene, including regular brushing, flossing, and dental check-ups, is crucial for the long-term success of your dental implant.',
        tr: 'Düzenli fırçalama, diş ipi kullanımı ve diş hekimi kontrolleri dahil olmak üzere uygun ağız hijyeni, diş implantınızın uzun vadeli başarısı için çok önemlidir.',
      },
    },
    timeline: {
      title: { en: 'Implant Journey', tr: 'İmplant Yolculuğu' },
      steps: [
        { name: { en: 'Consultation & 3D Scan', tr: 'Danışma ve 3D Tarama' }, description: { en: 'Initial assessment and precise planning.', tr: 'İlk değerlendirme ve hassas planlama.' } },
        { name: { en: 'Implant Placement', tr: 'İmplant Yerleştirme' }, description: { en: 'Surgical placement of the titanium post.', tr: 'Titanyum vidanın cerrahi olarak yerleştirilmesi.' } },
        { name: { en: 'Crown Attachment', tr: 'Kuron Takılması' }, description: { en: 'Attaching your new, custom-made tooth.', tr: 'Yeni, özel yapım dişinizin takılması.' } },
      ],
    },
  },
  // Add other 5 treatments with similar structure
  {
    slug: 'teeth-whitening',
    icon: 'whitening',
    imagePlaceholder: 'treatment-whitening',
    title: { en: 'Teeth Whitening', tr: 'Diş Beyazlatma' },
    short: { en: 'Brighten your smile with our professional in-office whitening treatment.', tr: 'Profesyonel ofis tipi beyazlatma tedavimizle gülüşünüzü aydınlatın.' },
    sections: {
      what_it_is: { en: 'A cosmetic procedure that lightens teeth and helps to remove stains and discoloration.', tr: 'Dişleri aydınlatan ve lekeleri ve renk bozulmalarını gidermeye yardımcı olan kozmetik bir prosedür.' },
      who_it_is_for: { en: 'Anyone looking for a brighter, more confident smile. Most effective on surface stains from coffee, tea, or smoking.', tr: 'Daha parlak, daha özgüvenli bir gülümseme arayan herkes için. Kahve, çay veya sigaradan kaynaklanan yüzey lekelerinde en etkilidir.' },
      how_it_works: { en: 'A professional-grade bleaching agent is applied to the teeth, often activated by a special light, to break down stains.', tr: 'Lekeleri parçalamak için genellikle özel bir ışıkla aktive edilen profesyonel düzeyde bir beyazlatma ajanı dişlere uygulanır.' },
      aftercare: { en: 'Avoid staining foods and beverages for a few days after treatment. Maintain good oral hygiene to prolong results.', tr: 'Tedaviden sonra birkaç gün leke yapıcı yiyecek ve içeceklerden kaçının. Sonuçları uzatmak için iyi ağız hijyenini sürdürün.' },
    },
    timeline: {
        title: { en: 'Whitening Process', tr: 'Beyazlatma Süreci' },
        steps: [
            { name: { en: 'Cleaning & Prep', tr: 'Temizlik ve Hazırlık' }, description: { en: 'Professional cleaning to remove plaque.', tr: 'Plakları temizlemek için profesyonel temizlik.' } },
            { name: { en: 'Whitening Application', tr: 'Beyazlatma Uygulaması' }, description: { en: 'Application of the whitening gel.', tr: 'Beyazlatma jelinin uygulanması.' } },
            { name: { en: 'Final Results', tr: 'Sonuçlar' }, description: { en: 'Enjoy your new, brighter smile.', tr: 'Yeni, daha parlak gülüşünüzün tadını çıkarın.' } },
        ]
    }
  },
  {
    slug: 'orthodontics',
    icon: 'orthodontics',
    imagePlaceholder: 'treatment-orthodontics',
    title: { en: 'Orthodontics', tr: 'Ortodonti' },
    short: { en: 'Straighten your teeth and improve your bite with braces or clear aligners.', tr: 'Diş telleri veya şeffaf plaklarla dişlerinizi düzeltin ve ısırışınızı iyileştirin.' },
    sections: {
      what_it_is: { en: 'The branch of dentistry that corrects teeth and jaws that are positioned improperly.', tr: 'Yanlış konumlanmış dişleri ve çeneleri düzelten diş hekimliği dalı.' },
      who_it_is_for: { en: 'Children, teens, and adults with crooked teeth, crowding, or bite issues.', tr: 'Çarpık dişleri, çapraşıklığı veya ısırış sorunları olan çocuklar, gençler ve yetişkinler.' },
      how_it_works: { en: 'Braces or aligners apply gentle, consistent pressure over time to move teeth into the correct position.', tr: 'Diş telleri veya plaklar, dişleri doğru konuma getirmek için zamanla nazik, sürekli basınç uygular.' },
      aftercare: { en: 'Requires meticulous oral hygiene to clean around braces. Retainers are worn after treatment to maintain results.', tr: 'Diş tellerinin etrafını temizlemek için titiz ağız hijyeni gerektirir. Sonuçları korumak için tedaviden sonra pekiştirme apareyleri kullanılır.' },
    },
     timeline: {
        title: { en: 'Ortho Journey', tr: 'Ortodonti Yolculuğu' },
        steps: [
            { name: { en: 'Planning', tr: 'Planlama' }, description: { en: 'Impressions and x-rays to create your treatment plan.', tr: 'Tedavi planınızı oluşturmak için ölçüler ve röntgenler.' } },
            { name: { en: 'Active Treatment', tr: 'Aktif Tedavi' }, description: { en: 'Regular adjustments to braces or aligners.', tr: 'Diş teli veya plaklarda düzenli ayarlamalar.' } },
            { name: { en: 'Retention', tr: 'Pekiştirme' }, description: { en: 'Wearing retainers to keep your new smile perfectly aligned.', tr: 'Yeni gülüşünüzü mükemmel şekilde hizalı tutmak için pekiştirme apareyleri takmak.' } },
        ]
    }
  },
  {
    slug: 'cosmetic-dentistry',
    icon: 'cosmetic',
    imagePlaceholder: 'treatment-cosmetic',
    title: { en: 'Cosmetic Dentistry', tr: 'Estetik Diş Hekimliği' },
    short: { en: 'Enhance the appearance of your smile with veneers, bonding, and more.', tr: 'Porselen laminalar, bonding ve daha fazlasıyla gülüşünüzün görünümünü iyileştirin.' },
     sections: {
      what_it_is: { en: 'A range of dental treatments focused on improving the aesthetics of your smile.', tr: 'Gülüşünüzün estetiğini iyileştirmeye odaklanan bir dizi diş tedavisi.' },
      who_it_is_for: { en: 'Anyone unhappy with the appearance of their teeth due to chips, gaps, stains, or shape.', tr: 'Kırıklar, boşluklar, lekeler veya şekil nedeniyle dişlerinin görünümünden memnun olmayan herkes.' },
      how_it_works: { en: 'Treatments can include veneers (thin shells bonded to teeth), bonding (tooth-colored resin), and gum contouring.', tr: 'Tedaviler porselen laminaları (dişlere yapıştırılan ince kabuklar), bonding (diş renginde reçine) ve diş eti şekillendirmeyi içerebilir.' },
      aftercare: { en: 'Maintain good oral hygiene and attend regular check-ups to ensure the longevity of your cosmetic enhancements.', tr: 'Kozmetik iyileştirmelerinizin uzun ömürlü olmasını sağlamak için iyi ağız hijyenini sürdürün ve düzenli kontrollere gidin.' },
    },
    timeline: {
        title: { en: 'Smile Design', tr: 'Gülüş Tasarımı' },
        steps: [
            { name: { en: 'Consultation', tr: 'Danışma' }, description: { en: 'Discussing your goals and creating a custom smile design.', tr: 'Hedeflerinizi tartışmak ve özel bir gülüş tasarımı oluşturmak.' } },
            { name: { en: 'Procedure', tr: 'Uygulama' }, description: { en: 'Applying veneers, bonding, or other chosen treatments.', tr: 'Porselen laminalar, bonding veya diğer seçilen tedavileri uygulamak.' } },
            { name: { en: 'Reveal', tr: 'Yeni Gülüş' }, description: { en: 'Enjoying your beautiful, new smile.', tr: 'Güzel, yeni gülüşünüzün tadını çıkarmak.' } },
        ]
    }
  },
  {
    slug: 'pediatric-dentistry',
    icon: 'pediatric',
    imagePlaceholder: 'treatment-pediatric',
    title: { en: 'Pediatric Dentistry', tr: 'Pedodonti (Çocuk Diş Hekimliği)' },
    short: { en: 'Gentle and friendly dental care for children from infancy through adolescence.', tr: 'Bebeklikten ergenliğe kadar çocuklar için nazik ve arkadaşça diş bakımı.' },
    sections: {
      what_it_is: { en: 'Specialized dental care for children, focusing on prevention, education, and positive experiences.', tr: 'Çocuklar için önleme, eğitim ve olumlu deneyimlere odaklanan özel diş bakımı.' },
      who_it_is_for: { en: 'Infants, children, and teenagers.', tr: 'Bebekler, çocuklar ve gençler.' },
      how_it_works: { en: 'We provide routine check-ups, cleanings, fluoride treatments, and address any developmental issues in a child-friendly environment.', tr: 'Çocuk dostu bir ortamda rutin kontroller, temizlikler, florür tedavileri sağlıyor ve gelişimsel sorunları ele alıyoruz.' },
      aftercare: { en: 'Educating both parents and children on proper brushing techniques and diet to ensure a lifetime of healthy smiles.', tr: 'Ömür boyu sağlıklı gülüşler sağlamak için hem ebeveynleri hem de çocukları doğru fırçalama teknikleri ve diyet konusunda eğitmek.' },
    },
    timeline: {
        title: { en: 'Child\'s First Visit', tr: 'Çocuğun İlk Ziyareti' },
        steps: [
            { name: { en: 'Friendly Welcome', tr: 'Arkadaşça Karşılama' }, description: { en: 'Making your child feel comfortable and safe.', tr: 'Çocuğunuzun rahat ve güvende hissetmesini sağlamak.' } },
            { name: { en: 'Gentle Check-up', tr: 'Nazik Kontrol' }, description: { en: 'A fun and easy examination of their teeth.', tr: 'Dişlerinin eğlenceli ve kolay bir muayenesi.' } },
            { name: { en: 'Education & Prize', tr: 'Eğitim ve Ödül' }, description: { en: 'Teaching good habits and rewarding their bravery.', tr: 'İyi alışkanlıklar öğretmek ve cesaretlerini ödüllendirmek.' } },
        ]
    }
  },
  {
    slug: 'root-canal-therapy',
    icon: 'rootcanal',
    imagePlaceholder: 'treatment-rootcanal',
    title: { en: 'Root Canal Therapy', tr: 'Kanal Tedavisi' },
    short: { en: 'Save your natural tooth and relieve pain with endodontic treatment.', tr: 'Endodontik tedavi ile doğal dişinizi kurtarın ve ağrıyı giderin.' },
    sections: {
      what_it_is: { en: 'A treatment to repair and save a badly damaged or infected tooth instead of removing it.', tr: 'Kötü hasar görmüş veya enfekte olmuş bir dişi çıkarmak yerine onarmak ve kurtarmak için bir tedavi.' },
      who_it_is_for: { en: 'Patients with an infected or inflamed tooth pulp, often causing severe toothache.', tr: 'Genellikle şiddetli diş ağrısına neden olan, enfekte veya iltihaplı diş pulpası olan hastalar.' },
      how_it_works: { en: 'The infected pulp is removed, the inside of the tooth is cleaned and disinfected, then filled and sealed.', tr: 'Enfekte pulpa çıkarılır, dişin içi temizlenir ve dezenfekte edilir, ardından doldurulur ve kapatılır.' },
      aftercare: { en: 'A crown is often placed on the tooth to protect it and restore its function. Good oral hygiene is essential.', tr: 'Dişi korumak ve işlevini geri kazandırmak için genellikle dişe bir kuron yerleştirilir. İyi ağız hijyeni esastır.' },
    },
    timeline: {
        title: { en: 'Root Canal Steps', tr: 'Kanal Tedavisi Adımları' },
        steps: [
            { name: { en: 'Diagnosis & X-Ray', tr: 'Teşhis ve Röntgen' }, description: { en: 'Confirming the need for treatment.', tr: 'Tedavi ihtiyacını onaylamak.' } },
            { name: { en: 'Pulp Removal & Cleaning', tr: 'Pulpa Çıkarma ve Temizleme' }, description: { en: 'Removing infection and cleaning the canals.', tr: 'Enfeksiyonu çıkarmak ve kanalları temizlemek.' } },
            { name: { en: 'Filling & Sealing', tr: 'Doldurma ve Kapatma' }, description: { en: 'Sealing the tooth, often followed by a crown.', tr: 'Dişi kapatmak, genellikle bir kuron ile takip edilir.' } },
        ]
    }
  },
];


export type Doctor = {
    id: number;
    name: string;
    imagePlaceholder: string;
    title: { en: string; tr: string };
    specialties: { en: string; tr: string }[];
    bio: { en: string; tr: string };
};

export const doctors: Doctor[] = [
    {
        id: 1,
        name: 'Dr. Aida Tunç',
        imagePlaceholder: 'doctor-1',
        title: { en: 'General & Cosmetic Dentist', tr: 'Genel ve Estetik Diş Hekimi' },
        specialties: [
            { en: 'Cosmetic Dentistry', tr: 'Estetik Diş Hekimliği' },
            { en: 'Teeth Whitening', tr: 'Diş Beyazlatma' },
        ],
        bio: {
            en: 'Dr. Tunç is passionate about creating beautiful smiles. With over 10 years of experience, she combines artistry with science to deliver outstanding results.',
            tr: 'Dr. Tunç, güzel gülüşler yaratma konusunda tutkuludur. 10 yılı aşkın tecrübesiyle, olağanüstü sonuçlar elde etmek için sanatı bilimle birleştirir.',
        },
    },
    {
        id: 2,
        name: 'Dr. Barış Özer',
        imagePlaceholder: 'doctor-2',
        title: { en: 'Implantologist & Oral Surgeon', tr: 'İmplantolog ve Ağız Cerrahı' },
        specialties: [
            { en: 'Dental Implants', tr: 'Diş İmplantları' },
            { en: 'Oral Surgery', tr: 'Ağız Cerrahisi' },
        ],
        bio: {
            en: 'An expert in dental implants and complex surgical procedures, Dr. Özer is dedicated to restoring function and aesthetics with precision and care.',
            tr: 'Diş implantları ve karmaşık cerrahi prosedürlerde uzman olan Dr. Özer, işlevi ve estetiği hassasiyet ve özenle restore etmeye kendini adamıştır.',
        },
    },
    {
        id: 3,
        name: 'Dr. Elif Kaya',
        imagePlaceholder: 'doctor-3',
        title: { en: 'Orthodontist', tr: 'Ortodontist' },
        specialties: [
            { en: 'Orthodontics', tr: 'Ortodonti' },
            { en: 'Clear Aligners', tr: 'Şeffaf Plaklar' },
        ],
        bio: {
            en: 'Dr. Kaya specializes in creating perfectly aligned smiles for patients of all ages. She is an expert in both traditional braces and modern clear aligner technology.',
            tr: 'Dr. Kaya, her yaştan hasta için mükemmel hizalanmış gülüşler yaratma konusunda uzmanlaşmıştır. Hem geleneksel diş tellerinde hem de modern şeffaf plak teknolojisinde uzmandır.',
        },
    },
];

export type Testimonial = {
    id: number;
    name: string;
    imagePlaceholder: string;
    quote: { en: string; tr: string };
    treatment: { en: string; tr: string };
};

export const testimonials: Testimonial[] = [
  { id: 1, name: 'Ayşe Y.', imagePlaceholder: 'testimonial-1', quote: { en: 'The best dental experience I have ever had. The clinic is so clean and the staff is incredibly friendly. My new smile is perfect!', tr: 'Şimdiye kadar yaşadığım en iyi diş hekimi deneyimi. Klinik çok temiz ve personel inanılmaz derecede arkadaş canlısı. Yeni gülüşüm mükemmel!' }, treatment: { en: 'Cosmetic Dentistry', tr: 'Estetik Diş Hekimliği' } },
  { id: 2, name: 'John D.', imagePlaceholder: 'testimonial-2', quote: { en: 'I was very nervous about getting an implant, but Dr. Özer made the process completely painless and comfortable. Highly recommended!', tr: 'İmplant yaptırma konusunda çok gergindim ama Dr. Özer süreci tamamen acısız ve konforlu hale getirdi. Kesinlikle tavsiye ederim!' }, treatment: { en: 'Dental Implant', tr: 'Diş İmplantı' } },
  { id: 3, name: 'Fatma K.', imagePlaceholder: 'testimonial-3', quote: { en: 'My daughter loves coming to the dentist now! The pediatric team is amazing with children. Thank you, Mentack!', tr: 'Kızım artık diş hekimine gelmeyi seviyor! Pedodonti ekibi çocuklarla harika anlaşıyor. Teşekkürler Mentack!' }, treatment: { en: 'Pediatric Dentistry', tr: 'Pedodonti' } },
];


export type FaqItem = {
    id: string;
    question: { en: string; tr: string };
    answer: { en: string; tr: string };
};

export const faqs: FaqItem[] = [
    { id: 'faq-1', question: { en: 'Are dental treatments painful?', tr: 'Diş tedavileri acı verir mi?' }, answer: { en: 'We use modern anesthesia and techniques to ensure your comfort. Most patients report little to no pain during procedures.', tr: 'Konforunuzu sağlamak için modern anestezi ve teknikler kullanıyoruz. Çoğu hasta, işlemler sırasında çok az acı hissettiğini veya hiç hissetmediğini bildirmektedir.' } },
    { id: 'faq-2', question: { en: 'How do I book an appointment?', tr: 'Nasıl randevu alabilirim?' }, answer: { en: 'You can book an appointment by calling us, using the form on our contact page, or through WhatsApp.', tr: 'Bizi arayarak, iletişim sayfamızdaki formu kullanarak veya WhatsApp üzerinden randevu alabilirsiniz.' } },
    { id: 'faq-3', question: { en: 'What should I do in a dental emergency?', tr: 'Dişle ilgili bir acil durumda ne yapmalıyım?' }, answer: { en: 'Please call us immediately. We offer emergency appointments to address urgent issues like severe pain or trauma.', tr: 'Lütfen bizi hemen arayın. Şiddetli ağrı veya travma gibi acil sorunları gidermek için acil durum randevuları sunuyoruz.' } },
    { id: 'faq-4', question: { en: 'How important is hygiene and sterilization at your clinic?', tr: 'Kliniğinizde hijyen ve sterilizasyon ne kadar önemli?' }, answer: { en: 'It is our top priority. We follow strict international sterilization protocols to ensure the safety of our patients and staff.', tr: 'Bu bizim en büyük önceliğimizdir. Hastalarımızın ve personelimizin güvenliğini sağlamak için katı uluslararası sterilizasyon protokollerini takip ediyoruz.' } },
    { id: 'faq-5', question: { en: 'How long does a typical treatment take?', tr: 'Tipik bir tedavi ne kadar sürer?' }, answer: { en: 'Treatment duration varies greatly depending on the procedure. We will provide a detailed timeline during your consultation.', tr: 'Tedavi süresi prosedüre bağlı olarak büyük ölçüde değişir. Konsültasyonunuz sırasında ayrıntılı bir zaman çizelgesi sunacağız.' } },
    { id: 'faq-6', question: { en: 'Is my patient information kept confidential?', tr: 'Hasta bilgilerim gizli tutulur mu?' }, answer: { en: 'Absolutely. We adhere to strict confidentiality policies to protect your personal and medical information.', tr: 'Kesinlikle. Kişisel ve tıbbi bilgilerinizi korumak için katı gizlilik politikalarına bağlıyız.' } },
];
