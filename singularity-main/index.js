const pics = [
  'url("https://stevensegallery.com/200/300")',
  'url("https://picsum.photos/209/300.jpg")',
  'url("https://picsum.photos/205/300.jpg")',
  'url("https://www.placecage.com/c/200/300")',
  'url("http://lorempixel.com/400/200/people")',
  'url("https://picsum.photos/270/300.jpg")',
  'url("https://placebeard.it/640x360")',
  'url("https://baconmockup.com/640/360")',
  'url("https://www.fillmurray.com/640/360")',
  'url("https://picsum.photos/210/300.jpg")',
  'url("https://stevensegallery.com/200/300")',
  'url("http://blog.csdn.net/alenhhy")',
  'url("https://picsum.photos/id/1/200/300")',
  'url("https://dummyimage.com/250/ffffff/000000")',
  'url("https://dummyimage.com/250/ffffff/000000")',
];

const pic = document.querySelector("section");

function showImage() {
  var a = Math.floor(Math.random() * pics.length);
  console.log(a);
  var img = pics[a];
  console.log(img);
  pic.style.backgroundImage = img;
}

setInterval(showImage, 1);

function gentext() {
  var word = [
    "آن‌جا که من تمام می‌شوم٬ محسور می‌شوم٬ مجذوب می‌شوم٬ حل میشوم در جهان مجازی که به یک سیکل معیوبی برای خوراک ذهن و روانم تبدیل شده٬ تکرار٬ تکرار٬ تکرار٬ در پس ذهنم کسی می‌گوید خوبی‌های خود را هم دارد٬ بله خوبی‌هایی هم دارد اما هزینه آن چیست تا چه حد می‌توانم حواسم را خرج آن کنم٬ آیا سِر شدن دربرابر حوادث روزمره هزینه گزافی نیست؟ صدایی دیگر می‌گوید برنامه‌ریزی بلد نیستی اگر بلد بودی می‌توانستی به بهینه ترین شکل ممکن از آن استفاده کنی! آری برنامه‌ریزی هم کرده‌ام پاک‌اش کرده‌ام٬ همه‌اشان را٬ مدت‌هاست فاصله گرفته‌ام٬ فایده‌ای نداشت به محض دیدن نورِ آن (صفحه)مجذوب می‌شوم٬ حل می‌شوم٬محسور می‌شوم و آن‌جا که من تمام میشوم",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dick incididunt ut labormyet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    "qqweqwerwerqwsdfsdfsdfsdfr",
    "enean euismod elementum. Proin sed libero suck sed faucibus. Leo a diam sollicitudin tempor id. Bibendum est ultricies integer quis. Lobortis scelerisque fermentum dui faucibus in. Cursus in hac habitasse platea dictumst quisque sagittis. Vel turpi",
    "vbnASDFASDFS ممکن از آن استفاده کنی! آری برنامه‌ریزی هم کرده‌ام پDAFFFFFFFFFF",
    "hgjghDSAFFFFFFFFFFFFFFFF",
    "gfpFFFFFFF مدت‌هاست فاصله گرفته‌ام٬ فایده‌ای نداشت به محض دیدن نورِ آن (صفحه)مجذوب می‌شوم٬ حل می‌شوم٬محسور می‌شوم و آن‌جا که من تمام میشوFFFFFFFF",
    "occaecat cupidatat non proident, sunt in canlpa qui officia deserunt mollit anim id es",
  ];
  var para = document.querySelector("p");
  para.innerHTML = word[Math.floor(Math.random() * word.length)];
}
setInterval(gentext, 10);
