// JavaScript Document
$('#banner').owlCarousel({
	loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 item thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
     autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
     nav:true,	// cho xuất hiện bộ nút tới lui 
})
$('#danhmuc').owlCarousel({
	loop:true,	// cho lap lại
	items:4,
	margin: 30,// xuất hiện 3 item thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
	nav:true,	// cho xuất hiện bộ nút tới lui 
 })
