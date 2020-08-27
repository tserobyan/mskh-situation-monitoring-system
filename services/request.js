export function getRequests() {
    Request
        .find()
        .then((err, requests) => {
            if (err) {
                console.log(err);
            } else {
                console.log(requests);
            }
    });
}

export function addRequest() {
    const date = new Request({
        duration: 1000
    })

    date.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    });
}