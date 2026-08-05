const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdir(dir, function(err, list) {
        if (err) return callback(err);
        var pending = list.length;
        if (!pending) return callback(null);
        list.forEach(function(file) {
            file = path.resolve(dir, file);
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function(err) {
                        if (!--pending) callback(null);
                    });
                } else {
                    if (file.endsWith('.ts')) {
                        let content = fs.readFileSync(file, 'utf8');
                        if (content.includes('http://localhost:3000')) {
                            content = content.replace(/http:\/\/localhost:3000/g, '');
                            fs.writeFileSync(file, content);
                            console.log('Updated:', file);
                        }
                    }
                    if (!--pending) callback(null);
                }
            });
        });
    });
}

walk(path.join(__dirname, 'frontend/src'), function(err) {
    if (err) throw err;
    console.log('All files updated!');
});
