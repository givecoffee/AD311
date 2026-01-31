// Import Required Modules (ES6)
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent for ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

// Helper function to serve files
const serveFile = (res, filePath, contentType) => {
    // Build the full path to files in public folder
    const fullPath = path.join(__dirname, 'public', filePath);
    
    fs.readFile(fullPath, 'utf8', (err, data) => {
        if (err) {
            console.log(`❌ Error loading: ${fullPath}`, err.code);
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404: File Not Found');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500: Internal Server Error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} request for ${req.url}`);

    // --- 1. CSS Route ---
    if (req.url === '/styles.css') {
        serveFile(res, 'styles.css', 'text/css');
    }
    
    // --- 2. HTML Page Routes (GET) ---
    else if (req.method === 'GET') {
        switch (req.url) {
            case '/':
                serveFile(res, 'home.html', 'text/html');
                break;
            case '/about':
                serveFile(res, 'about.html', 'text/html');
                break;
            case '/contact':
                serveFile(res, 'contact.html', 'text/html');
                break;
            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
                break;
        }
    }

    // --- 3. Form Submission Route (POST) ---
    else if (req.url === '/contact' && req.method === 'POST') {
        let body = '';
        
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            console.log('📝 New Form Submission Received:');
            console.log(body);
            
            res.writeHead(302, { 'Location': '/contact' });
            res.end();
        });
    }

    // --- 4. Catch-all for other methods ---
    else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

server.listen(PORT, () => {
    console.log(`\n🚀 Server is running on http://localhost:${PORT}`);
    console.log('Available routes:');
    console.log(`  - Dashboard: http://localhost:${PORT}/`);
    console.log(`  - About:     http://localhost:${PORT}/about`);
    console.log(`  - Contact:   http://localhost:${PORT}/contact`);
    console.log('(Press Ctrl+C to stop)');
});