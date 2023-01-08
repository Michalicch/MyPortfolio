let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider__line'); //блок с картинками

document.querySelector('.btn-slider-next').addEventListener('click', function(){
	offset = offset + 1400;
	if (offset > 4200){
		offset = offset - 1400;
	}
	sliderLine.style.left = -offset + 'px';
});
document.querySelector('.btn-slider-prev').addEventListener('click', function(){
	offset = offset - 1400;
	if (offset < 0){
		offset = 0;
	}
	sliderLine.style.left = -offset + 'px';
});