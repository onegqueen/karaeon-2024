document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    const fixedBox = document.querySelector('.fixed-box');
    const footer = document.querySelector('footer');

    window.addEventListener('scroll', function() {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (footerRect.top <= windowHeight) {
            fixedBox.style.display = 'none'; // 푸터에 가까워지면 고정 박스 숨김
        } else {
            fixedBox.style.display = 'flex'; // 다시 스크롤 위로 올라오면 고정 박스 표시
        }
    });

    const tabLinks = document.querySelectorAll('.tab-link');
    const categories = document.querySelectorAll('.menu-category');
    let slideInterval; // 자동 슬라이드를 관리할 변수

    // 탭 클릭 시 해당 카테고리 표시 및 슬라이드 설정
    tabLinks.forEach(tab => {
        tab.addEventListener('click', function() {
            tabLinks.forEach(link => link.classList.remove('active'));
            categories.forEach(cat => cat.classList.remove('active'));

            const category = document.querySelector(`.${tab.dataset.category}`);
            tab.classList.add('active');
            category.classList.add('active');

            // 탭 전환 시 슬라이드 초기화
            clearInterval(slideInterval); // 이전 슬라이드 중지
            setupCarousel(category); // 새 슬라이드 설정
        });
    });

    // 캐러셀 설정 함수
    function setupCarousel(category) {
        const images = category.querySelectorAll('.carousel-item');
        const descriptions = category.querySelectorAll('.menu-item');
        let currentIndex = 0;
        const totalItems = images.length;
        const intervalTime = 3000; // 3초마다 슬라이드 전환
        const fadeDuration = 500; // 페이드 효과 지속 시간 (0.5초)

        // 이미지와 설명 업데이트
        function updateCarousel(index) {
            images.forEach((img, idx) => {
                img.classList.remove('active');
                descriptions[idx].classList.remove('active');
            });
        
            images[index].classList.add('active');
            descriptions[index].classList.add('active');
        }

        // 이전 이미지로 이동
        function showPrev() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel(currentIndex);
        }

        // 다음 이미지로 이동
        function showNext() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel(currentIndex);
        }

        // 자동 슬라이드
        slideInterval = setInterval(showNext, intervalTime);
    }

    // 처음 페이지 로드 시 기본 탭(카레) 슬라이드 설정
    const initialCategory = document.querySelector('.menu-category.active');
    setupCarousel(initialCategory);
});

//혜택
document.addEventListener('DOMContentLoaded', function() {
    const benefitItems = document.querySelectorAll('.benefit-item-image');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // 요소가 화면에 보이면 'show' 클래스 추가
            }
        });
    }, { threshold: 0.5 }); // 50%가 보일 때 작동

    // 각 benefit 아이템을 관찰
    benefitItems.forEach(item => {
        observer.observe(item);
    });
});

//모달
document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.getElementById('openModal');
    const closeModalBtn = document.getElementById('closeModal');
    const modal = document.getElementById('modal');

    // 모달 열기
    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'flex'; // 모달을 보이게 설정
    });

    // 모달 닫기 (X 버튼 클릭)
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none'; // 모달을 숨기기
    });

    // 모달 밖을 클릭하면 닫기
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // 모달을 숨기기
        }
    });
});

/* 헤더 스크롤 감지 */
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled'); /* 스크롤 시 배경색 변화 */
    } else {
        header.classList.remove('scrolled');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const scrollImage = document.querySelector('.scroll-image');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                scrollImage.classList.add('show'); // 이미지가 보이기 시작하면 클래스 추가
            }
        });
    }, { threshold: 0.5 }); // 50%가 보일 때 작동

    // stats-container 요소를 관찰
    const statsSection = document.querySelector('.stats-container');
    observer.observe(statsSection);
});
