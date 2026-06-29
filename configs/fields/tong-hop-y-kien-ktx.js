const FORM_FIELDS = [

    {
        type: "title",
        label: "THÔNG TIN CHUNG"
    },

    {
        key: "TH_NGAY",
        label: "Ngày lập",
        type: "text",
        col: 3
    },

    {
        key: "TH_THANG",
        label: "Tháng lập",
        type: "text",
        col: 3
    },

    {
        key: "TH_NAM",
        label: "Năm lập",
        type: "text",
        col: 3
    },

    {
        type: "title",
        label: "THÔNG TIN KẾT NẠP"
    },

    {
        key: "DANG_VIEN",
        label: "Đảng viên dự bị",
        type: "text",
        col: 1
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
        key: "HOC_KY",
        label: "Học kỳ",
        type: "select",
        options: [
            "HK1",
            "HK2"
        ],
        col: 2
    },

    {
        key: "NAM_HOC",
        label: "Năm học",
        type: "text",
        col: 2
    },

    {
        key: "KQHT",
        label: "Điểm học tập",
        type: "text",
        col: 2
    },

    {
        key: "KQRL",
        label: "Điểm rèn luyện",
        type: "text",
        col: 2
    },

    {
        key: "HAN_CHE",
        label: "Hạn chế",
        type: "textarea",
        col: 1
    },

    {
        type: "title",
        label: "ĐOÀN THỂ SINH HOẠT"
    },

    {
        key: "CD_TEN",
        label: "Chi đoàn",
        type: "text",
        col: 2
    },

    {
        key: "CD_SL",
        label: "Số lượng Chi đoàn",
        type: "text",
        col: 2
    },

    {
        key: "DK_TEN",
        label: "Đoàn khoa",
        type: "select",
        options: [
            "Công nghệ thông tin",
            "Kỹ thuật công trình",
            "Điện - Điện tử",
            "Toán - Thống kê"
        ],
        col: 2
    },

    {
        key: "DK_SL",
        label: "Số lượng BCH Đoàn khoa",
        type: "text",
        col: 2
    },

    {
        key: "SH_SL_TT",
        label: "Tổng số được hỏi ý kiến",
        type: "text",
        col: 1
    },

    {
        key: "SH_SL",
        label: "Số đồng chí tán thành",
        type: "text",
        col: 2
    },

    {
        key: "SH_PT_TT",
        label: "Tỷ lệ tán thành (%)",
        type: "text",
        col: 2,
        default: "100"
    },

    {
        key: "SH_SL_KTT",
        label: "Không tán thành",
        type: "text",
        col: 2,
        default: "00"
    },

    {
        key: "SH_PT_KTT",
        label: "Tỷ lệ không tán thành (%)",
        type: "text",
        col: 2,
        default: "00"
    }

];

const EXPORT_FIELDS = [

    "TH_NGAY",
    "TH_THANG",
    "TH_NAM",

    "DANG_VIEN",

    "KN_NGAY",
    "KN_THANG",
    "KN_NAM",

    "CD_TEN",
    "CD_SL",

    "DK_TEN",
    "DK_SL",

    "SH_SL",
    "SH_SL_TT",
    "SH_PT_TT",
    "SH_SL_KTT",
    "SH_PT_KTT",

    "HOC_KY",
    "NAM_HOC",
    "KQHT",
    "KQRL",

    "HAN_CHE"
];