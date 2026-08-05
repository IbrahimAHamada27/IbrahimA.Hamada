const fs = require('fs');
const path = require('path');

const BACKEND_URL = 'https://portfoliobackend-orpin.vercel.app';

const SERVICE_FILES = [
  'frontend/src/app/core/services/activity.service.ts',
  'frontend/src/app/core/services/auth.service.ts',
  'frontend/src/app/core/services/certificate.service.ts',
  'frontend/src/app/core/services/education.service.ts',
  'frontend/src/app/core/services/experience.service.ts',
  'frontend/src/app/core/services/message.service.ts',
  'frontend/src/app/core/services/project.service.ts',
  'frontend/src/app/core/services/service.service.ts',
  'frontend/src/app/core/services/site-info.service.ts',
  'frontend/src/app/core/services/skill.service.ts',
  'frontend/src/app/core/services/testimonial.service.ts',
  'frontend/src/app/shared/header/header.ts',
  'frontend/src/app/shared/footer/footer.ts',
  'frontend/src/app/shared/details-modal/details-modal.ts',
  'frontend/src/app/app.ts',
  'frontend/src/app/dashboard/certificates/certificates.ts',
  'frontend/src/app/dashboard/contact/contact.ts',
  'frontend/src/app/dashboard/education/education.ts',
  'frontend/src/app/dashboard/experience/experience.ts',
  'frontend/src/app/dashboard/home/home.ts',
  'frontend/src/app/dashboard/list-projects/list-projects.ts',
  'frontend/src/app/dashboard/messages/messages.ts',
  'frontend/src/app/dashboard/services/services.ts',
  'frontend/src/app/dashboard/skills/skills.ts',
  'frontend/src/app/dashboard/testimonials/testimonials.ts',
];

// Environment import path relative to each file
const ENV_PATHS = {
  'frontend/src/app/core/services': "../../../../environments/environment",
  'frontend/src/app/shared/header': "../../../../environments/environment",
  'frontend/src/app/shared/footer': "../../../../environments/environment",
  'frontend/src/app/shared/details-modal': "../../../../environments/environment",
  'frontend/src/app/dashboard/certificates': "../../../../environments/environment",
  'frontend/src/app/dashboard/contact': "../../../../environments/environment",
  'frontend/src/app/dashboard/education': "../../../../environments/environment",
  'frontend/src/app/dashboard/experience': "../../../../environments/environment",
  'frontend/src/app/dashboard/home': "../../../../environments/environment",
  'frontend/src/app/dashboard/list-projects': "../../../../environments/environment",
  'frontend/src/app/dashboard/messages': "../../../../environments/environment",
  'frontend/src/app/dashboard/services': "../../../../environments/environment",
  'frontend/src/app/dashboard/skills': "../../../../environments/environment",
  'frontend/src/app/dashboard/testimonials': "../../../../environments/environment",
  'frontend/src/app': "../../../environments/environment",
};

SERVICE_FILES.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (!fs.existsSync(fullPath)) {
    console.log('SKIP (not found):', filePath);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');

  if (!content.includes(BACKEND_URL)) {
    console.log('SKIP (no URL):', filePath);
    return;
  }

  // Find the correct environment import path
  const dirKey = Object.keys(ENV_PATHS).find(key => filePath.startsWith(key));
  const envPath = dirKey ? ENV_PATHS[dirKey] : '../../../environments/environment';

  // Add environment import if not already there
  if (!content.includes("from '../../environments/environment'") &&
      !content.includes("from '../../../environments/environment'") &&
      !content.includes("from '../../../../environments/environment'") &&
      !content.includes("environment")) {
    content = content.replace(
      /^(import .+;\n)/m,
      `$1import { environment } from '${envPath}';\n`
    );
  }

  // Replace all instances of the hardcoded backend URL
  content = content.replace(new RegExp(`'${BACKEND_URL}`, 'g'), '`${environment.apiUrl}');
  content = content.replace(new RegExp(`"${BACKEND_URL}`, 'g'), '`${environment.apiUrl}');

  // Fix closing quotes: single-quoted strings after URL become template literals
  // Pattern: `${environment.apiUrl}/api/something'  => `${environment.apiUrl}/api/something`
  content = content.replace(/`\$\{environment\.apiUrl\}([^`']*?)'/g, '`${environment.apiUrl}$1`');
  content = content.replace(/`\$\{environment\.apiUrl\}([^`"]*?)"/g, '`${environment.apiUrl}$1`');

  fs.writeFileSync(fullPath, content);
  console.log('Updated:', filePath);
});

console.log('\nAll done! Services now use environment.apiUrl');
