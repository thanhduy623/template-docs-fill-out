async function exportWordTemplate(
    templatePath,
    data,
    outputFileName
) {

    try {

        const response =
            await fetch(templatePath);

        if (!response.ok) {

            throw new Error(
                `Không đọc được template: ${templatePath}`
            );

        }

        const content =
            await response.arrayBuffer();

        const zip =
            new PizZip(content);

        const Docxtemplater =
            window.docxtemplater;

        const doc =
            new Docxtemplater(
                zip,
                {
                    paragraphLoop: true,
                    linebreaks: true,

                    delimiters: {
                        start: "{",
                        end: "}"
                    }
                }
            );

        doc.render(data);

        const blob =
            doc
                .getZip()
                .generate({
                    type: "blob",
                    mimeType:
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                });

        saveAs(
            blob,
            outputFileName
        );

    }
    catch (error) {

        console.error(error);

        if (
            error.properties &&
            error.properties.errors
        ) {

            console.error(
                error.properties.errors
            );

        }

        alert(
            "Lỗi xuất Word. Kiểm tra Console."
        );

    }
}