const fs = require('fs');
const path = require('path');

const WRONG = "from '../../../../environments/environment'";
const RIGHT_3 = "from '../../../environments/environment'";
const RIGHT_2 = "from '../../environments/environment'";
const RIGHT_1 = "from '../environments/environment'";

const files = [
    // 3 levels deep from src (src/app/X/file.ts)
    { path: 'frontend/src/app/core/services/activity.service.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/core/services/auth.service.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/core/services/certificate.service.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/core/services/education.service.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/core/services/experience.service.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/core/services/message.service.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/core/services/project.service.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/core/services/service.service.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/core/services/site-info.service.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/core/services/skill.service.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/core/services/testimonial.service.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/shared/header/header.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/shared/footer/footer.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/dashboard/certificates/certificates.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/dashboard/contact/contact.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/dashboard/education/education.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/dashboard/experience/experience.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/dashboard/home/home.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/dashboard/list-projects/list-projects.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/dashboard/messages/messages.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/dashboard/services/services.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/dashboard/skills/skills.ts', correct: RIGHT_3 },
    { path: 'frontend/src/app/dashboard/testimonials/testimonials.ts', correct: RIGHT_3 },
    // 2 levels deep from src (src/app/file.ts)
    { path: 'frontend/src/app/app.ts', correct: RIGHT_2 },
];

files.forEach(({ path: filePath, correct }) => {
    const full = path.join(__dirname, filePath);
    if (!fs.existsSync(full)) {
        console.log('SKIP (not found):', filePath);
        return;
    }
    let content = fs.readFileSync(full, 'utf8');
    if (content.includes(WRONG)) {
        content = content.replace(WRONG, correct);
        fs.writeFileSync(full, content);
        console.log('Fixed:', filePath);
    } else if (content.includes(correct)) {
        console.log('Already correct:', filePath);
    } else {
        console.log('No env import found:', filePath);
    }
});

console.log('\nAll paths fixed!');
