const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let slideInterval;

// وظيفة لعرض الشريحة التالية
function showNextSlide() {
    // إخفاء جميع الشرائح
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // عرض الشريحة الحالية فقط
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

// وظيفة لعرض الشريحة السابقة
function showPrevSlide() {
    // إخفاء جميع الشرائح
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // عرض الشريحة الحالية فقط
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

// وظيفة لتحديد الشريحة الحالية
function currentSlide(index) {
    // إخفاء جميع الشرائح
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // عرض الشريحة المحددة
    currentIndex = index;
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

// وظيفة لتشغيل السلايدر تلقائيًا
function startSlideShow() {
    slideInterval = setInterval(showNextSlide, 3000); // تغيير الشريحة كل 3 ثوانٍ
}

// وظيفة لتبديل القائمة
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// بدء عرض الشرائح
startSlideShow();
