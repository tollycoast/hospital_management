<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Kwara State University</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">


        <!-- Script -->
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <!-- Styles -->

        <link  href="/css/app.css" rel="stylesheet" type="text/css" >
        <link rel="stylesheet" href="/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/css/style.css">
        <link rel="stylesheet" type="text/css" href="/css/styles.css" media="screen" data-name="skins">
        <link rel="stylesheet" type="text/css" href="/css/style.css" media="screen" data-name="skins">
        <link rel="stylesheet" href="/css/layout/wide.css" data-name="layout">

        <link rel="stylesheet" href="/css/fractionslider.css"/>
        <link rel="stylesheet" href="/css/style-fraction.css"/>

    </head>
    <body>
            <div id='app'>
            </div>
            <script src="/js/app.js"></script>
    </body>
</html>
