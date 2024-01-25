export const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
        prev && prev.id > current.id ? prev.id : current.id, { id: 0 }
    );

    return maxId + 1;
};


