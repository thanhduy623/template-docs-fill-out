document.addEventListener(
    "DOMContentLoaded",
    initPage
);

function initPage() {

    console.log("initPage");

    if (
        typeof FORM_FIELDS === "undefined"
    ) {

        console.error(
            "FORM_FIELDS chưa được load"
        );

        return;
    }

    renderFields(
        "formFields",
        FORM_FIELDS
    );
}

function getFormData() {

    const form =
        document.querySelector(
            "#formChuyenChinh"
        );

    const data = {};

    new FormData(form)
        .forEach((value, key) => {

            data[key] = value;

        });

    return data;
}

function getDataByFields(fields) {

    const formData =
        getFormData();

    const result = {};

    fields.forEach(key => {

        result[key] =
            formData[key] ?? "";

    });

    return result;
}

async function exportFileChuyenChinhChiDoan() {

    const formData =
        getFormData();

    const exportData =
        getDataByFields(
            CHI_DOAN_FIELDS
        );

    if (
        !checkDinhDangDiemHocTap(
            formData.HT_DIEM
        )
    ) {
        return;
    }

    if (
        !checkDinhDangDiemRenLuyen(
            formData.RL_DIEM
        )
    ) {
        return;
    }

    await exportWordTemplate(
        "../assets/docs/chuyen-chinh/ChuyenChinh-CD.docx",
        exportData,
        `BienBan-ChiDoan-${formData.DV_MSSV}.docx`
    );
}

async function exportFileChuyenChinhDoanKhoa() {

    const formData =
        getFormData();

    const exportData =
        getDataByFields(
            DOAN_KHOA_FIELDS
        );

    if (
        !checkDinhDangDiemHocTap(
            formData.HT_DIEM
        )
    ) {
        return;
    }

    if (
        !checkDinhDangDiemRenLuyen(
            formData.RL_DIEM
        )
    ) {
        return;
    }

    await exportWordTemplate(
        "../assets/docs/chuyen-chinh/ChuyenChinh-DK.docx",
        exportData,
        `BienBan-DoanKhoa-${formData.DV_MSSV}.docx`
    );
}