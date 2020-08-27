function getRequests() {
    return Request.find();
}

function addRequest(duration) {
    const date = new Request({
        date: new Date(),
        duration: duration
    })

    return date.save();
}