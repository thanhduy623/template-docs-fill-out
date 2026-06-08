const FORM_FIELDS = [

    // =========================
    // THÔNG TIN CHUNG
    // =========================

    {
        type: "title",
        label: "THÔNG TIN ĐẢNG VIÊN"
    },

    {
        type: "subtitle",
        label: "Thông tin cá nhân"
    },

    {
        key: "DOAN_KHOA",
        label: "Đoàn khoa",
        type: "select",
        options: ["Công nghệ thông tin", "Kỹ thuật công trình", "Điện - Điện tử", "Toán - Thống Kê"],
        col: 2
    },

    {
        key: "CHI_DOAN",
        label: "Chi đoàn",
        type: "text",
        col: 2
    },

    {
        key: "DV_TEN",
        label: "Họ tên đảng viên",
        type: "text",
        col: 2
    },

    {
        key: "DV_MSSV",
        label: "MSSV",
        type: "text",
        col: 2
    },

    {
        key: "KN_NGAY",
        label: "Ngày kết nạp",
        type: "text",
        col: 3
    },

    {
        key: "KN_THANG",
        label: "Tháng kết nạp",
        type: "text",
        col: 3
    },

    {
        key: "KN_NAM",
        label: "Năm kết nạp",
        type: "text",
        col: 3
    },

    {
        type: "subtitle",
        label: "Kết quả học tập, rèn luyện"
    },

    {
        key: "HOC_KY",
        label: "Học kỳ",
        type: "text",
        col: 2
    },

    {
        key: "NAM_HOC",
        label: "Năm học",
        type: "text",
        col: 2
    },

    {
        key: "HT_XL",
        label: "Xếp loại học tập",
        type: "select",
        col: 2,
        options: [
            "hoàn thành xuất sắc",
            "hoàn thành tốt",
            "hoàn thành tốt",
            "không hoàn thành"
        ]
    },

    {
        key: "RL_XL",
        label: "Xếp loại rèn luyện",
        type: "select",
        type: "select",
        col: 2,
        options: [
            "hoàn thành xuất sắc",
            "hoàn thành tốt",
            "hoàn thành tốt",
            "không hoàn thành"
        ]
    },

    {
        key: "HT_DIEM",
        label: "Điểm học tập",
        type: "text",
        col: 2
    },

    {
        key: "RL_DIEM",
        label: "Điểm rèn luyện",
        type: "text",
        col: 2
    },

    // =========================
    // CHI ĐOÀN
    // =========================

    {
        type: "title",
        label: "CUỘC HỌP CHI ĐOÀN"
    },

    {
        type: "subtitle",
        label: "Thời gian tổ chức"
    },

    {
        key: "CD_NGAY",
        label: "Ngày họp Chi đoàn",
        type: "text",
        col: 3
    },

    {
        key: "CD_THANG",
        label: "Tháng họp Chi đoàn",
        type: "text",
        col: 3
    },

    {
        key: "CD_NAM",
        label: "Năm họp Chi đoàn",
        type: "text",
        col: 3
    },

    {
        key: "CD_GIO_BD",
        label: "Giờ bắt đầu Chi đoàn",
        type: "text",
        col: 3
    },

    {
        key: "CD_PHUT_DB",
        label: "Phút bắt đầu Chi đoàn",
        type: "text",
        col: 3
    },

    {
        key: "CD_PHONG",
        label: "Phòng họp Chi đoàn",
        type: "text",
        col: 3
    },

    {
        key: "CD_GIO_KT",
        label: "Giờ kết thúc Chi đoàn",
        type: "text",
        col: 3
    },

    {
        key: "CD_PHUT_KT",
        label: "Phút kết thúc Chi đoàn",
        type: "text",
        col: 3
    },

    {
        type: "subtitle",
        label: "Chủ trì, thư ký, đoàn cấp trên"
    },

    {
        key: "CD_NCT_TEN",
        label: "Họ tên người chủ trì - Chi đoàn",
        type: "text",
        col: 2
    },

    {
        key: "CD_NCT_CV",
        label: "Chức vụ người chủ trì - Chi đoàn",
        type: "select",
        options: ["Bí thư Chi đoàn", "Phó Bí thư Chi đoàn"],
        col: 2
    },

    {
        key: "CD_TK_TEN",
        label: "Họ tên thư ký - Chi đoàn",
        type: "text",
        col: 2
    },

    {
        key: "CD_TK_CV",
        label: "Chức vụ người thư ký - Chi đoàn",
        type: "select",
        options: ["Phó Bí thư Chi đoàn", "UV. BCH Chi đoàn"],
        col: 2
    },

    {
        key: "CD_DCT_TEN",
        label: "Họ tên người đoàn cấp trên - Chi đoàn",
        type: "text",
        col: 2
    },

    {
        key: "CD_DCT_CV",
        label: "Chức vụ người đoàn cấp trên - Chi đoàn",
        type: "select",
        options: ["Bí thư Đoàn Khoa", "Phó Bí thư Đoàn Khoa", "UV. BTV Đoàn Khoa", "UV. BCH Đoàn Khoa"],
        col: 2
    },

    {
        type: "subtitle",
        label: "Số lượng tham dự"
    },

    {
        key: "CD_TC",
        label: "Tổng số đoàn viên",
        type: "text",
        col: 3
    },

    {
        key: "CD_CM",
        label: "Số có mặt",
        type: "text",
        col: 3
    },

    {
        key: "CD_VM",
        label: "Số vắng mặt",
        type: "text",
        col: 3
    },

    {
        key: "CD_HC",
        label: "Chi đoàn nhận xét hạn chế",
        type: "textarea"
    },

    // =========================
    // ĐOÀN KHOA
    // =========================

    {
        type: "title",
        label: "CUỘC HỌP ĐOÀN KHOA"
    },

    {
        type: "subtitle",
        label: "Thời gian tổ chức"
    },

    {
        key: "DK_NGAY",
        label: "Ngày họp Đoàn khoa",
        type: "text",
        col: 3
    },

    {
        key: "DK_THANG",
        label: "Tháng họp Đoàn khoa",
        type: "text",
        col: 3
    },

    {
        key: "DK_NAM",
        label: "Năm họp Đoàn khoa",
        type: "text",
        col: 3
    },

    {
        key: "DK_GIO_BD",
        label: "Giờ bắt đầu Đoàn khoa",
        type: "text",
        col: 3
    },

    {
        key: "DK_PHUT_DB",
        label: "Phút bắt đầu Đoàn khoa",
        type: "text",
        col: 3
    },

    {
        key: "DK_PHONG",
        label: "Phòng họp Đoàn khoa",
        type: "text",
        col: 3
    },

    {
        key: "DK_GIO_KT",
        label: "Giờ kết thúc Đoàn khoa",
        type: "text",
        col: 3
    },

    {
        key: "DK_PHUT_KT",
        label: "Phút kết thúc Đoàn khoa",
        type: "text",
        col: 3
    },

    {
        type: "subtitle",
        label: "Chủ trì, thư ký, đoàn cấp trên"
    },

    {
        key: "DK_NCT_TEN",
        label: "Họ tên người chủ trì - Đoàn khoa",
        type: "text",
        col: 2
    },

    {
        key: "DK_NCT_CV",
        label: "Chức vụ người chủ trì - Đoàn khoa",
        type: "select",
        options: ["Bí thư Đoàn Khoa", "Phó Bí thư Đoàn Khoa"],
        col: 2
    },

    {
        key: "DK_TK_TEN",
        label: "Họ tên thư ký - Đoàn khoa",
        type: "text",
        col: 2
    },

    {
        key: "DK_TK_CV",
        label: "Chức vụ thư ký Đoàn khoa",
        type: "select",
        options: ["Phó Bí thư Đoàn Khoa", "UV. BTV Đoàn Khoa", "UV. BCH Đoàn Khoa"],
        col: 2
    },

    {
        key: "DK_DCT_TEN",
        label: "Họ tên người đoàn cấp trên - Đoàn khoa",
        type: "text",
        col: 2
    },

    {
        key: "DK_DCT_CV",
        label: "Chức vụ người đoàn cấp trên - Đoàn khoa",
        type: "select",
        options: ["Bí thư Đoàn Trường", "Phó Bí thư Đoàn Trường", "UV. BTV Đoàn Trường", "UV. BCH Đoàn Trường"],
        col: 2
    },

    {
        type: "subtitle",
        label: "Số lượng tham dự"
    },

    {
        key: "DK_TC",
        label: "Tổng số UV BCH",
        type: "text",
        col: 3
    },

    {
        key: "DK_CM",
        label: "Số có mặt",
        type: "text",
        col: 3
    },

    {
        key: "DK_VM",
        label: "Số vắng mặt",
        type: "text",
        col: 3
    },

    {
        key: "DK_HC",
        label: "Đoàn Khoa nhận xét hạn chế",
        type: "textarea"
    }
];

const CHI_DOAN_FIELDS = [
    "DOAN_KHOA",
    "CHI_DOAN",
    "DV_TEN",
    "DV_MSSV",
    "KN_NGAY",
    "KN_THANG",
    "KN_NAM",
    "HT_XL",
    "RL_XL",
    "HT_DIEM",
    "RL_DIEM",
    "HOC_KY",
    "NAM_HOC",
    "CD_NGAY",
    "CD_THANG",
    "CD_NAM",
    "CD_GIO_BD",
    "CD_PHUT_DB",
    "CD_GIO_KT",
    "CD_PHUT_KT",
    "CD_PHONG",
    "CD_NCT_TEN",
    "CD_NCT_CV",
    "CD_TK_TEN",
    "CD_TK_CV",
    "CD_DCT_TEN",
    "CD_DCT_CV",
    "CD_TC",
    "CD_CM",
    "CD_VM",
    "CD_HC"
];

const DOAN_KHOA_FIELDS = [
    "DOAN_KHOA",
    "CHI_DOAN",
    "DV_TEN",
    "DV_MSSV",
    "KN_NGAY",
    "KN_THANG",
    "KN_NAM",
    "HT_XL",
    "RL_XL",
    "HT_DIEM",
    "RL_DIEM",
    "HOC_KY",
    "NAM_HOC",
    "CD_NGAY",
    "CD_THANG",
    "CD_NAM",
    "DK_NGAY",
    "DK_THANG",
    "DK_NAM",
    "DK_GIO_BD",
    "DK_PHUT_DB",
    "DK_GIO_KT",
    "DK_PHUT_KT",
    "DK_PHONG",
    "DK_NCT_TEN",
    "DK_NCT_CV",
    "DK_TK_TEN",
    "DK_TK_CV",
    "DK_DCT_TEN",
    "DK_DCT_CV",
    "DK_TC",
    "DK_CM",
    "DK_VM",
    "DK_HC"
];