function getColClass(col) {

    switch (col) {

        case 1:

            return "col-12";

        case 2:

            return "col-md-6";

        case 3:

            return "col-md-4";

        default:

            return "col-12";
    }
}

function createTitle(field) {

    const wrapper =
        document.createElement("div");

    wrapper.className =
        "col-12 mt-4";

    const title =
        document.createElement("h4");

    title.className =
        "pb-2 mb-3";

    title.textContent =
        field.label;

    wrapper.appendChild(title);

    return wrapper;
}

function createSubtitle(field) {

    const wrapper =
        document.createElement("div");

    wrapper.className =
        "col-12";

    const subtitle =
        document.createElement("h6");

    subtitle.className =
        "text-secondary mt-2 mb-3";

    subtitle.textContent =
        field.label;

    wrapper.appendChild(subtitle);

    return wrapper;
}

function createInput(field) {

    const wrapper =
        document.createElement("div");

    wrapper.className =
        `${getColClass(field.col)} mb-3`;

    const label =
        document.createElement("label");

    label.className =
        "form-label";

    label.innerText =
        field.label;

    let input;

    switch (field.type) {

        case "textarea":

            input =
                document.createElement("textarea");

            input.rows = 3;

            break;

        case "select":

            input =
                document.createElement("select");

            (field.options || [])
                .forEach(option => {

                    const opt =
                        document.createElement("option");

                    opt.value =
                        option;

                    opt.textContent =
                        option;

                    input.appendChild(opt);

                });

            break;

        default:

            input =
                document.createElement("input");

            input.type =
                field.type || "text";
    }

    input.className =
        "form-control";

    input.name =
        field.key;

    wrapper.appendChild(label);

    wrapper.appendChild(input);

    return wrapper;
}

function renderFields(
    containerId,
    fields
) {

    const container =
        document.getElementById(
            containerId
        );

    if (!container) {

        console.error(
            `Không tìm thấy container: ${containerId}`
        );

        return;
    }

    container.innerHTML = "";

    fields.forEach(field => {

        if (field.type === "title") {

            container.appendChild(
                createTitle(field)
            );

            return;
        }

        if (field.type === "subtitle") {

            container.appendChild(
                createSubtitle(field)
            );

            return;
        }

        container.appendChild(
            createInput(field)
        );

    });
}