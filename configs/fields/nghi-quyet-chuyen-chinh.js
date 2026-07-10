const FORM_FIELDS = [

    {
        type: "title",
        label: "THÔNG TIN NGHỊ QUYẾT"
    },

    {
        key: "NQ_NGAY",
        label: "Ngày ký",
        type: "text",
        col: 3
    },

    {
        key: "NQ_THANG",
        label: "Tháng ký",
        type: "text",
        col: 3
    },

    {
        key: "NQ_NAM",
        label: "Năm ký",
        type: "text",
        col: 3
    },

    {
        key: "CB_NGAY",
        label: "Ngày họp",
        type: "text",
        col: 3
    },

    {
        key: "CB_THANG",
        label: "Tháng họp",
        type: "text",
        col: 3
    },

    {
        key: "CB_NAM",
        label: "Năm họp",
        type: "text",
        col: 3
    },

    {
        type: "title",
        label: "ĐẢNG VIÊN"
    },

    {
        key: "NQ_SO",
        label: "Số nghị quyết",
        type: "text",
        col: 1
    },

    {
        key: "DANG_VIEN",
        label: "Họ tên đảng viên",
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
        label: "THÀNH PHẦN CHI BỘ"
    },

    {
        key: "CB_TC",
        label: "Tổng số đảng viên",
        type: "text",
        col: 3
    },

    {
        key: "CB_CT",
        label: "Đảng viên chính thức",
        type: "text",
        col: 3
    },

    {
        key: "CB_DB",
        label: "Đảng viên dự bị",
        type: "text",
        col: 3
    },

    {
        key: "CM_TC",
        label: "Có mặt tổng",
        type: "text",
        col: 3
    },

    {
        key: "CM_CT",
        label: "Có mặt chính thức",
        type: "text",
        col: 3
    },

    {
        key: "CM_DB",
        label: "Có mặt dự bị",
        type: "text",
        col: 3
    },

    {
        key: "VM_TC",
        label: "Vắng mặt tổng",
        type: "text",
        col: 3
    },

    {
        key: "VM_CT",
        label: "Vắng mặt chính thức",
        type: "text",
        col: 3
    },

    {
        key: "VM_DB",
        label: "Vắng mặt dự bị",
        type: "text",
        col: 3
    },

    {
        type: "title",
        label: "CHỦ TRÌ - THƯ KÝ"
    },

    {
        key: "CT_TEN",
        label: "Chủ trì",
        type: "text",
        default: "Trương Hữu Giáp",
        col: 2
    },

    {
        key: "CT_CV",
        label: "Chức vụ",
        type: "select",
        col: 2,
        default: "Phó Bí thư",
        options: [
            "Bí thư",
            "Phó Bí thư"
        ]
    },

    {
        key: "TV_TEN",
        label: "Thư ký",
        default: "Võ Kim Thương",
        type: "text",
        col: 2
    },

    {
        type: "title",
        label: "KẾT QUẢ BIỂU QUYẾT"
    },

    {
        key: "SL_TT",
        label: "Số phiếu tán thành",
        type: "text",
        col: 2
    },

    {
        key: "PT_TT",
        label: "Tỷ lệ tán thành (%)",
        type: "text",
        col: 2,
        default: "100"
    },

    {
        key: "SL_KTT",
        label: "Số phiếu không tán thành",
        type: "text",
        col: 2,
        default: "0"
    },

    {
        key: "PT_KTT",
        label: "Tỷ lệ không tán thành (%)",
        type: "text",
        col: 2,
        default: "0"
    }

];

const EXPORT_FIELDS = [

    "NQ_SO",
    "NQ_NGAY",
    "NQ_THANG",
    "NQ_NAM",

    "CB_NGAY",
    "CB_THANG",
    "CB_NAM",

    "DANG_VIEN",

    "KN_NGAY",
    "KN_THANG",
    "KN_NAM",

    "CB_TC",
    "CB_CT",
    "CB_DB",

    "CM_TC",
    "CM_CT",
    "CM_DB",

    "VM_TC",
    "VM_CT",
    "VM_DB",

    "CT_TEN",
    "CT_CV",

    "TV_TEN",

    "HOC_KY",
    "NAM_HOC",
    "KQHT",
    "KQRL",
    "HAN_CHE",

    "SL_TT",
    "PT_TT",
    "SL_KTT",
    "PT_KTT"
];