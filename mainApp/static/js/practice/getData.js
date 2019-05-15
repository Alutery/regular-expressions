function getData() {
    $.ajax({
      async: false,
      url: '../gettask/',
      type: 'post',
      data: ({
        taskType: categoryID
      }),
      success: function (data) {
        description = data.description;
        description2 = data.description2;
        numbers = data.numbers;
      },
      error: function (jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });
}