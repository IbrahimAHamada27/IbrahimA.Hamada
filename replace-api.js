const fs = require('fs');
const path = require('path');

const BACKEND_URL = 'https://portfoliobackend-orpin.vercel.app';

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
                    if (file.endsWith('.ts') || file.endsWith('.html')) {
                        let content = fs.readFileSync(file, 'utf8');
                        let changed = false;
                        
                        // Handle both single and double quotes
                        if (content.includes("'/api/")) {
                            content = content.replace(/'\/api\//g, `'${BACKEND_URL}/api/`);
                            changed = true;
                        }
                        if (content.includes('"/api/')) {
                            content = content.replace(/"\/api\//g, `"${BACKEND_URL}/api/`);
                            changed = true;
                        }
                        if (content.includes('`/api/')) {
                            content = content.replace(/`\/api\//g, `\`${BACKEND_URL}/api/`);
                            changed = true;
                        }

                        if (changed) {
                            fs.writeFileSync(file, content);
                            console.log('Updated API URL in:', file);
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
    console.log('All files updated with new Backend URL!');
});
