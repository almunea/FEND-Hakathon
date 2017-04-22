<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
    <script type="text/javascript">
//        $(function(){
//            $.getJSON("package.json", function(data) {
////                console.log(data);
//                $('body').append(data.results[0].title);
//                console.log("hi");
//            });
//            }).error(function(){
//                console.log('error1');
//            });
//            $.ajax({
//                url: "package.json",
//                dataType: "json",
//                success: function(data) {
//                    console.log(data);
//                    $('body').append(data.results[0].title);
//                },
//                error: function(jqXHR, textStatus, errorThrown) {
//                    console.log('ERROR', textStatus, errorThrown);
//                }
//            });
    jQuery.ajax({
        url: "http://api.themoviedb.org/3/movie/popular?api_key=bab007b9a6288af1455b8cee1f4f9d36",
        type: "GET",

        contentType: 'application/json; charset=utf-8',
        success: function(resultData) {
            //here is your json.
            // process it
            $('body').append(resultData.results[1].title);
            $('body').append(resultData.results[0].id);
            console.log(resultData);

        },
        error : function(jqXHR, textStatus, errorThrown) {
        },

        timeout: 120000,
    });

</script>
</head>
<body>
<ul></ul>
</body>
</html>