(function () {
    function initializeImageGalleries() {
        var galleries = document.querySelectorAll('[data-image-gallery]');

        for (var i = 0; i < galleries.length; i++) {
            var gallery = galleries[i];
            var mainImage = gallery.querySelector('[data-gallery-main]');
            var thumbnails = gallery.querySelectorAll('[data-gallery-thumbnail]');

            if (!mainImage || thumbnails.length === 0) {
                console.error('Image gallery requires a main image and at least one thumbnail.', gallery);
                continue;
            }

            for (var j = 0; j < thumbnails.length; j++) {
                (function (thumbnail) {
                    thumbnail.addEventListener('click', function () {
                        mainImage.src = thumbnail.getAttribute('data-gallery-src');
                        mainImage.alt = thumbnail.getAttribute('data-gallery-alt');

                        for (var k = 0; k < thumbnails.length; k++) {
                            thumbnails[k].setAttribute('aria-pressed', 'false');
                        }

                        thumbnail.setAttribute('aria-pressed', 'true');
                    });
                })(thumbnails[j]);
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeImageGalleries);
    } else {
        initializeImageGalleries();
    }
})();
