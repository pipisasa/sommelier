import './css/main.scss';
// import 'animate.css';
import $ from "jquery";
window.jQuery = $;
window.$ = $;
// function handleScroll(){
//   $('.pip__animate:not(.pip__animate__animated)').each((_, el)=>{
//     const $el = $(el);
//     const $parent = $el.closest('.scroll-snap__item');
//     const top = $parent.get(0).getBoundingClientRect().top;
//     if( top < 100 && top > 0){
//       $el.addClass($el.attr('data-pip-animate'));
//       $el.removeClass('pip__animate__in');
//       $el.addClass('pip__animate__animated');
//     }
//   })
// }

// $('.scroll-snap__container').on('scroll', handleScroll);

$('.order-now-btn').on('mouseenter', function(e){
  $($(e.target).closest('.product-detail')[0].querySelector('.product-detail__img__wrapper')).addClass('hovered');
})

$('.order-now-btn').on('mouseleave', function(e){
  $($(e.target).closest('.product-detail')[0].querySelector('.product-detail__img__wrapper')).removeClass('hovered');
})