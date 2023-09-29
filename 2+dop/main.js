const promise = new Promise((resolve, reject) => {
    console.log("loading started");
    const error = false;

    const JSONdata = JSON.stringify({
        status: 400,
        url: 'daud.com',
    })
    setTimeout(() => {


        if (!error) {

            resolve(JSONdata);
            console.log("Server get response", JSONdata);

            resolve(JSONdata);
        } else {
            reject('Something has gone wrong');
        };

    }, 2000);



})
promise
    .then((props) => {
        setTimeout(() => {
            console.log('server get data', JSON.parse(props));
        });
    }).catch((err) => {
        console.error(err);
    })