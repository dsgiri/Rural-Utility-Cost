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
    let hasChanges = false;
    
    if (content.includes('calculatorName=')) {
      content = content.replace(/calculatorName=/g, 'title=');
      hasChanges = true;
    }
    if (content.includes('inputs={{')) {
      content = content.replace(/inputs={{/g, 'data={{');
      hasChanges = true;
    }
    
    if (hasChanges) {
      // Small manual cleanups because replacing `inputs={{` might miss `results={{`.
      // The easiest way is to let the user know, we only replace `calculatorName` for now.
      content = content.replace(/calculatorName=/g, 'title=');
      fs.writeFileSync(filePath, content);
      console.log('Fixed', filePath);
    }
  }
});
