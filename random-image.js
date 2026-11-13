

const imageLinks = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
    "https://example.com/image4.jpg",
    "https://example.com/image5.jpg"
];

// اختيار صورة عشوائية
function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageLinks.length);
    const selectedImage = imageLinks[randomIndex];

    const imageElement = document.getElementById("randomImage");

    if (imageElement) {
        imageElement.src = selectedImage;
    }
}

// عرض صورة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", showRandomImage);
