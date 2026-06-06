import fs from 'fs';
import path from 'path';

function walk(dir: string, callback: (path: string) => void) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk('./src/features', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // We want to combine `data={{ a, b }}` and `results={{ c, d }}` into `data={{ a, b, c, d }}`
    // Basic regex: `data={{([^}]+)}}\s*results={{([^}]+)}}`
    
    let hasChanges = false;
    
    const regex = /data={{([^}]+)}}\s*results={{([^}]+)}}/g;
    
    if (regex.test(content)) {
      content = content.replace(regex, 'data={{\n                  ...{ $1 },\n                  ...{ $2 }\n                }}');
      hasChanges = true;
    }
    
    // Some might still be inputs={{...}} results={{...}}
    const regex2 = /inputs={{([^}]+)}}\s*results={{([^}]+)}}/g;
    if (regex2.test(content)) {
      content = content.replace(regex2, 'data={{\n                  ...{ $1 },\n                  ...{ $2 }\n                }}');
      hasChanges = true;
    }

    if (hasChanges) {
      fs.writeFileSync(filePath, content);
      console.log('Fixed ExportActions params in ' + filePath);
    }
  }
});
