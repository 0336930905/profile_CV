# CV Website - Modern Resume

Website CV hiện đại được xây dựng với Node.js và có thể deploy lên Vercel.

## Tính năng

- ✨ Thiết kế hiện đại, responsive
- 📱 Tương thích với mọi thiết bị
- 🎨 Giao diện chuyên nghiệp với hiệu ứng động
- 📄 Hỗ trợ in CV
- ⚡ Tốc độ tải nhanh
- 🚀 Dễ dàng deploy lên Vercel

## Cài đặt

1. Cài đặt dependencies:
```bash
npm install
```

2. Chạy server local:
```bash
npm run dev
```

3. Mở trình duyệt và truy cập: `http://localhost:3000`

## Deploy lên Vercel

1. Cài đặt Vercel CLI (nếu chưa có):
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

Hoặc đơn giản hơn:
- Push code lên GitHub
- Import project từ GitHub vào Vercel
- Vercel sẽ tự động deploy

## Tùy chỉnh

Chỉnh sửa file `public/index.html` để cập nhật thông tin cá nhân của bạn:

- Tên, chức danh
- Thông tin liên hệ
- Kỹ năng
- Kinh nghiệm làm việc
- Học vấn
- Dự án
- Chứng chỉ

## Cấu trúc thư mục

```
project_CV/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── index.html
├── index.js
├── package.json
├── vercel.json
└── README.md
```

## Công nghệ sử dụng

- Node.js
- Express.js
- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome Icons

## License

MIT
