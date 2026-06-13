const FORM_FIELDS = [

    {
        type: "title",
        label: "THÔNG TIN CUỘC HỌP"
    },

    {
        key: "NGAY",
        label: "Ngày",
        type: "text",
        col: 3
    },

    {
        key: "THANG",
        label: "Tháng",
        type: "text",
        col: 3
    },

    {
        key: "NAM",
        label: "Năm",
        type: "text",
        col: 3
    },

    {
        key: "GIO_BD",
        label: "Giờ bắt đầu",
        type: "text",
        col: 3
    },

    {
        key: "PHUT_BD",
        label: "Phút bắt đầu",
        type: "text",
        col: 3
    },

    {
        key: "PHONG",
        label: "Phòng họp",
        type: "text",
        col: 3
    },

    {
        key: "GIO_KT",
        label: "Giờ kết thúc",
        type: "text",
        col: 3
    },

    {
        key: "PHUT_KT",
        label: "Phút kết thúc",
        type: "text",
        col: 3
    },

    {
        type: "title",
        label: "THÀNH PHẦN THAM DỰ"
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
        key: "NCT_TEN",
        label: "Người chủ trì",
        type: "text",
        col: 2
    },

    {
        key: "NCT_CHUC",
        label: "Chức vụ",
        type: "select",
        col: 2,
        options: [
            "Bí thư",
            "Phó Bí thư"
        ]
    },

    {
        key: "TK_TEN",
        label: "Thư ký",
        type: "text",
        col: 2
    },

    {
        type: "title",
        label: "KẾT QUẢ BIỂU QUYẾT"
    },

    {
        key: "BIEU_QUYET",
        label: "Số phiếu tán thành",
        type: "text",
        col: 2
    },

    {
        key: "PHAN_TRAM",
        label: "Tỷ lệ (%)",
        type: "text",
        col: 2
    }

];

const EXPORT_FIELDS = [

    "NGAY",
    "THANG",
    "NAM",

    "GIO_BD",
    "PHUT_BD",
    "PHONG",

    "GIO_KT",
    "PHUT_KT",

    "CB_TC",
    "CB_CT",
    "CB_DB",

    "CM_TC",
    "CM_CT",
    "CM_DB",

    "VM_TC",
    "VM_CT",
    "VM_DB",

    "NCT_TEN",
    "NCT_CHUC",

    "TK_TEN",

    "BIEU_QUYET",
    "PHAN_TRAM"

];