<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Crossword Generator</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" type="text/css" href="dsCrossword.css"/>
    <style type="text/css">
        body {
            padding: 20px;
        }
    </style>
</head>
<body>
    <div id="dsCrossword"><!-- puzzle area --></div>
    <script type="text/javascript" src="jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="dsCrossword.js"></script>

    <script type="text/javascript">
    $('#dsCrossword').dsCrossword({
        itemsSource: "json.php",
        cluesPosition: 'right',
        activeCluePosition: 'top',
        colors: {
            puzzleBg: '',
            active: '',
            selected: '',
            puzzleFont: ''
        }
    });
    </script>
</body>
</html>
