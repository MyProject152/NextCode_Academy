// بيانات الدورات
const courses = {
    python: {
        name: 'Python',
        icon: '🐍',
        description: 'مثالي للمبتدئين والذكاء الاصطناعي',
        color: 'from-blue-600 via-blue-500 to-cyan-400',
        instructor: 'م. أحمد محمود',
        instructorTitle: 'خبير الذكاء الاصطناعي',
        duration: '12 أسبوع',
        lessons: '48 محاضرة',
        courseDetails: 'تعلم Python من الصفر حتى الاحتراف مع التركيز على تطبيقات الذكاء الاصطناعي وتحليل البيانات. ستتعلم البرمجة الكائنية، المكتبات الأساسية، وبناء مشاريع حقيقية.'
    },
    javascript: {
        name: 'JavaScript',
        icon: '⚡',
        description: 'قوة تطوير الويب الحديث',
        color: 'from-yellow-500 via-orange-500 to-yellow-400',
        instructor: 'م. سارة عبدالله',
        instructorTitle: 'مطورة Full Stack',
        duration: '10 أسابيع',
        lessons: '40 محاضرة',
        courseDetails: 'أتقن JavaScript وتعلم بناء تطبيقات ويب تفاعلية. من الأساسيات حتى ES6+ والبرمجة غير المتزامنة والتعامل مع APIs.'
    },
    java: {
        name: 'Java',
        icon: '☕',
        description: 'عملاق التطبيقات المؤسسية',
        color: 'from-red-600 via-orange-600 to-red-400',
        instructor: 'المهندسة المبدعة هبه عبيد',
        instructorTitle: 'مهندسة انظمة الحاسوب',
        instructorImage: "Hiba.jpg",
        //duration: '14 أسبوع',
        //lessons: '56 محاضرة',
        courseDetails: 'دورة شاملة في Java تغطي OOP، Spring Framework، وبناء تطبيقات مؤسسية. مناسبة للراغبين في العمل بالشركات الكبرى.'
    },
    cpp: {
        name: 'C++',
        icon: '⚙️',
        description: 'أقوى لغة للأداء العالي',
        color: 'from-purple-600 via-pink-500 to-purple-400',
        instructor: 'المهندسة المبدعة الهام قصراوي',
        instructorTitle: 'مهندسة انظمة الحاسوب',
        instructorImage: "ilham.png",
        //duration: '16 أسبوع',
        //lessons: '64 محاضرة',
        courseDetails: 'تعلم C++ من الأساسيات حتى البرمجة المتقدمة. مثالي لتطوير الألعاب، الأنظمة المدمجة، والتطبيقات عالية الأداء.'
    },
    react: {
        name: 'React',
        icon: '⚛️',
        description: 'تقنية الواجهات الأكثر شعبية',
        color: 'from-cyan-500 via-blue-500 to-cyan-400',
        instructor: 'م. ليلى يوسف',
        instructorTitle: 'مطورة Frontend متخصصة',
        duration: '8 أسابيع',
        lessons: '32 محاضرة',
        courseDetails: 'أنشئ تطبيقات ويب عصرية باستخدام React. تعلم Hooks، State Management، والتكامل مع APIs لبناء واجهات مستخدم احترافية.'
    },
    html: {
        name: 'HTML/CSS',
        icon: '🎨',
        description: 'أساس كل مطور ويب ناجح',
        color: 'from-orange-500 via-red-500 to-pink-400',
        instructor: 'المهندسة المبدعة الهام قصراوي',
        instructorTitle: 'مهندسة انظمة الحاسوب',
        instructorImage: "ilham.png",
        //duration: '16 أسبوع',
        //lessons: '64 محاضرة',
        courseDetails: 'ابدأ رحلتك في تطوير الويب بتعلم HTML5 و CSS3. ستتقن بناء مواقع متجاوبة وجميلة من الصفر.'
    }
};

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تأثير حركة الماوس
    document.addEventListener('mousemove', function(e) {
        const mouseGlow = document.getElementById('mouseGlow');
        mouseGlow.style.left = (e.clientX - 192) + 'px';
        mouseGlow.style.top = (e.clientY - 192) + 'px';
    });

    // القائمة المتنقلة
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', function() {
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
            mobileMenuBtn.innerHTML = '<i class="fas fa-times text-xl"></i>';
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        }
    });

    // إغلاق القائمة عند النقر على رابط
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        });
    });

    // أزرار التواصل عبر WhatsApp
    document.getElementById('startBtn').addEventListener('click', () => contactWhatsApp(null));
    document.getElementById('consultationBtn').addEventListener('click', () => contactWhatsApp(null));
    
    // التمرير السلس للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// عرض تفاصيل الدورة
function showCourseDetails(courseKey) {
    const course = courses[courseKey];
    if (!course) return;

    document.getElementById('modalIcon').textContent = course.icon;
    document.getElementById('modalTitle').textContent = course.name;
    document.getElementById('modalDesc').textContent = course.description;
    document.getElementById("instructorImage").src = course.instructorImage;
    document.getElementById('instructorName').textContent = course.instructor;
    document.getElementById('instructorTitle').textContent = course.instructorTitle;
    document.getElementById('courseDuration').textContent = course.duration;
    document.getElementById('courseLessons').textContent = course.lessons;
    document.getElementById('courseDetails').textContent = course.courseDetails;
    
    // تحديث تدرج اللون
    document.getElementById('modalHeader').className = `p-8 relative bg-gradient-to-r ${course.color}`;
    
    // تحديث زر WhatsApp
    const whatsappBtn = document.getElementById('modalWhatsAppBtn');
    whatsappBtn.className = `flex-1 bg-gradient-to-r ${course.color} hover:opacity-90 px-6 py-4 rounded-xl font-bold transition shadow-xl flex items-center justify-center gap-2`;
    whatsappBtn.onclick = () => {
        contactWhatsApp(course.name);
        closeCourseDetails();
    };

    // عرض المودال
    document.getElementById('courseModal').classList.remove('hidden');
    document.getElementById('courseModal').classList.add('flex');
    document.body.style.overflow = 'hidden';
}

// إغلاق تفاصيل الدورة
function closeCourseDetails() {
    document.getElementById('courseModal').classList.add('hidden');
    document.getElementById('courseModal').classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// التواصل عبر WhatsApp
function contactWhatsApp(language) {
    const message = language 
        ? `مرحباً! أريد التسجيل في دورة ${language} - NextCode Academy 🚀`
        : 'مرحباً! أريد معرفة المزيد عن دورات NextCode Academy 🚀';
    const phoneNumber = '970566028474';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// إغلاق المودال عند النقر خارج المحتوى
document.getElementById('courseModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeCourseDetails();
    }
});
