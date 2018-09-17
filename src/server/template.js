export default (styles, markup) => {

    return (
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Personal Website">
    <meta name="author" content="Daniel Mai">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daniel Mai</title>
    <style type="text/css">${[...styles].join('')}</style>
</head>
<body>
    <!-- Root Element -->
    <div id="app">${markup}</div>
    <script src="bundle.js"></script>              
</body>
</html>
    `
    ) 
}