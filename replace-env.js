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
                    if (file.endsWith('.ts')) {
                        let content = fs.readFileSync(file, 'utf8');
                        let changed = false;

                        // Skip environment files themselves
                        if (file.includes('environment')) {
                            if (!--pending) callback(null);
                            return;
                        }

                        // Replace hardcoded backend URL with environment import
                        if (content.includes(`'${BACKEND_URL}/api/`) || content.includes(`"${BACKEND_URL}/api/`)) {
                            // Add environment import if not present
                            if (!content.includes("from '../../environments/environment'") &&
                                !content.includes("from '../../../environments/environment'") &&
                                !content.includes("from '../../../../environments/environment'") &&
                                !content.includes("from '../environments/environment'")) {
                                
                                // Calculate relative path
                                const relativePath = path.relative(path.dirname(file), 
                                    path.join(__dirname, 'frontend/src/environments/environment'))
                                    .replace(/\\/g, '/');
                                
                                // Add import after first import line
                                content = content.replace(
                                    /^(import .+;\n)/m,
                                    `$1import { environment } from '${relativePath}';\n`
                                );
                                changed = true;
                            }

                            // Replace the URL
                            content = content.replace(new RegExp(`'${BACKEND_URL.replace(/\./g, '\\.')}/api/`, 'g'), '`${environment.apiUrl}/api/`'.replace('`', '`').replace(/`/g, '`'));
                            content = content.replace(new RegExp(`"${BACKEND_URL.replace(/\./g, '\\.')}/api/`, 'g'), '`${environment.apiUrl}/api/`'.replace(/`/g, '`'));
                            changed = true;
                        }

                        if (changed) {
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
    console.log('Done!');
});
