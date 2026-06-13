let danhSachDangVien = [];

document.addEventListener(
    "DOMContentLoaded",
    initPage
);

function initPage() {

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

    addDangVien();
}

function getFormData() {

    const form =
        document.querySelector(
            "#formTrichBienBan"
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

function addDangVien() {

    danhSachDangVien.push({

        DANG_VIEN: "",
        TOT_NGHIEP: ""

    });

    renderDanhSachDangVien();
}

function removeDangVien(index) {

    danhSachDangVien.splice(
        index,
        1
    );

    renderDanhSachDangVien();
}

function updateDangVien(
    index,
    field,
    value
) {

    danhSachDangVien[index][field] =
        value;
}

function renderDanhSachDangVien() {

    const tbody =
        document.querySelector(
            "#tableDangVien tbody"
        );

    tbody.innerHTML = "";

    danhSachDangVien.forEach(
        (
            item,
            index
        ) => {

            const row =
                document.createElement(
                    "tr"
                );

            row.innerHTML = `

                <td class="text-center">
                    ${index + 1}
                </td>

                <td>

                    <input
                        type="text"
                        class="form-control"
                        value="${item.DANG_VIEN}"

                        oninput="
                            updateDangVien(
                                ${index},
                                'DANG_VIEN',
                                this.value
                            )
                        ">

                </td>

                <td>

                    <input
                        type="text"
                        class="form-control"
                        value="${item.TOT_NGHIEP}"

                        oninput="
                            updateDangVien(
                                ${index},
                                'TOT_NGHIEP',
                                this.value
                            )
                        ">

                </td>

                <td>

                    <div
                        class="d-flex gap-2">

                        <button
                            type="button"
                            class="btn btn-success btn-sm">

                            Xuất

                        </button>

                        <button
                            type="button"
                            class="btn btn-danger btn-sm">

                            Xóa

                        </button>

                    </div>

                </td>

            `;

            const buttons =
                row.querySelectorAll(
                    "button"
                );

            buttons[0]
                .addEventListener(
                    "click",
                    () =>
                        exportDangVien(
                            index
                        )
                );

            buttons[1]
                .addEventListener(
                    "click",
                    () =>
                        removeDangVien(
                            index
                        )
                );

            tbody.appendChild(
                row
            );
        }
    );
}

async function exportDangVien(
    index
) {

    const dangVien =
        danhSachDangVien[index];

    if (
        !dangVien.DANG_VIEN ||
        !dangVien.DANG_VIEN.trim()
    ) {

        alert(
            "Chưa nhập tên đảng viên"
        );

        return;
    }

    const exportData = {

        ...getDataByFields(
            EXPORT_FIELDS
        ),

        DANG_VIEN:
            dangVien.DANG_VIEN,

        TOT_NGHIEP:
            dangVien.TOT_NGHIEP

    };

    const fileName =

        `${exportData.NAM}`
        + `-${exportData.THANG}`
        + `-${exportData.NGAY}`
        + `-${index + 1}`
        + `.Trích BB chuyển `
        + `${dangVien.DANG_VIEN}.docx`;

    await exportWordTemplate(
        "../assets/docs/trich-bien-ban/Trich-bien-ban.docx",
        exportData,
        fileName
    );
}