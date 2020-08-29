const express = require('express');
const path = require('path');
app.use(express.static(_dirname + '/dist/first-angular') );
app.get('/*',function(req,res){
	res.sendFile(
		path.join(_dirname+ '/dist/first-angular/index.html')
	);
});

app.listen(process.env.PORT || 8080);