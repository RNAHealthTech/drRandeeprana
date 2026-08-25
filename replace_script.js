const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let newContent = content
    .replace(/9501569493/g, '9643163941')
    .replace(/95015 69493/g, '96431 63941')
    .replace(/7703807941/g, '9643163941')
    .replace(/77038 07941/g, '96431 63941');
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated ' + file);
  }
});
