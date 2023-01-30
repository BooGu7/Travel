// Gắn hằng số buyBtns = tìm kiếm tất cả các dữ liệu có tên là
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.modal-container');
const modalClose = document.querySelector('.js-modal-close');
// Dùng vòng lặp gắn biến buyBtn trong buyBtns, vị dụ có 3 biến .js-buy-ticket
// thì nó sẽ gán nút 1, nút 2, nút 3 rồi về lại nút 1.
// Hàm hiện modal mua vé (thêm class open vào chỗ modal)
function showBuyTickets() {
    // class modal khi click vào sẽ tạo ra một class 'open'
    modal.classList.add('open');
}
// Hàm ẩn modal mua vé (xóa class open vào chỗ modal)
function closeBuyTickets() {
    modal.classList.remove('open');
}
for (const buyBtn of buyBtns) {
// gắn sự kiện để lắn nghe (nếu nhấn click thì chuyển sang showBuyTickets)
    buyBtn.addEventListener('click',showBuyTickets);
}
// Dùng hàm để tắt bảng tickets
modalClose.addEventListener('click', closeBuyTickets);
// Nhấn vào khoảng không modal sẽ tắt bảng tickets
modal.addEventListener('click', closeBuyTickets);
// Thêm sự kiện nổi bọt nói nôm na nó sẽ không bị ẩn khi bị click
modalContainer.addEventListener('click', 
function (event) {
    event.stopPropagation();
});