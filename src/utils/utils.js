export const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
        prev && prev.id > current.id ? prev.id : current.id, { id: 0 }
    );

    return maxId + 1;
};

export const inputValidationCheck = (formData) => {
    let validate = true;
    for (const [key, value] of Object.entries(formData)) {
        if (key === "id" || key === "favourite") {
            continue;
        }
        if (!value.trim()) {
            validate = false
            break
        }

    }
    return validate;
}

