<?php
// Bật hiển thị lỗi (giúp phát hiện lỗi khi lập trình)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Chào mừng người dùng
echo "<h1>Chào mừng đến với trang web của tôi!</h1>";

// Lấy thời gian hiện tại
date_default_timezone_set('Asia/Ho_Chi_Minh');
echo "<p>Hôm nay là: " . date("d/m/Y H:i:s") . "</p>";

// Kiểm tra biến GET
if (isset($_GET['name'])) {
    $name = htmlspecialchars($_GET['name']); // Bảo mật chống XSS
    echo "<p>Xin chào, $name!</p>";
} else {
    echo "<p>Vui lòng thêm ?name=TenCuaBan vào URL.</p>";
}

// Một số biến cơ bản
$age = 25;
$is_admin = true;

echo "<p>Tuổi của tôi là: $age</p>";

if ($is_admin) {
    echo "<p>Bạn có quyền admin.</p>";
} else {
    echo "<p>Bạn không có quyền admin.</p>";
}
?>
