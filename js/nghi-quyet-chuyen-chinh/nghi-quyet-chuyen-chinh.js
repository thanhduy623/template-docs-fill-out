document.addEventListener(
    "DOMContentLoaded",
    initPage
);

function initPage() {

    renderFields(
        "formFields",
        FORM_FIELDS
    );
}

function getFormData() {

    const form =
        document.querySelector(
            "#formNghiQuyet"
        );

    const data = {};

    new FormData(form)
        .forEach(
            (
                value,
                key
            ) => {

                data[key] =
                    value;

            }
        );

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

async function exportDocument() {

    const exportData =
        getDataByFields(
            EXPORT_FIELDS
        );

    const fileName =

        `NQ${exportData.NQ_SO}`
        + `-Chuyen chinh-`
        + `${exportData.DANG_VIEN}`
        + `.docx`;

    await exportWordTemplate(
        "../assets/docs/nghi-quyet/NQ-Chuyen-dang.docx",
        exportData,
        fileName
    );
}