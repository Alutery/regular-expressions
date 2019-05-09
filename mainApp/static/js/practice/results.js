function send_result(i, n, categoryID) {
    alert('send');
    $.ajax({
        url: '../send_result/',
        type: 'get',
        data: ({
            category: categoryID,
            i: i,
            n: n
        }),
        error: function (xhr, errmsg, err) {
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });
}