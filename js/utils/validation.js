function showError(message) {
    alert(message);
}

function checkDinhDangGio(gio, phut) {

    gio = Number(gio);
    phut = Number(phut);

    if (
        gio < 0 ||
        gio > 23 ||
        phut < 0 ||
        phut > 59
    ) {
        showError("Giờ không hợp lệ.");
        return false;
    }

    return true;
}

function checkDinhDangNgay(ngay, thang, nam) {

    const date = new Date(nam, thang - 1, ngay);

    if (
        date.getFullYear() != nam ||
        date.getMonth() != thang - 1 ||
        date.getDate() != ngay
    ) {
        showError("Ngày không tồn tại.");
        return false;
    }

    return true;
}

function checkSoSanhNgayHop(cdDate, dkDate) {

    const cd = new Date(cdDate);
    const dk = new Date(dkDate);

    if (cd >= dk) {

        showError(
            "Ngày họp Chi Đoàn phải trước họp Đoàn Khoa."
        );

        return false;
    }

    return true;
}

function checkThoiGianHop(
    gioBD,
    phutBD,
    gioKT,
    phutKT
) {

    const start =
        Number(gioBD) * 60 +
        Number(phutBD);

    const end =
        Number(gioKT) * 60 +
        Number(phutKT);

    if (end - start < 60) {

        showError(
            "Thời gian kết thúc phải sau bắt đầu ít nhất 1 giờ."
        );

        return false;
    }

    return true;
}

function checkDinhDangDiemHocTap(value) {

    const diem = Number(value);

    if (
        diem < 0 ||
        diem > 10
    ) {
        showError(
            "Điểm học tập phải từ 0.00 đến 10.00."
        );

        return false;
    }

    return true;
}

function checkDinhDangDiemRenLuyen(value) {

    const diem = Number(value);

    if (
        diem < 0 ||
        diem > 100
    ) {
        showError(
            "Điểm rèn luyện phải từ 0 đến 100."
        );

        return false;
    }

    return true;
}