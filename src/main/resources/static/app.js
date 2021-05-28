/**
 *
 */

$(document).ready(function(){
    $.ajax({
        url: 'http://localhost:8080/products/',
        type: 'GET',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization','Bearer ' + window.localStorage.getItem('access_token'));
        },
        success: function(data) {
            var html = "";
            $.each(data, function(index, value){
                html += '<tr>';
                html += '<td>'+ value.id + '</td>';
                html += '<td>'+ value.name + '</td>';
                html += '<td>'+ value.description + '</td>';
                html += '<td>'+ value.price + '</td>';
                html += '</tr>';
            });
            $("#productos-table-body").append(html);
        },
        error: function(xhr, textStatus, error) {
            console.log(xhr.responseText);
            console.log(xhr.statusText);
            console.log(textStatus);
            console.log(error);
        }
    });
});