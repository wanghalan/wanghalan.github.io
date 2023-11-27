// external js: masonry.pkgd.js, imagesloaded.pkgd.js
import Masonry from "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js";

// init Masonry
var grid = document.querySelector('.grid');

var msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  isAnimated: true
});

imagesLoaded( grid ).on( 'progress', function() {
  // layout Masonry after each image loads
  msnry.layout();
});
