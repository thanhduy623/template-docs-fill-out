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
            "#formTongHopYKien"
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

        `${exportData.TH_NAM}`
        + `.${exportData.TH_THANG}`
        + `.${exportData.TH_NGAY}`
        + `-CD-${exportData.DANG_VIEN}`
        + `-KTX`
        + `.docx`;

    await exportWordTemplate(
        "../assets/docs/tong-hop-y-kien/CD-tong-hop-y-kien-ktx.docx",
        exportData,
        fileName
    );
}