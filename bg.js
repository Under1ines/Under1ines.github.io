// 在手机端显示的背景图片链接
const mobileBgImageUrl = "url('')";

// 在电脑端显示的背景图片链接
const desktopBgImageUrl = "url('')";

// 在手机端设置背景图片
if (window.innerWidth < 768) {
  document.querySelector('#web_bg').setAttribute('style', `background-image: ${mobileBgImageUrl};position: fixed;width: 100%;height: 100%;z-index: -1;background-size: cover;`);
} else {
  // 在电脑端设置背景图片
  document.querySelector('#web_bg').setAttribute('style', `background-image: ${desktopBgImageUrl};position: fixed;width: 100%;height: 100%;z-index: -1;background-size: cover;`);
}

