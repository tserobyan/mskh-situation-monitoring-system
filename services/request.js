export function getRequests() {
    User
        .find()
        .then((err, users) => {
            if (err) {
                 console.log(err);
            } else {
                console.log(users);
            }
            
        });
}

export function addRequest() {
    const tatev = new User({
        name: 'Tatev'
    })

    tatev.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    });
}