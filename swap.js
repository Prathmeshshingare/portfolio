const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = {
  '#00ff88': '#58a6ff',
  '#00FF88': '#58a6ff',
  '#00d4ff': '#a371f7',
  '#00D4FF': '#a371f7',
  '#020c14': '#0d1117',
  '#0a1628': '#161b22',
  '0,255,136': '88,166,255',
  '0, 255, 136': '88, 166, 255',
  '0,212,255': '163,113,247',
  '0, 212, 255': '163, 113, 247',
  '#e2e8f0': '#c9d1d9',
  '#E2E8F0': '#c9d1d9',
  '#8892a4': '#8b949e',
  '#8892A4': '#8b949e',
  '#ffa502': '#e3b341', 
  '255,165,2': '227,179,65',
  '#ff4757': '#ff7b72', 
  '255,71,87': '255,123,114'
};

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(filePath));
    } else if (filePath.endsWith('.js') || filePath.endsWith('.css')) {
      results.push(filePath);
    }
  });
  return results;
}

const files = walkDir(directoryPath);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  
  for (let [oldVal, newVal] of Object.entries(replacements)) {
      // Escape parenthesis and brackets if any (not needed for hex/rgb numbers, but good practice if extending)
      const regex = new RegExp(oldVal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      newContent = newContent.replace(regex, newVal);
  }
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log(`Updated ${file}`);
  }
});
