document.addEventListener('DOMContentLoaded', () => {

    // ১. রেসপন্সিভ মোবাইল নেভিগেশন মেনু টগল
    const mobileMenu = document.getElementById('mobileMenu');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenu.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // ২. ইমেজ স্লাইডার লজিক (অটোমেটিক ও ম্যানুয়াল ক্রিয়াকলাপ সহ)
    const slider = document.getElementById('slider');
    if (slider) {
        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        let currentIndex = 0;
        const totalSlides = slides.length;

        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        }

        function showPrevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        }

        nextBtn.addEventListener('click', showNextSlide);
        prevBtn.addEventListener('click', showPrevSlide);

        // অটো স্লাইডার ইন্টারভাল (প্রতি ৫ সেকেন্ড পর পরিবর্তন হবে)
        let autoSlide = setInterval(showNextSlide, 5000);

        const resetAutoSlide = () => {
            clearInterval(autoSlide);
            autoSlide = setInterval(showNextSlide, 5000);
        };

        nextBtn.addEventListener('click', resetAutoSlide);
        prevBtn.addEventListener('click', resetAutoSlide);
    }

    // ৩. এফএকিউ (FAQ) অ্যাকোর্ডিয়ান ইন্টারেকশন টগল
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                // বর্তমানে কোনো ওয়ান-একটিভ আইটেম খোলা থাকলে তা আগে বন্ধ করবে
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-answer').style.maxHeight = null;
                    }
                });

                // নির্দিষ্ট আইটেমটি টগল করবে
                item.classList.toggle('active');
                const answer = item.querySelector('.faq-answer');
                
                if (item.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                } else {
                    answer.style.maxHeight = null;
                }
            });
        }
    });

});
